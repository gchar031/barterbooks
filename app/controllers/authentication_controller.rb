class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @student = Student.find_by(username: login_params[:username])
    # authenticate method provided by Bcrypt and 'has_secure_password', checks if password is correct
    if @student.authenticate(login_params[:password])
      token = encode({ id: @student.id })
      render json: {
        student: @student.attributes.except('password_digest'),
        token: token
      }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_student.attributes.except('password_digest'), status: :ok
  end

  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
