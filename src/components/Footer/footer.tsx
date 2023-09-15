import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container/container";
import styles from "./footer.module.css"
import { faGithub, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function () {
    return (
        <Container>
            <div className={styles.footer}>
                <div className={styles.copyright}>© Maxim Pavlenko 2023</div>
                <div className={styles.links}>
                    <a href="https://github.com/enriktigasna"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://twitter.com/maxim_pavlenko"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.instagram.com/mackann.07/"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="https://www.youtube.com/channel/UCsbJ4PPQvLUf1EJsQPXlJWQ"><FontAwesomeIcon icon={faYoutube}/></a>
                </div>
            </div>
        </Container>
    );
}