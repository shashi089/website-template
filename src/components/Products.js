import React from "react";
import "./Product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  machine1,
  machine2,
  machine3,
  machine4,
  machine5,
  machine6,
  machine7,
  machine8,
  machine9,
  machine10,
} from "../assets/machines";

import { Container, Image } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

const Products = () => {
  const images = [
    {
      id: 1,
      image: machine1,
    },
    {
      id: 2,
      image: machine2,
    },
    {
      id: 3,
      image: machine3,
    },
    {
      id: 4,
      image: machine4,
    },
    {
      id: 5,
      image: machine5,
    },

    {
      id: 6,
      image: machine6,
    },
    {
      id: 7,
      image: machine7,
    },
    {
      id: 8,
      image: machine8,
    },
    {
      id: 9,
      image: machine9,
    },
    {
      id: 10,
      image: machine10,
    },
  ];
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowLeft style={{ color: "#ff6565", fontSize: "25px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowRight style={{ color: "#ff6565", fontSize: "25px" }} />
      </div>
    );
  };
  const carouselProperties = {
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 326,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.25,
        },
      },
    ],
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div className="my-5 py-5">
      <Container id="products">
        <h1 className="text-center py-3 ">MACHINE INFRASTRUCTURE</h1>
        <p className="pb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>

        <div className="carousel">
          <Slider {...carouselProperties}>
            {images.map((val) => {
              return (
                <div className="image-container2" key={val.id}>
                  <Image className="image" src={val.image} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Products;
