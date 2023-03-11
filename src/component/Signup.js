import styles from "../styles/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Group,
  TextInput,
  PasswordInput,
  Radio,
  FileInput,
} from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { client } from "./client/Instance";
import BounceLoader from "react-spinners/BounceLoader";

export const Signup = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [img, setImg] = useState();
  const [gender, setGender] = useState();
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();

    client
      .post("/user", {
        email: email,
        password: password,
        username: { first: firstname, last: lastname },
        gender: gender,
      })
      .then((res) => {
        console.log(res.data);
        setRes(res.data);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data._message == "User validation failed") {
          setError(err.response.data.errors.email.message);
        } else {
          setError(err.response.data)
        }
        
      });
  };
console.log(error)
  return (
    <>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingInnerSection}>
            <BounceLoader color="#36d7b7" />
            <p className={styles.loadingText}>{res}</p>
          </div>
        </div>
      ) : (
        <div className={styles.one}>
          <div className={styles.go_login}>
            <div class="w3-animate-left">
              <div className={styles.innerContainer}>
                <p className={styles.sign_al}>Already Signed up?</p>
                <div
                  style={{
                    width: "58%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p className={styles.sign_info}>
                    To keep connected with us please login with your personal
                    info
                  </p>
                </div>
                <Link to="/Login">
                  <Button className={styles.btn_1} radius="xl">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.just}>
            <div class="w3-animate-left">
              <div className={styles.signup_page}>
                <p className={styles.signup_ac}>Create Account</p>
                <div className={styles.usernameSection}>
                  {error === "First name is required" ? (
                    <TextInput
                      className={styles.nameInput}
                      placeholder="Your first name"
                      onChange={(e) => setFirstname(e.target.value)}
                      label="First name"
                      error={error}
                      withAsterisk
                    />
                  ) : (
                    <TextInput
                      className={styles.nameInput}
                      placeholder="Your first name"
                      onChange={(e) => setFirstname(e.target.value)}
                      label="First name"
                      withAsterisk
                    />
                  )}

                  {error === "Last name is required"  ? (
                    <TextInput
                      className={styles.nameInput}
                      placeholder="Your last name"
                      onChange={(e) => setLastname(e.target.value)}
                      label="Last name"
                      withAsterisk
                      error={error}
                    />
                  ) : (
                    <TextInput
                      className={styles.nameInput}
                      placeholder="Your last name"
                      onChange={(e) => setLastname(e.target.value)}
                      label="Last name"
                      withAsterisk
                    />
                  )}
                </div>
                {error === "Email is required"|| error === "Please enter a valid email" || error === "That email is already registered" ? (
                  <TextInput
                    className={styles.longInput}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    error={error}
                    icon={<IconAt size="0.8rem" />}
                  />
                ) : (
                  <TextInput
                    className={styles.longInput}
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    icon={<IconAt size="0.8rem" />}
                  />
                )}
                {error === "Password is required" || error === "Minimum password length is 6"? (
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                    toggleTabIndex={0}
                    error={error}
                    className={styles.longInput}
                  />
                ) : (
                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                    toggleTabIndex={0}
                    className={styles.longInput}
                  />
                )}

                <FileInput
                  className={styles.longInput}
                  label="Upload avatar"
                  placeholder="Upload files"
                  multiple
                />
                {error === "Gender is required" ? (
                  <Radio.Group
                    name="favoriteFramework"
                    label="Gender:"
                    withAsterisk
                    error={error}
                  >
                    <Group mt="sm" className={styles.group}>
                      <Radio
                        value="react"
                        label="Male"

                        onClick={() => setGender("male")}
                      />
                      <Radio
                        value="svelte"
                        label="Female"
                        onClick={() => setGender("female")}
                      />
                      <Radio
                        value="ng"
                        label="Other"
                        onClick={() => setGender("other")}
                      />
                    </Group>
                  </Radio.Group>
                ) : (
                  <Radio.Group
                    name="favoriteFramework"
                    label="Gender:"
                    withAsterisk
                   
                  >
                    <Group mt="sm" className={styles.group}>
                      <Radio
                        value="react"
                        label="Male"
                        onClick={() => setGender("male")}
                      />
                      <Radio
                        value="svelte"
                        label="Female"
                        onClick={() => setGender("female")}
                      />
                      <Radio
                        value="ng"
                        label="Other"
                        onClick={() => setGender("other")}
                      />
                    </Group>
                  </Radio.Group>
                )}

                <Button
                  className={styles.btn_2}
                  variant="gradient"
                  onClick={onSubmit}
                  gradient={{ from: "teal", to: "blue", deg: 60 }}
                >
                  Sign Up
                </Button>
                <Link to="/login" className={styles.goto_href}>
                  <span>Already signed up?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
