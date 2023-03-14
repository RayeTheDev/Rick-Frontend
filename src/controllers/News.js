import styles from "./styles/News.module.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
export const News = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const ref = useRef(null);
  const [limit, setLimit] = useState([]);
  const [name, setName] = useState([]);
  const [space, setSpace] = useState(0);
  const [warn, setWarn] = useState(false);
  const [ner, setNer] = useState(false);
  const [comment, setComment] = useState([]);

  const Btn = (id) => {
    var my_string = limit;
    var spaceCount = limit.split(" ").length - 1;
    const charCount = my_string.length - spaceCount;
    setSpace(charCount);

    if (charCount > 100) {
      console.log("less than 100");
      setWarn(false);
    } else {
      const newComment = { limit: limit, name: name ? name : "Зочин" };
      const commentDiv = { name: name, texts: limit, article: id };
      setComment([...comment, newComment]);
      setWarn(true);
      console.log(commentDiv);
      axios.post("https://unread.onrender.com/comments/", commentDiv).then((res) => {
        console.log("Comment posted", res.data)
        setComment([...comment, res.data])
      }).catch((err) => { console.log(err) })
    }

    if (!name) {
      console.log("noname");
      setNer(false);
    } else {
      console.log("ner");
      setNer(true);
    }
  };

  useEffect(() => {
    axios
      .get(`https://unread.onrender.com/articles/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.result);
        setComment(res.data.comment);
        console.log("comment", res.data);
        axios
          .get(`https://unread.onrender.com/user/${res.data.result.creatorId}`)
          .then((res) => {
            console.log(res.data);
            setUser(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
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
                {user && (
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    className={styles.pub_pic}
                  ></img>
                )}

                <div className={styles.nii}>
                  <p style={{ color: "#888888", fontSize: "12px" }}>
                    Нийтэлсэн:
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    {user && user.username.first + " " + user.username.last}
                  </p>
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div style={{ marginRight: "20px" }}>
                  {" "}
                  <AiFillEye />
                  <span>{data.views}</span>
                </div>
                <FaComment />
                <span>{comment && comment.length}</span>
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
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <img
                src="https://unread.today/img/comment.png"
                style={{
                  height: "26px",
                  marginTop: "10px",
                  marginRight: "7px",
                  fontFamily: "'SF Display', sans-serif",
                }}
              ></img>
              <h4>Сэтгэгдэл бичих</h4>
            </div>
            <div className={styles.con}>
              <input
                className={styles.input}
                placeholder="таны нэр"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                id="w3review"
                name="w3review"
                rows="6"
                cols="30"
                className={styles.commentArea}
                placeholder="сэтгэгдэл"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
              ></textarea>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                Btn(data._id);
              }}
              style={{
                backgroundColor: warn ? "#0078f6" : "white",
                color: warn ? "white" : "grey",
              }}
            >
              Сэтгэгдэл бичих
            </button>
            <div className={styles.limit}>
              <div className={styles.hhh}>
                <span style={{ color: "#0078f6" }}>Тэмдэгт:{space}.</span>
                <span>
                  Та 100-с доошгүй тэмдэгт ашиглан санал сэтгэгдлээ бүтээлчээр
                  үлдээгээрэй. Хамтдаа сэтгэгдэл бичих соёлыг Монголд бий
                  болгоцгооё.
                </span>
              </div>
            </div>
            <div className={styles.setgegdel}>
              {comment.map((give) => {
                console.log(give);
                return (
                  <div className={styles.opp}>
                    <div className={styles.pl}>
                      <div className={styles.int}>
                        <img
                          src="https://img.freepik.com/premium-photo/rain-water-drop-falling-city-street-floor-heavy-rain-day_1962-2005.jpg?w=2000"
                          className={styles.pro}
                        ></img>
                        <div className={styles.sav}>
                          <p>{give.name}</p>
                          <p style={{ color: " #0078f6" }}>1 минутын өмнө</p>
                        </div>
                      </div>
                      <div className={styles.block}>
                        <div className={styles.one}>{give.texts}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};
