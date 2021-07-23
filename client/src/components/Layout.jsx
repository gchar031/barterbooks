import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <hr />
      {props.children}
      <hr />
      <Footer />
    </div>
  );
}
