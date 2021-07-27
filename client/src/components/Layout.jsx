import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { currentStudent, handleLogout } = props;
  return (
    <div className="layout">
      <Header currentStudent={currentStudent} handleLogout={handleLogout} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>
  );
}
