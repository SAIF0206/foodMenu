import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsopen] = useState(true);
  const handleClick = () => {
    setIsopen(!isOpen);
  };
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Avinash's Kitchen opening soon ...</p>
          <button className="btn" onClick={handleClick}>
            Open
          </button>
        </div>
      ) : (
        <div className="order">
          <p>Horray!! We're Open 🥳</p>
          <button
            className="btn"
            onClick={handleClick}
            style={{ backgroundColor: "grey" }}
          >
            Close
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
