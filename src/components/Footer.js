import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import "./Footer.css";

import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedIn from "../assets/linkedIn.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div id="contact">
      {" "}
      <div className="footer-container">
        <Container className="mt-5 mb-5">
          <Row>
            <Col lg={4} md={4} sm={4}>
              <h5>JP Laboratories</h5>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <h5>Useful Links</h5>
              <div>
                {" "}
                <a href="#home">Home</a>{" "}
              </div>
              <div>
                <a href="#about">About</a>
              </div>
              <div>
                <a href="#services">Infrastructure</a>
              </div>
              <div>
                <a href="#services">Contact</a>
              </div>
            </Col>

            {/* <Col lg={3} md={3} sm={3}>
              <h5>Our Products</h5>
              <div>CRM</div>
              <div>E-commerce</div>
              <div>Tours and Travels application</div>
            </Col> */}
            <Col lg={5} md={5} sm={4}>
              <h5>Contact </h5>
              <Row className="pt-2">
                <Col lg="1" md="1">
                  <Image className="img" src={location} alt="" />
                </Col>
                <Col className="info">
                  <div>Pune- 586101</div>
                </Col>
              </Row>
              <Row className="pt-2">
                <Col lg="1" md="1">
                  <Image className="img" src={phone} />
                </Col>
                <Col className="info">
                  <div>+91000000000</div>
                </Col>
              </Row>
              <Row className="pt-2">
                <Col lg="1" md="1">
                  <Image className="img" src={mail} alt="" />
                </Col>
                <Col className="info">
                  <div>support@jp.com</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="footer-content">
          <Container className="d-flex align-items-center justify-content-between">
            <div className="text-white">
              Copyright © 2024 JP Laboratories Pvt Ltd - All rights reserved
            </div>
            <div>
              <Image src={instagram} />
              <Image src={facebook} />
              <Image src={twitter} />
              <Image src={linkedIn} />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
