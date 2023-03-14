import styles from "../styles/News.module.css";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Footer } from "../component";
import { useEffect, useState } from "react";
export const News = () => {
  const [limit, setLimit] = useState([]);
  const [name, setName] = useState([]);
  const [space, setSpace] = useState(0);
  const [warn, setWarn] = useState(false);
  const [ner, setNer] = useState(false);
  const [comment, setComment] = useState([]);

  const Btn = () => {
    var my_string = limit;
    var spaceCount = limit.split(" ").length - 1;
    const charCount = my_string.length - spaceCount
    setSpace(charCount);

    if (charCount < 100) {
      console.log("less than 100");
      setWarn(false);
    } else {
      console.log("100 gass ih");
      setWarn(true);
    }
    const newComment = { limit: limit, name: name ? name : "Зочин" };
    setComment([...comment, newComment]);

    if (!name) {
      console.log("noname");
      setNer(false);
    } else {
      console.log("ner");
      setNer(true);
    }
  };

  return (
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
              7 ХОНОГИЙН ТОЙМ
            </p>
            <p style={{ color: " #6d7378", fontSize: "13px" }}>
              {" "}
              2 САРЫН 26, 2023. 9 МИН
            </p>
          </div>
          <div className={styles.title}>Нэг жил + Олеато + Ухаалаг уруул</div>
          <img
            src="https://sportshub.cbsistatic.com/i/2023/02/09/8184e079-1bf8-49f1-91ac-03c560d00d04/attack-on-titan-final-season-part-3-everything-we-know-release-date-episode-number-story-spoilers.jpg"
            className={styles.pic_news}
          ></img>
        </div>
        <div className={styles.width1}>
          <div style={{ display: "block" }}>
            <div className={styles.publish}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BMmQ3NzVmOWUtNTQ5Yi00MDczLWIxMDYtNGU5ZGU2YjI1NDY2XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg"
                className={styles.pub_pic}
              ></img>
              <div className={styles.nii}>
                <p style={{ color: "#888888", fontSize: "12px" }}>Нийтэлсэн:</p>
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
              style={{ color: "#888888", paddingTop: "6px", fontSize: "13px" }}
            >
              Хандалт / Сэтгэгдэл:
            </p>
            <div style={{ paddingTop: "10px", display: "flex" }}>
              <div style={{ marginRight: "20px" }}>
                {" "}
                <AiFillEye />
                1866
              </div>
              <FaComment />9
            </div>
            <div className={styles.main}>
              <h1
                style={{
                  paddingTop: "50px",
                  paddingBottom: "30px",
                  paddingLeft: "0",
                }}
                className={styles.mainsubject}
              >
                1 ГОЛ СЭДЭВ
              </h1>
              <p className={styles.p}>
                ОХУ Украин руу халдан довтолсноос хойш яг нэг жил өнгөрчээ.
                Дэлхийн эдийн засаг, геополитик, нийгмийн амьдралд онцгой нөлөө
                үзүүлсээр байгаа энэ дайны уршгаар 7000 гаруй энгийн иргэд амиа
                алдаж, Украины хүн амын 20-оос илүү хувь буюу 8 сая гаруй эх
                нутгаа орхин дүрвэхээс өөр аргагүйд хүрчээ. Дайнд амиа алдсан
                цэргүүдийн тоо харин хамгийн багадаа 300 мянгаар хэмжигдэнэ
                хэмээн НҮБ тооцож байна. Хуваагдсан дэлхий Олон арван бүслэлт,
                зуу зуун бөмбөгдөлтийн улмаас хот суурин, дэд бүтэц сүйрсний
                улмаас Украин улсын эдийн засаг үлэмж хохирол амсаад байна. АНУ,
                Европын Холбоо тэргүүтэй барууны орнууд нийт 130 тэрбум орчим
                долларын тусламжийг тус улсад илгээж, цэрэг зэвсэг, хүмүүнлэгийн
                дэмжлэгээ улам нэмэгдүүлсээр байна. ОХУ-ын эдийн засгийн агшилт
                ердөө 2%-тай гарсан нь олон эдийн засагчдыг гайхшруулах үзүүлэлт
                ч зөвхөн ДНБ-ийн үзүүлэлт бодит нөхцөл байдлыг бүрэн илтгэхгүй
                гэдгийг сануулсаар байна. Гэнэтийн айлчлал Өнгөрсөн долоо хоногт
                АНУ-ын ерөнхийлөгч Ж.Байден өөрийн биеэр Киевт хүрэлцэн ирж,
                Украиныг дэмжсээр байх болно гэдгээ мэдэгдлээ. Үүнтэй зэрэгцэн
                Оросод зэр зэвсгийн дэмжлэг үзүүлж магадгүй хэмээн хардагдаж
                байсан БНХАУ албан ёсоор мэдэгдэл гаргаж, энх тайвныг эрхэмлэсэн
                дундыг сахисан байр сууриа бататгажээ. НҮБ дайны нэг жилийн
                босгон дээр ОХУ-ыг цэргээ ямар ч нөхцөлгүйгээр гаргахыг шаардсан
                тогтоолд санал хураахад 141 улс дэмжиж, 32 улс түдгэлзсэний
                дотор Монгол улс багтав. ОХУ Украин руу халдан довтолсноос хойш
                яг нэг жил өнгөрчээ. Дэлхийн эдийн засаг, геополитик, нийгмийн
                амьдралд онцгой нөлөө үзүүлсээр байгаа энэ дайны уршгаар 7000
                гаруй энгийн иргэд амиа алдаж, Украины хүн амын 20-оос илүү хувь
                буюу 8 сая гаруй эх нутгаа орхин дүрвэхээс өөр аргагүйд хүрчээ.
                Дайнд амиа алдсан цэргүүдийн тоо харин хамгийн багадаа 300
                мянгаар хэмжигдэнэ хэмээн НҮБ тооцож байна. Хуваагдсан дэлхий
                Олон арван бүслэлт, зуу зуун бөмбөгдөлтийн улмаас хот суурин,
                дэд бүтэц сүйрсний улмаас Украин улсын эдийн засаг үлэмж хохирол
                амсаад байна. АНУ, Европын Холбоо тэргүүтэй барууны орнууд нийт
                130 тэрбум орчим долларын тусламжийг тус улсад илгээж, цэрэг
                зэвсэг, хүмүүнлэгийн дэмжлэгээ улам нэмэгдүүлсээр байна. ОХУ-ын
                эдийн засгийн агшилт ердөө 2%-тай гарсан нь олон эдийн засагчдыг
                гайхшруулах үзүүлэлт ч зөвхөн ДНБ-ийн үзүүлэлт бодит нөхцөл
                байдлыг бүрэн илтгэхгүй гэдгийг сануулсаар байна. Гэнэтийн
                айлчлал Өнгөрсөн долоо хоногт АНУ-ын ерөнхийлөгч Ж.Байден өөрийн
                биеэр Киевт хүрэлцэн ирж, Украиныг дэмжсээр байх болно гэдгээ
                мэдэгдлээ. Үүнтэй зэрэгцэн Оросод зэр зэвсгийн дэмжлэг үзүүлж
                магадгүй хэмээн хардагдаж байсан БНХАУ албан ёсоор мэдэгдэл
                гаргаж, энх тайвныг эрхэмлэсэн дундыг сахисан байр сууриа
                бататгажээ. НҮБ дайны нэг жилийн босгон дээр ОХУ-ыг цэргээ ямар
                ч нөхцөлгүйгээр гаргахыг шаардсан тогтоолд санал хураахад 141
                улс дэмжиж, 32 улс түдгэлзсэний дотор Монгол улс багтав.
              </p>
              <img
                src="https://unread.today/files/44/7f112255abafcfe54afb3a6bb0a57f36.gif"
                className={styles.middle}
              ></img>
              <p className={styles.p}>
                ОХУ Украин руу халдан довтолсноос хойш яг нэг жил өнгөрчээ.
                Дэлхийн эдийн засаг, геополитик, нийгмийн амьдралд онцгой нөлөө
                үзүүлсээр байгаа энэ дайны уршгаар 7000 гаруй энгийн иргэд амиа
                алдаж, Украины хүн амын 20-оос илүү хувь буюу 8 сая гаруй эх
                нутгаа орхин дүрвэхээс өөр аргагүйд хүрчээ. Дайнд амиа алдсан
                цэргүүдийн тоо харин хамгийн багадаа 300 мянгаар хэмжигдэнэ
                хэмээн НҮБ тооцож байна. Хуваагдсан дэлхий Олон арван бүслэлт,
                зуу зуун бөмбөгдөлтийн улмаас хот суурин, дэд бүтэц сүйрсний
                улмаас Украин улсын эдийн засаг үлэмж хохирол амсаад байна. АНУ,
                Европын Холбоо тэргүүтэй барууны орнууд нийт 130 тэрбум орчим
                долларын тусламжийг тус улсад илгээж, цэрэг зэвсэг, хүмүүнлэгийн
                дэмжлэгээ улам нэмэгдүүлсээр байна. ОХУ-ын эдийн засгийн агшилт
                ердөө 2%-тай гарсан нь олон эдийн засагчдыг гайхшруулах үзүүлэлт
                ч зөвхөн ДНБ-ийн үзүүлэлт бодит нөхцөл байдлыг бүрэн илтгэхгүй
                гэдгийг сануулсаар байна. Гэнэтийн айлчлал Өнгөрсөн долоо хоногт
                АНУ-ын ерөнхийлөгч Ж.Байден өөрийн биеэр Киевт хүрэлцэн ирж,
                Украиныг дэмжсээр байх болно гэдгээ мэдэгдлээ. Үүнтэй зэрэгцэн
                Оросод зэр зэвсгийн дэмжлэг үзүүлж магадгүй хэмээн хардагдаж
                байсан БНХАУ албан ёсоор мэдэгдэл гаргаж, энх тайвныг эрхэмлэсэн
                дундыг сахисан байр сууриа бататгажээ. НҮБ дайны нэг жилийн
                босгон дээр ОХУ-ыг цэргээ ямар ч нөхцөлгүйгээр гаргахыг шаардсан
                тогтоолд санал хураахад 141 улс дэмжиж, 32 улс түдгэлзсэний
                дотор Монгол улс багтав. ОХУ Украин руу халдан довтолсноос хойш
                яг нэг жил өнгөрчээ. Дэлхийн эдийн засаг, геополитик, нийгмийн
                амьдралд онцгой нөлөө үзүүлсээр байгаа энэ дайны уршгаар 7000
                гаруй энгийн иргэд амиа алдаж, Украины хүн амын 20-оос илүү хувь
                буюу 8 сая гаруй эх нутгаа орхин дүрвэхээс өөр аргагүйд хүрчээ.
                Дайнд амиа алдсан цэргүүдийн тоо харин хамгийн багадаа 300
                мянгаар хэмжигдэнэ хэмээн НҮБ тооцож байна. Хуваагдсан дэлхий
                Олон арван бүслэлт, зуу зуун бөмбөгдөлтийн улмаас хот суурин,
                дэд бүтэц сүйрсний улмаас Украин улсын эдийн засаг үлэмж хохирол
                амсаад байна. АНУ, Европын Холбоо тэргүүтэй барууны орнууд нийт
                130 тэрбум орчим долларын тусламжийг тус улсад илгээж, цэрэг
                зэвсэг, хүмүүнлэгийн дэмжлэгээ улам нэмэгдүүлсээр байна. ОХУ-ын
                эдийн засгийн агшилт ердөө 2%-тай гарсан нь олон эдийн засагчдыг
                гайхшруулах үзүүлэлт ч зөвхөн ДНБ-ийн үзүүлэлт бодит нөхцөл
                байдлыг бүрэн илтгэхгүй гэдгийг сануулсаар байна. Гэнэтийн
                айлчлал Өнгөрсөн долоо хоногт АНУ-ын ерөнхийлөгч Ж.Байден өөрийн
                биеэр Киевт хүрэлцэн ирж, Украиныг дэмжсээр байх болно гэдгээ
                мэдэгдлээ. Үүнтэй зэрэгцэн Оросод зэр зэвсгийн дэмжлэг үзүүлж
                магадгүй хэмээн хардагдаж байсан БНХАУ албан ёсоор мэдэгдэл
                гаргаж, энх тайвныг эрхэмлэсэн дундыг сахисан байр сууриа
                бататгажээ. НҮБ дайны нэг жилийн босгон дээр ОХУ-ыг цэргээ ямар
                ч нөхцөлгүйгээр гаргахыг шаардсан тогтоолд санал хураахад 141
                улс дэмжиж, 32 улс түдгэлзсэний дотор Монгол улс багтав.
              </p>
            </div>
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
              placeholder="сэтгэгдэл"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            ></textarea>
          </div>
          <button
            className={styles.btn}
            onClick={Btn}
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
                    <div className={styles.one}>{give.limit}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
