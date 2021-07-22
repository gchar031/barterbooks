class Book < ApplicationRecord
  belongs_to :student
  belongs_to :category

  validates :title, :author, :description, :exchange_item, :year, presence: true
  validates :year, length: { is: 4, too_short: 'Year should be %{count} characters long' }
end
