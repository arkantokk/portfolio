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
                    <h2>Stack</h2>
                    <h3>JavaScript
                        <img style={{ width: "32px" }} src="/images/js.svg" />
                    </h3>
                    <h3>TypeScript
                        <img style={{ width: "24px" }} src="/images/ts.svg" />
                    </h3>
                    <h3>Node.js
                        <img style={{ width: "24px" }} src="/images/node.svg" />
                    </h3>
                    <h3>
                        Express
                        <img style={{ width: "24px" }} src="/images/express.svg" />
                    </h3>
                    <h3>
                        MongoDB
                        <img style={{ width: "24px" }} src="/images/mongodb.svg" />
                    </h3>
                </section>

                <section className="bio">
                    <h2>About me</h2>
                    <p>I am a Full-Stack Developer with a deep focus on building secure, scalable, and maintainable backend
                        systems. I specialize in creating robust architectures where security is a priority, implementing
                        industry-standard authentication using JWT, managing secure sessions, and protecting applications
                        against vulnerabilities.</p>



                    <p>
                        My development process is rooted in Clean Architecture principles. I strictly follow the separation of
                        concerns by decoupling logic into dedicated Controllers and Services, ensuring each component has a
                        single responsibility. This makes the codebase modular, easy to test, and highly reliable. On the data
                        layer, I have extensive experience with PostgreSQL, designing optimized relational schemas and ensuring
                        data integrity. Whether it's server-side logic or database management, I strive to build
                        high-performance products that users can trust.</p>

                </section>

                <section className="links">
                    <h2>Links</h2>
                    <p><img className='github' src="images/github-svgrepo-com.svg" /> GitHub: <a
                        className='link-styles' href="https://github.com/arkantokk" target="_blank">https://github.com/arkantokk</a></p>
                    <p style={{ padding: "30px" }}>Email: arkantokbb@gmail.com</p>
                    <p style={{ padding: "0px 30px" }}>LinkedIn: <a className='link-styles'>linkedin.com/arkantok</a></p>

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
                            <p className='warning'>Takes some time to wake the servers up</p>
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
