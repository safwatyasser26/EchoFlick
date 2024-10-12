from fastapi import APIRouter
import requests
import pandas as pd 
import pickle as pkl
import spacy

nlp = spacy.load('en_core_web_lg')


recommender = APIRouter()
    
@recommender.get("/get/{item_id}")

async def recommend_movie(item_id):