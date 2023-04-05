import React from "react";
import News from "../News";
import Publishers from "../Publishers";
import Footer from "./Footer";
import Wrapper from "../ui/Wrapper";

const Home = () => {
    return <div>
        <Wrapper>

            <News />
            <Publishers />
            <Footer />

        </Wrapper>
    </div>;
};

export default Home;
