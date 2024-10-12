from fastapi import FastAPI
from route import route

app = FastAPI()
app.include_router(route)

