import React from "react";
import { useGetNewsQuery } from "../features/newsSlice";
import NavBar from "./NavBar";
import NewsCard from "./ui/NewsCard";



const News = () => {
    const { data, isSuccess } = useGetNewsQuery()

    return <div className="">
        <NavBar />
        {isSuccess ?
            <div className="flex flex-col">

                <h1 className="font-bold flex text-3xl truncate justify-between items-center flex-nowrap text-red-700 my-4 mx-4 after:w-4/5 after:h-1 after:block after:bg-red-700 ">Trending News</h1>
                <div className="grid grid-cols-5">
                    {data.map((article, index) => {
                        const { urlToImage, title } = article
                        return <NewsCard urlToImage={urlToImage} title={title} key={index} index={index} />
                    })}
                </div>
            </div>
            : <div className="h-screen w-full text-red-700 flex justify-center items-center text-3xl font-bold">Loading....</div>}


    </div>


};

export default News;
