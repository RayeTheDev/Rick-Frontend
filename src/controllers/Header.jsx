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

export const Header = () => {
  const { menu, setMenu } = useContext(DataContext);

  const openMenu = () => {
    // setMenu(true);
    // if (menu === true) {
    //   setMenu(false);
    // }
    // console.log(menu);
    if (menu == true) {
      setMenu(false);
      console.log(false);
    } else {
      setMenu(true);
      console.log(true);
    }
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        {!menu ? (
          <IoMdClose
            className={styles.menuIcon}
            onClick={openMenu}
            style={{ color: "gray",zIndex:"3" }}

          />
        ) : (
          <HiMenuAlt1 className={styles.menuIcon} onClick={openMenu} />
        )}
        <div className={!menu ? styles.center_none : `${styles.center}`}>
          <div className={styles.logoSearch}>
            <img className={styles.logo} src={logo}></img>
            <div className={styles.dash}>|</div>
            <div className={styles.search}>
              <HiSearch className={styles.searchIcon} />
              <input className={styles.input} placeholder="Хайлт хийх" />
            </div>
          </div>
          <div className={styles.nextTomorrow}>
            <div className={styles.next}>Дараагийн нийтлэл:</div>
            <div className={styles.tech}>ОНЦЛОХ</div>
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
