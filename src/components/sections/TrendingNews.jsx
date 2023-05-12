import NewsCard from "../ui/NewsCard";
import { useGetNewsQuery } from "../../features/newsSlice";

const TrendingNews = () => {
    const { data, isSuccess } = useGetNewsQuery();
    return <div className="col-span-2">
        {isSuccess ? (
            <>
                <h1 className="text-red-700 text-2xl font-bold title-anchor mx-5 flex mb-5">Trending news</h1>
                <div className="grid grid-cols-1  lg:grid-cols-3">
                    {data.map((article, index) => {
                        const { urlToImage, title, id } = article;
                        return (
                            <NewsCard
                                urlToImage={urlToImage}
                                title={title}
                                key={id}
                                index={index}
                                id={article.id}
                            />
                        );
                    })}
                </div>
            </>

        ) : (
            <div className="h-screen w-full text-red-700 flex justify-center items-center text-3xl font-bold">
                Loading....
            </div>
        )}
    </div>
};

export default TrendingNews;
