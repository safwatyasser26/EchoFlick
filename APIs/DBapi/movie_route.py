from fastapi import APIRouter

from bson import ObjectId
from movie import Movie
from db import conn, mongo_results
from movie_schema import movieEntity, moviesEntity

movie = APIRouter()

@movie.get("/get/all")
async def find_all_movies():
    return moviesEntity(conn.CRUD_PY.movies.find({}))

@movie.get("/get/{id}")
async def find_movie(id):
    return moviesEntity(conn.CRUD_PY.movies.find({"id":id}))

@movie.post("/post") 
async def create_movies(movie: Movie):
    insert_info = conn.CRUD_PY.movies.insert_one(dict(movie))
    return {
        "acknowledged": insert_info.acknowledged,
        "inserted_id": str(insert_info.inserted_id)
    }

@movie.post("/post/data") 
async def create_movies(movies: dict):
    insert_info = conn.CRUD_PY.movies.insert_many(movies['movies'])
    return {
        "acknowledged": insert_info.acknowledged,
        "inserted_ids": str(insert_info.inserted_ids)
    }

@movie.put("/put/{id}")
async def update_movie(id,update: dict):
    updated_info = conn.CRUD_PY.movies.update_one({"id":id},{"$set": update})
    return {
        "acknowledged":updated_info.acknowledged
    }
    

@movie.patch("/patch/all")
async def update_movies(query: dict,updates: dict):
    updation_info = conn.CRUD_PY.movies.update_many(query, {'$set':updates})
    return {
        "acknowledged":updation_info.acknowledged,
        "matched_count":updation_info.matched_count,
        "modified_count":updation_info.modified_count,
        "raw_result": updation_info.raw_result
    }
    
@movie.delete("/delete/{id}")
async def delete_movie(id):
    deleted_info = conn.CRUD_PY.movies.delete_one({"id":id})
    return {
        "acknowledged": deleted_info.acknowledged
    }

@movie.delete("/delete")
async def delete_movie(query: dict):
    deletion_info = conn.CRUD_PY.movies.delete_many(query)
    return {
        "acknowledged": deletion_info.acknowledged,
        "deleted_count": deletion_info.deleted_count
    }
# [
#     {
#   "id": "1008042",
#   "title": "Talk to Me",
#   "overview": "When a group of friends discover",
#   "genres": ["Horror","Thriller"],
#   "keywords": ["trauma","addictions","friends"],
#   "release_date": "2023-07-26", 
#   "director": ["Michael Philippou", "Danny Philippou"],
#   "director_popularity":[2.566, 3.059],
#   "movie_popularity": 1744.488,
#   "movie_imCRUD_PYid":"tt2923423",
#   "movie_imCRUD_PYrating": 7.2
# }
# ]



# [
#    {"id":"926393",	"title":"The Equalizer 3","overview":"Robert McCall finds himself at home in Souther","genres": ["Action", "Thriller", "Crime", "Drama"],"keywords":["italy", "vigilante justice", "italian mafia"], 	"release_date":"2023-08-30","director":{"name":["Antoine Fuqua"],"popularity":[20.104]}, 	"movie_popularity":2755.580 ,	"movie_imCRUD_PYid" : "tt6342098","movie_imCRUD_PYrating" : 7.1}
# ] 	
