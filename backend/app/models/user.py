from uuid import uuid4

from sqlalchemy import BigInteger, Boolean, Column, Unicode
from sqlalchemy.dialects.postgresql import UUID

from core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    uuid = Column(UUID(as_uuid=True), default=uuid4, unique=True, nullable=False)
    email = Column(Unicode(255), nullable=False, unique=True)
    password = Column(Unicode(255), nullable=False)
    username = Column(Unicode(255), nullable=False, unique=True)
    is_admin = Column(Boolean, default=False)
