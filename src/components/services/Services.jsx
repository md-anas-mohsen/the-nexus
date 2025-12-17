import "./services.scss";
import Atmosphere from "./atmosphere/Atmosphere";
import Planets from "./planets/Planets";

const Services = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <Atmosphere />
      <Planets />
    </div>
  );
};

export default Services;
