import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import portfolioData from "../assets/data/portfolio.json";

const Header: React.FC = () => {
  const { navigation } = portfolioData;

  const [selectedSection, setSelectedSection] = useState<string>(
    window.location.hash ? window.location.hash.slice(1) : "home"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    navigation.forEach((navItem) => {
      const section = document.getElementById(navItem.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigation.forEach((navItem) => {
        const section = document.getElementById(navItem.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigation]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target) &&
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div
        ref={hamburgerRef}
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav ref={navRef} className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          {navigation.map((navItem) => (
            <li key={navItem.id}>
              <a
                href={`#${navItem.id}`}
                className={`nav-link ${
                  selectedSection === navItem.id ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedSection(navItem.id);
                  setIsMenuOpen(false);
                }}
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
