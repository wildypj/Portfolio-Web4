import React from "react";
import { Col, Button } from "react-bootstrap";
import "./ProjectCard.css"; // Import the CSS file

const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  
  return (
    <Col size={12} sm={6} md={4}>
      <a href={imgUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
      <div className="source-button"> {/* Define the source button */}
        <Button className="custom-button" variant="primary" href={githubUrl} target="_blank">source</Button> {/* Use the Button component */}
      </div>
    </Col>
  );
};


export default ProjectCard;
