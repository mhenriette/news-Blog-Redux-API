import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./wrappers/Wrapper"
const NavBar = () => {
    const [text, setText] = useState("")
    const getText = (event) => {
        setText(event.target.value)
    }
    const navigate = useNavigate()
    const goToSearch = (event) => {
        event.key === 'Enter' && navigate(`Searched/${text}`)
    }
    return <div className="w-full px-6 py-4 bg-red-700 mb-10 ">
        <Wrapper>
            <div className="flex justify-between items-center">
                <div className=" font-bold text-base md:text-4xl text-white uppercase">The News</div>
                <div>
                    <input placeholder="Search news..."
                        className="text-gray-400 rounded-md md:px-2 md:py-3 p-2 outline-none"
                        type="text"
                        value={text}
                        onChange={getText}
                        onKeyPress={goToSearch}
                    />
                </div>
            </div>
        </Wrapper>
    </div>;
};

export default NavBar;
