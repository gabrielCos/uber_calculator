from fastapi import FastAPI
from app.routes import corridas

app = FastAPI()

app.include_router(corridas.router)