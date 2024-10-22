def Entity(movie) -> dict:
    return {
        "id":movie['id'],
        "keywords":movie['keywords'],
        "title":movie['title'],
        "overview": movie['overview'],
        "popularity":movie['popularity'],
        "imdb_id":movie['imdb_id'],
        "num_votes":movie['num_votes'],
        "primary_title":movie['primary_title'],
        "start_year":movie['start_year'],
        "runtime_minutes":movie['runtime_minutes'],
        "collection_name":movie['collection_name'],
        "average_rating":movie['average_rating'],
        "genres":movie['genres'],
        "tags":movie['tags']
    }
    
def Entities(entity) ->  list:
    return [Entity(movie) for movie in entity]