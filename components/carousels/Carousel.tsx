import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getMediaSource from '@/utils/get-media-source';

export default function Carousel({ media }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    style: {
      backgroundColor: "#ffffff"
    } 
  };


  return (
    <Slider {...settings}>
      {media? 
        media.map((m)=>(
          <div key={"img"+m} >
            <img
              style={{
                maxHeight: "75vh",
                margin: "auto"
              }}
            src={getMediaSource(m)} />
          </div>
        ))
        :null
      }
    </Slider>
  );
};
