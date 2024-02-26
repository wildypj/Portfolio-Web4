
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../library/img/logo-design.svg';
import navIcon1 from '../library/img/nav-icon1.svg';
import navIcon2 from '../library/img/github-3.svg';



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };

    const NavLink = ({ href, link, children }) => {
        const activeClass = activeLink === link ? 'active navbar-link' : 'navbar-link';
        return (
            <Nav.Link href={href} className={activeClass} onClick={() => handleNavLinkClick(link)}>
                {children}
            </Nav.Link>
        );
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink href="#home" link="home">Home</NavLink>
                        <NavLink href="#skills" link="skills">Skills</NavLink>
                        <NavLink href="#projects" link="projects">Projects</NavLink>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/wildy-pierre-jerome-844815261/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://github.com/wildypj" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github" /></a>
                        </div>
                        <NavLink href="#contacts" link="contacts"><button className="vvd" ><span>Let's Connect</span></button></NavLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
