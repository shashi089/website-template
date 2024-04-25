import React, { useState, useEffect } from "react";
import "./Product.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Puff } from "react-loader-spinner";
import { Container, Image } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

const Products = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);
  const images = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958768/JPLaboratories/Machines/SPP_6910_copy_fsyslq.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958804/JPLaboratories/Machines/SPP_6949_copy_bpbv5d.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958782/JPLaboratories/Machines/SPP_6996_copy_w6vbmz.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958775/JPLaboratories/Machines/SPP_6966_copy_mmtyjt.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958795/JPLaboratories/Machines/SPP_7002_copy_voojkp.jpg",
    },

    {
      id: 6,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958775/JPLaboratories/Machines/SPP_7022_copy_2_shcukn.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958778/JPLaboratories/Machines/SPP_7023_copy_2_vyxtga.jpg",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958782/JPLaboratories/Machines/SPP_7049_copy_2_eepk0g.jpg",
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958780/JPLaboratories/Machines/SPP_7058_copy_2_rzbd4t.jpg",
    },
    {
      id: 10,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713958783/JPLaboratories/Machines/SPP_7067_copy_2_loma0v.jpg",
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
        <div className={` ${loading ? "m-container-hidden" : "m-container"}`}>
          <p className="pb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
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
        </div>
      </Container>
    </div>
  );
};

export default Products;
