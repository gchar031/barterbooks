class ChangeReqDefault < ActiveRecord::Migration[6.1]
  def change
    change_column :books, :req_counter, :integer, default: 0
  end
end
