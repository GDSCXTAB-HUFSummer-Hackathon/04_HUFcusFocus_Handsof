from datetime import datetime, timedelta, timezone

from pydantic import BaseModel


class BaseSlackChattingLogModel(BaseModel):
    """
    Base Slack Chatting Log Model
    """

    message: str | None


class CreateSlackChattingLogModel(BaseSlackChattingLogModel):
    """
    Create Slack Chatting Log Model
    """

    destination_name: str
    createdAt: datetime = datetime.now(tz=timezone(offset=timedelta(hours=9)))

    class Config:
        schema_extra: dict = {"example": {}}


class UpdateSlackChattingLogModel(BaseSlackChattingLogModel):
    """
    Update Slack Chatting Log Model
    """

    updatedAt: datetime = datetime.now(tz=timezone(offset=timedelta(hours=9)))

    class Config:
        scehma_extra: dict = {"example": {}}
