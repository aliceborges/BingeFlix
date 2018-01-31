class AddPresenceValidationToImageUrlInMovies < ActiveRecord::Migration[5.1]
  def change
    change_column :movies, :image_url, :string, null:false
  end
end
