import React, { useState, useEffect } from "react";
import "./Header.css";
import portfolioData from "../assets/data/portfolio.json";

const Header: React.FC = () => {
  const { navigation } = portfolioData;

  const [selectedSection, setSelectedSection] = useState<string>(
    window.location.hash ? window.location.hash.slice(1) : "hero"
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navigation.forEach((navItem) => {
        const section = document.getElementById(navItem.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setSelectedSection(navItem.id);
          }
        }
      });
    };

    const handleHashChange = () => {
      setSelectedSection(
        window.location.hash ? window.location.hash.slice(1) : "hero"
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navigation]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <ul className="nav-list">
          {navigation.map((navItem) => (
            <li key={navItem.id}>
              <a
                href={`#${navItem.id}`}
                className={`nav-link ${
                  selectedSection === navItem.id ? "selected" : ""
                }`}
                onClick={() => setSelectedSection(navItem.id)}
              >
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
