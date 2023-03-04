import styles from "../styles/Signup.module.css";
import { Link } from "react-router-dom";
import {
  Button,
  Group,
  TextInput,
  PasswordInput,
  Radio,
  FileInput,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
export const Signup = () => {
  return (
    <div className={styles.one}>
      <div className={styles.go_login}>
        <div className={styles.innerContainer}>
          <p className={styles.sign_al}>Already Signed up?</p>
          <div style={{width: "58%", display: "flex",  justifyContent: "center"}}>
            <p className={styles.sign_info}>
            To keep connected with us please login with your personal info
          </p>
          
          </div>
          <Link to="/Login">
            <Button className={styles.btn_1} radius="xl">
              Login
            </Button>
          </Link>
        </div>
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

          <TextInput
            className={styles.longInput}
            label="Email"
            placeholder="Your email"
            icon={<IconAt size="0.8rem" />}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            toggleTabIndex={0}
            className={styles.longInput}
          />
          <FileInput
            className={styles.longInput}
            label="Upload avatar"
            placeholder="Upload files"
            multiple
          />
          <Radio.Group name="favoriteFramework" label="Gender:" withAsterisk>
            <Group mt="sm" className={styles.group}>
              <Radio value="react" label="Male" />
              <Radio value="svelte" label="Female" />
              <Radio value="ng" label="Other" />
            </Group>
          </Radio.Group>

          <Button
            className={styles.btn_2}
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
          >
            Sign Up
          </Button>
          <div className={styles.goto_href}>
            <a href="l">go to login</a>
          </div>
        </div>
      </div>
    </div>
  );
};
