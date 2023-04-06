import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ urlToImage, title, index }) => {

    return <div className="m-4 group">
        <Link to={`/article/${index}`}>
            <div className="lg:w-[260px] w-full h-64 lg:h-[170px] relative">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30"></div>
                <img src={urlToImage} alt={title} className="w-full h-full object-cover" />
            </div>
            <p className="text-clip line-clamp-2 mt-3 group-hover:text-red-700 group-hover:underline">{title}</p>
        </Link>
    </div >;
};

export default NewsCard;
