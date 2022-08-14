import time
from flask import Flask, jsonify
import scraper
import json
import psycopg2
import os
import env
from actors_comma import actors
#from subset_actors import actors
import scraper

app = Flask(__name__)

con = psycopg2.connect(
    database=env.DATABASE,
    user=env.DATABASE_USERNAME,
    password=env.DATABASE_PASSWORD)

cur = con.cursor()


for actor in actors:
    all_actor_movies = scraper.all_movie_list_given_actor(actor) #returns dict {title: [title, critic_score, audience_score]}
    for movie_title in all_actor_movies:
        data = (all_actor_movies[movie_title][0], all_actor_movies[movie_title][1], all_actor_movies[movie_title][2]) # tuple of (title, critic_score, audience_score)

        cur.execute("INSERT INTO movieinfo (movie_title, score_critic, score_audience ) VALUES (%s, %s, %s)", data)

        con.commit()