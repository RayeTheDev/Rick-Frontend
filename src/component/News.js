import styles from "../styles/News.module.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Footer } from "../component";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
export const News = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const ref = useRef(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3100/articles/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (data) ref.current.innerHTML = data.texts; 
    console.log(ref);
  }, [data]);
  return (
    data && (
      <>
        <div className={styles.flex}>
          <div className={styles.width}>
            <div className={styles.padding}>
              <p
                style={{
                  color: "#0078f6",
                  fontSize: "13px",
                  paddingRight: "20px",
                }}
              >
                {data.category[0].name}
              </p>
              <p style={{ color: " #6d7378", fontSize: "13px" }}>
                {" "}
                {/* 2 САРЫН 26, 2023. 9 МИН
                 */}
                {data.createdAt}
              </p>
            </div>
            <div className={styles.title}>{data.title}</div>
            <img src={data.photoUrl} className={styles.pic_news}></img>
          </div>
          <div className={styles.width1}>
            <div style={{ display: "block" }}>
              <div className={styles.publish}>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BMmQ3NzVmOWUtNTQ5Yi00MDczLWIxMDYtNGU5ZGU2YjI1NDY2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg"
                  className={styles.pub_pic}
                ></img>
                <div className={styles.nii}>
                  <p style={{ color: "#888888", fontSize: "12px" }}>
                    Нийтэлсэн:
                  </p>
                  <p style={{ fontSize: "15px" }}>B.Barjargal</p>
                </div>
              </div>
              <div className={styles.help}>
                <div className={styles.hhr}></div>
                <div
                  style={{
                    color: "#888888",
                    fontSize: "12px",
                    paddingTop: "20px",
                  }}
                >
                  Нийтлэлд оролцсон:
                </div>
                <spam style={{ fontSize: "15px" }}>Г.Оюунлхам</spam>
                <div
                  style={{
                    color: "#888888",
                    fontSize: "12px",
                    paddingTop: "20px",
                  }}
                >
                  Гэрэл зургийг:
                </div>
                <spam style={{ fontSize: "15px" }}>Б.Анарбаяр</spam>
              </div>
            </div>

            <div className={styles.news}>
              <p
                style={{
                  color: "#888888",
                  paddingTop: "6px",
                  fontSize: "13px",
                }}
              >
                Хандалт / Сэтгэгдэл:
              </p>
              <div style={{  display: "flex",alignItems:"center",gap:"5px" }}>
                <div style={{ marginRight: "20px" }}>
                  {" "}
                  <AiFillEye />
                  <span>{data.views}</span>
                </div>
                <FaComment />
                <span>{data.comment.length}</span>
              </div>
              <div className={styles.main} ref={ref}></div>
            </div>
            <div className={styles.publish1} style={{ fontSize: "35px" }}>
              <AiFillCodeSandboxCircle />
              <AiFillCodeSandboxCircle />
              <AiFillCodeSandboxCircle />
            </div>
          </div>
          <div className={styles.com}>
            <h2>setgegdel bichih</h2>
            <div className={styles.con}>
              <input className={styles.input} placeholder="your name"></input>
              <input
                className={styles.input1}
                placeholder="your comment"
              ></input>
            </div>
            <button className={styles.btn}>comment</button>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};
// style={{ display: "flex", gap: "20px" }}
