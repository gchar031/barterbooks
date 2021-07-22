class BooksController < ApplicationController
  before_action :set_book, only: %i[show update destroy add_category]
  before_action :authorize_request, only: %i[create update destroy]

  def index
    @books = Books.all
    render json: @books
  end

  def show
    render json: @book, include: :categories
  end

  def create
    @new_book = Book.new(book_params)

    if @new_book.save
      render json: @new_book
    else
      render json: @new_book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def add_category
    @category = Category.find(params[:book_id])
    # @food.flavors << @flavor

    render json: @book, include: :categories
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :edition, :year)
  end
end
