import React from "react";
import { Link } from "react-router-dom";

const CinemaNews = () => {
    return <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-red-700 text-lg lg:text-4xl font-bold">Cinema news coming soon!!!</h1>
        <Link to="/" className="bg-red-700 text-white font-semibold px-16 py-4 text-lg rounded-sm my-10 hover:bg-red-500">back home</Link>
    </div>;
};

export default CinemaNews;
