import styles from "./styles/Header.module.css";
import logo from "./assets/UnreadLogo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";

export const Header = () => {

  return (
    <div className={styles.container}>
      <HiMenuAlt1 className={styles.menuIcon} />
      <div className={styles.header}>
        <div className={styles.logoSearch}>
          <img className={styles.logo} src={logo}></img>
          <div className={styles.dash}></div>
          <div className={styles.search}>
            <HiSearch className={styles.searchIcon} />
            <input className={styles.input} placeholder="Хайлт хийх" />
          </div>
        </div>
        <div className={styles.nextTomorrow}>
          <div className={styles.next}>Дараагийн нийтлэл:</div>
          <div className={styles.tech}>БИ ХЭРХЭН АЖИЛЛАДАГ ВЭ? </div>
          <button className={styles.tomorrow}>
            Маргааш орно
            <div className={styles.blue}></div>
          </button>
        </div>
      </div>
    </div>
  );
};
