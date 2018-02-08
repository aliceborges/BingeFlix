class AddUserIdToListMoviesTable < ActiveRecord::Migration[5.1]
  def change
    add_column :list_movies, :user_id, :integer, null: false
    add_index :list_movies, :user_id
  end
end
