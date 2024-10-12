def movieEntity(item) -> dict:
    return {
        "id": item['id'],
        "title": item['title'],
        "overview": item['overview'],
        "genres": item['genres'],
        "keywords": item['keywords'],
        "release_date": item['release_date'],
        "director": item['director'],
        "director_popularity":item['director_popularity'],
        "movie_popularity": item['movie_popularity'],
        "movie_imdb_id": item['movie_imdb_id'],
        "movie_imdb_rating":item['movie_imdb_rating'],
        "num_votes":item['num_votes'],
        "runtime_minutes":item['runtime_minutes'],
        "tags":item['tags']
    }
    
def moviesEntity(entity) ->  list:
    return [movieEntity(item) for item in entity]