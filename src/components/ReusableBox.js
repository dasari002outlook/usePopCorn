import React from "react";
import { useState } from "react";

export default function ReuseableBox({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
