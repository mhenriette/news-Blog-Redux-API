import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './components/layouts/Home'
import Article from './components/sections/Article'
import PublisherArticle from './components/sections/PublisherArticle'
import Searched from './components/sections/Searched'
import Home from './components/sections/Home'

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article/:articleId' element={<Article />} />
        <Route path='/articlePublisher/:publisherId' element={<PublisherArticle />} />
        <Route path='/Searched/:keyword' element={<Searched />} />
      </Routes>
      {/* <Home /> */}
      {/* <Publishers /> */}
    </div>
  )
}

export default App
