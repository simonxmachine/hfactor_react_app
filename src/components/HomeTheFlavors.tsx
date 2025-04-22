import styles from "./HomeTheFlavors.module.css";
import Image from "next/image";

const flavors = [
  {
    id: 1,
    name: "Black Edition",
    image: "/flavor_pouch/orange.webp",
    bgColor: "white", // Light purple
  },
  {
    id: 2,
    name: "Black Edition",
    image: "/flavor_pouch/orange.webp",
    bgColor: "white", // Light purple
  },
  {
    id: 3,
    name: "Blue Edition",
    image: "/flavor_pouch/watermelon.webp",
    bgColor: "white", // Sky blue
  },
  {
    id: 4,
    name: "Blue Edition",
    image: "/flavor_pouch/watermelon.webp",
    bgColor: "white", // Sky blue
  },
  {
    id: 5,
    name: "Green Edition",
    image: "/flavor_pouch/cherry.webp",
    bgColor: "white", // Light green
  },
  {
    id: 6,
    name: "Green Edition",
    image: "/flavor_pouch/cherry.webp",
    bgColor: "white", // Light green
  },
];

export default function HomeTheFlavors() {
  return (
    <>
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>try our flavors</h1>
      </div>
      <section className={styles.flavorsSection}>
        <div className={styles.content}>
          <div className={styles.flavorsGrid}>
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                className={styles.flavorItem}
                style={{ backgroundColor: flavor.bgColor }}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    width={300}
                    height={500}
                    className={styles.flavorImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
