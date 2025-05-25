'use client';

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply or remove dark mode class on <body> element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow-sm ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-dark bg-primary'}`}>
      <div className="container-fluid">
        <button
          className="btn btn-primary d-lg-none me-2"
          id="sidebarToggle"
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand fw-bold" href="#">
          Hailemariam Eyayu
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTop"
          aria-controls="navbarTop"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTop">
          <ul className="navbar-nav ms-auto gap-2 align-items-center">
            {[ 
              { href: '#about', label: 'About Me' },
              { href: '#skills', label: 'Skills' },
              { href: '#portfolio', label: 'Portfolio' },
              { href: '#downloads', label: 'CV & Certificates' },
              { href: '#contact', label: 'Contact' },
            ].map(({ href, label }) => (
              <li key={href} className="nav-item">
                <a
                  className="nav-link px-3 py-2 rounded text-white"
                  href={href}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Night mode toggle button */}
            <li className="nav-item">
              <button
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="btn btn-outline-light rounded-circle p-2"
                style={{ width: '38px', height: '38px' }}
                title="Toggle Night Mode"
              >
                {isDarkMode ? (
                  // Sun icon for light mode
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
