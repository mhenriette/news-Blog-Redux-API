import React from "react";
import { useGetPublisherQuery } from "../features/newsSlice";

const Publishers = () => {
    const { data } = useGetPublisherQuery();
    console.log(data)
    return <div>

    </div>;
};

export default Publishers;
