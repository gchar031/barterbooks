import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  const { currentStudent, handleLogout } = props;
  console.log(currentStudent);
  function checkLogin() {
    console.log(currentStudent);
    return currentStudent ? (
      <div>
        <h3> Hello, {currentStudent.username} </h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div className="">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
  return (
    <nav>
      <h1>Barter Books</h1>
      {checkLogin()}
    </nav>
  );
}
