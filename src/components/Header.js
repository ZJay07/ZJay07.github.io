import React, { useEffect, useRef } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const handleCheckboxChange = () => {
      document.body.classList.toggle("dark");
    };

    checkbox.addEventListener("change", handleCheckboxChange);

    // Cleanup event listener on component unmount
    return () => {
      checkbox.removeEventListener("change", handleCheckboxChange);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <div>
        <input type="checkbox" className="checkbox" id="checkbox" ref={checkboxRef} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;