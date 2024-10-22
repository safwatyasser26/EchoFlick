from pydantic import BaseModel
class tv_show(BaseModel):
    id:int
    keywords:str
    title:str
    overview: str
    popularity:float
    imdb_id:str
    num_votes:int
    primary_title:str
    start_year:int
    runtime_minutes:str
    average_rating:float
    genres:str
    tags:str