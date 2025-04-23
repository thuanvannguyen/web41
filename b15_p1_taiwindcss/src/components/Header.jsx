import React, { useEffect, useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("THEME") == "dark"
  );

  console.log(localStorage.getItem("THEME"));

  useEffect(() => {
    // Gan class cho HTML => 'dark'
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Luu che toi vao localStorage
    localStorage.setItem("THEME", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="p-4 bg-white dark:bg-gray-800 border-b-1 border-[#e8e8e8]">
      <button
        className="px-4 py-2 bg-blue-800 text-white border-0 rounded"
        onClick={toggleTheme}
      >
        {isDarkMode ? "Chế độ tối" : "Chế độ sáng"}
      </button>
    </div>
  );
};

export default Header;
