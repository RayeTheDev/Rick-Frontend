import styles from "./styles/Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillCloudFog2Fill } from "react-icons/bs";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";


export const Footer = () => {
  const { none } = useContext(DataContext)
  return (!none &&
    <>
      <div className={styles.back}>
        <div className={styles.width}>
          <div className={styles.pos}>
            <div className={styles.deesh}>
              <div className={styles.zuu}>
                <img
                  src="https://cdn.discordapp.com/attachments/946351659674640447/1082593910548856852/UnreadLogo.png"
                  className={styles.image}
                ></img>
                <div className={styles.card}>
                  <p className={styles.boxText}>
                    {" "}
                    Хамтран ажиллах хүсэлт илгээх
                  </p>
                  <p className={styles.rep}>Контент нийтлүүлэх</p>
                </div>
                <div className={styles.card}>
                  <p className={styles.boxText}>
                    {" "}
                    Хамтран ажиллах хүсэлт илгээх
                  </p>
                  <p className={styles.rep}>Контент нийтлүүлэх</p>
                </div>
              </div>
            </div>
            <div className={styles.lai3}>
              <div className={styles.mini}>
                <p className={styles.topTexts}>Редакцийн бодлого</p>
                <p>•</p>
                <p className={styles.topTexts}>Влок</p>
                <p>•</p>
                <p className={styles.topTexts}>Ажлийн байр</p>
                <p>•</p>
                <p className={styles.topTexts}>Холбогдох</p>
              </div>
              <div className={styles.copyCont}>
                <span className={styles.copyrightText}>© 2015-2023 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан. Контентуудыг зөвшөөрөлгүйгээр болон дурдалгүйгээр нийтлэх, хэвлэх, эш татахыг хориглоно.</span>
              </div>
              <div className={styles.threepart}>
                <div className={styles.arhi}>
                  <div className={styles.part1}>
                    <h3>Булангууд</h3>
                    <p className={styles.sub_texts}>Онцлох бизнес</p>
                    <p className={styles.sub_texts}>Techworm</p>
                    <p className={styles.sub_texts}>Би хэрхэн ажилладаг вэ?</p>
                    <p className={styles.sub_texts}>Мэдүүштэй</p>
                    <p className={styles.sub_texts}>Чөлөөт</p>
                    <p className={styles.sub_texts}>Номын тухай</p>
                    <p className={styles.sub_texts}>7 хоногийн тойм</p>
                    <p className={styles.sub_texts}>Өртөөлөгчид</p>
                    <p className={styles.sub_texts}>Аравт</p>
                    <p className={styles.sub_texts}>Тогтвортой хөгжил</p>
                  </div>
                  <div className={styles.part2}>
                    <p className={styles.sub_texts}>Тайлбарлах нь</p>
                    <p className={styles.sub_texts}>А-Я</p>
                    <p className={styles.sub_texts}>10 ертөнц, 10 өнцөг</p>
                    <p className={styles.sub_texts}>Би хүүхдээ ингэж өсгөдөг</p>
                    <p className={styles.sub_texts}>Танилц, миний амьтан</p>
                    <p className={styles.sub_texts}>Таатай оффис</p>
                    <p className={styles.sub_texts}>Зочин нийтлэлчийн булан</p>
                    <p className={styles.sub_texts}>8 минутын улс төр</p>
                    <p className={styles.sub_texts}>Study Hacks</p>
                  </div>
                </div>
                <div className={styles.part3}>
                  <h3>Компани</h3>
                  <p className={styles.address}>
                    Улаанбаатар 14240 СБД, 8-р хороо, Амарын гудамж, Тэнгэрлиг
                    медиа групп
                  </p>
                  <p style={{ marginTop: "10px" }}>+976 72007400</p>
                  <p style={{ marginTop: "10px" }}>Зочлох:</p>
                  <p style={{ color: "white" }}>www.unread.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lll}>
          <div className={styles.icon}>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <BsInstagram />
            <AiFillYoutube />
            <BsFillCloudFog2Fill />
          </div>
        </div>
      </div>
    </>
  );
};
