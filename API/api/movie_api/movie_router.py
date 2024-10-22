from fastapi import APIRouter
from dotenv import dotenv_values
from api.movie_api.movie import movie
from api.db.cloud_db import conn, mongo_results
from api.movie_api.movie_schema import Entity, Entities

config = dotenv_values('.env')

API_KEY = config['MY_API_KEY']

movie_router = APIRouter()

@movie_router.get("/movie/get")
async def find_movie(api_key,id: int):
    if api_key == API_KEY:
        return Entities(conn.RecommendationDB.movies.find({"id":id}))
    else:
        return {'Error':"API is wrong or not exists"}
    
@movie_router.post("/movie/post") 
async def create_movies(api_key,movie: movie):
    if api_key == API_KEY:
        insert_info = conn.RecommendationDB.movies.insert_one(dict(movie))
        return {
            "acknowledged": insert_info.acknowledged,
            "inserted_id": str(insert_info.inserted_id)
        }
    else:
        return {'Error':"API is wrong or not exists"}

@movie_router.put("/movie/put")
async def update_movie(api_key,id, update: dict):
    if api_key == API_KEY:
        updated_info = conn.RecommendationDB.movies.update_one({"id":id,},update)
        return {
            "acknowledged":updated_info.acknowledged,
            "raw_result": updated_info.raw_result
        }
    else:
        return {'Error':"API is wrong or not exists"}
    

@movie_router.patch("/movie/patch")
async def update_movies(api_key,query: dict,updates: dict):
    if api_key == API_KEY:
        updation_info = conn.RecommendationDB.movies.update_many(query, updates)
        return {
            "acknowledged":updation_info.acknowledged,
            "matched_count":updation_info.matched_count,
            "modified_count":updation_info.modified_count,
            "raw_result": updation_info.raw_result
        }
    else:
        raise "API key not correct"
    
@movie_router.delete("/movie/delete")
async def delete_movie(api_key,id: int):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.movies.delete_one({"id":id})
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@movie_router.delete("/movie/filter")
async def filter_movies(api_key,query):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.movies.delete_many(query)
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@movie_router.delete("/movie/trancate")
async def trancate(api_key):
    if api_key == API_KEY:
        deletion_info = conn.RecommendationDB.movies.delete_many({})
        return {
            "acknowledged": deletion_info.acknowledged,
            "deleted_count": deletion_info.deleted_count
        }
    else:
        raise "API key not correct"