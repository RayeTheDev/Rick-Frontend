import styles from "./styles/Grid.module.css";

export const Grid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pin_container}>
        <div className={styles.card_extra_large}></div>
        <div className={styles.card_medium}></div>
        <div className={styles.card_medium}></div>
        <div className={styles.card_large}></div>
        <div className={styles.card_large}></div>
        <div className={styles.card_small}>
          <div className={styles.small_small}></div>
          <div className={styles.small_small}></div>
        </div>
      </div>
    </div>
  );
};
