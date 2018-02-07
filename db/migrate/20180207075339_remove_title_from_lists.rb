class RemoveTitleFromLists < ActiveRecord::Migration[5.1]
  def change
    remove_column :lists, :title
  end
end
