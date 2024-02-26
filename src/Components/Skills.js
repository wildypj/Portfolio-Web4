import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorsharp from "../library/img/color-sharp.png";
import { useEffect, useState } from "react";
import { skills } from "./SkillsData"; // Assuming you have a file with an array of skills data

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Below are the programming languages and frameworks I currently know.</p>

              <Carousel responsive={responsive} infinite={true} className="Skill-slider">
                {skills.map((skill, index) => (
                  <div key={index} className="item">
                    <img src={skill.logo} alt={skill.title} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorsharp} alt="background" />
    </section>
  );
};
