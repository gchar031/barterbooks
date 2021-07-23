class BooksController < ApplicationController
  before_action :set_book, only: %i[show update destroy add_category]
  before_action :authorize_request, only: %i[create update destroy]

  def index
    @books = Book.all
    render json: @books
  end

  def show
    render json: @book, include: %i[category student]
  end

  def create
    @new_book = Book.new(book_params)

    if @new_book.save
      render json: @new_book, status: :created
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
    @category = Category.find(params[:name])
    # @food.flavors << @flavor
    @book.catergory << @category
    render json: @book, include: :category
  end

  def destroy
    @book.destroy
  end

  private

  def set_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :edition, :year, :exchange_item, :description, :img_url, :student_id, :category_id)
  end
end
