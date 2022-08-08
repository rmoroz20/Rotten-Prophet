import time
from flask import Flask, jsonify
import scraper
import json
import psycopg2
import os
from actors_comma import actors
import scraper

DATABASE = os.getenv('DATABASE')
DATABASE_USERNAME = os.getenv('DATABASE_USERNAME')
DATABASE_PASSWORD = os.getenv('DATABASE_PASSWORD')

app = Flask(__name__)


con = psycopg2.connect(
    database=DATABASE,
    user=DATABASE_USERNAME,
    password=DATABASE_PASSWORD)

cur = con.cursor()


for actor in actors:
    all_actor_movies_data = scraper.all_movie_list_given_actor(actor)
    cur.execute("INSERT INTO movieinfo (movie_title, score_critic, score_audience ) VALUES (%s,%s,%s)")
    con.commit()