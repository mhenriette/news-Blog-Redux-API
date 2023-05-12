const ArticleCard = ({ urlToImage, title, url }) => {
    return (
        <div className="m-4 group">
            <a href={url}>
                <div className=" w-full h-60 lg:w-[300px] lg:h-[200px] relative">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30"></div>
                    <img
                        src={urlToImage}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-clip line-clamp-2 mt-3 text-lg font-medium group-hover:text-red-700 group-hover:underline">
                    {title}
                </p>
            </a>
        </div>
    );
};

export default ArticleCard;
