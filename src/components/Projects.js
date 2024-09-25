import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      liveSite: "https://example.com",
      sourceCode: "https://github.com/example",
    },
    {
      title: "E-commerce Platform",
      description: "Online Shopping Experience",
      imgUrl: projImg2,
      liveSite: "https://example.com",
      sourceCode: "https://github.com/example",
    },
    {
      title: "Travel Explorer",
      description: "Explore New Destinations",
      imgUrl: projImg3,
      liveSite: "https://example.com",
      sourceCode: "https://github.com/example",
    },
    // Add more projects as needed
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={`project-section ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <h2 className="animate__animated animate__fadeInDown">Projects Showcase</h2>
                <p className="animate__animated animate__fadeIn">Explore some of the exciting projects I've had the opportunity to work on. Each project represents a unique challenge and a creative solution.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {projects.map((project, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link eventKey={`project${index + 1}`}>{project.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {projects.map((project, index) => (
                      <Tab.Pane key={index} eventKey={`project${index + 1}`}>
                        <ProjectCard {...project} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image" />
    </section>
  );
};
