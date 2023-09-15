import Container from "../Container/container";
import styles from "./aboutme.module.css"

export default function () {
    return (
        <Container>
            <div className={styles.block}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.paragraph}>An accomplished Software Development student with a strong proficiency in programming and DevOps. I'm an out-going person who loves to meet new people and socialize, and I love learning new things.</p>
            </div>
            <div className={`${styles.block}`}>
                <h1 className={styles.title}>Contact</h1>
                <p className={styles.paragraph}>
                    maxim.pavlenko2011@gmail.com <br />
                    070-977 01 03 <br />
                    Helsingborg <br />
                </p>
            </div>
        </Container>
    );
}