from app.database.database import get_db
from app.services.user_services import User_Services
from app.schemas.user_shemas import UserCreate, UserResponse 

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session



router = APIRouter(prefix="/users", tags=["users"])
@router.get("/", response_model=list[UserResponse])
def read_users(db: Session = Depends(get_db)):
    return User_Services.list_users(db)