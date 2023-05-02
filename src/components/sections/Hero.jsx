import React from "react";
import HeroCard from "../ui/HeroCard";
import { useGetHomeNewsQuery, useGetNewsQuery } from "../../features/newsSlice";
import Wrapper from "../wrappers/Wrapper";

const Hero = () => {
    const { data, isSuccess } = useGetNewsQuery();
    const date = new Date()
    return (
        <Wrapper>
            <div className="m-5">
                <div className="text-2xl font-bold my-4 text-red-700 flex justify-between items-center"><h1 className=" ">
                    Welcome to THE NEWS
                </h1>
                    <p>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
                </div>
                <div className="grid grid-cols-5 grid-rows-4 gap-3 h-[400px]">
                    {isSuccess ? (
                        data.slice(0, 4).map((el, index) => (
                            <HeroCard
                                className={`${index === 0
                                    ? "col-start-1 col-end-4 row-start-1 row-end-5"
                                    : index === 1
                                        ? "col-start-4 col-end-6 row-start-1 row-end-3"
                                        : index === 2
                                            ? "cols-start-4 col-end-5 row-start-3 row-end-5"
                                            : index === 3
                                                ? "cols-start-5 col-end-6 row-start-3 row-end-5"
                                                : null
                                    }`}
                                {...el}
                                index={index}
                            />
                        ))
                    ) : (
                        <h1>loading</h1>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Hero;
