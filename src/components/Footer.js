import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer align-items-center">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-end align-items-center">
            <div className="social-icon text-center align-items-center">
            <a href="https://www.linkedin.com/in/kritin-potluru-a53044130/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_kritin_p_/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
