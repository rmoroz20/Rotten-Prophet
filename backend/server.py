import time
from flask import Flask, jsonify
import scraper
import json
import psycopg2
import os
import env

app = Flask(__name__)

con = psycopg2.connect(
    database=env.DATABASE,
    user=env.DATABASE_USERNAME,
    password=env.DATABASE_PASSWORD)

cur = con.cursor()

@app.route('/movies/randomActor')
def get_movie_list_rand_actor():

    data = (60, 80)

    cur.execute('SELECT * FROM movieinfo WHERE score_critic<%s AND score_audience>%s ORDER BY RANDOM()', data)
    rows = cur.fetchone()

    print(rows)
    return jsonify(rows) 
    

@app.route('/movies/givenActor')
def get_movie_list_given_actor():
    return {'movies': scraper.movie_list_given_actor(actorName)}
