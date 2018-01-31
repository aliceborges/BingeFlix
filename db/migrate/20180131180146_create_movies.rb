class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.text :blurb, null: false
      t.timestamps
    end
    add_index :movies, :title, unique: true
  end
end
