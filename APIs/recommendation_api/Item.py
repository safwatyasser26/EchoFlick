from pydantic import BaseModel
class Item(BaseModel):
    id: int # tmdb id because our data mainly from tmdb
    imdb_id:str
    media_type: str
    recommendations: list