from fastapi import APIRouter
from dotenv import dotenv_values
from api.tv_api.tv_show import tv_show
from api.db.cloud_db import conn, mongo_results
from api.tv_api.tv_schema import Entity, Entities

config = dotenv_values('.env')

API_KEY = config['MY_API_KEY']

tv_router = APIRouter()

@tv_router.get("/tv_show/get")
async def find_tv_show(api_key,id: int):
    if api_key == API_KEY:
        return Entities(conn.RecommendationDB.tv_shows.find({"id":id}))
    else:
        return {'Error':"API is wrong or not exists"}
    
@tv_router.post("/tv_show/post") 
async def create_tv_shows(api_key,tv_show: tv_show):
    if api_key == API_KEY:
        insert_info = conn.RecommendationDB.tv_shows.insert_one(dict(tv_show))
        return {
            "acknowledged": insert_info.acknowledged,
            "inserted_id": str(insert_info.inserted_id)
        }
    else:
        return {'Error':"API is wrong or not exists"}


@tv_router.put("/tv_show/put")
async def update_tv_show(api_key,id: int, update: dict):
    if api_key == API_KEY:
        updated_info = conn.RecommendationDB.tv_shows.update_one({"id":id},update)
        return {
            "acknowledged":updated_info.acknowledged,
            "matched_count":updated_info.matched_count,
            "modified_count":updated_info.modified_count,
            "raw_result": updated_info.raw_result
        }
    else:
        return {'Error':"API is wrong or not exists"}
    

@tv_router.patch("/tv_show/patch")
async def update_tv_shows(api_key,query: dict,updates: dict):
    if api_key == API_KEY:
        updation_info = conn.RecommendationDB.tv_shows.update_many(query, {'$set':updates})
        return {
            "acknowledged":updation_info.acknowledged,
            "matched_count":updation_info.matched_count,
            "modified_count":updation_info.modified_count,
            "raw_result": updation_info.raw_result
        }
    else:
        raise "API key not correct"
    
@tv_router.delete("/tv_show/delete")
async def delete_tv_show(api_key,id: int):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.tv_shows.delete_one({"id":id})
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@tv_router.delete("/tv_show/filter")
async def filter_tv_shows(api_key,query: dict):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.tv_shows.delete_many(query)
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@tv_router.delete("/tv_show/trancate")
async def trancate(api_key):
    if api_key == API_KEY:
        deletion_info = conn.RecommendationDB.tv_shows.delete_many({})
        return {
            "acknowledged": deletion_info.acknowledged,
            "deleted_count": deletion_info.deleted_count
        }
    else:
        raise "API key not correct"