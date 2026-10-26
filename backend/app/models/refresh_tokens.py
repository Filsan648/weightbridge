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


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    token_hash = Column(
        String(150),
        unique=True,
        nullable=False,
        index=True,
    )
    revoked = Column(
            Boolean,
            nullable=False,
            index=True,
        )
 

    expires_at = Column(
        DateTime(timezone=True),
        unique=True,
        nullable=False,
        index=True,
    )

    accepted_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
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
    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True
    )


    # --------------------------------------------------------
    # Relation RefreshToken -> User
    # --------------------------------------------------------

    user = relationship(
        "User",
        back_populates="refresh_tokens",
    )