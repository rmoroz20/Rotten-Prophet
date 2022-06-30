from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper

celebrity_scraper = CelebrityScraper(celebrity_name='austin butler')
celebrity_scraper.extract_metadata(section='filmography')
movie_titles = celebrity_scraper.metadata['movie_titles']

bad_movies = []
print(movie_titles)

for title in movie_titles:
    
    movie_scraper = MovieScraper(movie_title = title)
    movie_scraper.extract_metadata()
    print(movie_scraper.metadata)
    
    # if (int((movie_scraper.metadata['Score_Rotten'])) < 60) and (int((movie_scraper.metadata['Score_Audience'])) > 70):
    #     bad_movies.append(title)

    # if int(movie_stats['Score_Rotten']) <= 60 and int(movie_stats['Score_Audience']) >= 70:
    #     bad_movies.append(title)

print(bad_movies)

print(movie_scraper.metadata)