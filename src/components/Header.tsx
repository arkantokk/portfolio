import { useState } from 'react';
import '../styles/Header.css'
import { NavLink } from 'react-router-dom';
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <header className="header">
            <div className="nav-wrapper">


                <button className="burger" onClick={handleClick}>☰</button>

                <nav className={isOpen ? "nav open" : "nav"}>
                    <NavLink to="/" id='home' className="navigation-link" >Home</NavLink>
                    <NavLink to="/projects" id='projects' className="navigation-link" >Projects</NavLink>
                    <NavLink to="/roadmap" id='Roadmap' className="navigation-link" >Roadmap</NavLink>
                    <NavLink to="/contacts" id='contacts' className="navigation-link" >Contacts</NavLink>
                </nav>
            </div>
            <hr />
        </header>
    )
}

export default Header
