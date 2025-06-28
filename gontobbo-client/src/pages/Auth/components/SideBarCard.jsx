const SideBarCard = ({ sideBar }) => {
  const { title, description } = sideBar;
  return (
    <div className="card shadow-sm bg-gradient-to-l from-sky-200 via-purple-100 to-purple-100 shadow-sm bg-base-100">
      <div className="card-body">
        <h3 className="card-title text-lg text-primary">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SideBarCard;
