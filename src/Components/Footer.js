import { Col, Container, Row } from "react-bootstrap"
import logo from "../library/img/logo-design.svg"
import navIcon1 from '../library/img/nav-icon1.svg';
import navIcon2 from '../library/img/github-3.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/wildy-pierre-jerome-844815261/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                        <a href="https://github.com/wildypj" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github Icon" /></a>
                    </div>
                    <p>Copyright 2024. All Rights Reserved by Wildy Pierre Jerome</p>
                    </Col>
                </Row>
            </Container>
      </footer>
    )
}