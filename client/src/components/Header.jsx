import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  const { currentStudent, handleLogout } = props;
  
  function checkLogin() {
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
      <Link to="/">
        <h1>Barter Books</h1>
      </Link>
      <ul className="menu">
        <Link to="/books">
          <li>Books</li>
        </Link>
        <Link to="/books/create">
          <li>Create Book</li>
        </Link>
      </ul>
      <div className="loginRegister">{checkLogin()}</div>
    </nav>
  );
}
