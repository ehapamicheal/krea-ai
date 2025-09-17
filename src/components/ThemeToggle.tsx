"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === "dark";
  
  return (
    <button type="button"
      className="p-2 rounded-full cursor-pointer hover:bg-gray-200/40 dark:hover:bg-white/6 transition duration-300"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ?  <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}

export default ThemeToggle;