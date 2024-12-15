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
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
