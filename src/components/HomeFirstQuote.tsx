import styles from "./HomeFirstQuote.module.css";

export default function HomeFirstQuote() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.content}>
        <blockquote className={styles.quote}>
          <span className={styles.quoteMarks}>"</span>I love H-Factor, one of
          the few purified waters infused with hydrogen.
          <span className={styles.quoteMarks}>"</span>
        </blockquote>
        <div className={styles.logos}>
          <img src="/logos/forbes.png" alt="Forbes" className={styles.logo} />
          <img
            src="/logos/business-insider.png"
            alt="Business Insider"
            className={styles.logo}
          />
          <img
            src="/logos/la-times.png"
            alt="Los Angeles Times"
            className={styles.logo}
          />
          <img
            src="/logos/yahoo-finance.png"
            alt="Yahoo Finance"
            className={styles.logo}
          />
          <img src="/logos/bevnet.png" alt="BevNET" className={styles.logo} />
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
