import Container from "../Container/container"
import styles from "./main.module.css"
import AboutMe from "../AboutMe/AboutMe"
import ExpertSection from "../ExpertSection/ExpertSection"
import ExperienceSection from "../ExperienceSection/ExperienceSection"

export default function Main() {
    return (<>
        <AboutMe />
        <ExpertSection />
        <ExperienceSection />
    </>
    )
}