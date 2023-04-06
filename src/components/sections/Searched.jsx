import { Link, useParams } from "react-router-dom";
import { useSearchArticleQuery } from "../../features/newsSlice";
import ArticleCard from "../ui/ArticleCard";
import Wrapper from "../wrappers/Wrapper";

const Searched = () => {
    const { keyword } = useParams();
    const { data, isSuccess } = useSearchArticleQuery(keyword);
    return (
        <Wrapper>
            {isSuccess ? (
                <div>
                    {data.length > 0 ? (
                        <div>
                            <button className="bg-red-700 px-2 py-3 m-4 text-white font-semibold hover:bg-gray-600">
                                <Link to="/">Back Home</Link>
                            </button>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                                {data.map(({ title, urlToImage, url }, index) => (
                                    <ArticleCard
                                        title={title}
                                        urlToImage={urlToImage}
                                        url={url}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-red-700 text-4xl font-bold text-center flex justify-center items-center h-screen w-full flex-col gap-5">
                            <h1>{`Article with keyword ${keyword} was not found!!!!`}</h1>
                            <button className="bg-red-700 px-2 py-4 m-4 text-white font-semibold hover:bg-gray-600  text-sm">
                                <Link to="/">Go Back to Home Page</Link>
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="h-screen w-full text-red-700 flex justify-center items-center text-3xl font-bold">
                    Loading....
                </div>
            )}
        </Wrapper>
    );
};

export default Searched;
