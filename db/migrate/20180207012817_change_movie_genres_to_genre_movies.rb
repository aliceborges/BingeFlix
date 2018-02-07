class ChangeMovieGenresToGenreMovies < ActiveRecord::Migration[5.1]
  def change
    rename_table :movie_genres, :genre_movies
  end
end
