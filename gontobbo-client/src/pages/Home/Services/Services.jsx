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
          <ServiceCard key={service._id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
