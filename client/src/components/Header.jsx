import '../styles/Header.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Header(props) {
  const { currentStudent, handleLogout } = props;
  const [menuDisplay, setMenuDisplay] = useState(null)

  function checkLogin() {
    return currentStudent ? (
      <div id="welcome-user">
        <h3> Hello, {currentStudent.username} </h3>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div className="login-btns">
        <div id="register-btn">
          <Link to="/register">
            <i class="fas fa-user-plus">
              <p className="menup">Register</p>
            </i>
          </Link>
        </div>
        <div id="login-btn">
          <Link to="/login" className="menu-link">
            <i class="fas fa-sign-in-alt"></i>
            <p className="menup">Login</p>
          </Link>
        </div>
      </div>
    );
  }


  console.log(menuDisplay)
  return (
    <nav>
      <p onClick={() => setMenuDisplay("show")} id="menu-btn">
        <i className="fas fa-bars">
          <p className="menup">Menu</p>
        </i>
      </p>
      <Link to="/" className="title-link">
        <h1 id="title">Barter Books</h1>
      </Link>
      <div className="login-register">{checkLogin()}</div>
      <ul className={"menu " + menuDisplay}>
        <span id="close-menu" onClick={() => setMenuDisplay("close")}>
          Close
        </span>
        <Link to="/books">
          <li>Books</li>
        </Link>
        {currentStudent ? (
          <Link to="/create" >
            <li>Create Book</li>
          </Link>
        ) : (
          <Link to="/register" className="menu-link">
            <li>Create Book</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}
