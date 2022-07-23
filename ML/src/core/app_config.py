from functools import lru_cache

from pydantic import BaseSettings, Field


class Settings(BaseSettings):
    """
    Create Application Base Configurations
    """

    LEVEL: str = Field(env="LEVEL")
    DB_NAME: str = Field(env="DB_NAME")
    SLACK_TOKEN: str = Field(env="SLACK_TOKEN")
    SLACK_CLIENT_ID: str = Field(env="SLACK_CLIENT_ID")
    SLACK_CLIENT_SECRET: str = Field(env="SLACK_CLIENT_SECRET")
    PROJECT_TITLE: str = "Handsof API Document"
    PROJECT_VERSION: int = 1
    PROJECT_DESCRIPTION: str = (
        "Handsof API Document with Machine Learning and FastAPI"
    )
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    class Config:
        env_file = ".env"


class DevelopSettings(Settings):
    """
    Create Application Develop Level Configurations
    """

    DB_URL: str = Field(env="DEVELOP_DB_URL")
    ALLOW_ORIGINS: list[str] = ["*"]
    ALLOW_CREDENTIALS: bool = True
    ALLOW_METHODS: list[str] = ["*"]
    ALLOW_HEADERS: list[str] = ["*"]
    RELOAD_FLAG: bool = True


class ProductSettings(Settings):
    """
    Create Application Product Level Configuration
    """

    DB_URL: str = Field(env="PRODUCT_DB_URL")
    ALLOW_ORIGINS: list[str] = ["https://hadnsof.today"]
    ALLOW_CREDENTIALS: bool = True
    ALLOW_METHODS: list[str] = ["*"]
    ALLOW_HEADERS: list[str] = ["*"]
    RELOAD_FLAG: bool = False


@lru_cache
def get_settings() -> DevelopSettings | ProductSettings:
    """
    Cache Application Configuration
    """
    if Settings().LEVEL == "DEVELOP":
        return DevelopSettings()

    else:
        return ProductSettings()
