import styles from "../styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { PasswordInput } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import Logo from "../logo.ico";
import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { client } from "../client/Instance";
import BounceLoader from "react-spinners/BounceLoader";
import jwt_decode from "jwt-decode";

export const Login = () => {
  const [emailInput, setEmailInput] = useState();
  const [lowSize, setLowSize] = useState(false);
  const [error, setError] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { width, height } = useWindowSize();
  useEffect(() => {
    if (width <= 770) {
      setLowSize(true);
    } else {
      setLowSize(false);
    }
  }, [width]);


  const onSubmit = (e) => {
    e.preventDefault();

    client
      .post("/login", { email: emailInput, password: passwordInput })
      .then((res) => {
        console.log(res.data);

        var decoded = jwt_decode(res.data.userToken);

        console.log(decoded);
        if (decoded.isVerified === false) {
          localStorage.setItem(
            "CONFIRMATION_TOKEN",
            res.data.confirmationToken
          );
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/confirmation");
          }, 3000);
        } else {
          localStorage.setItem("USER_TOKEN", res.data.userToken);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };

  return (
    // <div className={styles.one}>
    //   <div className={styles.just}>
    //   <div className={styles.login_page}>
    //     <div className={styles.intro_1}>
    //         <p className={styles.login_style}>Login to Your Account</p>
    //         <input placeholder="email"></input>
    //         <input placeholder="password"></input>
    //         <a href="#">forget password</a>
    //         <button className={styles.btn_1}>sign in</button>

    //     </div>
    //   </div>
    //   </div>
    //   <div className={styles.go_signup}>
    //     <div className={styles.intro}>
    //         <p className={styles.new_font}>New Here?</p>
    //         <p className={styles.sign_font}>Sign up and discover a great amount of new opportunities!!!</p>
    //         <div className={styles.btn_2}><Link to="/Signup">sign up </Link></div>
    //     </div>
    //   </div>
    // </div>
    <>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingInnerSection}>
            <BounceLoader color="#36d7b7" />
            <p className={styles.loadingText}>Loading...</p>
          </div>
        </div>
      ) : (
        <div className={styles.one}>
          <div className={styles.just}>
            <div className={styles.login_page}>
              <div class="w3-animate-left">
                <div className={styles.intro_1}>
                  <p className={styles.login_style}>Login</p>
                  <div>
                    {error === "Email not found" ? (
                      <TextInput
                        className={styles.input}
                        label="Your email"
                        error={error}
                        placeholder="Your email"
                        onChange={(e) => setEmailInput(e.target.value)}
                        icon={<IconAt size="0.8rem" />}
                      />
                    ) : (
                      <TextInput
                        className={styles.input}
                        label="Your email"
                        placeholder="Your email"
                        onChange={(e) => setEmailInput(e.target.value)}
                        icon={<IconAt size="0.8rem" />}
                      />
                    )}
                  </div>

                  <div className={styles.passContainer}>
                    {error == "Invalid password" ? (
                      <PasswordInput
                        className={styles.input}
                        label="Your password"
                        error={error}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Your password"
                        icon={<IconLock size="1rem" />}
                      />
                    ) : (
                      <PasswordInput
                        className={styles.input}
                        label="Your password"
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Your password"
                        icon={<IconLock size="1rem" />}
                      />
                    )}
                  </div>
                  <div className={styles.midContainer}>
                    <a className={styles.midText} href="#">
                      Forget password
                    </a>
                  </div>

                  <button className={styles.btn_1} onClick={onSubmit}>
                    Log in
                  </button>

                  {lowSize &&
                    <div className={styles.signupAdd}>
                      <hr></hr>
                      <Link to="/signup" className={styles.signText}>
                        Haven't created account yet?
                      </Link>
                      <button className={styles.btn_3}>Sign Up</button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={styles.go_signup}>
            <div class="w3-animate-left">
              <div className={styles.intro}>
                <p className={styles.new_font}>New Here?</p>
                <div className={styles.infoContainer}>
                  <p className={styles.sign_font}>
                    Sign up and discover a great amount of new opportunities.
                  </p>
                </div>

                <Link
                  to="/Signup"
                  style={{ textDecoration: "none", color: "rgb(0, 51, 126)" }}
                >
                  <button className={styles.btn_2}>Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
