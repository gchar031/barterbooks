import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login(props) {
  const { handleLogin } = props;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form
      id="loginForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
      className="user-form"
    >
      <h2 className="subtitles">Login</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        required
      />

      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        required
      />

      <br />
      <button type="submit">Login</button>
      <p className="register_loginOp">
        Do not have an account?
        <Link to="/register" className="user-link">
          {" "}
          Sign up here!
        </Link>
      </p>
    </form>
  );
}
