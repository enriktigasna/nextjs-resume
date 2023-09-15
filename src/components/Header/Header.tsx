import Container from "../Container/container"
import styles from "./header.module.css"


export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.title}>
          <span className={styles.name}>Maxim Pavlenko</span>
          <span className={styles.role}>Student at NTI Helsingborg</span>
        </div>
      </Container>
    </header>
  );
}