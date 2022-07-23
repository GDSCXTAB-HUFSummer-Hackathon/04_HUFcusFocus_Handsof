from bson.objectid import ObjectId
from fastapi import Request

from src.crud.base import CRUDBase
from src.schema import CreateSlackChattingLogModel, UpdateSlackChattingLogModel
from src.util import slack


class CRUDSlack(
    CRUDBase[CreateSlackChattingLogModel, UpdateSlackChattingLogModel]
):
    async def create(
        self,
        request: Request,
        user_id: str,
        destination_id: str,
        team_id: str,
        insert_data: CreateSlackChattingLogModel,
    ) -> bool:
        session = request.app

        user = await session.db["user"].find_one(
            {"_id": ObjectId(user_id)},
            {"slack": True, "_id": False},
        )

        for data in user["slack"]:
            if data["workspaceId"] == team_id:
                workspace = data

        if not workspace:
            return False

        worker = slack.Worker(token=workspace.pop("accessToken"))

        converted_insert_data = insert_data.dict()
        converted_insert_data["workspace"] = workspace

        converted_insert_data["destination"] = {}
        converted_insert_data["destination"]["destinationId"] = destination_id
        converted_insert_data["destination"][
            "destinationName"
        ] = converted_insert_data.pop("destination_name")

        converted_insert_data["userId"] = ObjectId(user_id)

        worker.send_message(
            destination=destination_id,
            message=converted_insert_data["message"],
        )

        inserted_document = await session.db["slack"].insert_one(
            converted_insert_data
        )

        return inserted_document.acknowledged


slack_crud = CRUDSlack(collection="slack")
