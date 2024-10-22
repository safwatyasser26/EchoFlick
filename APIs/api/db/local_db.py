from pymongo.mongo_client import MongoClient
import pymongo.results as mongo_results

conn = MongoClient(f"mongodb://localhost:27017/")
