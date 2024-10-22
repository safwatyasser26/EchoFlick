from pydantic import BaseModel
class Item(BaseModel):
    id: int # tmdb id because our data mainly from tmdb
    imdb_id:str 
    media_type:str
    recommended_movie: list
    recommended_tv: list