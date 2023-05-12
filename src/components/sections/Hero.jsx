import React from "react";
import HeroCard from "../ui/HeroCard";
import { useGetHomeNewsQuery } from "../../features/newsSlice";
import Wrapper from "../wrappers/Wrapper";

const Hero = () => {
    const { data, isSuccess } = useGetHomeNewsQuery();
    const date = new Date()
    console.log(isSuccess, 'Success')
    return (
            <div className="m-5">
                <div className="text-2xl font-bold my-4 text-red-700 flex justify-between items-center"><h1>
                    Welcome to THE NEWS
                </h1>
                    <p>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
                </div>
            <div className=" grid grid-cols-1 space-y-5 lg:space-y-0 lg:grid-cols-5 lg:grid-rows-4 gap-3 lg:h-[400px]">
                    {isSuccess ? (
                        data.slice(-4).map((el, index) => (
                            <HeroCard
                                className={`${index === 0
                                    ? "lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-5"
                                    : index === 1
                                        ? "lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-3"
                                        : index === 2
                                            ? "lg:cols-start-4 lg:col-end-5 lg:row-start-3 lg:row-end-5"
                                            : index === 3
                                                ? "lg:cols-start-5 lg:col-end-6 lg:row-start-3 lg:row-end-5"
                                                : null
                                    }`}
                                {...el}
                                id={el.id}
                                index={index}
                                key={el.id}
                            />
                        ))
                    ) : (
                        <h1>loading</h1>
                    )}
                </div>
        </div>
    );
};

export default Hero;
