import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";
import { BsDot } from "react-icons/bs";
import styles from "./styles/Menu.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export const Menu = () => {
  const { menu, user, signOut } = useContext(DataContext);
  const Navigate = useNavigate();
  console.log(user);
  return (
    <div
      className={
        !menu
          ? `${styles.menu_container_open}`
          : `${styles.menu_container_close}`
      }>
      <div className={styles.menu}>
        <div className={styles.first_second}>
          <div className={styles.first}>
            <h1 className={styles.h1}>БУЛАНГУУД</h1>
            <div className={styles.page_info}>
              <h2 className={styles.h2}>
                Онцлох бизнес<span className={styles.small}>Даваа</span>
              </h2>
              <h2 className={styles.h2}>
                Techworm<span className={styles.small}>Мягмар</span>
              </h2>
              <h2 className={styles.h2}>
                Би хэрхэн ажилладаг вэ?
                <span className={styles.small}>Лхагва</span>
              </h2>
              <h2 className={styles.h2}>
                Мэдүүштэй<span className={styles.small}>Пүрэв</span>
              </h2>
              <h2 className={styles.h2}>
                Чөлөөт<span className={styles.small}>Баасан</span>
              </h2>
              <h2 className={styles.h2}>
                Номын тухай<span className={styles.small}>Бямба</span>
              </h2>
              <h2 className={styles.h2}>
                7 хоногийн тойм<span className={styles.small}>Ням</span>
              </h2>
            </div>
          </div>
          <div className={styles.second}>
            <h1 className={styles.h1}>ШИНЭ</h1>
            <div className={styles.page_info}>
              <h2 className={styles.h2}>Өртөөлөгчид</h2>
              <h2 className={styles.h2}>Аравт</h2>
              <h2 className={styles.h2}>Тогтвортой хөгжил</h2>
              <h2 className={styles.h2}>Тайлбарлах нь</h2>
              <h2 className={styles.h2}>А-Я</h2>
              <h2 className={styles.h2}>10 ертөнц, 10 өнцөг</h2>
              <h2 className={styles.h2}>Би хүүхдээ ингэж өсгөдөг</h2>
              <h2 className={styles.h2}>Танилц, миний амьтан</h2>
              <h2 className={styles.h2}>Таатай оффис</h2>
              <h2 className={styles.h2}>Зочин нийтлэлчийн булан</h2>
              <h2 className={styles.h2}>8 минутын улс төр</h2>
              <h2 className={styles.h2}>Study Hacks</h2>
            </div>
          </div>
        </div>
        <div className={styles.main_footer}>
          <div
            className={styles.first}
            onClick={() => {
              Navigate("/login");
            }}>
            <p className={styles.p1}>Хамтран ажиллах хүсэлт илгээх</p>
            <h3 className={styles.h3}>КОНТЕНТ НИЙТЛҮҮЛЭХ</h3>
            {user && (
              <div className={styles.profileCont}>
                <span>{user.username.first + " " + user.username.last}</span>
                <Button onClick={signOut}>Logout</Button>
              </div>
            )}
          </div>
          <div className={styles.second}>
            <p className={styles.p1}>Хамтран ажиллах хүсэлт илгээх</p>
            <h3 className={styles.h3}>ЭВЕНТ ДЭЭР ХАМТРАХ</h3>
          </div>
        </div>
        <div className={styles.main_footer2}>
          <div className={styles.p2}>
            Редакцын бодлого
            <BsDot className={styles.dot_icon} />
            Блог
            <BsDot className={styles.dot_icon} />
            Ажлын байр
            <BsDot className={styles.dot_icon} />
            Холбогдох
          </div>
          <p className={styles.p3}>
            © 2015-2023 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
            Контентуудыг зөвшөөрөлгүйгээр болон дурдалгүйгээр нийтлэх, хэвлэх,
            эш татахыг хориглоно.
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};
