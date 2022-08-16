import time
from flask import Flask, jsonify
import scraper
import json
import psycopg2
import os
import env
import scraper

app = Flask(__name__)

con = psycopg2.connect(
    database=env.DATABASE,
    user=env.DATABASE_USERNAME,
    password=env.DATABASE_PASSWORD)


cur = con.cursor()

cur.execute("SELECT name from actorsmovieinfo LIMIT 10;")
actor_name_result = cur.fetchall()

scraper.all_movie_list_given_actor(actorName)

for name_tuple in actor_name_result:
    movie_id_list = []
    all_actor_movies = scraper.all_movie_list_given_actor(name_tuple[0]) 
    for movie_title in all_actor_movies:
        data = (movie_title) 

        cur.execute("SELECT id from movieinfo WHERE movie_title = %s", data) #getting movie id as list of tuple
        
        id_tuple = cur.fetchall()
        movie_id_list.append(id_tuple[0])

        con.commit()
    cur.execute

    ##TO DO: ONE OTHER TABLE JSUT FRO STORING LISTS OF MOVIES IDS USING ACTOR IDS TO LINK AND THEN LINK TO MOVIE INFO
