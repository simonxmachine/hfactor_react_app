"use client";

import styles from "./Footer.module.css";

const menuItems = {
  column1: [
    { label: "Products", href: "#" },
    { label: "Customize", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Our Story", href: "#" },
  ],
  column2: [
    { label: "Store Locator", href: "#" },
    { label: "Contact", href: "#" },
    { label: "News", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Manage Account", href: "#" },
  ],
  column3: [
    { label: "FAQ", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Returns & Refunds", href: "#" },
    { label: "Accessibility Statement", href: "#" },
  ],
};

const features = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
        <path d="M14 12h12v16l-6-4-6 4V12z" stroke="currentColor" fill="none" />
      </svg>
    ),
    label: "Hydrogen Infused",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
        <path d="M20 11v18M11 20h18" stroke="currentColor" />
        <path
          d="M28 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
    label: "100% Recyclable",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
        <path
          d="M20 28s7-3.5 7-8.5c0-3.9-3.1-7-7-7s-7 3.1-7 7c0 5 7 8.5 7 8.5z"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
    label: "Eco-Friendly",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="19.5" stroke="currentColor" />
        <path d="M12 20h16M12 15h16M12 25h16" stroke="currentColor" />
      </svg>
    ),
    label: "Made in USA",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.waveSvg}
        >
          <path
            className={styles.wavePath}
            d="M0,160
              C360,80 720,220 1440,160 
              L1440,250
              L0,250
              Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <p className={styles.featureLabel}>{feature.label}</p>
            </div>
          ))}
        </div>

        <p className={styles.description}>
          H-Factor is infusing cutting-edge technology into hydration, promoting
          health, sustainability, and environmental consciousness with every
          drop.
        </p>

        <div className={styles.menuGrid}>
          <div className={styles.menuColumn}>
            {menuItems.column1.map((item, index) => (
              <a key={index} href={item.href} className={styles.menuItem}>
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.menuColumn}>
            {menuItems.column2.map((item, index) => (
              <a key={index} href={item.href} className={styles.menuItem}>
                {item.label}
              </a>
            ))}
          </div>
          <div className={styles.menuColumn}>
            {menuItems.column3.map((item, index) => (
              <a key={index} href={item.href} className={styles.menuItem}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.copyright}>
          © {currentYear} H-Factor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
