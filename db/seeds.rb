# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Book.destroy_all
Student.destroy_all

# Students
@gilda = Student.create!(username: 'gilda', password: '12345678', email: 'gilda@florida.edu',
                         college_name: 'Florida International University')
@helen = Student.create!(username: 'helena101', password: '101101101', email: 'helena@jw.edu',
                         college_name: 'Johnson & Wales University')
@rueby = Student.create!(username: 'rubeywise', password: 'rubyrails', email: 'ruby@boston.edu',
                         college_name: 'Boston College')
@troy = Student.create!(username: 'sparta', password: 'troysparta', email: 'troy@mdc.edu', college_name: 'MD College')
@casper = Student.create!(username: 'comfortableCasper', password: 'casperbeds', email: 'casper@bed.com',
                          college_name: 'Bed Univeristy')
@lenon = Student.create!(username: 'lenon', password: 'newsmax', email: 'lenon@wtech.edu',
                         college_name: 'Williams Technical College')
@hermoine = Student.create!(username: 'hermoine101', password: 'granger', email: 'hermoine@hogwarts.edu',
                            college_name: 'Hogwarts International University')
@luna = Student.create!(username: 'cutelove', password: 'lovegood', email: 'harry@hogwarts.edu',
                        college_name: 'Hogwarts International University')
@ronald = Student.create!(username: 'ron', password: 'ronaldrules', email: 'ronald@hogwarts.edu',
                          college_name: 'Hogwarts International University')

puts "#{Student.count} students created"

# Category
categories_list = [
  { name: 'Arts & Music' },
  { name: 'History' },
  { name: 'Fashion' },
  { name: 'Biographies' },
  { name: 'Ethnic & Cultural' },
  { name: 'Business' },
  { name: 'Careers' },
  { name: 'Economics & Finance' },
  { name: 'Computers' },
  { name: 'Cooking & Baking' },
  { name: 'Education' },
  { name: 'Entertainment & Film' },
  { name: 'Health & Fitness' },
  { name: 'Beauty' },
  { name: 'Home & Garden' },
  { name: 'Architecture' },
  { name: 'Literature & Fiction' },
  { name: 'Anthologies' },
  { name: 'Foreign Language' },
  { name: 'Medical' },
  { name: 'Religion' },
  { name: 'Science & Math' },
  { name: 'Self-Help' },
  { name: 'Social Sciences' },
  { name: 'Sports' },
  { name: 'Travel' }
]

Category.create!(categories_list)
@politics = Category.create!(name: 'Politics')
@comics = Category.create!(name: 'Comics')
@fantasy = Category.create!(name: 'Fantasy')
@programming = Category.create!(name: 'Technology')

puts "#{Category.count} categories created"

# Book
@react = Book.create!(
  title: 'React', author: 'Ronald Hovenger', edition: 3, year: 2020,
  description: 'Learn about React and buil a project in 30 days!',
  img_url: 'https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWN0JTIwanN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  exchange_item: 'Ruby on Rails', req_counter: 0, student: @gilda, category: @programming
)
@python = Book.create!(
  title: 'Python Crash Course', author: 'Erric Matthes', edition: 1, year: 2016,
  description: 'Book has very little wear and tear, in good condition. A crash course on python!',
  img_url: 'https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  exchange_item: 'Ruby on Rails', req_counter: 0, student: @casper, category: @programming
)
@harry_potter2 = Book.create!(
  title: 'Chamber of Sectrets', author: 'J.K. Rowling', edition: 1, year: 1998,
  description: 'Comic book is in perfect condition with very little wear.',
  img_url: 'https://images.unsplash.com/photo-1519764340700-3db40311f21e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  exchange_item: 'Sorreccer Stone', req_counter: 0, student: @gilda, category: @fantasy
)
@marvelComic = Book.create!(
  title: 'Black Widow', author: 'Stan Lee', edition: 1, year: 1990,
  description: 'Comic book is in perfect condition with very little wear.',
  img_url: 'https://images.unsplash.com/photo-1587270613304-4cc9ef012b92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFydmVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  exchange_item: 'Lucy', req_counter: 0, student: @troy, category: @comics
)
@political = Book.create!(
  title: 'Polictal Intrigue Vol 1', author: 'Yele Johnson', edition: 1, year: 2015,
  description: 'Book is in good condition. The synonpsis for the book: Andrew begins a jorney to become a representative
  in his town but he faces many challenges. Read more to see what lies ahead.',
  img_url: 'https://images.unsplash.com/photo-1575320181282-9afab399332c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saXRpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  exchange_item: 'Polictal Intrigue Vol 2', req_counter: 0, student: @ronald, category: @politics
)

puts "#{Book.count} books created"
