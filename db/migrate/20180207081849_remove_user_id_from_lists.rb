class RemoveUserIdFromLists < ActiveRecord::Migration[5.1]
  def change
    remove_column :lists, :user_id
  end
end
