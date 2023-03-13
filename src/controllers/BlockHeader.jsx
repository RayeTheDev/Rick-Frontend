import styles from "./styles/BlockHeader.module.css";

export const BlockHeader = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.midContainer}>
        <div className={styles.firstRow}>
          <p className={styles.title}>БУЛАНГУУД</p>
          <div className={styles.textContainer}>
            <p className={styles.texts}>
              Онцлох бизнес <span> Даваа</span>
            </p>
            <p className={styles.texts}>
              Techworm <span> Мягмар</span>
            </p>
            <p className={styles.texts}>
              Би хэрхэн ажилладаг вэ? <span>Лхагва</span>
            </p>
            <p className={styles.texts}>
              Мэдүүштэй <span>Пүрэв</span>
            </p>
            <p className={styles.texts}>
              Чөлөөт <span> Баасан</span>
            </p>
            <p className={styles.texts}>
              Номын тухай <span> Бямба</span>
            </p>
            <p className={styles.texts}>
              7 хоногийн тойм <span>Ням</span>
            </p>
          </div>
        </div>
        <div className={styles.firstRow}>
          <p className={styles.title}>ШИНЭ</p>
          <div className={styles.textContainer}>
            <p className={styles.texts}>Өртөөлөгчид</p>
            <p className={styles.texts}>Аравт</p>
            <p className={styles.texts}>Тогтвортой хөгжил</p>
            <p className={styles.texts}>Тайлбарлах нь</p>
            <p className={styles.texts}>А-Я</p>
            <p className={styles.texts}>Би хүүхдээ ингэж өсгөдөг </p>
            <p className={styles.texts}>Танилц, миний амьтан </p>
            <p className={styles.texts}>Танилц, миний амьтан</p>
            <p className={styles.texts}>Зочин нийтлэлчийн булан </p>
            <p className={styles.texts}>8 минутын улс төр </p>
            <p className={styles.texts}>Study Hacks </p>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.fTitleContainer}>
          <div>
            <p className={styles.footerText}>Хамтран ажиллах хүсэлт илгээх</p>
            <p className={styles.footerTitle}>КОНТЕНТ НИЙТЛYYЛЭХ</p>
          </div>
          <div>
            <p className={styles.footerText}>Хамтран ажиллах хүсэлт илгээх</p>
            <p className={styles.footerTitle}>ЭВЭНТ ДЭЭР ХАМТРАХ</p>
          </div>
        </div>

        <div className={styles.footerRow}>
          <div style={{ display: "flex", gap: "13px" }}>
            <span className={styles.footerTitle2}>Редакцын бодлого</span>
            <span className={styles.footerTitle2}> Блог </span>
            <span className={styles.footerTitle2}>Ажлын байр</span>
            <span className={styles.footerTitle2}>Холбогдох</span>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerText2}>
              © 2015-2023 Анрид Медиа ХХК. Бүх эрх хуулиар хамгаалагдсан.
              Контентуудыг зөвшөөрөлгүйгээр болон дурдалгүйгээр нийтлэх, хэвлэх,
              эш татахыг хориглоно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
