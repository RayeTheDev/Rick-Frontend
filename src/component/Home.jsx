import styles from "./styles/Home.module.css";
import background from "./assets/background.png";
import heviinBoov from "./assets/heviinboov.jpeg";
import { Carousell } from "./Carousel";
import { Grid } from "./Grid";
import { Article } from "./Article";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const {data} = useContext(DataContext)
  const Navigate = useNavigate()
  console.log(data)

  return ( data &&
    <div className={styles.controller}>
      <div className={styles.light} >
        <img className={styles.background} src={data[0].photoUrl} onClick={() => Navigate('/news/' + data[0]._id)}></img>
        <div className={styles.gradient}></div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content2Container}>
          <div className={styles.containerBoov}>
            <img src={data[0].photoUrl} className={styles.heviinBoov}></img>
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
      <div className={styles.containerCarousel}>
        <Carousell />

      </div>
      {/* <Article /> */}
      {/* <Grid /> */}
    </div>
  );
};
