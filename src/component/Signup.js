import styles from "../styles/Signup.module.css";
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';
import { TextInput } from '@mantine/core';

export const Signup = () => {
  return (
    <div className={styles.one}>
      <div className={styles.go_login}>
        <p className={styles.sign_al}>Already Sign up ?</p>
        <p className={styles.sign_info}>to keep connected with us please login with your personal info</p>
        <Link to="/Login">
          <Button className={styles.btn_1} radius="xl">
            Settings
          </Button>
        </Link>
      </div>
      <div className={styles.just}>
        <div className={styles.signup_page}>
          <p className={styles.signup_ac}>Create Account</p>
          <div className={styles.usernameSection}>
            <TextInput
              placeholder="Your first name"
              label="First name"
              withAsterisk
            />
            <TextInput
              placeholder="Your last name"
              label="Last name"
              withAsterisk
            />
          </div>

          <input placeholder="password" className={styles.input}></input>
          <input placeholder="gender" className={styles.input}></input>
          <Button className={styles.btn_2} variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Sign Up</Button>
          <div className={styles.goto_href}>
            <a href="l">go to login</a>
          </div>
        </div>
      </div>
    </div>
  );
};
