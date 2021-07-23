import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    college_name: "",
    email: "",
  });
  const { username, password, college_name, email } = formData;
  const { handleRegister } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
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
    >
      <label htmlFor="username">
        {" "}
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label htmlFor="passord">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email"> Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <label htmlFor="college_name">College/University Name:</label>
      <input
        type="text"
        name="collge_name"
        value={college_name}
        onChange={handleChange}
      />

      <br />
      <button type="submit">Register</button>
    </form>
  );
}
