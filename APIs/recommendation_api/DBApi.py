from fastapi import FastAPI
from recommender import recommender

app = FastAPI()
app.include_router(recommender)
