import React, { useState } from "react";

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
    </button>
  );
};

export default ThemeToggler;
