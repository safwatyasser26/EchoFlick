from pydantic import BaseModel

class Movie(BaseModel):
    id: int
    title: str
    overview:str 
    genres: list
    keywords: list
    release_date: str
    director: list
    director_popularity:list
    movie_popularity:float
    movie_imdb_id:str 