class StudentsController < ApplicationController
  
  # POST /students
  def create
    @student = Student.new(student_params)

    if @student.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allows a list of trusted parameters through.
  def student_params
    params.require(:student).permit(:username, :email, :password)
  end
end
