import React from "react";
import { useGetPublisherQuery } from "../features/newsSlice";
import PublisherCard from "./ui/PublisherCard";

const Publishers = () => {
    const { data, isSuccess } = useGetPublisherQuery();
    return <div className="my-10 mx-4">
        {isSuccess &&
            <div>
                <h1 className="font-bold flex text-3xl truncate justify-between items-center flex-nowrap text-red-700 my-10 after:w-4/5 after:h-1 after:block after:bg-red-700 ">Publishers</h1>
                <div className="grid grid-cols-6 gap-3 ">
                    {data.map(el => <PublisherCard name={el.name} id={el.id} />)}
                </div>
            </div>
        }
    </div>
};

export default Publishers;
