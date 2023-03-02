import styles from "../styles/Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillCloudFog2Fill } from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.footer_center}>
          <div className={styles.first}>
            <p>unread</p>

            <div className={styles.footer_card}>
              <p>lets work together</p>
              <p>make content</p>
            </div>
            <div className={styles.footer_card}>
              <p>lets work together</p>
              <p>make content</p>
            </div>
          </div>
          <div className={styles.second}>
            <div className={styles.row}>
              <p>reacchiin bodlogo</p>
              <p>blog</p>
              <p>ajliin bair</p>
              <p>holbogdoh</p>
            </div>
            <div className={styles.pe}>
              <div>
                <h3>bulanguud</h3>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
              </div>
              <div className={styles.bulan_sec}>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
              </div>
              <div>
                <h3>company</h3>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
                <p>jhgkh</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.icon}>
          <AiFillFacebook />
          <AiOutlineTwitter />
          <BsInstagram />
          <AiFillYoutube />
          <BsFillCloudFog2Fill />
        </div>
      </div>
    </>
  );
};
