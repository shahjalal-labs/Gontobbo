You are a senior full-stack developer.

Rewrite the following files to follow real-world best practices, modular architecture, scalability, and clarity.
Your goals are:

✅ Improve modularity  
✅ Enhance readability  
✅ Follow real-world React + Node best practices  
✅ Modernize structure if needed  
✅ DO NOT REMOVE functionality

Also, generate a `.sh` script that:

- from .sh script i will just run the .sh file and everything will be done
- i don't wanna copy paste text manually
- my aproach is just run .sh file and everything will be auto written

### File: ./Banner/banner.constant.js

```js
export const bannerSlides = [
  {
    id: 1,
    image:
      "https://images.deepai.org/art-image/2648c5f38c224ad7974223c404913e94/an-expansive-digital-artwork-showing-the-evolution-of.jpg",
    title: "Nationwide Parcel Delivery",
    description:
      "Empowering logistics across Bangladesh — from rural paths to cityscapes.",
  },
  {
    id: 2,
    image:
      "https://images.deepai.org/art-image/0b71ee2a378546f0a6127c00c0fe899e/a-cinematic-style-scene-of-a-courier-bike-crossing-a-.jpg",
    title: "Bridge Between Communities",
    description:
      "From village roads to modern cities — connecting every destination with care.",
  },
  {
    id: 3,
    image:
      "https://images.deepai.org/art-image/573de5070917458989cf694d291bd0f3/a-top-down-aerial-view-showing-a-semi-transparent-glo.jpg",
    title: "Smart Route Tracking",
    description:
      "Visualize real-time parcel movements across all 64 districts with pinpoint precision.",
  },
  {
    id: 4,
    image:
      "https://images.deepai.org/art-image/c83f59c74f024e089fc9adbf8607d078/a-futuristic-logistics-dashboard-inspired-scene-where.jpg",
    title: "Automated Delivery Intelligence",
    description:
      "Deliver faster with AI-assisted dispatch, route optimization, and district-wise coordination.",
  },
];
```

### File: ./Banner/Banner.jsx

```jsx
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
```

### File: ./Benefits/benefit.constant.js

```js
const benefits = [
  {
    id: 1,
    title: "Live GPS Tracking Across 64 Districts",
    description:
      "Experience real-time parcel visibility from village doorstep to capital center. With GPS intelligence and district-level mapping, you’ll always know exactly where your parcel is — no blind spots, no guessing.",
    image:
      "https://images.deepai.org/art-image/da36ff6428d54753b055fc858baec37b/a-top-down-digital-map-of-bangladesh-glowing-at-night.jpg",
  },
  {
    id: 2,
    title: "Delivery Agents with Verified Identity",
    description:
      "Each delivery is handled by a verified, trained agent—ensuring your shipment is always in safe, trustworthy hands. Track agent identity, movement, and rating in one secure system.",
    image:
      "https://images.deepai.org/art-image/5332b9376fd44be69f7932342bc1d31f/a-confident-delivery-agent-in-branded-gontobbo-gear-h.jpg",
  },
  {
    id: 3,
    title: "Lightning Fast Urban Express",
    description:
      "Intra-city express delivery in under 6 hours with dedicated high-speed riders. Gontobbo turns every second into speed, keeping your delivery ahead of the clock.",
    image: "url",
  },
  {
    id: 4,
    title: "Reverse Pickup Within 24 Hours",
    description:
      "Change of mind? No problem. Schedule return pickups within 24 hours from any district with the same smooth experience as your original delivery.",
    image:
      "https://images.deepai.org/art-image/21a2cd2ee1db4d0b99cdbc019a5db48f/a-parcel-being-handed-back-to-a-delivery-rider-in-a-r.jpg",
  },
  {
    id: 5,
    title: "Intelligent Auto Pricing",
    description:
      "No surprises. Gontobbo calculates parcel fees automatically based on weight, distance, and urgency — instantly and accurately, every single time.",
    image:
      "https://images.deepai.org/art-image/03aab8fa9c6d47aeb69e17574cba4115/a-digital-screen-displaying-parcel-dimensions-weight-.jpg",
  },
  {
    id: 6,
    title: "24/7 Human + AI Support",
    description:
      "Our hybrid support team combines intelligent bots with real people to solve your issues fast — whether it’s 3PM or 3AM.",
    image:
      "https://images.deepai.org/art-image/1cffdb4415594d919865c63ed2d8bf41/split-image-showing-one-side-with-a-real-customer-sup.jpg",
  },
];

export default benefits;
```

### File: ./Benefits/BenefitCard.jsx

```jsx
const BenefitCard = ({ image, title, description, id }) => {
  return (
    <div className="flex items-center shadow-md  px-3 order border-cyan-600 py-2 sm:py-6 rounded-lg mx-3 gap-5 mt-4  bg-gradient-to-l from-purple-50/20 via-sky-200/20 via-blue-300/20 via-orange-400/20 to-purple-100/50 hover-effect">
      <div className="border-r-2 borde-purple-950  pr-3 rayscale-100">
        <img src={image} alt="benefit" className="w-20 -20 rounded-xl r-3" />
      </div>
      <div className="flex-1">
        <h1 className="sm:text-lg font-semibold text-purple-950">{title}</h1>
        <p className="text-sm text-">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
```

### File: ./Benefits/Benefits.jsx

```jsx
import benefits from "./benefit.constant";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <div className="my-16">
      <h1 className="text-center text-xl md:text-3xl font-bold text-blue-400 mb-4 font-kaushan mb-8">
        Focused on What Matters Most...
      </h1>
      {benefits.map((benefit) => (
        <BenefitCard {...benefit} key={benefit.id} />
      ))}
    </div>
  );
};

export default Benefits;
```

### File: ./ClientLogosMarquee/ClientLogosMarquee.jsx

```jsx
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
    <div className="py-16 bg-gradient-to-r from-cyan-200/10 via-sky-200/30 via-blue-300/50 via-orange-400/90 to-purple-200/30 shadow-md">
      <h1 className="text-center text-xl md:text-3xl font-bold text-cyan-500 mb-4 font-kaushan mb-8">
        Powered by Partnerships Nationwide.
      </h1>

      <Marquee speed={50} pauseOnHover>
        <div className="flex flex-rap justify-around gap-[30x] w-[700px]  sm:w-[750px] md:w-[1000px]">
          {brands.map((brand) => (
            <img
              src={brand}
              alt="brand"
              key={brand}
              className="w-20 h-20 mx-auto"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ClientLogosMarquee;
```

### File: ./Home/BeMerchant/BeMerchant.jsx

```jsx
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
```

### File: ./Home/Home.jsx

```jsx
import {
  Banner,
  BeMerchant,
  Benefits,
  ClientLogosMarquee,
  Services,
} from "./import";

const Home = () => {
  return (
    <div className="mt-3">
      <Banner />
      <Services />
      <ClientLogosMarquee />
      <Benefits />
      <BeMerchant />
    </div>
  );
};

export default Home;
```

### File: ./Home/import.jsx

```jsx
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import Services from "../Services/Services";
import BeMerchant from "./BeMerchant/BeMerchant";
import location from "../../../assets/images/location.jpg";
import locationRounded from "../../../assets/images/locationRounded.png";
import locationRoundedRemovebg from "../../../assets/images/locationRounded-removebg.png";
import bgDesign from "../../../assets/images/bgDesign.jpg";
import footerDesign from "../../../assets/images/footerBg.jpg";

export {
  Banner,
  Benefits,
  ClientLogosMarquee,
  Services,
  BeMerchant,
  location,
  locationRounded,
  locationRoundedRemovebg,
  bgDesign,
  footerDesign,
};
```

### File: ./Services/ServiceCard.jsx

```jsx
const ServiceCard = ({ description, icon: Icon, title }) => {
  return (
    <div
      className="p-4 rounded-xl g-white       bg-gradient-to-r from-cyan-200 via-sky-200 via-blue-300 via-orange-400 to-purple-200

      shadow-md
      hover:shadow-lg hover:scale-101 transition-all duration-300 hover:border-amber-500 hover:bg-gray-100 hover:border text-center"
    >
      <div className="text-4xl text-cyan-900 mb-4 flex-center">
        <Icon />
      </div>
      <h1 className="text-xl font-semibold text-purple-500 mb-2 font-kaushan">
        {title}
      </h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
```

### File: ./Services/ServiceIntro.jsx

```jsx
const ServiceIntro = () => {
  return (
    <div className="text-center mb-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-sky-300 mb-4 font-pacifico">
        Empowering Nationwide Delivery, The Smart Way
      </h2>
      <p className=" max-w-2xl mx-auto leading-relaxed text-base md:text-lg  text-teal-900 italic ">
        From Dhaka to the most remote village — Gontobbo brings you a seamless,
        tech-enabled parcel delivery experience across all 64 districts. Book,
        track, and deliver with confidence through our smart logistics network,
        built for real-world impact.
      </p>
    </div>
  );
};

export default ServiceIntro;
```

### File: ./Services/services.constant.js

```js
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaBoxes,
  FaHandHoldingUsd,
  FaWarehouse,
  FaUndoAlt,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: FaShippingFast,
    title: "Smart Parcel Booking",
    description:
      "Merchants can book parcels instantly with real-time tracking ID generation and automated delivery zone detection, making the booking process fast and frictionless.",
  },
  {
    id: 2,
    icon: FaMapMarkedAlt,
    title: "Delivery Across 64 Districts",
    description:
      "Seamless parcel delivery coverage across all 64 districts of Bangladesh, connecting urban centers to the remotest villages with guaranteed home delivery.",
  },
  {
    id: 3,
    icon: FaBoxes,
    title: "Warehouse & Hub Management",
    description:
      "Gontobbo ensures organized parcel handling through intelligent warehouse coordination, temporary storage, and optimized routing via district hubs.",
  },
  {
    id: 4,
    icon: FaHandHoldingUsd,
    title: "Cash on Delivery with Commission",
    description:
      "Agents collect payment upon delivery, and merchants are notified instantly. Delivery agents earn commission for each successful transaction.",
  },
  {
    id: 5,
    icon: FaWarehouse,
    title: "Admin-Controlled Logistics Flow",
    description:
      "Admins manage pick-up, transit, inter-city movement, and delivery assignment in real-time with full visibility into the parcel lifecycle.",
  },
  {
    id: 6,
    icon: FaUndoAlt,
    title: "Reverse Delivery & Exchange",
    description:
      "End customers can return or exchange parcels using our integrated reverse logistics, making Gontobbo a truly flexible and customer-friendly platform.",
  },
];

export default servicesData;
```

### File: ./Services/Services.jsx

```jsx
import ServiceCard from "./ServiceCard";
import ServiceIntro from "./ServiceIntro";
import servicesData from "./services.constant";

const Services = () => {
  return (
    <section className=" px-4 md:px-10 py-16 g-gradient-to-b from-cyan-50 via-sky-50 via-blue-50 via-orange-50 to-purple-50">
      <div>
        <ServiceIntro />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
```
