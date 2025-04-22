"use client";

import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/logo.png"
          alt="HFactor Logo"
          width={180}
          height={38}
          priority
          className={styles.logo}
        />

        <div className={styles.rightSection}>
          <ThemeToggle />
          <nav className={styles.nav}>
            <Link href="/shop" className={styles.navLink}>
              Shop
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
      </div>
    </header>
  );
};

export default Header;
