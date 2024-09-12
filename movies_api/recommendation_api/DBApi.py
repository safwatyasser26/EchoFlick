from fastapi import FastAPI
from movie import recommender

app = FastAPI()
app.include_router(recommender)


