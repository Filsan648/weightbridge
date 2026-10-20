from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.router.user_router import router as user_router
import os
Origin = os.getenv("CORS_ORIGINS")

app = FastAPI(
    title="WeighBridge API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=Origin.split(",") if Origin else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user_router)
@app.get("/")
def root():
    return {
        "message": "WeighBridge API fonctionne"
    }