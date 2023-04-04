import React from "react";

const NewsCard = ({ urlToImage, title, url }) => {

    return <div className="m-4">
        <div className="w-[260px] h-[170px]">
            <img src={urlToImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <p className="text-clip line-clamp-2 mt-3">{title}</p>

    </div>;
};

export default NewsCard;
