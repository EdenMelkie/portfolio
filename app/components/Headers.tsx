import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  onNavClick: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  isMobileMenuOpen,
  toggleMobileMenu,
  onNavClick,
}) => {
  return (
    <header className="bg-gray-200 dark:bg-gray-900 shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-200">
        Hailemariam Eyayu
      </h1>

      <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
        {["about", "skills", "certificates", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => onNavClick(section)}
            className="hover:text-blue-500 transition-colors"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          {isDarkMode ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM15.657 4.343a1 1 0 011.414 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707zM18 10a1 1 0 110 2h-1a1 1 0 110-2h1zM15.657 15.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 111.414-1.414l.707.707zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.343 15.657a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707zM4 10a1 1 0 110 2H3a1 1 0 110-2h1zM5.343 4.343a1 1 0 011.414-1.414l.707.707a1 1 0 11-1.414 1.414l-.707-.707z"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z"></path>
            </svg>
          )}
        </button>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
