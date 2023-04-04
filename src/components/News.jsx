import React from "react";
import { useGetNewsQuery } from "../features/newsSlice";
import NavBar from "./NavBar";
import NewsCard from "./NewsCard";


const News = () => {
    const { data, isSuccess } = useGetNewsQuery()

    return <div className="h-screen">
        <NavBar />
        <div className="flex flex-col ">
            <h1 className="font-bold flex text-3xl truncate justify-between items-center flex-nowrap text-red-700 my-4 mx-4 after:w-4/5 after:h-1 after:block after:bg-red-700 ">Trending News</h1>
            <div className="grid grid-cols-5">
                {isSuccess ?
                    data.map(article => {
                        const { urlToImage, title, url } = article
                        return <NewsCard urlToImage={urlToImage} title={title} url={url} />
                    })
                    : <h1>Loading...</h1>}
            </div>
        </div>

    </div>;
};

export default News;
