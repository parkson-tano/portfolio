import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import axios from 'axios'


function Projects() {
  const baseUrl = "https://portfolio-production-b853.up.railway.app/project/";
  const [project, setProject] = useState("")
  useEffect(() => {
    axios.get(baseUrl)
    .then((response) => {
      setProject(response.data)
    })
     .catch((error) => console.log(error));
  }, [])

  console.log(project)
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Object.entries(project)
          .map(([key, pro]) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={pro.image}
                  isBlog={pro.blog}
                  title={pro.title}
                  description= {pro.description}
                  ghLink= {pro.github}
                  demoLink= {pro.demo}
                />
              </Col>
            );
          })}
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
