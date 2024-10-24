// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

function SliderStories() {
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
            <iframe width="280" height="250" src="https://www.youtube.com/embed/060h31Fh6Wo?si=d4V2EjTMjATC_AMO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/6oh_km8YyKA?si=nldu0Y8-GMdt5YKx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/9agqBCaeAbE?si=_xrdvH-yk8wIimzt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/YCNHihH5N_o?si=JPwHCV_xveoEtiK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/vdaViL4OXH4?si=mjfAj3WP7gV6R9Es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/AxMjzQXk2Ms?si=a77ILqFFTvhsGjK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="slider-slide">
            <iframe width="280" height="250" src="https://www.youtube.com/embed/Zv6Kn4WWV78?si=XJ21K2fVWjDfjlFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Slider>
    </div>
  );
}

export default SliderStories;
