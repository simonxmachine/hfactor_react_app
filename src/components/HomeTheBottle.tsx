"use client";

import styles from "./HomeTheBottle.module.css";
import GradientTitle from "./GradientTitle";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";

// Bubble component with deterministic size and position based on index
const Bubble = ({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  // Simplified positioning
  const size = 0; // Fixed size for testing
  const xPos = (index % 5) * 20; // Spread bubbles horizontally

  // Transform scroll progress to Y position
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1000, -1000] // Move from bottom to top
  );

  return (
    <motion.div
      className={styles.bubble}
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: `${xPos}%`,
        bottom: "20px",
        y,
        backgroundColor: "rgba(49, 123, 227, 0.5)", // Make bubbles clearly visible
        opacity: 0.8,
      }}
    />
  );
};

export default function HomeTheBottle() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

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

      // Add gradient and blur effects
      bubble.style.background = `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(49, 123, 227, 0.5))`;
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

  // Reduced number of bubbles for testing
  const bubbles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section className={styles.bottleSection} ref={sectionRef}>
      <div ref={containerRef} className={styles.bubbleContainer}>
        {bubbles.map((index) => (
          <Bubble key={index} index={index} scrollYProgress={scrollYProgress} />
        ))}
      </div>
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
