import Marquee from "react-fast-marquee";
import {
  abbott,
  activision,
  logmein,
  nike,
  openjsfoundation,
  tech,
} from "../../../assets/Brands";

const brands = [abbott, activision, logmein, nike, openjsfoundation, tech];
const ClientLogosMarquee = () => {
  return (
    <div className="py-16 bg-base-200">
      <h1 className="text-center text-xl md:text-3xl font-bold text-primary mb-4 font-kaushan mb-8">
        Powered by Partnerships Nationwide.
      </h1>

      <Marquee speed={50} pauseOnHover>
        <div className="flex flex-rap justify-around gap-[30x] w-[700px]  sm:w-[750px] md:w-[1000px]">
          {brands.map((brand) => (
            <img src={brand} alt="brand" className="w-20 h-20 mx-auto" />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ClientLogosMarquee;
