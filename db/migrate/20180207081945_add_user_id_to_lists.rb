class AddUserIdToLists < ActiveRecord::Migration[5.1]
  def change
    add_column :lists, :user_id, :integer, null: false
    add_index :lists, :user_id, unique: true
  end
end
