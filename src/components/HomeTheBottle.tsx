"use client";

import styles from "./HomeTheBottle.module.css";
import GradientTitle from "./GradientTitle";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function HomeTheBottle() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = styles.bubble;

      // Random size between 10px and 50px
      const size = Math.random() * 40 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random starting position
      const startX = Math.random() * container.offsetWidth;
      bubble.style.position = "absolute";
      bubble.style.left = `${startX}px`;
      bubble.style.bottom = "-50px";

      // Add gradient and blur effects with more intense blue
      bubble.style.background = `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(49, 123, 227, 0.8))`;
      bubble.style.backdropFilter = "blur(2px)";

      container.appendChild(bubble);

      // Animate the bubble
      const duration = Math.random() * 3000 + 4000; // 4-7 seconds
      const horizontalMovement = Math.random() * 100 - 50; // -50px to 50px

      const keyframes = [
        {
          transform: `translate(0px, 0px)`,
          opacity: 0,
        },
        {
          transform: `translate(${horizontalMovement / 2}px, -${
            container.offsetHeight / 2
          }px)`,
          opacity: 0.7,
        },
        {
          transform: `translate(${horizontalMovement}px, -${container.offsetHeight}px)`,
          opacity: 0,
        },
      ];

      const animation = bubble.animate(keyframes, {
        duration,
        easing: "ease-out",
      });

      animation.onfinish = () => {
        bubble.remove();
      };
    };

    // Create new bubbles periodically
    const interval = setInterval(() => {
      createBubble();
    }, 500);

    return () => {
      clearInterval(interval);
      if (container) {
        const bubbles = container.getElementsByClassName(styles.bubble);
        while (bubbles.length > 0) {
          bubbles[0].remove();
        }
      }
    };
  }, []);

  return (
    <section className={styles.bottleSection} ref={sectionRef}>
      <div ref={containerRef} className={styles.bubbleContainer} />
      <div className={styles.content}>
        <GradientTitle className={styles.title}>meet the pouch</GradientTitle>
        <p className={styles.subtitle}>
          The H-Factor pouch is recycle, eco-friendly, and packed with
          hydrodren. With it&apos;s durable construction and sleek design,
          it&apos;s the perfect companion for your daily hydration needs.
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/colored_pouch_image/blue_image.webp"
            alt="PATH Bottle"
            width={400}
            height={600}
            className={styles.bottleImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
