import React from "react";
import Projects from "./Projects";
import PageHeader from "../Components/PageHeader";

const Home = () => {
  // TO-DO: Add page transitions
  return (
    <div>
      <PageHeader title="Georges" backLink="/about-me" />
      <Projects />
    </div>
  );
};

export default Home;
