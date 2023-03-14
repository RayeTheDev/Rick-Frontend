import styles from "./styles/Grid.module.css";
import image1 from "./assets/image1.jpeg";
import image2 from "./assets/image2.jpeg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpeg";
import image5 from "./assets/image5.jpeg";
import image6 from "./assets/image6.jpeg";
import image7 from "./assets/image7.jpeg";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";

export const Grid = () => {
  const { menu } = useContext(DataContext);
  return (
    <div className={ menu ? styles.container : `${styles.container_none}`}>
      <div className={styles.pin_container}>
        <div className={styles.card_extra_large}>
          <img className={styles.card_image} src={image1}></img>
        </div>
        <div className={styles.card_medium1}>
          <img className={styles.card_image} src={image4}></img>
        </div>
        <div className={styles.card_medium2}>
          <img className={styles.card_image} src={image5}></img>
        </div>
        <div className={styles.card_large1}>
          <img className={styles.card_image} src={image6}></img>
        </div>
        <div className={styles.card_large2}>
          <img className={styles.card_image} src={image7}></img>
        </div>
        <div className={styles.card_small}>
          <div className={styles.small_small1}>
            <img className={styles.card_image} src={image2}></img>
          </div>
          <div className={styles.small_small2}>
            <img className={styles.card_image} src={image3}></img>
          </div>
        </div>
      </div>
      <div className={styles.pin_container2}>
        <div className={styles.card1}>
          <div>
            <div className={styles.card1_1}>
              <img className={styles.card_image1_1} src={image1}></img>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div>
            <div className={styles.card2_1}>
              <img className={styles.card_image2_1} src={image2}></img>
            </div>
          </div>
          <div>
            <div className={styles.card2_2}>
              <img className={styles.card_image2_2} src={image3}></img>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <div>
            <div className={styles.card3_1}>
              <img className={styles.card_image3_1} src={image4}></img>
            </div>
          </div>
          <div>
            <div className={styles.card3_2}>
              <img className={styles.card_image3_2} src={image5}></img>
            </div>
          </div>
        </div>
        <div className={styles.card4}>
          <div>
            <div className={styles.card4_1}>
              <img className={styles.card_image4_1} src={image6}></img>
            </div>
          </div>
          <div>
            <div className={styles.card4_2}>
              <img className={styles.card_image4_1} src={image7}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
