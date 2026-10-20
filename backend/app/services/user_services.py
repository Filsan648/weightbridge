from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User


class User_Services:
    @staticmethod
    def list_users(db: Session) -> list[User]:
        return list(db.scalars(select(User)))

    @staticmethod
    def get_user(db: Session, user_id: int) -> User | None:
        return db.get(User, user_id)     