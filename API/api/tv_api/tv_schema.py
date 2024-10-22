def Entity(tv_show) -> dict:
    return {
        "id":tv_show['id'],
        "keywords":tv_show['keywords'],
        "title":tv_show['title'],
        "overview":tv_show['overview'] ,
        "popularity":tv_show['popularity'],
        "imdb_id":tv_show['imdb_id'],
        "num_votes":tv_show['num_votes'],
        "primary_title":tv_show['primary_title'],
        "start_year":tv_show['start_year'],
        "runtime_minutes":tv_show['runtime_minutes'],
        "average_rating":tv_show['average_rating'],
        "genres":tv_show['genres'],
        "tags":tv_show['tags']
    }
    
def Entities(entity) ->  list:
    return [Entity(tv_show) for tv_show in entity]