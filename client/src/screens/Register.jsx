import { useState } from "react";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    college_name: '',
    email: ''
  })
  const { username, password, college_name, email } = formData
  const { handleRegister } = props

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
        handleRegister(formData);
      }}
    >
      <label>
        <input type="text" name="username" value={username} required/>
      </label>
      <br />
      <label>
        <input type="password" name="password" value={password} required/>
      </label>
      <label>
        <input type="email" name="email" value={email} required/>
      </label>
      <label>
        <input type="college_name" name="collgeName" value={college_name} />
      </label>
    </form>
  );
}
