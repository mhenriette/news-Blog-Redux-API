import { useGetPublisherQuery } from "../features/newsSlice";
import PublisherCard from "./ui/PublisherCard";
import Wrapper from "./wrappers/Wrapper";
const Publishers = () => {
    const { data, isSuccess } = useGetPublisherQuery();

    return (
        <Wrapper>
            <div className="my-10 mx-4">
                {isSuccess && (
                    <div>
                        <h1 className="font-bold flex text-3xl truncate justify-between items-center flex-nowrap text-red-700 my-10 lg:after:w-4/5 lg:after:h-1 lg:after:block after:bg-red-700 ">
                            Publishers
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 ">
                            {data.map(({ name, id, uniqueId }) => (
                                <PublisherCard name={name} id={id} key={uniqueId} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Publishers;
