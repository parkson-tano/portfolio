import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple"> Parkson Tano Daniel </span>
            from <span className="purple"> Cameroon.</span>
            <br />
            I am a Python Fullstack Developer with experience in Django, React
            JS, and Data Analytics. I have a passion for creating innovative and
            engaging solutions for web applications and data analytics
            <br />
            <br />
            My background in software engineering and data analytics has enabled
            me to create projects that are both robust and efficient. I am a
            problem solver who is constantly searching for new ways to utilize
            my skills to find the best solutions
            <br />
            <br />I have a strong technical foundation and enjoy working with
            data and developing software applications. I am eager to apply my
            knowledge and skills to develop high-quality projects.

            <br />
            <br />
            I also have strong working Knowledge of: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Algorithm
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> <i class="fas fa-draw-square"></i>
              DSA
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Parkson Tano</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
