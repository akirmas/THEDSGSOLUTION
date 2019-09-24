import React, { useContext } from "react";

import Banner from "../components/sections/Banner";
import WhoWeAre from "../components/sections/WhoWeAre";
import UsefulProducts from "../components/sections/UsefulProducts";
import ExpertiseAreas from "../components/sections/ExpertiseAreas";

import { AppContext } from "../context/app";

const Home = () => {
  const {
    pages: {
      home: { whoWeAre, usefulProducts, expertiseAreas, testimonials }
    }
  } = useContext(AppContext);

  return (
    <>
      {/* <ImageSlider images={mainSlider} /> */}
      <Banner />
      <WhoWeAre {...whoWeAre} />
      <UsefulProducts {...usefulProducts} />
      <ExpertiseAreas {...expertiseAreas} />
    </>
  );
};

export default Home;
