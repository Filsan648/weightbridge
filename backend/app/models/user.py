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


class User(Base):
    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    name = Column(
        String(150),
        nullable=False,
        index=True,
    )

    email = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    hashed_password = Column(
        String(255),
        nullable=True,
    )

    telephone = Column(
        String(30),
        nullable=True,
    )

    role_id = Column(
        Integer,
        ForeignKey("roles.id", ondelete="SET NULL"),
        index=True,
        nullable=True,
    )

    UserStatus = Column(
        String(50),
        default="Invited",
        nullable=False,
    )

    last_login_at = Column(
        DateTime(timezone=True),
        nullable=True,
    )
    client_id = Column(
            Integer,
            ForeignKey("clients.id", ondelete="SET NULL"),
            nullable=True,
            index=True
        )
    

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )

    # --------------------------------------------------------
    # Relation User -> Role
    # --------------------------------------------------------

    role = relationship(
        "Role",
        back_populates="user",
    )
    # --------------------------------------------------------
    # Relation User -> Client
    # --------------------------------------------------------
    client = relationship(
        "Client",
        back_populates="user",
    )
    # --------------------------------------------------------
    # Relation User -> Invitation
    # --------------------------------------------------------
    invitations = relationship(
        "Invitation",
        back_populates="user",
    )
    # --------------------------------------------------------
    # Relation User -> RefreshToken
    # --------------------------------------------------------
    refresh_tokens = relationship(
            "RefreshToken",
            back_populates="V",
        )
    # --------------------------------------------------------
    # Relation User -> AuditLog
    # --------------------------------------------------------
    audit_logs = relationship(
            "AuditLog",
            back_populates="user",
        )



