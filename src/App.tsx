import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/sections/Article";
import PublisherArticle from "./components/sections/PublisherArticle";
import Searched from "./components/sections/Searched";
import Home from "./components/sections/Home";
import ArticleHome from "./components/sections/ArticleHome";
import SportNews from "./pages/SportNews";
import CinemaNews from "./pages/CinemaNews";
import PoliticsNews from "./pages/PoliticsNews";
import ScienceNews from "./pages/ScienceNews";
import TechNews from "./pages/TechNews";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sport" element={<SportNews />} />
        <Route path="/cinema" element={<CinemaNews />} />
        <Route path="/politics" element={<PoliticsNews />} />
        <Route path="/science" element={<ScienceNews />} />
        <Route path="/tech" element={<TechNews />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/home-article/:homeId" element={<ArticleHome />} />
        <Route
          path="/article-publisher/:publisherId"
          element={<PublisherArticle />}
        />
        <Route path="/searched/:keyword" element={<Searched />} />
      </Routes>
    </div>
  );
}

export default App;
