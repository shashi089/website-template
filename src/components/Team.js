import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Team.css";
import team2 from "../assets/team/image2.jpg";
import team3 from "../assets/team/image3.jpg";
import team4 from "../assets/team/image4.jpg";
import team5 from "../assets/team/image5.jpg";
import team6 from "../assets/team/image6.jpg";
import team7 from "../assets/team/image7.jpg";

const images = [
  {
    id: 2,
    image: team2,
    name: "Rajendra Patel",
    designation: "CEO",
  },
  {
    id: 3,
    image: team3,
    name: "Jaidev Sha",
    designation: "Project Manager",
  },
  {
    id: 4,
    image: team4,
    name: "Lorem Ispum",
    designation: "Sales Manager",
  },
  {
    id: 5,
    image: team5,
    name: "Lorem Ispum",
    designation: "HR Manager",
  },
  {
    id: 6,
    image: team6,
    name: "Lorem Ispum",
    designation: "Account Manager",
  },
  {
    id: 7,
    image: team7,
    name: "Lorem Ispum",
    designation: "Site Engineer",
  },
];

const Team = () => {
  return (
    <div id="teammain" className="py-5">
      <div id="team">
        <Container>
          <h1 className="text-center py-3 ">OUR TEAM</h1>
          <div className="image-grid">
            {images.map((element, index) => (
              <div className="image-item" key={index}>
                <Image
                  className="image"
                  src={element.image}
                  alt={`Image ${index + 1}`}
                />
                <h5 className="text-center m-0 p-0">{element.name}</h5>
                <p className="text-center mt-0 pt-0">{element.designation}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Team;
