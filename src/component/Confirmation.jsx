import styles from "../styles/confirmation.module.css";
import { PinInput, Group } from "@mantine/core";

export const Confirmation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.confirm_section}>
          <p>Confirm the code we sent you</p>
          <Group position="center">
            <PinInput length={6} />
          </Group>
        </div>
      </div>
    </div>
  );
};
