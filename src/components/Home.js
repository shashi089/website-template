import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <section className="home_section" id="home">
        <div className="header_height">
          <div className="carousel2">
            <div className="image-container">
              <div class="overlay">
                <h3>Welcome To</h3>
                <h1>Lorem Ipsum Private Limited</h1>
                <h5>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </h5>
              </div>
              <Image
                className="brand-image"
                src={
                  "https://res.cloudinary.com/dyyhowttt/image/upload/v1713963891/JPLaboratories/SPP_6889_copy_vib6pt.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
