import Container from "../Container/container";
import styles from "./experiencesection.module.css"

export default function () {
    return (
        <Container>
            <div className={styles.experienceSection}>
                <div className={styles.experienceWrapper}>
                    <h1 className={`${styles.title} ${styles.experienceTitle}`}>Professional Experiences</h1>
                    <h2 className={styles.title}>2021</h2>
                    <p className={styles.paragraph}>
                        Was paid to set up DNS CNAME-records for a company website. Guided my client through the process and set up proper domain configuration for the website.
                    </p>
                    <h2 className={styles.title}>2022</h2>
                    <p className={styles.paragraph}>
                        During my internship at Mindpark in Helsingborg, I took on responsibilities related to facility management and organization. This included ensuring the tidiness and orderliness of the premises. I also managed the handling of cables and took charge of the installation of a TV for displaying information. This experience allowed me to develop skills in facility management, cable management, and the setup of multimedia systems to enhance information sharing within the workplace.
                    </p>
                    <h2 className={styles.title}>2023</h2>
                    <p className={styles.paragraph}>
                    My role as a hotel worker at Clarion Grand Hotel, with a focus on housekeeping and cleaning, taught me the importance of attention to detail, teamwork, and outstanding customer service. This experience has equipped me with valuable skills that will be beneficial in various future career opportunities, emphasizing adaptability and a strong work ethic in diverse professional settings.
                    </p>
                </div>
            </div>
        </Container>
    );
}