/** @format */

import Carosul from "./Carosul";
import Carosol from "./Carosol";
import Cards from "./Cards";
import Video from "./Video";
import Finding from "./Finding";
import Search from "./Search";
import Questions from "./Questions";
import Cabinfind from "./Cabinfind";
import Footer from "./Footer";
import Places from "./Places";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [active, setactive] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [active]); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <div className="pr-5 pl-5">
        <Carosul />
      </div>
      <div className="flex justify-center -mt-12 z-30 ">
        <Search />
      </div>
      <div>
        <div id="cards-section" className="space-y-3 ml-8 pt-10">
          <Typography
            variant="h3"
            color="blue-gray"
            className="font-bold flex justify-center"
          >
            Discover our idyllic countryside cabins
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="font-medium flex justify-center"
          >
            Fully equipped kitchen and bathroom with plenty of walking and
            cycling routes to explore.
          </Typography>
        </div>
        <Places />
      </div>
      <div id="finding-section">
        <Cards />
      </div>
      <div>
        <Carosol />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <Finding />
      </div>
      <div>
        <Questions />
      </div>
      <div id="questions-section">
        <Cabinfind />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
