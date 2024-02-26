import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../library/img/color-sharp3.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";
import projectsData from "./projectsData";
import "./Projects.css";

const Project = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderProjectCards = () => {
    const startIndex = (parseInt(activeTab.charAt(activeTab.length - 1)) - 1) * 3;
    const endIndex = startIndex + 3;
    return projectsData.slice(startIndex, endIndex).map((project, index) => (
      <ProjectCard key={index} {...project} />
    ));
  };

  const generateTabLabels = () => {
    return ["Tab 1", "Tab 2", "Tab 3"].map((label, index) => (
      <Nav.Item key={index}>
        <Nav.Link eventKey={`tab-${index + 1}`}>{label}</Nav.Link>
      </Nav.Item>
    ));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleTabChange}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {generateTabLabels()}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="tab-1">
                        <Row>{renderProjectCards()}</Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab-2">
                        <Row>{renderProjectCards()}</Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab-3">
                        <Row>{renderProjectCards()}</Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Project;
