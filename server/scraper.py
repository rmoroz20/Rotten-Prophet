from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper
from rotten_tomatoes_scraper.rt_scraper import MovieScraper

celebrity_scraper = CelebrityScraper(celebrity_name='Demi Lovato')
celebrity_scraper.extract_metadata(section='filmography')
movie_titles = celebrity_scraper.metadata['movie_titles']

bad_movies = []
print(movie_titles)

for title in movie_titles:
    movie_scraper = MovieScraper(movie_title = title)
    movie_scraper.extract_metadata()

    try:
        if int((movie_scraper.metadata['Score_Rotten'])) < 60 and (int((movie_scraper.metadata['Score_Audience'])) > 60):
            bad_movies.append(title)
    except ValueError:
        print("This doesn't have a rating!")


print(bad_movies)