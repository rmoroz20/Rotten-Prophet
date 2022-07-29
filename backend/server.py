import time
from flask import Flask
import scraper

app = Flask(__name__)


@app.route('/movies/randomActor')
def get_movie_list_rand_actor():
    return {'movies': scraper.movie_list_from_rand_actor()}

@app.route('/movies/givenActor')
def get_movie_list_given_actor():
    return {'movies': scraper.movie_list_given_actor(actorName)}