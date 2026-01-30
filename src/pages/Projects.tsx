import Header from "../components/Header"
import "../styles/Projects.css"
import CustomSection from "../components/UI/CustomSection"
const Projects = () => {
    return (
        <>
            <Header />
            <h1>Projects</h1>
            <main className="projects-container">
                <CustomSection
                title="Planner"
                description="App for planning your daily tasks"
                screenshotUrl="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"
                linkUrl="https://github.com/arkantokk/todoapp-fullstack"
                />
                <CustomSection
                title="SHowcase css"
                description="webpage for learning and seeing in action css grid and flex display property"
                linkUrl="https://github.com/arkantokk/css_oppgave"
                />
                <CustomSection
                title="Basic React landing website"
                description="Webpage that uses React hooks for beautifull website responsivness such as navigation that hides when users scrolls"
                linkUrl="https://github.com/arkantokk/respawn"
                />
            </main>
        </>
    )
}

export default Projects