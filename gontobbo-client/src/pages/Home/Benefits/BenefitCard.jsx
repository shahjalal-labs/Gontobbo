const BenefitCard = ({ image, title, description, id }) => {
  return (
    <div className="flex items-center shadow-md  px-3 order border-cyan-600 py-6 rounded-lg mx-3 gap-5 mt-4  bg-gradient-to-l from-purple-50/20 via-sky-200/20 via-blue-300/20 via-orange-400/20 to-purple-100/50 hover-effect">
      <div className="border-r-2 borde-purple-950  pr-3 rayscale-100">
        <img src={image} alt="benefit" className="w-20 -20 rounded-xl r-3" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-purple-950">{title}</h1>
        <p className="text-sm text-">{description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
