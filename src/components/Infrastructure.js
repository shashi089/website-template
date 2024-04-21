import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Infrastructure.css";
import infra1 from "../assets/pharmacy/SPP_7162 copy.jpg";
import infra2 from "../assets/pharmacy/SPP_7167 copy.jpg";
import infra3 from "../assets/pharmacy/SPP_7140 copy 2.jpg";
import infra4 from "../assets/pharmacy/SPP_7119 copy.jpg";
import infra5 from "../assets/pharmacy/SPP_7157 copy.jpg";
import infra6 from "../assets/pharmacy/SPP_7108 copy.jpg";
import infra7 from "../assets/pharmacy/SPP_7132 copy 2.jpg";
import infra8 from "../assets/pharmacy/SPP_7145 copy 2.jpg";

const images = [
  {
    id: 1,
    image: infra1,
  },
  {
    id: 2,
    image: infra2,
  },
  {
    id: 3,
    image: infra3,
  },
  {
    id: 4,
    image: infra4,
  },
  {
    id: 5,
    image: infra5,
  },
  {
    id: 6,
    image: infra6,
  },
  {
    id: 7,
    image: infra7,
  },
  {
    id: 8,
    image: infra8,
  },
];

const Infrastructure = () => {
  return (
    <div id="infrastructuremain" className="py-5">
      <div id="infrastructure">
        <Container>
          <h1 className="text-center py-3 ">INFRASTRUCTURE</h1>
          <div className="image-grid">
            {images.map((element, index) => (
              <div className="image-item" key={index}>
                <Image
                  className="image"
                  src={element.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Infrastructure;
