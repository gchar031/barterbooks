class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :edition
      t.integer :year
      t.string :description
      t.string :img_url
      t.string :exchange_item
      t.integer :req_counter
      t.references :student, null: false, foreign_key: true
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
