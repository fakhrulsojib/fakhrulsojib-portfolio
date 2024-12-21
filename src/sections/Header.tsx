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
        threshold: 0.5, // Adjust as needed.  0.5 means 50% visible
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
          observer.unobserve(section); // Important: Clean up the observer
        }
      });
    };
  }, [navigation]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      console.log(hamburgerRef.current);

      if (hamburgerRef.current && !hamburgerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log("Menu open state changed: ", isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <header className={`header`}>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={
          isMenuOpen
            ? () => {
                console.log("Called for closing " + isMenuOpen);
                closeMenu();
              }
            : () => {
                console.log("Called for opening " + isMenuOpen);
                openMenu();
              }
        }
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
