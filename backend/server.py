import time
from flask import Flask
import scraper

app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/movies/randomActor')
def get_movie_list_rand_actor():
    return {'movies': scraper.movie_list_from_rand_actor()}