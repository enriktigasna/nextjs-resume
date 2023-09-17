import Container from "../Container/container"
import styles from "./main.module.css"
import AboutMe from "../AboutMe/AboutMe"
import ExpertSection from "../ExpertSection/ExpertSection"
import ExperienceSection from "../ExperienceSection/ExperienceSection"
import dynamic from 'next/dynamic'

// Importing ProjectSection without SSR, due to JavaScript carousel not working properly with SSR
const ProjectSection = dynamic(() => import('../ProjectSection/ProjectSection'), {
  ssr: false,
})

export default function Main() {
    return (<>
        <AboutMe />
        <ExpertSection />
        <ExperienceSection />
        <ProjectSection />
    </>
    )
}