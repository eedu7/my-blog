from pathlib import Path
from enum import StrEnum

from pydantic_settings import BaseSettings


class EnvironmentType(StrEnum):
    DEVELOPMENT = "development"
    PRODUCTION = "production"
    TEST = "test"


class BaseConfig(BaseSettings):
    class Config:
        case_sensitive = True
        env_file = Path(__file__).resolve().parent.parent / ".env"
        env_file_encoding = "utf-8"


class Config(BaseConfig):
    DEBUG: int = 0
    DEFAULT_LOCALE: str = "en_US"
    ENVIRONMENT: str = EnvironmentType.DEVELOPMENT
    POSTGRES_URL: str
    TEST_POSTGRES_URL: str
    SECRET_KEY: str
    JWT_ALGORITHM: str
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 15 * 24
    JWT_REFRESH_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
    RELEASE_VERSION: str = "0.1"


config = Config()
