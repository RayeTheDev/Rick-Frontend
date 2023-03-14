import styles from "./styles/confirmation.module.css";
import { PinInput, Group } from "@mantine/core";
import { MantineProvider, Container, Button, TextInput } from "@mantine/core";
import { useRef, useState } from "react";
import { client } from "../client/Instance";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Confirmation = () => {
  const [codeInput, setCodeInput] = useState();
  const [error, setError] = useState();
  let code = useRef();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("CONFIRMATION_TOKEN"));

    axios
      .post(
        "https://unread.onrender.com/check",
        { token: code.current.value },
        {
          headers: {
            Authorization: localStorage.getItem("CONFIRMATION_TOKEN"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "jwt expired") {
          setError("Code has expired");
          return;
        }else{
          localStorage.setItem("USER_TOKEN", true);
          navigate("/create");
        }
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.inner_container}>
        <div className={styles.confirm_section}>
          <p>Confirm the code we sent you</p>
          <Group position="center">
            <PinInput length={6} />
          </Group>
        </div>
      </div> */}

      <Container>
        <div class="w3-animate-left">
          <div style={{ display: "flex", justifyContent: "center" }}>
            {/* <img className={styles.logo} src={logo}></img> */}
            <img
              className={styles.logo}
              src="https://unread.today/img/unread_white.png"></img>
          </div>

          <div className={styles.confirm_section}>
            <p className={styles.title}>We sent your code</p>
            <i className={styles.text}>Enter the confirmation code below </i>
            <Group position="center" className={styles.pin}>
              {error ? (
                <TextInput
                  className={styles.input}
                  error={error}
                  type="number"
                  inputWrapperOrder={["label", "error", "input", "description"]}
                  ref={code}
                />
              ) : (
                <TextInput
                  className={styles.input}
                  type="number"
                  inputWrapperOrder={["label", "error", "input", "description"]}
                  ref={code}
                />
              )}
            </Group>
            <div className={styles.buttonSection}>
              <Button
                className={styles.button}
                color="gray"
                onClick={() => navigate("/login")}>
                Go back
              </Button>
              <Button className={styles.button} onClick={onSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
