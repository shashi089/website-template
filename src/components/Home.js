import React, { useState, useEffect } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "react-bootstrap";
import { Puff } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);
  console.log(loading);
  return (
    <div>
      <section className="home_section" id="home">
        <div className="header_height">
          {loading && (
            <div className="loader-container">
              <Puff
                visible={true}
                height="100"
                width="100"
                color="#ff5500"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          <div className="carousel2">
            <div
              className={` ${
                loading ? "image-container-hidden" : "image-container"
              }`}
            >
              <div className="overlay">
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
