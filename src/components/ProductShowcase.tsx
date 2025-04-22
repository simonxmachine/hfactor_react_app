"use client";

import styles from "./ProductShowcase.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsToShow >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - productsToShow : prevIndex - 1
    );
  };

  const visibleProducts = [...products, ...products].slice(
    currentIndex,
    currentIndex + productsToShow
  );

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
            ←
          </button>
          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next"
          >
            →
          </button>
        </div>
        <div
          className={styles.products}
          style={{
            transform: `translateX(-${currentIndex * (100 / productsToShow)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {visibleProducts.map((product, index) => (
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
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
