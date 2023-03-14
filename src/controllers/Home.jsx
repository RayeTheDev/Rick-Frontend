import styles from "./styles/Home.module.css";
import background from "./assets/background.png";
import heviinBoov from "./assets/heviinboov.jpeg";
import { Carousell } from "./Carousel";
import { Grid } from "./Grid";
import { Article } from "./Article";
import { FirstNews } from "./FirstNews";
import { Menu } from "./Menu";

export const Home = () => {
  return (
    <div className={styles.controller}>
      <Menu className={styles.menu}/>
      <FirstNews className={styles.firstnews}/>
      <Article className={styles.article}/>
      <Grid className={styles.grid}/>
    </div>
  );
};
