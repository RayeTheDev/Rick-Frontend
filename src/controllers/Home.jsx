import styles from "./styles/Home.module.css";
import background from "./assets/background.png";
import heviinBoov from "./assets/heviinboov.jpeg";
import { Carousell } from "./Carousel";
import { Grid } from "./Grid";
import { Article } from "./Article";
import { BlockHeader } from "./BlockHeader";

export const Home = () => {
  return (
    <div className={styles.controller}>
      <BlockHeader />
      <div className={styles.light}>
        <img className={styles.background} src={background}></img>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content2Container}>
          <div className={styles.containerBoov}>
            <img src={heviinBoov} className={styles.heviinBoov}></img>
          </div>
          <div className={styles.texts}>
            <div className={styles.today}>ӨНӨӨДӨР</div>
            <div className={styles.med}>МЭДҮҮШГҮЙ</div>
            <div className={styles.name}>
              "ӨГӨӨЖ БООВ" ТА ХЭВИЙН БООВОО ЭНДЭЭС АВНА УУ!
            </div>
          </div>
        </div>
      </div>
      <Carousell />
      <Article />
      <Grid />
    </div>
  );
};
