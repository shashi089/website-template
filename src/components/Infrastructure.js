import React, { useState, useCallback } from "react";
import { Container, Image } from "react-bootstrap";
import { Audio } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; // Import Loader CSS
import "./Infrastructure.css";
import ImageViewer from "react-simple-image-viewer";

const Infrastructure = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [imagesLoaded, setImagesLoaded] = useState(0); // Counter to track loaded images

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const images = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959052/JPLaboratories/Pharmacy/SPP_7162_copy_enup6s.jpg",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959054/JPLaboratories/Pharmacy/SPP_7167_copy_juewnt.jpg",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959039/JPLaboratories/Pharmacy/SPP_7140_copy_2_z8vkhh.jpg",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959028/JPLaboratories/Pharmacy/SPP_7119_copy_mtvhbj.jpg",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959048/JPLaboratories/Pharmacy/SPP_7157_copy_cyo8yg.jpg",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959023/JPLaboratories/Pharmacy/SPP_7108_copy_ki3zo4.jpg",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959032/JPLaboratories/Pharmacy/SPP_7132_copy_2_coxrtv.jpg",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dyyhowttt/image/upload/v1713959039/JPLaboratories/Pharmacy/SPP_7145_copy_2_voc8fr.jpg",
    },
  ];
  const imageUrls = images.map((image) => image.image);
  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
    if (imagesLoaded === images.length - 1) {
      setLoading(false); // Set loading to false when all images are loaded
    }
  };
  return (
    <div id="infrastructuremain" className="py-5">
      <div id="infrastructure">
        <Container>
          <h1 className="text-center py-3 ">INFRASTRUCTURE</h1>
          {loading && (
            <div className="loader-container">
              <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          )}
          <div className="py-2 video-container">Video Player</div>
          <p className="py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="image-grid">
            {images.map((element, index) => (
              <div className="image-item" key={index}>
                <Image
                  key={index}
                  className="image"
                  src={element.image}
                  alt={`Image ${index + 1}`}
                  onClick={() => openImageViewer(index)}
                  onLoad={handleImageLoad}
                />
              </div>
            ))}
            {isViewerOpen && (
              <ImageViewer
                src={imageUrls}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Infrastructure;
