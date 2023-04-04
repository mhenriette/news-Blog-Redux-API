import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/layouts/Home'
import Article from './components/layouts/Article'

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/article/:articleId' element={<Article />}></Route>
      </Routes>
      {/* <Home /> */}
      {/* <Publishers /> */}
    </div>
  )
}

export default App
