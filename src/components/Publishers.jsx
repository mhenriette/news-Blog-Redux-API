import { useGetPublisherQuery } from "../features/newsSlice";
import PublisherCard from "./ui/PublisherCard";
import Wrapper from "./wrappers/Wrapper";
const Publishers = () => {
  const { data, isSuccess } = useGetPublisherQuery();

  return (
    <Wrapper>
      <div className="">
        <h1 className="text-red-700 text-2xl font-bold   flex  mb-5 title-anchor">Publishers</h1>
        <div className=" h-[800px] overflow-y-auto border-gray-700 border p-5">
        {isSuccess && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 ">
              {data.map(({ name, id, uniqueId }) => (
                <PublisherCard name={name} id={id} key={uniqueId} />
              ))}
            </div>

        )}
      </div>
      </div>
    </Wrapper>
  );
};

export default Publishers;
