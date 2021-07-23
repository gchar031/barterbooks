import { useState } from "react";

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
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} id="loginForm"
    >
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
    </form>
  );
}
