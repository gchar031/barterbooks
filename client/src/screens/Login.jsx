import { useState } from "react";
import { Link } from "react-router-dom";

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
    >
      <h2 className="subtitles">Login</h2>
      <label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <p className="register_loginOp">
        Do not have an account?
        <Link to="/register">Sign up here!</Link>
      </p>
    </form>
  );
}
