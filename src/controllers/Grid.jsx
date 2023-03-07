import styles from "./styles/Grid.module.css";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";

export const Grid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pin_container}>
        <div className={styles.card_extra_large}></div>
        <div className={styles.card_medium1}></div>
        <div className={styles.card_medium2}></div>
        <div className={styles.card_large1}></div>
        <div className={styles.card_large2}></div>
        <div className={styles.card_small}>
          <div className={styles.small_small1}></div>
          <div className={styles.small_small2}></div>
        </div>
      </div>
      <div className={styles.pin_container2}>
        <div className={styles.card1}>
          <div className={styles.card1_1}>
            <img className={styles.card_image1_1} src={image1}></img>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.card2_1}>
            <div className={styles.card2_1_con}>
              <img className={styles.card_image2_1} src={image2}></img>
            </div>
          </div>
          <div className={styles.card2_2}>
            {/* <img className={styles.card_image2_2} src={image3}></img> */}
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.card3_1}></div>
          <div className={styles.card3_2}></div>
        </div>
        <div className={styles.card4}>
          <div className={styles.card4_1}></div>
          <div className={styles.card4_2}></div>
        </div>
      </div>
    </div>
  );
};
