import styles from "./expertsection.module.css"
import Container from "../Container/container";

export default function () {
    return (
        <Container>
            <div className={styles.expertSection}>
                <h1 className={styles.title}>Skills and Expertise</h1>
                <div className={styles.expertise}>
                    <div className={styles.smallBlock}>
                        <h3>Front-End Web Developement</h3>
                        <p>I possess a strong background in Front-End Web Development, with extensive experience in crafting responsive and user-friendly web interfaces. I am proficient in HTML, CSS, and JavaScript, and I have a deep understanding of popular front-end frameworks such as React and Vue.js. My expertise lies in designing and implementing visually appealing websites, and creating user experiences. I have a portfolio of existing front-end apps that display my competency in front-end developement.</p>
                    </div>
                    <div className={styles.smallBlock}>
                        <h3>API Developement</h3>
                        <p>In API development, I have expertise in designing, building, and maintaining RESTful APIs. I excel in creating robust APIs using technologies like Node.js and Python, along with frameworks such as Express.js and Flask. I am well-versed in authentication, data validation, and API documentation, which are crucial aspects of creating secure and developer-friendly APIs.</p>
                    </div>
                    <div className={styles.smallBlock}>
                        <h3>Scripting and Workflow Optimization</h3>
                        <p>I specialize in scripting and workflow optimization. I have a strong background in automating tasks and improving efficiency through scripting languages like Python and Bash. My experience includes creating scripts to streamline repetitive processes, enhance data analysis, and integrate various software tools. I excel at identifying bottlenecks in workflows and implementing solutions to optimize productivity and reduce manual intervention.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}