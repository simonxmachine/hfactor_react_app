"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  variant?: "default" | "switch";
}

export function ThemeToggle({ variant = "default" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  if (variant === "switch") {
    return (
      <button
        onClick={toggleTheme}
        className={styles.switchToggle}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        <span className={styles.switchLabel}>
          {theme === "light" ? "Light" : "Dark"} Mode
        </span>
        <div
          className={`${styles.switch} ${
            theme === "dark" ? styles.switchActive : ""
          }`}
        >
          <div className={styles.switchHandle}>
            {theme === "light" ? "☀️" : "🌙"}
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={styles.defaultToggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
