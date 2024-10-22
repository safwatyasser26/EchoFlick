from fastapi import APIRouter
from dotenv import dotenv_values
from api.item_api.Item import Item
from api.db.cloud_db import conn, mongo_results
from api.item_api.Item_schema import Entity, Entities

config = dotenv_values('.env')

API_KEY = config['MY_API_KEY']

item_router = APIRouter()

@item_router.get("/item/get")
async def find_item(api_key,id: int,media_type: str):
    if api_key == API_KEY:
        return Entities(conn.RecommendationDB.items.find({"id":id,"media_type":media_type}))
    else:
        return {'Error':"API is wrong or not exists"}
    
@item_router.post("/item/post") 
async def create_items(api_key,item: Item):
    if api_key == API_KEY:
        insert_info = conn.RecommendationDB.items.insert_one(dict(item))
        return {
            "acknowledged": insert_info.acknowledged,
            "inserted_id": str(insert_info.inserted_id)
        }
    else:
        return {'Error':"API is wrong or not exists"}

@item_router.put("/item/put")
async def update_item(api_key,id, media_type, update: dict):
    if api_key == API_KEY:
        updated_info = conn.RecommendationDB.items.update_one({"id":id,"media_type":media_type},update)
        return {
            "acknowledged":updated_info.acknowledged,
            "raw_result": updated_info.raw_result
        }
    else:
        return {'Error':"API is wrong or not exists"}
    

@item_router.patch("/item/patch")
async def update_items(api_key,query: dict,updates: dict):
    if api_key == API_KEY:
        updation_info = conn.RecommendationDB.items.update_many(query, updates)
        return {
            "acknowledged":updation_info.acknowledged,
            "matched_count":updation_info.matched_count,
            "modified_count":updation_info.modified_count,
            "raw_result": updation_info.raw_result
        }
    else:
        raise "API key not correct"
    
@item_router.delete("/item/delete")
async def delete_item(api_key,id: int,media_type: str):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.items.delete_one({"id":id,"media_type":media_type})
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@item_router.delete("/item/filter")
async def filter_items(api_key,query):
    if api_key == API_KEY:
        deleted_info = conn.RecommendationDB.items.delete_many(query)
        return {
            "acknowledged": deleted_info.acknowledged,
            "deleted_count": deleted_info.deleted_count
        }
    else:
        raise "API key not correct"

@item_router.delete("/item/trancate")
async def trancate(api_key):
    if api_key == API_KEY:
        deletion_info = conn.RecommendationDB.items.delete_many({})
        return {
            "acknowledged": deletion_info.acknowledged,
            "deleted_count": deletion_info.deleted_count
        }
    else:
        raise "API key not correct"