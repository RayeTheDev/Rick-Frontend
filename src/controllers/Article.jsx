import styles from "./styles/Article.module.css";
import { BsDot } from "react-icons/bs";
import { useState, useEffect } from "react";

export const Article = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.limit}>
        <div className={styles.image_con}>
          <img
            src="https://unread.today/files/banner/0f8377054ecd67ea46e4e82ad91460c8.png"
            className={styles.picture}
          ></img>
        </div>
        <div className={styles.hover}>
          <div className={styles.article}>
            <div className={styles.creator_container}>
              <div className={styles.creator}>
                <div className={styles.creator_name}>
                  <p className={styles.name}>Unread Today</p>
                  <p className={styles.date}>
                    3 сарын 11, 2023 <BsDot className={styles.dot_icon} /> 2 мин
                  </p>
                </div>
                <img
                  src="https://unread.today/files/profile/00b063d23a6c69f2b1482fa084fddbf5.jpg"
                  className={styles.article_creator_avatar}
                ></img>
              </div>
            </div>
            <div className={styles.comment}>
              <div className={styles.title}>
                <p className={styles.title_type}>Аравт</p>
                <h2 className={styles.title_name}>
                  Alpine цанын тамирчинь, "Х Team"-ийн гишүүн С.Тэмүүгэн -
                  Цанаь, таяг, энгэрийн тэмдэг
                </h2>
              </div>
              <img
                src="https://unread.today/files/48/23dec46ee0677693ece5128de5ace619_square.jpg "
                className={styles.article_image}
              ></img>
            </div>
          </div>
        </div>
        {/* as;ldkfj;alskdjf;alskdfj;laskjdf;lkasjdf;lkj */}
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          className={styles.hover}
        >
          <div className={styles.article}>
            <div className={styles.creator_container2}>
              <div className={styles.creator2}>
                <img
                  src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                  className={styles.article_creator_avatar}
                ></img>
                <div className={styles.creator_name2}>
                  <p className={styles.name2}>Tsengeg Enkhbayar</p>
                  <p className={styles.date}>
                    3 сарын 11, 2023 <BsDot className={styles.dot_icon} /> 2 мин
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.comment2}>
              <div className={styles.title}>
                <p className={styles.title_type}>Мэдүүштэй</p>
                <h2 className={styles.title_name}>
                  Байгальд ээлтэй, хүн төвтэй “ногоон зах”-ыг танилцуулах нь:
                  "Go.to market"
                </h2>
              </div>
              <img
                src="https://unread.today/files/3d642b1c-cb78-4ea8-9fbe-ef518fc6d379/9c0f3f0331c8dc7e09459a4c2a2ae365_square.jpg"
                className={styles.article_image}
              ></img>
            </div>
          </div>
        </div>
        {/* as;ldkfj;alskdjf;alskdfj;laskjdf;lkasjdf;lkj */}
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={styles.hover}
        >
          <div className={styles.article}>
            <div className={styles.creator_container}>
              <div className={styles.creator}>
                <div className={styles.creator_name}>
                  <p className={styles.name}>Burtguljin Enkhbat</p>
                  <p className={styles.date}>
                    3 сарын 11, 2023 <BsDot className={styles.dot_icon} /> 2 мин
                  </p>
                </div>
                <img
                  src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                  className={styles.article_creator_avatar}
                ></img>
              </div>
            </div>
            <div className={styles.comment}>
              <div className={styles.title}>
                <p className={styles.title_type}>Чөлөөт</p>
                <h2 className={styles.title_name}>
                  Эмэгтэйчүүдийн эрхийг хамгаалах өдрийг улс орнууд хэрхэн
                  тэмдэглэдэг вэ?
                </h2>
              </div>
              <img
                src="https://imageio.forbes.com/blogs-images/ofx/files/2018/09/OFX3-iStock-492595743-1200x800.jpg?format=jpg&width=960 "
                className={styles.article_image}
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          className={styles.hover}
        >
          <div className={styles.article}>
            <div className={styles.creator_container2}>
              <div className={styles.creator2}>
                <img
                  src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                  className={styles.article_creator_avatar}
                ></img>
                <div className={styles.creator_name2}>
                  <p className={styles.name2}>Tsengeg Enkhbayar</p>
                  <p className={styles.date}>
                    3 сарын 11, 2023 <BsDot className={styles.dot_icon} /> 2 мин
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.comment2}>
              <div className={styles.title}>
                <p className={styles.title_type}>Чөлөөт</p>
                <h2 className={styles.title_name}>
                  "Дата дуран" дататон тэмцээнийг танилцуулах нь
                </h2>
              </div>
              <img
                src="https://unread.today/files/3d642b1c-cb78-4ea8-9fbe-ef518fc6d379/9d5ac2b839d8b2292972c831f543d923_square.png"
                className={styles.article_image}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
