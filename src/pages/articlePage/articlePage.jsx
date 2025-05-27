import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../component/spinner/Spinner";

function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar title="ممد بلاگ" />
      <div className={styled.articleWrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container">
            <h2>{article.title}</h2>
            <div className={styled.articleInfo}>
              <span>تاریخ : {article.date}</span>
              <span>نویسنده : {article.athor}</span>
              <span>مدت زمان خواندن : {article.readingTime} دقیقه</span>
            </div>

            <img src={article.imageUrl} alt="" />

            <p>{article.content}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default ArticlePage;
