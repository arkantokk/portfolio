import Header from "../components/Header"
import '../styles/Roadmap.css'
const Roadmap = () => {
    return (
        <>
            <Header />
            <div className="roadmap-container">
                <h1 className="roadmap-title">My RoadMap</h1>

                <div className="roadmap-tree">
                    <div className="roadmap-row">
                        <div className="step">HTML</div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="roadmap-row">
                        <div className="step-group">
                            <div className="step side">FLEX</div>
                            <div className="step main">CSS</div>
                            <div className="step side">GRID</div>
                        </div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="roadmap-row">
                        <div className="step highlight">JavaScript</div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="roadmap-row">
                        <div className="step-box">
                            <div className="box-title">React</div>
                            <div className="box-content">
                                <span>Hooks</span>
                                <span>Redux</span>
                                <span>Router</span>
                                <span>Query</span>
                            </div>
                        </div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="roadmap-row">
                        <div className="step">Node.js</div>
                    </div>

                    <div className="arrow">↓</div>

                    <div className="roadmap-row">
                        <div className="step highlight">TypeScript</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap