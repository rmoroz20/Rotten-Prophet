DELETE FROM movieinfo
WHERE id NOT IN (
  SELECT MIN(id) FROM movieinfo
  GROUP BY movie_title, score_critic, score_audience
);