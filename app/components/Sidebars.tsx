import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onNavClick: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavClick }) => {
  return (
    <aside
      className={`fixed top-16 left-0 w-64 h-full bg-gray-100 dark:bg-gray-800 shadow-md p-6 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:w-64`}
      aria-label="Sidebar navigation"
    >
      <nav className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200">
        {["about", "skills", "certificates", "contact"].map((section) => (
          <button
            key={section}
            className="text-left hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => onNavClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
