import { Link } from "react-router-dom";
const PublisherCard = ({ name, id }) => {
  return (
    <Link to={`/articlePublisher/${id}`}>
      <div className="bg-red-600 rounded-xl px-1 py-2 hover:bg-gray-600">
        <h1 className="font-bold text-white text-lg text-center text-ellipsis line-clamp-1">
          {name}
        </h1>
      </div>
    </Link>
  );
};
export default PublisherCard;
