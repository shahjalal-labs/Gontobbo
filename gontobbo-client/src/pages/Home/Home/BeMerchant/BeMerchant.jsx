import { bgDesign, locationRoundedRemovebg } from "../import";

const BeMerchant = () => {
  return (
    <div
      className="mb-10"
      style={{
        backgroundImage: `url(${bgDesign})`,
      }}
    >
      <h1 className="title text-blue-400 mb-4 font-kaushan mb-8 p-2">
        🚀 Become a Gontobbo Partner — Reach Every District!!!
      </h1>

      <div
        data-aos="zoom-in-up"
        className="bg-cyan-800/50 p-8 sm:p-18 rounded-2xl"
      >
        <div
          className="
              flex flex-col lg:flex-row-reverse items-center justify-around gap-7 "
        >
          <img
            src={locationRoundedRemovebg}
            className="w-[350px] max-sm:w-[300px]"
          />

          <div>
            <h2 className="title text-purple-950 font-courgette">
              Your Growth, Our Mission — Nationwide Delivery You Can Count On
            </h2>
            <p className="text-cyan-950">
              At Gontobbo, merchant success and customer satisfaction are at the
              heart of everything we do. We offer the most competitive delivery
              rates in Bangladesh — without compromising on speed, safety, or
              reliability. From the busiest cities to the most remote villages,
              we deliver your parcels with precision, care, and real-time
              tracking — exactly when and where they’re needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
