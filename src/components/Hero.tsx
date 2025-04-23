import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Link href="/shop" className={styles.shopLink}>
          <h1>shop now →</h1>
        </Link>
      </div>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 
              C360,96 720,0 1440,64 
              L1440,120 
              L0,120 
              Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
