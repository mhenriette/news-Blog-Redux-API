import { useGetNewsQuery } from "../features/newsSlice";
import NavBar from "./NavBar";
import Publishers from "./Publishers";
import Hero from "./sections/Hero";
import NewsCard from "./ui/NewsCard";
import Wrapper from "./wrappers/Wrapper";

const News = () => {
  const { data, isSuccess } = useGetNewsQuery();

  return (
    <div className="">
      <NavBar />
      <Wrapper>
        <Hero />
        <div className="grid grid-cols-3 items-start my-10">
          {isSuccess ? (
            <div className=" col-span-2">
              <h1 className="text-red-700 text-2xl font-bold title-anchor mx-5 flex mb-5">Trending news</h1>
              <div className="grid grid-cols-1  lg:grid-cols-3">
                {data.slice(5).map((article, index) => {
                const { urlToImage, title, id } = article;
                return (
                  <NewsCard
                    urlToImage={urlToImage}
                    title={title}
                    key={id}
                    index={index}
                  />
                );
              })}
            </div>
            </div>
          ) : (
            <div className="h-screen w-full text-red-700 flex justify-center items-center text-3xl font-bold">
              Loading....
            </div>
          )}
          <Publishers />
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
