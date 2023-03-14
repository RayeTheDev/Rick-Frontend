import styles from "./styles/Article.module.css";
import image7 from "./assets/image7.jpeg"
import image10 from "./assets/image10.png"
import image11 from "./assets/image11.jpg"
import { BsDot } from "react-icons/bs";
import { useContext } from "react";
import { DataContext } from "./context/Data.Provider";

export const Article = () => {
    const { menu } = useContext(DataContext);
  return (
    <div className={ menu ? styles.article_container : `${styles.article_container_none}`}>
        <div className={styles.articles}>
            <div className={styles.article_left_image}>
                <div className={styles.banner_con}>
                    <img className={styles.banner} src={image10}></img>
                </div>
            </div>
            <div className={styles.article_right}>
                <div className={styles.content_right}>
                    <div className={styles.creator_con}>
                        <div className={styles.creator_name}>
                            <div className={styles.name}>Unread</div>
                            <div className={styles.date}>3 сарын 13, 2023 <BsDot className={styles.dot_icon} /> 2 мин</div>
                        </div>
                        <div className={styles.creator_avatar}>
                            <img className={styles.avatar} src={image11}></img>
                        </div>
                    </div> 
                    <div className={styles.article_title}>
                        <div className={styles.title}>
                            <div className={styles.title_type}>Онцлох бизнес</div>
                            <div className={styles.title_name}>Premier Tailor - Загварын ертөнцийн тансаглалыг мэдрэх нь</div>
                        </div>
                        <img className={styles.article_image} src={image7}></img>
                    </div>
                </div>
            </div>
            <div className={styles.article_left}>
                <div className={styles.content_right}>
                    <div className={styles.creator_con2}>
                        <div className={styles.creator_avatar2}>
                            <img className={styles.avatar} src={image11}></img>
                        </div>
                        <div className={styles.creator_name}>
                            <div className={styles.name2}>Unread</div>
                            <div className={styles.date}>3 сарын 13, 2023 <BsDot className={styles.dot_icon} /> 2 мин</div>
                        </div>
                    </div> 
                    <div className={styles.article_title2}>
                        <div className={styles.title}>
                            <div className={styles.title_type}>Онцлох бизнес</div>
                            <div className={styles.title_name}>Premier Tailor - Загварын ертөнцийн тансаглалыг мэдрэх нь</div>
                        </div>
                        <img className={styles.article_image} src={image7}></img>
                    </div>
                </div>
            </div>
            <div className={styles.article_right}>
                <div className={styles.content_right}>
                    <div className={styles.creator_con}>
                        <div className={styles.creator_name}>
                            <div className={styles.name}>Unread</div>
                            <div className={styles.date}>3 сарын 13, 2023 <BsDot className={styles.dot_icon} /> 2 мин</div>
                        </div>
                        <div className={styles.creator_avatar}>
                            <img className={styles.avatar} src={image11}></img>
                        </div>
                    </div> 
                    <div className={styles.article_title}>
                        <div className={styles.title}>
                            <div className={styles.title_type}>Онцлох бизнес</div>
                            <div className={styles.title_name}>Premier Tailor - Загварын ертөнцийн тансаглалыг мэдрэх нь</div>
                        </div>
                        <img className={styles.article_image} src={image7}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};