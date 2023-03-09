import styles from "./styles/Article.module.css";
export const Article = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.limit}>
        <img
          src="https://unread.today/files/banner/0f8377054ecd67ea46e4e82ad91460c8.png"
          className={styles.picture}
        ></img>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={styles.hover}
        >
          <div style={{ display: "block", marginTop: "50px" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className={styles.create}>
                <div style={{ display: "block" }}>
                  <p style={{ color: "black", fontSize: "13px" }}>
                    maral gantulga
                  </p>
                  <p style={{ color: "grey", fontSize: "13px" }}>
                    {" "}
                    2023 onii 2 sariin 28{" "}
                  </p>
                </div>
                <img
                  src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </div>
            <div className={styles.comment}>
              <div style={{ width: "70%" }}>
                <p style={{ color: "#0078f6" }}>special news</p>
                <h2 className={styles.h2}>
                  special news is that my classmates famous couple got married
                  in march
                </h2>
              </div>
              <img
                src="https://imageio.forbes.com/blogs-images/ofx/files/2018/09/OFX3-iStock-492595743-1200x800.jpg?format=jpg&width=960 "
                className={styles.money}
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-start" }}
          className={styles.hover}
        >
          <div style={{ display: "block", marginTop: "50px" }}>
            <div className={styles.create2}>
              <div style={{ display: "block" }}>
                <p style={{ color: "black", fontSize: "13px" }}>
                  maral gantulga
                </p>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  {" "}
                  2023 onii 2 sariin 28{" "}
                </p>
              </div>
              <img
                src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                style={{ height: "40px", width: "40px", borderRadius: "100%" }}
              ></img>
            </div>
            <div className={styles.comment2}>
              <div style={{ width: "70%" }}>
                <p style={{ color: "#0078f6" }}>free style</p>
                <h2 className={styles.h2}>
                  you are nothing you are normal just like everyone else but you
                  can make yourself special
                </h2>
              </div>
              <img
                src="https://img.freepik.com/premium-photo/enjoy-silence-free-style-comfortable-autumn-fashion-blond-girl-make-up-fall-outfit-girl-soft-knitwear-dress-cashmere-woolen-sweater-warm-oversized-clothes-sexy-woman-sunny-weather-outdoor_474717-84542.jpg?w=2000 "
                className={styles.money}
              ></img>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={styles.hover}
        >
          <div style={{ display: "block", marginTop: "50px" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div className={styles.create}>
                <div style={{ display: "block" }}>
                  <p style={{ color: "black", fontSize: "13px" }}>
                    maral gantulga
                  </p>
                  <p style={{ color: "grey", fontSize: "13px" }}>
                    {" "}
                    2023 onii 2 sariin 28{" "}
                  </p>
                </div>
                <img
                  src="https://www.moma.org/d/assets/W1siZiIsIjIwMTYvMDUvMTYvM2RsOWlyZDlwdV9yYWluX3Jvb20zLmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDEyMDB4NjAwXHUwMDNlIl1d/rain_room3.jpg?sha=134c593796f5982a"
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "100%",
                  }}
                ></img>
              </div>
            </div>
            <div className={styles.comment}>
              <div style={{ width: "70%" }}>
                <p style={{ color: "#0078f6" }}>special news</p>
                <h2 className={styles.h2}>
                  special news is that my classmates famous couple got married
                  in march
                </h2>
              </div>
              <img
                src="https://imageio.forbes.com/blogs-images/ofx/files/2018/09/OFX3-iStock-492595743-1200x800.jpg?format=jpg&width=960 "
                className={styles.money}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
