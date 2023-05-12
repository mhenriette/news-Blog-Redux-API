import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ className, urlToImage, title, author, id }) => {
    return <div className={`${className} relative text-white `} >
        <Link to={`/home-article/${id}`}>
            <div className="bg-black absolute z-10 w-full h-full opacity-40 "></div>
            <img src={urlToImage} className="w-full h-full object-cover object-top" />
            <div className="my-5 mx-2  absolute bottom-0 z-10 ">
                <h1 className="text-xl font-semibold line-clamp-1">{title}</h1>
                <p className=" before:h-auto before:mr-2 before:w-2 before:block mt-2  flex before:bg-red-700">{author}</p>
            </div>
        </Link>
    </div >;
};
export default HeroCard;
