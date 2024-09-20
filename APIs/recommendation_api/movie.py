<<<<<<< HEAD
from fastapi import APIRouter
import pandas as pd 
import pickle as pkl
import spacy

recommender = APIRouter()

with open("./movies_df.pkl",'rb') as imdb_pkl_fp:
    mv_df = pkl.load(imdb_pkl_fp)
    
@recommender.get("/get/{imdb_id}")
async def recommend_movie(imdb_id):
    title = mv_df.query(f"movie_imdb_id == 'tt{imdb_id}'").title.values[0]
    scores = []
    indices = mv_df.index
    print(f"Best recommendation for `{title}` is:")
    movie_tags = mv_df.query(f"movie_imdb_id == 'tt{imdb_id}'").tags.values[0]
    
    for index in indices:
        scores.append(round(movie_tags.similarity(mv_df.iloc[index].tags),3))
    
    recommends = pd.DataFrame({'id':mv_df.id.values,
                               'imdb_id':mv_df.movie_imdb_id.values,
                               'title':mv_df.title.values,
                               'score':scores,
                               'startYear':mv_df.startYear.values})
    
    recommends.drop(recommends.query('score == 1').index[0],inplace = True)
    recommends = recommends.query(f'startYear >= 2000')
    recommends = recommends.sort_values(by='score',ascending = False).reset_index().drop(columns = 'index')
=======
from fastapi import APIRouter
import pandas as pd 
import pickle as pkl
import spacy

recommender = APIRouter()

with open("./movies_df.pkl",'rb') as imdb_pkl_fp:
    mv_df = pkl.load(imdb_pkl_fp)
    
@recommender.get("/get/{imdb_id}")
async def recommend_movie(imdb_id):
    title = mv_df.query(f"movie_imdb_id == 'tt{imdb_id}'").title.values[0]
    scores = []
    indices = mv_df.index
    print(f"Best recommendation for `{title}` is:")
    movie_tags = mv_df.query(f"movie_imdb_id == 'tt{imdb_id}'").tags.values[0]
    
    for index in indices:
        scores.append(round(movie_tags.similarity(mv_df.iloc[index].tags),3))
    
    recommends = pd.DataFrame({'id':mv_df.id.values,
                               'imdb_id':mv_df.movie_imdb_id.values,
                               'title':mv_df.title.values,
                               'score':scores,
                               'startYear':mv_df.startYear.values})
    
    recommends.drop(recommends.query('score == 1').index[0],inplace = True)
    recommends = recommends.query(f'startYear >= 2000')
    recommends = recommends.sort_values(by='score',ascending = False).reset_index().drop(columns = 'index')
>>>>>>> b5aba218b6188ed7188ce68391af4b466be4db61
    return recommends.head(15).to_dict()