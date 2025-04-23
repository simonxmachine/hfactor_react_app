"use client";

import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${styles.mobileMenu}`) &&
        !target.closest(`.${styles.burgerButton}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.png"
            alt="HFactor Logo"
            width={180}
            height={38}
            priority
            className={styles.logo}
          />
        </Link>

        <div className={styles.rightSection}>
          <div className={styles.desktopActions}>
            <ThemeToggle />
            <nav className={styles.nav}>
              <Link href="/shop" className={styles.navLink}>
                Shop
              </Link>
              <Link href="/shop" className={styles.navLink}>
                Power of Hydrogen
              </Link>
              <Link href="/sustainability" className={styles.navLink}>
                Sustainability
              </Link>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </nav>

            <button className={styles.cartButton} aria-label="Shopping Cart">
              <IoCartOutline size={24} />
            </button>
          </div>

          <button
            className={`${styles.burgerButton} ${
              isMenuOpen ? styles.isOpen : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            data-theme={theme}
          >
            <div
              className={`${styles.burgerIcon} ${
                isMenuOpen ? styles.open : ""
              }`}
            >
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <nav className={styles.mobileNav}>
              <Link
                href="/shop"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/hydrogen-science"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Power of Hydrogen
              </Link>
              <Link
                href="/sustainability"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Sustainability
              </Link>
              <Link
                href="/about"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <div className={styles.mobileThemeToggle}>
                <ThemeToggle variant="switch" />
              </div>

              <div className={styles.mobileDivider} />

              <button
                className={styles.mobileCartButton}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Shopping Cart"
              >
                <IoCartOutline size={28} />
                <span>Cart</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
