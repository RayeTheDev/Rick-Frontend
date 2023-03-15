import styles from "./styles/Header.module.css";
import logo from "./assets/UnreadLogo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { menu, setMenu, headerTheme, bg, none, setNone } =
    useContext(DataContext);
  const navigate = useNavigate();

  const openMenu = () => {
    if (menu) {
      setNone(true);
      setMenu(false);
      console.log(false);
    } else {
      setNone(false);
      setMenu(true);
      console.log(true);
    }
  };

  // console.log(none);
  return (
    <div
      className={
        bg
          ? `${styles.header_container} ${styles.header_theme}`
          : styles.header_container
      }>
      <div className={styles.header}>
        {!menu ? (
          <IoMdClose
            className={styles.menuIcon}
            onClick={openMenu}
            style={{ color: "gray", zIndex: "3" }}
          />
        ) : (
          <HiMenuAlt1
            className={
              headerTheme == "black"
                ? `${styles.menuIcon} ${styles.menuIcon_theme}`
                : styles.menuIcon
            }
            onClick={openMenu}
          />
        )}
        <div className={!menu ? styles.center_none : `${styles.center}`}>
          <div className={styles.logoSearch}>
            <img
              className={styles.logo}
              src={
                headerTheme == "black"
                  ? "https://unread.today/files/site_meta/7a79e9c5823fc14cfd05cde079d0fb49.png"
                  : logo
              }
              onClick={() => navigate("/")}></img>
            <div className={styles.dash}></div>
            <div className={styles.search}>
              <HiSearch className={styles.searchIcon} />
              <input className={styles.input} placeholder="Хайлт хийх" />
            </div>
          </div>
          <div className={styles.nextTomorrow}>
            <div className={styles.next}>Дараагийн нийтлэл:</div>
            <div
              className={
                headerTheme == "black"
                  ? `${styles.tech} ${styles.tech_theme}`
                  : styles.tech
              }>
              ОНЦЛОХ
            </div>
            <button className={styles.tomorrow}>
              Маргааш орно
              <div className={styles.blue}></div>
            </button>
          </div>
        </div>
        <div className={styles.social_links}>
          <AiFillFacebook className={styles.link} />
          <AiOutlineInstagram className={styles.link} />
          <AiOutlineTwitter className={styles.link} />
          <FaLinkedinIn className={styles.link} />
        </div>
      </div>
    </div>
  );
};
