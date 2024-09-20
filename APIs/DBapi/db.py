from pymongo import MongoClient
import pymongo.results as mongo_results
Db_ = "CRUD_PY"
conn = MongoClient(f"mongodb://localhost:27017/{Db_}")