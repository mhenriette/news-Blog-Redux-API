import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ urlToImage, title, index }) => {
    const mystate = { name: 'hello from parent' }

    return <div className="m-4">
        <Link to={`/article/${index}`}>
            <div className="w-[260px] h-[170px]">
                <img src={urlToImage} alt={title} className="w-full h-full object-cover" />
            </div>
            <p className="text-clip line-clamp-2 mt-3">{title}</p>
        </Link>

    </div >;
};

export default NewsCard;
