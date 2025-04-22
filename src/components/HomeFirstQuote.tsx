import styles from "./HomeFirstQuote.module.css";

export default function HomeFirstQuote() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.content}>
        <blockquote className={styles.quote}>
          <span className={styles.quoteMarks}></span>An{" "}
          <span className={styles.award}>award-winning</span> hydrogen infused
          water that offers anti-inflammatory and antioxidant benefits.
          <span className={styles.quoteMarks}></span>
        </blockquote>
        <div className={styles.logos}>
          <img
            src="/store_brands/walmart.webp"
            alt="Walmart"
            className={styles.logo}
          />
          <img src="/store_brands/cvs.png" alt="CVS" className={styles.logo} />
          <img
            src="/store_brands/sprouts.png"
            alt="Sprouts"
            className={styles.logo}
          />
          <img
            src="/store_brands/stop_shop.png"
            alt="Stop & Shop"
            className={styles.logo}
          />
          <img
            src="/store_brands/winn_dixie.png"
            alt="Winn Dixie"
            className={styles.logo}
          />
          <img
            src="/store_brands/bristol_farms.png"
            alt="Bristol Farms"
            className={styles.logo}
          />
          <img
            src="/store_brands/acme.png"
            alt="Acme"
            className={styles.logo}
          />
          <img
            src="/store_brands/rouses.png"
            alt="Rouses"
            className={styles.logo}
          />
        </div>
      </div>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 
              C360,120 720,0 1440,64 
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
