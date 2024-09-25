import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/nav-icon4.svg";

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#work-experience" className={activeLink === 'work-experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work-experience')}>Work Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link
                href="https://1drv.ms/w/c/ef37c8089343e019/EcXc5VNsYRxNrqzXKHBZY94BYd269vrqeO5hoXbbQIEhKQ"
                target="_blank"
                className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('resume')}
              >
                Resume
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
