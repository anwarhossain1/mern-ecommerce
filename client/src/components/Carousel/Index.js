import React from "react";
import img1 from "../../assets/images/image1.jpg";
import veg from "../../assets/images/vegatables.jpg";
const Index = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide m-2"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner image-fluid">
        <div className="carousel-item active ">
          <img className="d-block w-100" src={veg} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={img1} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="..." alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Index;
