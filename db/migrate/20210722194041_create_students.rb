class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :college_name

      t.timestamps
    end
  end
end
