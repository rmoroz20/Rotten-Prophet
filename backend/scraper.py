from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper

import csv
import random

#getting bad movies by known celebrity name
celebrity_scraper = CelebrityScraper(celebrity_name='Demi Lovato')
celebrity_scraper.extract_metadata(section='filmography')
movie_titles = celebrity_scraper.metadata['movie_titles']

bad_movies = []

for title in movie_titles:
    movie_scraper = MovieScraper(movie_title = title)
    movie_scraper.extract_metadata()

    try:
        if int((movie_scraper.metadata['Score_Rotten'])) < 60 and (int((movie_scraper.metadata['Score_Audience'])) > 60):
            bad_movies.append(title)
    except ValueError:
        pass

print(bad_movies)

# MOVIE FROM RANDOM CELEBRITY
with open("actors.csv", "r") as actor_csv_file:
    csv_reader = csv.reader(actor_csv_file)
    # This skips over the first line in the .csv (first_name, last_name)
    next(csv_reader)
    print(random.choice([line[0] for line in csv_reader]))



