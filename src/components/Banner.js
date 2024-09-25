import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/ProfileImage.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Akshay Reddy Sama" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hello World! I'm`} <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Akshay Reddy Sama" ]'><span className="wrap">{text}</span></span></h1>
                  <p>With over 8 years of experience, I specialize in designing UI web applications using a variety of technologies, including HTML5, CSS3, JavaScript, and frameworks like React and AngularJS. I have hands-on expertise in JavaScript MVC frameworks and extensive experience in developing high-performance single-page applications (SPAs). My skills also include creating components with React.js, utilizing React Router for efficient routing, and documenting components effectively. Additionally, I am proficient in Agile methodologies and have a strong background in automation and CI/CD processes using tools like GitLab and Jenkins. My development experience spans across various environments, including desktop, mobile, and tablet applications, with a focus on user interface design and performance.</p>
                <button onClick={() => {
                  window.location.hash = "#connect";
                  console.log('connect');
                  
                }}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
