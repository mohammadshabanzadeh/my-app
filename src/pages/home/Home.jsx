import { useEffect, useState } from "react";
import Article from "../../component/article/Article";
import Navbar from "../../component/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "./../../component/spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="ممد بلاگ" />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2>مقالات جدید</h2>
          <div className={styled.articles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
