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
