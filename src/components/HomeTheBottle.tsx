import styles from "./HomeTheBottle.module.css";
import GradientTitle from "./GradientTitle";

export default function HomeTheBottle() {
  return (
    <section className={styles.bottleSection}>
      <div className={styles.content}>
        <GradientTitle className={styles.title}>meet the pouch</GradientTitle>
        <p className={styles.subtitle}>
          The H-Factor pouch is recycle, eco-friendly, and packed with
          hydrodren. With it's durable construction and sleek design, it's the
          perfect companion for your daily hydration needs.
        </p>
        <div className={styles.imageContainer}>
          <img
            src="/colored_pouch_image/blue_image.webp"
            alt="PATH Bottle"
            className={styles.bottleImage}
          />
        </div>
      </div>
    </section>
  );
}
