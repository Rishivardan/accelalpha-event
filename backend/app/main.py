import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(
    title="Accelalpha-Oracle Event API",
    description="Smart session matcher and invitation generator",
    version="1.0.0"
)

# CORS - allows React frontend to talk to this backend
frontend_origins = os.getenv("FRONTEND_ORIGINS", "*")
origins = [origin.strip() for origin in frontend_origins.split(",") if origin.strip()]
allow_credentials = False if origins == ["*"] else True

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=allow_credentials,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Accelalpha-Oracle Event API is running!"}