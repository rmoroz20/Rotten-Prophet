import time
from flask import Flask, jsonify
import scraper
import json
import psycopg2
import os

DATABASE = os.getenv('DATABASE')
DATABASE_USERNAME = os.getenv('DATABASE_USERNAME')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')

app = Flask(__name__)


@app.route('/movies/randomActor')
def get_movie_list_rand_actor():
    return {'movies': scraper.movie_list_from_rand_actor()}

@app.route('/movies/givenActor')
def get_movie_list_given_actor():
    return {'movies': scraper.movie_list_given_actor(actorName)}