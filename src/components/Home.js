import React from "react";
import "./Home.css";
// import { Carousel } from 'react-bootstrap';
import bg4 from "../assets/SPP_6889 copy.jpg";
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
              <Image className="brand-image" src={bg4} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="header_height">
          <div className="carousel2">
            <div className="image-container">
              <h1>Explore new possibilities with us</h1>
              <h5>
                If you want to explore new possibilities to your esteemed
                company...
              </h5>
              <Image className="brand-image" src="{bg4}" alt="" />
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
