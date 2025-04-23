"use client";

import styles from "./ProductShowcase.module.css";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import GradientTitle from "./GradientTitle";

const products = [
  {
    id: 1,
    name: "sparkling",
    image: "/colored_pouch_image/black_image.webp",
  },
  {
    id: 2,
    name: "autism acceptance 2025",
    image: "/colored_pouch_image/blue_image.webp",
  },
  {
    id: 3,
    name: "sparkling flavored water",
    image: "/colored_pouch_image/green_image.webp",
  },
  {
    id: 4,
    name: "still",
    image: "/colored_pouch_image/orange_image.webp",
  },
  {
    id: 5,
    name: "still",
    image: "/colored_pouch_image/pink_image.webp",
  },
  {
    id: 6,
    name: "alkaline",
    image: "/colored_pouch_image/holo_image.webp",
  },
];

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create an array with cloned products for smooth infinite scroll
  const extendedProducts = [...products, ...products, ...products];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsToShow(3);
      } else {
        setProductsToShow(5);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle the smooth transition when reaching ends
  useEffect(() => {
    if (currentIndex >= products.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(0);
      }, 500); // Match this with your transition duration
      return () => clearTimeout(timer);
    }
    if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(products.length - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Reset transition state after animation
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(false);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(false);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // // Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, [nextSlide]);

  // Calculate transform with smooth transition handling
  const getTransform = () => {
    const baseTransform = -(currentIndex * (100 / productsToShow));
    return `translateX(${baseTransform}%)`;
  };

  return (
    <section className={styles.showcase}>
      <GradientTitle className={styles.title}>shop our products</GradientTitle>
      <div className={styles.productsContainer}>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <div
          className={styles.products}
          style={{
            transform: getTransform(),
            transition: isTransitioning ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className={styles.product}
              style={{ flex: `0 0 ${100 / productsToShow}%` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={500}
                  className={styles.productImage}
                  priority={index < productsToShow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
