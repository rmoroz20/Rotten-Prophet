import csv
import random
from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper

# #MOVIE LIST GIVEN ACTOR NAME
def movies_list_given_actor(actorName):
    bad_movies = []
    celebrity_scraper = CelebrityScraper(celebrity_name= actorName)
    celebrity_scraper.extract_metadata(section='filmography')
    movie_titles = celebrity_scraper.metadata['movie_titles']

    for title in movie_titles:
        movie_scraper = MovieScraper(movie_title = title)
        movie_scraper.extract_metadata()

        try:
            if int((movie_scraper.metadata['Score_Rotten'])) < 60 and (int((movie_scraper.metadata['Score_Audience'])) > 60):
                bad_movies.append(title)
        except ValueError:
            print("No rating!")
    return bad_movies

# RANDOM ACTOR
def generate_rand_actor():
    with open("actors.csv", "r") as actor_csv_file:
        csv_reader = csv.reader(actor_csv_file)
        # This skips over the first line in the .csv (first_name, last_name)
        next(csv_reader)
        random_actor = (random.choice([line[0] for line in csv_reader]))
    return random_actor
    
#MOVIE FROM RANDOM ACTOR
"getting timeout and Attribute errors--- look into, most likely because of too obscure actors being chosen"
rand_actor = generate_rand_actor()
print(rand_actor)
movieList = movies_list_given_actor(rand_actor)
print(movieList)