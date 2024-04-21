import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bg4 from "../assets/SPP_6854 copy 2.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="aboutmain" className="py-5">
      <div id="about">
        <div className=" py-5">
          <Container>
            <Row className="justify-content-between mt-5 about-info text-center">
              <Col lg="5" md="5" className="main-container py-5 ">
                <h1 className="text-center py-1">
                  ABOUT
                  <span> US</span>
                </h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Col>
              <Col lg="7" md="7">
                <Image className="brand-image" src={bg4} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default About;
