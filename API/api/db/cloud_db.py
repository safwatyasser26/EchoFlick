import os
from dotenv import dotenv_values
from pymongo.mongo_client import MongoClient
import pymongo.results as mongo_results
from pymongo.server_api import ServerApi

config = dotenv_values(".env")

username = config['USER_NAME']  

pwd =  config['PASSWORD']

uri = f"mongodb+srv://{username}:{pwd}@recommendationdb.lpecf.mongodb.net/?retryWrites=true&w=majority&appName=RecommendationDB"

conn = MongoClient(uri, server_api=ServerApi('1'))

# try:
#     client.admin.command('ping')
#     print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#     print(e)