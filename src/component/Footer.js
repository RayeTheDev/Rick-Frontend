import styles from "../styles/Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsFillCloudFog2Fill } from "react-icons/bs";
export const Footer = () => {
  return (
    <>
      <>
        {/* <div className={styles.back}>
        <div className={styles.footer_center}>
          <div className={styles.first}>
            <p>unread</p>
 <div className={styles.logo}>
            <img src="https://cdn.discordapp.com/attachments/946351659674640447/1082593910548856852/UnreadLogo.png" ></img>
            </div>

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
              <p>Редакцийн бодлого</p>
              <p>Влок</p>
              <p>Ажлийн байр</p>
              <p>Холбогдох</p>
            </div>
            <div className={styles.pe}>
              <div style={{color:"#878787",}} className={styles.deh}>
                <h3>Булангууд</h3>
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
              <div className={styles.bulan_sec}>
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
              <div className={styles.have}>
                <h3>company</h3>
                <p className={styles.address}>
                  Улаанбаатар 14240 СБД, 8-р хороо, Амарын гудамж, Тэнгэрлиг
                  медиа групп
                </p>
                <p>+976 72007400</p>
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
      </div> */}
      </>
      <>
        <div className={styles.back}>
          <div className={styles.width}>
          <div className={styles.pos}>
            <div>
              <img
                src="https://cdn.discordapp.com/attachments/946351659674640447/1082593910548856852/UnreadLogo.png"
                className={styles.image}
              ></img>
              <div className={styles.card}>
                <p style={{ color: "gray", fontSize: "13px" }}>
                  {" "}
                  Хамтран ажиллах хүсэлт илгээх
                </p>
                <p>Контент нийтлүүлэх</p>
              </div>
              <div className={styles.card}>
                <p style={{ color: "gray", fontSize: "13px" }}>
                  {" "}
                  Хамтран ажиллах хүсэлт илгээх
                </p>
                <p>Контент нийтлүүлэх</p>
              </div>
            </div>
            <div>
              <div className={styles.mini}>
                <p>Редакцийн бодлого</p>
                <p>Влок</p>
                <p>Ажлийн байр</p>
                <p>Холбогдох</p>
              </div>
              <div className={styles.threepart}>
                <div className={styles.part1}>
                  <h3>Булангууд</h3>
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
                <div className={styles.part3}>
                  <h3>company</h3>
                  <p className={styles.address}>
                    Улаанбаатар 14240 СБД, 8-р хороо, Амарын гудамж, Тэнгэрлиг
                    медиа групп
                  </p>
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
    </>
  );
};
