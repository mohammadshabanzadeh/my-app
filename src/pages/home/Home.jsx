import { useEffect, useState } from "react";
import Article from "../../component/article/Article";
import Navbar from "../../component/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../component/footer/Footer";
function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
   axios.get("http://localhost:8000/articles").then((result)=>{
    setArticles(result.data);
   })
   .catch((error)=>{

   })
  });

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="ممد بلاگ" />
      <div className="container">
        <h2>مقالات جدید</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
