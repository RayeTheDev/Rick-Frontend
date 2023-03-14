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
    <div className={menu ? styles.container : `${styles.container_none}`}>
      <div className={styles.pin_container}>
        <div className={styles.card_extra_large}>
          <img className={styles.card_image} src={image1}></img>
          <div className={styles.blur}>
            <div className={styles.small_title}>7 Хоногийн Тойм</div>
            <div className={styles.title}>
              Гэнэтийн уналт + Тесла хот + Бинг тэсрэлт
            </div>
          </div>
        </div>
        <div className={styles.card_medium1}>
          <img className={styles.card_image} src={image4}></img>
          <div className={styles.blur1}>
            <div className={styles.small_title}>Чөлөөт</div>
            <div className={styles.title}>
              2023 оны Оскарын эзэн хэн байх вэ?: Кино
            </div>
          </div>
        </div>
        <div className={styles.card_medium2}>
          <img className={styles.card_image} src={image5}></img>
          <div className={styles.blur2}>
            <div className={styles.small_title}>Чөлөөт</div>
            <div className={styles.title}>
              NETFLIX-ийн хамгийн алдартай Хятад кинонууд
            </div>
          </div>
        </div>
        <div className={styles.card_large1}>
          <img className={styles.card_image} src={image6}></img>
          <div className={styles.blur3}>
            <div className={styles.small_title}>Мэдүүштэй</div>
            <div className={styles.title}>
              Байгальд ээлтэй, хүн төвтэй “ногоон зах”-ыг
            </div>
          </div>
        </div>
        <div className={styles.card_large2}>
          <img className={styles.card_image} src={image7}></img>
          <div className={styles.blur3}>
            <div className={styles.small_title}>Чөлөөт</div>
            <div className={styles.title}>
              Эмэгтэйчүүдийн эрхийг хамгаалах өдрийг улс
            </div>
          </div>
        </div>
        <div className={styles.card_small}>
          <div className={styles.small_small1}>
            <img className={styles.card_image} src={image2}></img>
            <div className={styles.blur4}>
              <div className={styles.small_title}>Номын тухай</div>
              <div className={styles.title}>
                Номтой яриа #32: Зөгийчин, орчуулагч
              </div>
            </div>
          </div>
          <div className={styles.small_small2}>
            <img className={styles.card_image} src={image3}></img>
            <div className={styles.blur4}>
              <div className={styles.small_title}>Аравт</div>
              <div className={styles.title}>
                Alpine цанын тамирчин, “X Team”-ийн гишүүн С.Тэ...
              </div>
            </div>
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
