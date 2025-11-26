import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './common/Footer'
import Header from './common/Header'
import Home from './pages/Home'
import Login from "./pages/Login";
import AnimeDetail from "./pages/AnimeDetail";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Mangalist from "./pages/Mangalist";
import Listing from "./pages/Listing";
import MangaDetail from "./pages/MangaDetail";
import Category from "./pages/Category";
import SearchAnime from "./pages/SearchAnime";
import SearchManga from "./pages/SearchManga";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="listing" element={<Listing />}></Route>
          <Route path="mangalisting" element={<Mangalist />}></Route>
          <Route path="animedetail/:id"  element={<AnimeDetail />}></Route>
          <Route path="magnadetail/:ids" element={<MangaDetail />}></Route>
          <Route path="searchanime" element={<SearchAnime />}></Route>
          <Route path="searchmanga" element={<SearchManga />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="blogdetail" element={<BlogDetail />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
