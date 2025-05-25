import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import styled from "./articlePage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticlePage() {
 
  const params = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <Navbar title="ممد بلاگ" />
      <div className={styled.articleWrapper}>
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
      </div>
      <Footer />
    </div>
  );
}
export default ArticlePage;
