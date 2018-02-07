class Adduniquescopedindextolistmovies < ActiveRecord::Migration[5.1]
  def change
    add_index :list_movies, [:list_id, :movie_id], unique: true
  end
end
