import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { currentStudent, handleLogout } = props;
  return (
    <div>
      <Header currentStudent={currentStudent} handleLogout={handleLogout} />
      {props.children}
      <hr />
      <Footer />
    </div>
  );
}
