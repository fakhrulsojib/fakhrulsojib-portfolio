import React, { useEffect, useState } from "react";
import "./Header.css";

interface Section {
  id: string;
  name: string;
}

const Header: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    fetch("src/assets/data/sections.json")
      .then((response) => response.json())
      .then((data) => setSections(data.sections))
      .catch((error) => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <header className="header sticky top-0 bg-gray-800 py-4 px-8 z-50 shadow-md">
      <nav className="nav flex justify-between items-center">
        <ul className="nav-list flex gap-6 list-none m-0 p-0">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-white font-bold transition-colors duration-300 hover:text-blue-400"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
