import { useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../component/input/input";
import Textarea from "../../component/textarea/textArea";
import axios from "axios";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageUrl: "",
  });

  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeArticleMassage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: "10",
      imageUrl: article.imageUrl,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      athor: article.athor,
      content: article.message,
    });
  };

  return (
    <div>
      <Navbar title="ممد بلاگ" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله</h1>

          <Input
            label="عنوان"
            name="title"
            handleChange={handleChangeArticle}
          />
          <Input label="تاریخ" name="date" handleChange={handleChangeArticle} />
          <Input
            label="مدت زمان خواندن"
            name="readingTime"
            handleChange={handleChangeArticle}
          />
          <Input
            label="نویسنده"
            name="athor"
            handleChange={handleChangeArticle}
          />
          <Input
            label="آدرس عکس"
            name="imageUrl"
            handleChange={handleChangeArticle}
          />
          <Textarea label="متن" handleChange={handleChangeArticleMassage} />

          <div className={styled.buttonWrapper}>
            <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
