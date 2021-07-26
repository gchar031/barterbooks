import '../styles/Header.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Header(props) {
  const { currentStudent, handleLogout } = props;
  const [menuDisplay, setMenuDisplay] = useState(null)
  
  function checkLogin() {
    return currentStudent ? (
      <div id="welcome" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt logout"></i>
        <p className="menup">Logout</p>
      </div>
    ) : (
      <div className="login-btns">
        <div id="register-btn">
          <Link to="/register">
            <i className="fas fa-user-plus">
              <p className="menup">Register</p>
            </i>
          </Link>
        </div>
        <div id="login-btn">
          <Link to="/login" className="menu-link">
            <i className="fas fa-sign-in-alt"></i>
            <p className="menup">Login</p>
          </Link>
        </div>
      </div>
    );
  }


  return (
    <nav>
      <p onClick={() => setMenuDisplay("show")} id="menu-btn">
        <i className="fas fa-bars">
          <span className="menup">  Menu</span>
        </i>
      </p>
      <Link to="/" className="title-link">
        <h1 id="title">Barter Books</h1>
      </Link>
      {checkLogin()}
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
