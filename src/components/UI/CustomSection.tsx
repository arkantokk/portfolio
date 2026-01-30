import "../../styles/Projects.css"

interface customProjectsProps {
    title: string,
    screenshotUrl?: string,
    description: string,
    linkUrl: string
}

const CustomSection = ({ title, screenshotUrl, description, linkUrl }: customProjectsProps) => {
    return (
        <a href={linkUrl} target="_blank">
            <section className="section-projects">

                {screenshotUrl ? (<img src={screenshotUrl}></img>) : (
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"></img>
                )}
                <div className="project-text">
                    <h3>{title}</h3>
                    <p className="project-description">{description}</p>
                </div>

            </section>
        </a>

    )
}

export default CustomSection