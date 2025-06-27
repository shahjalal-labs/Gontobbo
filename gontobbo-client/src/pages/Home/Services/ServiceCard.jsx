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
