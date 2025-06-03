import Home from "./pages/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/aboutUs";
import ArticlePage from "./pages/articlePage/articlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/notFound/notFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
    </div>
  );
}

export default App;
