import Projects from "./Projects";
import PageHeader from "../Components/PageHeader";

const Home = () => {
  return (
    <div>
      <PageHeader title="Georges Linel" backLink="/about-me" />
      <Projects />
    </div>
  );
};

export default Home;
