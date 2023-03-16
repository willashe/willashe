import React from "react";

import ContactInfo from "./ContactInfo";
import Skillset from "./Skillset";

const Home = () => (
  <div className="home">
    <div className="intro">
      <h1>Will Ashe</h1>
      <h2>
        Software Engineer
        <br />
        Austin, TX
      </h2>

      <ContactInfo />
    </div>

    <Skillset />
  </div>
);

export default Home;
