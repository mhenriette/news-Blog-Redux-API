import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetNewsQuery } from "../../features/newsSlice";
import { useState } from "react";



const Article = () => {
    const params = useParams()
    const { articleId } = params
    console.log(articleId)
    const { data, isSuccess } = useGetNewsQuery()
    const articleData = isSuccess ? data.find((article, index) => parseInt(articleId, 10) === index) : null
    return <div className="mx-auto container px-32 my-12">
        {articleData !== null ?
            <div className="m-5">
                <button className="bg-red-700 px-2 py-3 text-white font-semibold"><Link to='/'>Go back to articles</Link></button>
                <div>
                    <h1 className="font-semibold text-2xl w-3/5 my-3">{articleData.title}</h1>
                    <p className="font-bold text-gray-400 text-base"> Published at: {articleData.publishedAt}</p>
                    <div className="w-3/4 h-auto mt-3"><img src={articleData.urlToImage} alt="articleImage" className=" object-cover w-full h-full" /></div>
                    <h2 className="text-gray-400 italic text-xl w-1/2 my-3">{articleData.description}</h2>
                    <p className="w-3/4 text-lg my-3">{articleData.content}</p>
                    <p className="font-bold"> To read more <a href={articleData.url} className="text-red-700 hover:underline">Click here</a></p>
                </div>
            </div> :
            <div className="h-screen w-full text-red-700 flex justify-center items-center text-3xl font-bold">Loading....</div>}
    </div >
};

export default Article;
