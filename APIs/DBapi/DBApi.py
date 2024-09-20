from fastapi import FastAPI
from movie_route import movie

app = FastAPI()
app.include_router(movie)
