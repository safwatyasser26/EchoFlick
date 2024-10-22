from fastapi import FastAPI
from api.item_api.item_router import item_router
from api.movie_api.movie_router import movie_router
from api.tv_api.tv_router import tv_router

app = FastAPI()
app.include_router(item_router)
app.include_router(movie_router)
app.include_router(tv_router)

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI app with multiple routers!"}
