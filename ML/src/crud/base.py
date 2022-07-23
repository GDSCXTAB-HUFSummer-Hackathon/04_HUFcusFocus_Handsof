from typing import Generic, TypeVar

from bson.objectid import ObjectId
from fastapi import Request
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

CreateSchema = TypeVar("CreateSchema", bound=BaseModel)
UpdateSchema = TypeVar("UpdateSchema", bound=BaseModel)


class CRUDBase(Generic[CreateSchema, UpdateSchema]):
    """
    Base CRUD Class
    """

    def __init__(self, collection) -> None:
        self.collection = collection

    async def get_one(self, request: Request, _id: str) -> dict | None:
        """
        Get a Single Data
        """
        session = request.app.db[self.collection]
        if document := await session.find_one({"_id": ObjectId(_id)}):
            document["_id"] = str(document["_id"])
            return document

        else:
            return None

    async def get_multi(self, request: Request):
        """
        Get Multi Data
        """
        session = request.app.db[self.collection]

        result: dict = {}
        if not (data_size := await session.count_documents()):
            return None

        else:
            result["size"] = data_size

    async def create(
        self, request: Request, insert_data: CreateSchema
    ) -> bool:
        """
        Insert a Single Data
        """
        session = request.app.db[self.collection]

        inserted_document = await session.insert_one(
            jsonable_encoder(insert_data)
        )

        return inserted_document.acknowledged

    async def update(self):
        """ """
        pass

    async def delete(self):
        """ """
        pass
