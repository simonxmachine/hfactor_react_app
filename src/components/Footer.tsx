"use client";

import styles from "./Footer.module.css";
import { Drop, Recycle, Leaf, Flag } from "@phosphor-icons/react";

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
    { label: "FAQ", href: "#" },
  ],
  column3: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Returns & Refunds", href: "#" },
  ],
};

const features = [
  {
    icon: <Drop size={24} weight="light" />,
    label: "Hydrogen Infused",
  },
  {
    icon: <Recycle size={24} weight="light" />,
    label: "100% Recyclable",
  },
  {
    icon: <Leaf size={24} weight="light" />,
    label: "Eco-Friendly",
  },
  {
    icon: <Flag size={24} weight="light" />,
    label: "Made in USA",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 
              C360,0 720,120 1440,64 
              L1440,120 
              L0,120 
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
