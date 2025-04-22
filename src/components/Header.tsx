import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.css";

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
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
