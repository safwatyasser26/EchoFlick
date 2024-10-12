from pydantic import BaseModel
class Item(BaseModel):
    id: int # tmdb id because our data mainly from tmdb
    title: str
    overview:str 
    genres: list
    keywords: list
    release_date: str
    characters : list
    popularity:float
    imdb_id:str 
    imdb_rating:float
    num_votes:int
    tags:str
    media_type:str # it supposed to be int but for clearity