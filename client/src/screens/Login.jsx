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
      onChange={handleChange}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <label>
        <input type="text" name="username" value={username} required />
      </label>
      <br />
      <label>
        <input type="password" name="password" value={password} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
