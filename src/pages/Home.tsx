import '../styles/Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Home() {


    return (
        <>
            <Header />
            <main className="container">
                <section className="name-photo">
                    <div className="image"></div>
                    <div className='name-bio-descript'>
                        <h2>Davyd Stelmashchuk</h2>
                        <h4>Fullstack developer with backend focus</h4>
                    </div>
                </section>

                <section className="stack">
                    <h2>Technical Stack</h2>

                    <div className="stack-grid">
                        <div className="stack-group">
                            <h4>Backend & Database</h4>
                            <ul>
                                <li>
                                    <img src="/images/node.svg" alt="Node.js" />
                                    Node.js / Express
                                </li>
                                <li>
                                    <img src="/images/ts.svg" alt="TypeScript" />
                                    TypeScript / JS
                                </li>
                                <li>
                                    <img src="/images/mongodb.svg" alt="MongoDB" />
                                    MongoDB
                                </li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h4>DevOps & Automation</h4>
                            <ul>
                                <li>
                                    <img src="/images/docker.svg" alt="Docker" />
                                    Docker
                                </li>
                                <li>
                                    <img src="/images/arduino.svg" alt="Arduino" />
                                    Arduino / C++
                                </li>
                               
                            </ul>
                        </div>

                        <div className="stack-group learning">
                            <h4>Currently Mastering</h4>
                            <ul>
                                <li>
                                    <img src="/images/csharp.svg" alt=".NET" />
                                    .NET / C#
                                </li>
                                <li>
                                    <img src="/images/azure.svg" alt="Azure" />
                                    Azure
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bio">
                    <h2>About me</h2>
                    <p>Fullstack Developer</p>

                    <p>I’m a developer who enjoys building things that work — from high-level web applications to low-level hardware automation. My background is a mix of self-driven software engineering and hands-on experience with industrial automation (Arduino), where I first learned to translate complex logic into reliable systems.</p>

                    <p>I focus on Clean Architecture and building modular, secure backends. Whether it’s managing relational data with PostgreSQL or creating responsive interfaces with React, I aim for code that is easy to maintain and scale.</p>

                    <p>Currently, I’m living in Drammen and focusing on the .NET/Azure ecosystem. I’m a big believer in using the right tools for the job, including AI-assisted development to stay efficient and keep the focus on solving business problems rather than just writing boilerplate.</p>

                </section>

                <section className="links">
                    <h2>Links</h2>
                    <p><img className='github' src="images/github-svgrepo-com.svg" /> GitHub: <a
                        className='link-styles' href="https://github.com/arkantokk" target="_blank">https://github.com/arkantokk</a></p>
                    <p style={{ padding: "30px" }}>Email: arkantokbb@gmail.com</p>
                </section>

                <section className="projects-list">
                    <h3>Deployed projects</h3>
                    <a href='https://github.com/arkantokk' target='_blank'><p>Planner app</p></a>
                    <a href='https://respawn-rho.vercel.app/' target='_blank'><p>PC club landing page</p></a>
                    <a href='https://github.com/arkantokk' target='_blank'><p className='git-link'>Click to see more at GitHub</p></a>
                </section>

                <section className="section6">

                    <a href="https://todoapp-fullstack-48ge.vercel.app/login" target="_blank">

                        <div className="section6">
                            <div className="last-project-info">
                                <h3>Last project</h3>
                                <div className="screenshot" ></div>
                                <p>Secure planner with wishlist and making plans together</p>
                            </div>
                            <div className="technologies">
                                <h3>Technologies</h3>
                                <p>React.js, Node.js, Express, MongoDB, Vercel</p>

                            </div>

                        </div>
                        <div className="popup">Click to visit <br></br>
                        </div>
                    </a>
                </section>
            </main>
            <div className="overlay"></div>
            <Footer />
        </>
    )
}

export default Home
