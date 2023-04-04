import React from "react";

const NavBar = () => {
    return <div className="w-full px-6 py-4 bg-red-700 mb-10 ">
        <div className="flex justify-between items-center">
            <div className=" font-bold text-4xl text-white uppercase">News</div>
            <div>
                <input placeholder="Search news..."
                    className="text-gray-400 rounded-md px-2 py-3"
                    type="text"
                />
            </div>
        </div>
    </div>;
};

export default NavBar;
