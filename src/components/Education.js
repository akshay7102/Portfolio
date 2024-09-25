import { Container, Row, Col, Card } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import UMHB from "../assets/img/UMHB.png";
import JNTU from "../assets/img/JNTU2.png"

// Reusable EducationCard component
const EducationCard = ({ imageSrc, altText, title, degree, duration, gpa }) => (
    <Card style={{ width: '300px', margin: '20px', background: 'black', color: 'white' }}>
      <Card.Img variant="top" src={imageSrc} alt={altText} />
      <Card.Body>
        <Card.Title style={{ textAlign: 'center', marginTop: '10px' }}>{degree}</Card.Title>
        <Card.Text>
          {title}
          <br />
          {duration}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
  
  // Education component using EducationCard
  export const Education = () => {
    return (
      <section className="education" id="education" style={{ background: 'black', color: 'white', paddingTop: '20px' }}>
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="text-center" style={{ color: 'white' }}>Education</h2> <br />
                    
                    <div className="d-flex flex-wrap justify-content-center">
                      <EducationCard
                        imageSrc={UMHB}
                        altText="Univeristy of Mary Hardin Baylor, Temple"
                        title="Univeristy of Mary Hardin Baylor, Temple"
                        degree="Master of Science - Information Systems"
                        duration="January 2019 - December 2019"
                      />
                      <EducationCard
                        imageSrc={JNTU}
                        altText="Jawaharlal Nehru Institute of Technology"
                        title="Jawaharlal Nehru Institute of Technology"
                        degree="Bachelors of Engineering - Computer Science and Engineering"
                        duration="May 2013 - May 2017"
  
                      />
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
      </section>
    );
  };