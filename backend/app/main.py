from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.database import engine, get_db, Base
from app import models

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Backend FastAPI opérationnel"}

@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(models.User).all()