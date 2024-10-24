import React from "react";
import Slider from "react-slick";

function SliderFounding() {
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
            <iframe width="280" height="250" src="https://www.youtube.com/embed/GWTVaFwDEZw?si=iEBR8a62TmsiHrnh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/YYM_5imQyt8?si=Ji_W9Cd7LcGrk-88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/XGGax8lFoQI?si=Cej8njpDvaIPkKxf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/-6aNZyetU24?si=NpXD0F7HZ7q_WO_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/YYM_5imQyt8?si=Ji_W9Cd7LcGrk-88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default SliderFounding;
