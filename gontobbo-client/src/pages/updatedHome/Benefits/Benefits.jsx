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
