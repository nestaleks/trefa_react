import imgAbout1 from './img/about-img-1.jpg';
import imgAbout2 from './img/about-img-2.jpg';
import imgAbout3 from './img/about-img-3.jpg';
import imgAbout4 from './img/about-img-4.jpg';
import imgAbout5 from './img/about-img-5.jpg';
import imgAbout6 from './img/about-img-6.jpg';
import imgAbout7 from './img/about-img-7.jpg';

import React from "react";
import Slider from "react-slick";

function SliderBasement() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container">
      <Slider className="slider-wrapper" {...settings}>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/nPDAEdJUWKM?si=PmPaXUbUX7aYw3fI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/sS-qzb6o-Kg?si=Lk9Vq_dz1zoxEjjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/4fltCQu2qAU?si=LNxTubCFWgqMOBgX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout1} alt="" />
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout2} alt="" />
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout3} alt="" />
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout4} alt="" />
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout5} alt="" />
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/v3mY3Efb7OE?si=tcnbIfFoBNaV8FdI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout6} alt="" />
        </div>
        <div className="slider-slide">
            <img width="280" height="250" src={imgAbout7} alt="" />
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/0g7hPyv6kLc?si=zt4jzxUXQHtx8XNH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/vJ5yarOZLxg?si=Hu8CMUbfgWzjcteU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/FxAz4uLTmWM?si=Fk2WDVrqNjdBq2Ex" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default SliderBasement;
