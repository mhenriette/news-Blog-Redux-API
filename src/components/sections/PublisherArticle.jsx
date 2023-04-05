import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetArticlesQuery } from "../../features/newsSlice";
import ArticleCard from "../ui/ArticleCard";

const PublisherArticle = () => {
    const { publisherId } = useParams()
    const { data, isSuccess } = useGetArticlesQuery(publisherId)

    return <div className="m-12">
        {isSuccess &&
            <div>
                <button className="bg-red-700 px-2 py-3 m-4 text-white font-semibold hover:bg-gray-600"><Link to='/'>Back Home</Link></button>
                <h1 className="font-bold text-3xl m-4 text-red-700">{`List of ${publisherId} Articles`}</h1>
                <div className=" grid grid-cols-4 gap-3">
                    {data.map(({ title, urlToImage, url }) => <ArticleCard title={title} urlToImage={urlToImage} url={url} />)}
                </div>
            </div>
        }

    </div>;
};

export default PublisherArticle;
