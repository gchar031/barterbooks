import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    college_name: "",
  });
  const { username, password, college_name, email } = formData;
  const { handleRegister } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
      id="registerForm"
    >
      <h2 className="subtitles">Register</h2>
      <label htmlFor="username"> Username:</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="passord"> Password: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email"> Email: </label>
      <input
        type="email"
        name="email"
        placeholder="email@college.edu"
        value={email}
        onChange={handleChange}
        required
      />
      {/* bug: input text for college will not appear */}
      <label htmlFor="college_name"> College/University Name: </label>
      <input
        type="text"
        id="college"
        name="college_name"
        placeholder="ABC College"
        value={college_name}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Register</button>
      <p className="register_loginOp">
        Already have an account? <Link to="/login">Sign in here!</Link>
      </p>
    </form>
  );
}
