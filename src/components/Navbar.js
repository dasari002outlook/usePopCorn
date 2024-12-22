import React from "react";

export default function Navbar({ children }) {
  return (
    <div>
      <nav className="nav-bar">{children}</nav>
    </div>
  );
}
