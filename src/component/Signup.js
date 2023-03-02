import styles from "../styles/Signup.module.css";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <div className={styles.one}>
      <div className={styles.go_login}>
        <p className={styles.sign_al}>Already Sign up ?</p>
        <p className={styles.sign_info}>to keep connected with us please login with your personal info</p>
        <div className={styles.btn_1}> <Link to="/Login">login</Link></div>
      </div>
      <div className={styles.just}>
      <div className={styles.signup_page}>
        <p className={styles.signup_ac}>Create Account</p>
        <input placeholder="email" className={styles.input}></input>
        <input placeholder="password"className={styles.input}></input>
        <input placeholder="gender"className={styles.input}></input>
        <div className={styles.btn_2}>sign up</div>
        <div className={styles.goto_href}>
            <a href="l">go to login</a>
        </div>
      </div>
      </div>
    </div>
  );
};
