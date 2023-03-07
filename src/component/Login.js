import styles from "../styles/Login.module.css";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { PasswordInput } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import Logo from "../logo.ico";

export const Login = () => {
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

    <div className={styles.one}>
      <div className={styles.just}>
        <div className={styles.login_page}>
          <div class="w3-animate-left">
            <div className={styles.intro_1}>
              <p className={styles.login_style}>Login</p>
              <div>
                <TextInput
                  className={styles.input}
                  label="Your email"
                  placeholder="Your email"
                  icon={<IconAt size="0.8rem" />}
                />
              </div>

              <div className={styles.passContainer}>
                <PasswordInput
                  className={styles.input}
                  label="Your password"
                  placeholder="Your password"
                  icon={<IconLock size="1rem" />}
                />
              </div>
              <div className={styles.midContainer}>
                <a className={styles.midText} href="#">
                  Forget password
                </a>
              </div>

              <button className={styles.btn_1}>Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.go_signup} >
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
              <div className={styles.btn_2}>Sign up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
