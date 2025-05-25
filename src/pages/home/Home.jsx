import { useEffect, useState } from "react";
import Article from "../../component/article/Article";
import Navbar from "../../component/navbar/Navbar";
import styled from "./home.module.css";
function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        imageUrl: "https://shorturl.at/w48hx",
        title: "تست عنوان 1",
        readingTime: "5",
      },
      {
        id: 2,
        imageUrl: "https://shorturl.at/w48hx",
        title: "تست عنوان 2",
        readingTime: "4",
      }
    ]);
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
    </div>
  );
}

export default Home;
