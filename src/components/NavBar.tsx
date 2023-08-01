import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./wrappers/Wrapper";
import { useSelector } from "react-redux";
const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  const getKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };
  const navigate = useNavigate();
  const goToSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && navigate(`searched/${keyword}`);
  };
  const state = useSelector<{theme:string}>((state) => state.theme);
  return (
    <div className="w-full px-6 py-4 bg-red-700 mb-10 ">
      <Wrapper>
        <div className="flex space-y-5 md:space-y-0 flex-col lg:flex-row justify-between items-center">
          <div className=" font-bold text-base md:text-4xl text-white uppercase">
            The News
          </div>
          <div className="flex text-white font-bold  items-center">
            <Link className=" mx-3 lg:mx-6 active-Link" to="/sport">
              Sport
            </Link>
            <Link className=" mx-3 lg:mx-6 active-Link" to="/cinema">
              Cinema
            </Link>
            <Link className=" mx-3 lg:mx-6 active-Link" to="/politics">
              Politics
            </Link>
            <Link className=" mx-3 lg:mx-6 active-Link" to="/science">
              Science
            </Link>
            <Link className=" mx-3 lg:mx-6 active-Link" to="/tech">
              Tech
            </Link>
          </div>
          <div>
            <div>
              <input
                placeholder="Search news..."
                className="text-gray-400 rounded-md md:px-2 md:py-3 p-2 outline-none"
                type="text"
                value={keyword}
                onChange={getKeyword}
                onKeyPress={goToSearch}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBar;
