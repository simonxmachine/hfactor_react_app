"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./DisplayProducts.module.css";

const getFlavorFromPath = (imagePath: string) => {
  // For colored pouch images (e.g., "/colored_pouch_image/black_image.webp")
  if (imagePath.includes("colored_pouch_image")) {
    const fileName = imagePath.split("/").pop() || "";
    const flavor = fileName.split("_")[0];
    return flavor.charAt(0).toUpperCase() + flavor.slice(1);
  }
  // For flavor pouch images (e.g., "/flavor_pouch/watermelon.webp")
  else {
    const fileName = imagePath.split("/").pop() || "";
    const flavor = fileName.split(".")[0];
    return flavor.charAt(0).toUpperCase() + flavor.slice(1);
  }
};

const colorProducts = [
  {
    id: "black",
    name: "Sparkling",
    image: "/colored_pouch_image/black_image.webp",
    ph: "8.5",
  },
  {
    id: "blue",
    name: "Classic",
    image: "/colored_pouch_image/blue_image.webp",
    ph: "12",
  },
  {
    id: "green",
    name: "Sparkling Flavored",
    image: "/colored_pouch_image/green_image.webp",
    ph: "16",
  },
  {
    id: "orange",
    name: "Limited Edition",
    image: "/colored_pouch_image/orange_image.webp",
    ph: "22",
  },
  {
    id: "pink",
    name: "Rose",
    image: "/colored_pouch_image/pink_image.webp",
    ph: "8.5",
  },
  {
    id: "holo",
    name: "Alkaline",
    image: "/colored_pouch_image/holo_image.webp",
    ph: "12",
  },
];

const flavorProducts = [
  {
    id: "watermelon",
    name: "Watermelon",
    image: "/flavor_pouch/watermelon.webp",
    ph: "8.5",
  },
  {
    id: "cherry",
    name: "Cherry",
    image: "/flavor_pouch/cherry.webp",
    ph: "12",
  },
  {
    id: "orange",
    name: "Orange",
    image: "/flavor_pouch/orange.webp",
    ph: "16",
  },
];

const sizeOptions = [
  { value: "8.5", label: "8.5", unit: "Ounce" },
  { value: "12", label: "12", unit: "Ounce" },
  { value: "16", label: "16", unit: "Ounce" },
];

export default function DisplayProducts() {
  const [activeTab, setActiveTab] = useState("COLORS"); // COLORS, FLAVORS
  const [selectedColorProduct, setSelectedColorProduct] = useState(
    colorProducts[0]
  );
  const [selectedFlavorProduct, setSelectedFlavorProduct] = useState(
    flavorProducts[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  const currentProducts =
    activeTab === "COLORS" ? colorProducts : flavorProducts;
  const selectedProduct =
    activeTab === "COLORS" ? selectedColorProduct : selectedFlavorProduct;
  const setSelectedProduct =
    activeTab === "COLORS" ? setSelectedColorProduct : setSelectedFlavorProduct;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsToShow(3);
      } else {
        setProductsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex >= currentProducts.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < 0) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(currentProducts.length - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentProducts.length]);

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

  const getTransform = () => {
    const baseTransform = -(currentIndex * (100 / productsToShow));
    return `translateX(${baseTransform}%)`;
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>shop now</h1> */}
      <div className={styles.productViewer}>
        <div className={styles.mainProduct}>
          <div className={styles.productInfo}>
            <div className={styles.size}>{selectedSize.value} OZ</div>
            <div className={styles.flavor}>
              {getFlavorFromPath(selectedProduct.image)}
            </div>
          </div>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={300}
            height={600}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.controls}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "COLORS" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("COLORS");
                setCurrentIndex(0);
              }}
            >
              COLORS
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "FLAVORS" ? styles.active : ""
              }`}
              onClick={() => {
                setActiveTab("FLAVORS");
                setCurrentIndex(0);
              }}
            >
              FLAVORS
            </button>
          </div>

          <div className={styles.sliderContainer}>
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
            <div className={styles.slider}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: getTransform(),
                  transition: isTransitioning
                    ? "none"
                    : "transform 0.5s ease-in-out",
                }}
              >
                {currentProducts.map((product) => (
                  <button
                    key={product.id}
                    className={`${styles.productOption} ${
                      selectedProduct.id === product.id ? styles.selected : ""
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={50}
                      height={100}
                      className={styles.thumbnailImage}
                      priority
                    />
                  </button>
                ))}
              </div>
            </div>
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

          <div className={styles.sizeSelector}>
            {sizeOptions.map((size) => (
              <button
                key={size.value}
                className={`${styles.sizeOption} ${
                  selectedSize.value === size.value ? styles.selected : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                <span className={styles.sizeNumber}>{size.label}</span>
                <span className={styles.sizeUnit}>{size.unit}</span>
              </button>
            ))}
          </div>

          <button className={styles.buyButton}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}
