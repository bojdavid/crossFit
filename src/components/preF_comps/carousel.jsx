import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpg";
import img3 from "../../assets/carousel3.jpg";
import img4 from "../../assets/carousel4.jpg";

//New

const Carousel = () => {
  const images = [
    { key: 1, img: img1 },
    { img: img2, key: 2 },
    { img: img3, key: 3 },
    { img: img4, key: 4 },
  ];
  console.log(images);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 26,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image) => {
        return (
          <div
            className={`keen-slider__slide number-slide${image.key} animate-on-scroll `}
          >
            <div className="w-fit bg-yellow-500 h-[150px] sm:h-[250px] md:h-[379px] lg:h-[479px] ">
              <img src={image.img} alt="" className="h-full w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
