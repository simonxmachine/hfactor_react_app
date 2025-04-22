"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./GradientTitle.module.css";

interface GradientTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientTitle({
  children,
  className = "",
}: GradientTitleProps) {
  const { theme } = useTheme();

  return (
    <h2 className={`${styles.gradientTitle} ${className}`} data-theme={theme}>
      {children}
    </h2>
  );
}
