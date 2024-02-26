import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../library/img/header-img.png';
import 'animate.css/animate.css';
import TrackVisibility from "react-on-screen";
import React from "react";

const Banner = () => {
    const toRotate = ["Software Engineer"];
    const period = 2000;

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [text, loopNum, toRotate, isDeleting, period]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [ delta, tick]); // might need to add text back in front

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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                                    <span className="tagline"> Welcome to my Portfolio</span>
                                    <h1>{`Hi, I'm Wildy Pierre Jerome`} <span className="wrap">{text}</span></h1>
                                    <p>
                                        Write a paragraph about myself.
                                    </p>
                                    {/* <button> Let's connect <ArrowRightCircle size={25} /> </button> */}
                                    <NavLink href="#contacts" link="contacts">
                                        <button> Let's connect <ArrowRightCircle size={25} /> </button>
                                    </NavLink>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
