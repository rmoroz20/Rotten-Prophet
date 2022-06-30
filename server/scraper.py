from rotten_tomatoes_scraper.rt_scraper import CelebrityScraper

celebrity_scraper = CelebrityScraper(celebrity_name='jack nicholson')
celebrity_scraper.extract_metadata(section='highest')
movie_titles = celebrity_scraper.metadata['movie_titles']

print(movie_titles)
#['On a Clear Day You Can See Forever', 'The Shooting', 'Chinatown', 'Broadcast News']