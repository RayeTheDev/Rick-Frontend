import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Review} from "../component"
export const Home = () => {
  const [index, setIndex] = useState(0);

  const goRight = () => setIndex((prev) => prev + 1);
  const goLeft = () => setIndex((prev) => prev - 1);

  if (index < 0) {
    setIndex(index + 1);
  }
  if (index > 11) {
    setIndex(index - 1);
  }

  return (
    <>
      {/* home page1 */}
      <div className={styles.back}>
        <div className={styles.home_center}>
          <div className={styles.container}>
            {/* <img
              src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Illustration/operating-costs-header-image-us-en.jpg"
              className={styles.center_img}
            ></img> */}
            <img
              style={{background:"url('https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Illustration/operating-costs-header-image-us-en.jpg')",backgroundPositionX:"70%",backgroundPositionY:"40%"}}
              className={styles.center_img}
            ></img>
            <div>
              <div className={styles.absoul}>
                <h1 className={styles.med}>meduushtei</h1>
                <h1>
                  meduushtei zuil bol html ni reactaas medeej havi iluu amar
                </h1>
              </div>
              <div className={styles.user_news}>
                <img
                  src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/Blog/Illustration/operating-costs-header-image-us-en.jpg"
                  className={styles.user_img}
                ></img>
                <div className={styles.user_name}>
                  <p style={{ color: "grey" }}>Batjargal</p>
                  <p style={{ color: "white" }}>date of day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* home page2 */}
      <div className={styles.switch_btn}>
        <div
          className={styles.news_card}
          style={{
            transform: `translateX(${-17 * index}%)`,
            transition: "300ms",
          }}
        >
          {new Array(10).fill(0).map((_, index) => (
            <Review index={index} />
          ))}
        </div>
        <button onClick={goRight}>left</button>
        <button onClick={goLeft}>right</button>
      </div>
    </>
  );
};
