import styles from "../styles/Login.module.css";
import {  Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className={styles.one}>
      <div className={styles.just}>
      <div className={styles.login_page}>
        <div className={styles.intro_1}>
            <p className={styles.login_style}>Login to Your Account</p>
            <input placeholder="email" className={styles.input}></input>
            <input placeholder="password" className={styles.input}></input>
            <a href="#">forget password</a>
            <button className={styles.btn_1}>sign in</button>
            
        </div>
      </div>
      </div>
      <div className={styles.go_signup}>
        <div className={styles.intro}>
            <p className={styles.new_font}>New Here?</p>
            <p className={styles.sign_font}>Sign up and discover a great amount of new opportunities!!!</p>
            <div className={styles.btn_2}><Link to="/Signup">sign up </Link></div>
        </div>
      </div>
    </div>
  );
};
