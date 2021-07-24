class AddExchangeCount < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :exchange_counter, :integer, default: 0
    change_column_default :books, :req_counter, default: 0
  end
end
