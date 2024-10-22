def Entity(item) -> dict:
    return {
        "id": item['id'],
        "imdb_id": item['imdb_id'],
        "media_type":item["media_type"],
        "recommended_movie": item["recommended_movie"],
        "recommended_tv": item["recommended_tv"]
    }
    
def Entities(entity) ->  list:
    return [Entity(item) for item in entity]