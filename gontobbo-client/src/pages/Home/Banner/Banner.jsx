import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { bannerSlides } from "./banner.constant";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={2000}
      transitionTime={600}
      stopOnHover={true}
    >
      {bannerSlides.map((slide) => (
        <div key={slide.id} className="relative font-courgette">
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover h-[350px] sm:h-[500px] w-full rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center  text-center px-6 rounded-2xl">
            <h2 className="text-4xl font-bold mb-2 text-cyan-200">
              {slide.title}
            </h2>
            <p className="text-lg max-w-2xl text-blue-200">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
