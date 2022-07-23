from enum import Enum

from pydantic import BaseModel, EmailStr


class Platforms(str, Enum):
    SLACK = "slack"
    DISCORD = "discord"


class BaseUserModel(BaseModel):
    """
    Base User Model
    """

    pass


class CreateUserModel(BaseUserModel):
    """
    Create User Model
    """

    name: str
    email: EmailStr
    password: str
    slack: list = []


class UpdateUserModel(BaseUserModel):
    """
    Update User Model
    """

    pass


class SlackIntegrationModel(BaseUserModel):
    """
    Slack Integration Model
    """

    slack: dict[str, str]
