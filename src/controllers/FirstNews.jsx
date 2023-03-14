import styles from "./styles/FirstNews.module.css";
import backgroundImage from "../controllers/assets/image8.jpg"
import image9 from "../controllers/assets/image9.jpg"
import creator from "../controllers/assets/banana.jpeg"
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";

export const FirstNews = () => {
    const { menu } = useContext(DataContext);
  return (
    <div className={ menu ? styles.controller : `${styles.controller_none}`}>
        <div className={styles.dark_con}>
            <img className={styles.background_image} src={backgroundImage}></img>
            <div className={styles.gradient}></div>
        </div>
        <div className={styles.content_container}>
            <div className={styles.news_image_con}>
                <img className={styles.news_image} src={image9}></img>
            </div>
            <div className={styles.no_name_con}>
                <div className={styles.news_image_con2}>
                    <img className={styles.news_image2} src={image9}></img>
                </div>
            </div>
            <div className={styles.news_container}>
                <div className={styles.content}>
                    <div className={styles.today}>ӨНӨӨДӨР</div>
                    <div className={styles.news_title}>7 ХОНОГИЙН ТОЙМ</div>
                    <div className={styles.news_name}>ГЭНЭТИЙН УНАЛТ + ТЕСЛА ХОТ + БИНГ ТЭCРЭЛТ</div>
                    <div className={styles.creator}>
                        <div className={styles.avatar_con}>
                            <img className={styles.avatar} src={creator}></img>
                        </div>
                        <div className={styles.creater_info}>
                            <div className={styles.creator_name}>Noyn Banana</div>
                            <div className={styles.creator_post_date}>3 сарын 12, 2023 9 мин</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};