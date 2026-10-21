from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
    Table,
)

from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database.base import Base


class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
            Integer,
            ForeignKey("users.id", ondelete="CASCADE"),
            unique=True,
            nullable=False,
        )

    action = Column(
        String(150),
        nullable=False,
    )


    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )

    # --------------------------------------------------------
    # Relation AuditLog -> User
    # --------------------------------------------------------

    user = relationship(
        "users",
        back_populates="audit_logs",
    )