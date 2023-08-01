import NavBar from "./NavBar";
import Publishers from "./Publishers";
import Hero from "./sections/Hero";
import TrendingNews from "./sections/TrendingNews";
import Wrapper from "./wrappers/Wrapper";

const News = () => {

  return (
    <div>
      <NavBar />
      <Wrapper>
        <Hero />
        <div className="grid lg:grid-cols-3 grid-cols-1 items-start my-10">
          <TrendingNews />
          <Publishers />
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
