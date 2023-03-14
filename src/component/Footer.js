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
        <div className={styles.width}>
          <div className={styles.pos}>
            <div className={styles.deesh}>
              <div className={styles.zuu}>
                <img
                  src="https://cdn.discordapp.com/attachments/946351659674640447/1082593910548856852/UnreadLogo.png"
                  className={styles.image}
                ></img>
                <div className={styles.card}>
                  <p style={{ color: "gray", fontSize: "13px" }}>
                    {" "}
                    Хамтран ажиллах хүсэлт илгээх
                  </p>
                  <p className={styles.rep}>Контент нийтлүүлэх</p>
                </div>
                <div className={styles.card}>
                  <p style={{ color: "gray", fontSize: "13px" }}>
                    {" "}
                    Хамтран ажиллах хүсэлт илгээх
                  </p>
                  <p className={styles.rep}>Контент нийтлүүлэх</p>
                </div>
                <div className={styles.boslogo}>
                  <a
                    href="https://itunes.apple.com/mn/app/unread-today/id1100135982?mt=8"
                    target="_blank"
                  >
                    <img
                      src="https://unread.today/img/app_ios.png"
                      className={styles.google}
                    ></img>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=batu.digital.unreadmobile"
                    target="_blank"
                  >
                    <img
                      src="https://unread.today/img/app_android.png"
                      className={styles.google}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.lai3}>
              <div className={styles.mini}>
                <p>*Редакцийн бодлого</p>
                <p>*Влок</p>
                <p className={styles.ajil}>*Ажлийн байр</p>
                <p>*Холбогдох</p>
              </div>
              <div className={styles.threepart}>
                <div className={styles.arhi}>
                  <div className={styles.part1}>
                    <h3 className={styles.blu}>Булангууд</h3>
                    <p>Онцлох бизнес</p>
                    <p>Techworm</p>
                    <p>Би хэрхэн ажилладаг вэ?</p>
                    <p>Мэдүүштэй</p>
                    <p>Чөлөөт</p>
                    <p>Номын тухай</p>
                    <p>7 хоногийн тойм</p>
                    <p>Өртөөлөгчид</p>
                    <p>Аравт</p>
                    <p>Тогтвортой хөгжил</p>
                  </div>
                  <div className={styles.part2}>
                    <p>Тайлбарлах нь</p>
                    <p>А-Я</p>
                    <p>10 ертөнц, 10 өнцөг</p>
                    <p>Би хүүхдээ ингэж өсгөдөг</p>
                    <p>Танилц, миний амьтан</p>
                    <p>Таатай оффис</p>
                    <p>Зочин нийтлэлчийн булан</p>
                    <p>8 минутын улс төр</p>
                    <p>Study Hacks</p>
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
