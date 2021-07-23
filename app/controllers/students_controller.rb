class StudentsController < ApplicationController

  # POST /students
  def create
    @student = Student.new(student_params)

    if @student.save
      @token = encode({ id: @student.id })
      # will not send back password
      render json: {
        token: @token,
        student: @student.attributes.except('password_digest')
      }, status: :created
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  private

  # Only allows a list of trusted parameters through.
  def student_params
    params.require(:student).permit(:username, :email, :password, :college_name)
  end
end
