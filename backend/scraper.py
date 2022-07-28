import csv
import random
from urllib.error import HTTPError
from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper

#BAD MOVIES GIVEN ACTOR NAME
def movies_list_given_actor(actorName):
    bad_movies = []
    celebrity_scraper = CelebrityScraper(celebrity_name= actorName)
    celebrity_scraper.extract_metadata(section='filmography')
    movie_titles = celebrity_scraper.metadata['movie_titles']

    for title in movie_titles:
        try: 
            movie_scraper = MovieScraper(movie_title = title)
            movie_scraper.extract_metadata()

            if int((movie_scraper.metadata['Score_Rotten'])) < 60 and (int((movie_scraper.metadata['Score_Audience'])) > 70):
                bad_movies.append(title)
                print(bad_movies)
        except ValueError:
            print("No rating!")
        except AttributeError:
            print("stupid fucking timeout error")
        except HTTPError as err:
            if err.code == 404:
                print("stupid fucking api locked")

    return bad_movies

# RANDOM ACTOR
def generate_rand_actor():
    with open("actors.csv", "r") as actor_csv_file:
        csv_reader = csv.reader(actor_csv_file)
        # This skips over the first line in the .csv (Actor heading)
        next(csv_reader)
        random_actor = (random.choice([line[0] for line in csv_reader]))
    return random_actor
    
#BAD MOVIES GIVEN RANDOM ACTOR NAME
def movie_list_from_rand_actor():
    actorHasRatings = False
    while actorHasRatings == False:
        rand_actor = generate_rand_actor()
        print(rand_actor)
        movieList = movies_list_given_actor(rand_actor)
        actorHasRatings = True
    return movieList

#SINGLE RANDOM BAD MOVIE
def random_bad_movie(movieList):
    rand_movie = random.choice(movieList)
    return rand_movie

#print(movie_list_from_rand_actor())