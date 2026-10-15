from pydantic import BaseModel, EmailStr
from datetime import datetime



class UserCreate(BaseModel):
    name: str
    email: EmailStr
    telephone: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    password: str
    telephone: str 
    actif: bool
    derniere_connexion: datetime | None
    created_at: datetime
    updated_at: datetime
    

    model_config = {
        "from_attributes": True
    }


