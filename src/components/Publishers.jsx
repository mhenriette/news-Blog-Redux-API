import { useGetPublisherQuery } from "../features/newsSlice";
import PublisherCard from "./ui/PublisherCard";
const Publishers = () => {
  const { data, isSuccess } = useGetPublisherQuery();

  return (
    <div>
      <h1 className="text-red-700 text-2xl mx-5 lg:mx-0 font-bold flex  mb-5 title-anchor">
        Publishers
      </h1>
      <div className=" lg:h-[800px] lg:overflow-y-auto border-gray-700 lg:border p-5">
        {isSuccess && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 ">
              {data.map(({ name, id, uniqueId }) => (
                <PublisherCard name={name} id={id} key={uniqueId} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Publishers;
