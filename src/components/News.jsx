import { useGetNewsQuery } from "../features/newsSlice";
import NavBar from "./NavBar";
import NewsCard from "./ui/NewsCard";
import Wrapper from "./wrappers/Wrapper";

const News = () => {
  const { data, isSuccess } = useGetNewsQuery();

  return (
    <div className="">
      <NavBar />
      <Wrapper>
        {isSuccess ? (
          <div className="flex flex-col">
            <h1 className="font-bold flex text-3xl truncate lg:justify-between items-center flex-nowrap text-red-700 my-4 mx-4 lg:after:w-4/5 lg:after:h-1 lg:after:block after:bg-red-700 ">
              Trending News
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
              {data.map((article, index) => {
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
      </Wrapper>
    </div>
  );
};

export default News;
