import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    college: "",
  });
  const { username, password, college, email } = formData;
  const { handleRegister } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("After", name, value);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} id="registerForm"
    >
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
        id="collge"
        name="college_name"
        placeholder="ABC College"
        value={college}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Register</button>
    </form>
  );
}
