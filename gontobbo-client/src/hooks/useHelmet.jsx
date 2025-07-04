import { Helmet } from "react-helmet-async";

const UseHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || Gontobbo</title>
    </Helmet>
  );
};

export default UseHelmet;
