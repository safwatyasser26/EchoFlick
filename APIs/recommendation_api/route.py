from fastapi import APIRouter

from bson import ObjectId
from movie import Movie
from db import conn, mongo_results
from movie_schema import movieEntity, moviesEntity

router = APIRouter()

@router.get("/movie/get/all")
async def find_all_movies():
    return moviesEntity(conn.CRUD_PY.movies.find({}))

@router.get("/movie/get/{id}")
async def find_movie(id):
    return moviesEntity(conn.CRUD_PY.movies.find({"id":id}))

@router.post("/movie/post") 
async def create_movies(movie: Movie):
    insert_info = conn.CRUD_PY.movies.insert_one(dict(movie))
    return {
        "acknowledged": insert_info.acknowledged,
        "inserted_id": str(insert_info.inserted_id)
    }

@router.post("/movie/post/data") 
async def create_movies(movies: dict):
    insert_info = conn.CRUD_PY.movies.insert_many(movies['movies'])
    return {
        "acknowledged": insert_info.acknowledged,
        "inserted_ids": str(insert_info.inserted_ids)
    }

@router.put("/movie/put")
async def update_movie(id, update: dict):
    # updated_info = conn.CRUD_PY.movies.update_one({"movie_imdb_id":id},{"$set": update})
    return {
        # "acknowledged":updated_info.acknowledged
        'id':id,
        'update':update
    }
    

@router.patch("/movie/patch")
async def update_movies(query: dict,updates: dict):
    updation_info = conn.CRUD_PY.movies.update_many(query, {'$set':updates})
    return {
        "acknowledged":updation_info.acknowledged,
        "matched_count":updation_info.matched_count,
        "modified_count":updation_info.modified_count,
        "raw_result": updation_info.raw_result
    }
    
@router.delete("/movie/delete/{id}")
async def delete_movie(id):
    deleted_info = conn.CRUD_PY.movies.delete_one({"id":id})
    return {
        "acknowledged": deleted_info.acknowledged
    }

@router.delete("/movie/delete")
async def delete_movie():
    deletion_info = conn.CRUD_PY.movies.delete_many({})
    return {
        "acknowledged": deletion_info.acknowledged,
        "deleted_count": deletion_info.deleted_count
    }