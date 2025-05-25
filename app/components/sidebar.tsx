// components/Sidebar.tsx
import React from "react";

export interface SidebarProps {
    isOpen: boolean;
    onNavClick: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavClick }) => {
    return (
        <div
            className={`${
                isOpen ? "d-block" : "d-none d-lg-block"
            } bg-light border-end min-vh-100 p-3`}
            style={{ width: "250px" }}
        >
            <ul className="nav flex-column">
                {[
                    { id: "about", label: "About Me" },
                    { id: "skills", label: "Skills" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "downloads", label: "CV & Certificates" },
                    { id: "contact", label: "Contact" },
                ].map((item) => (
                    <li key={item.id} className="nav-item">
                        <a
                            href={`#${item.id}`}
                            className="nav-link"
                            onClick={(e) => {
                                e.preventDefault();
                                onNavClick(`#${item.id}`);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
