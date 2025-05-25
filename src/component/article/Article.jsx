import styled from "./article.module.css";
// import ax from "./../../assets/images/ax.jpg"
function Article(props) {
  return (
    <div className={styled.articleWrapper}>
        <img src={props.article.imageUrl} alt=""/>
        <h3>{props.article.title}</h3>
        <p>خواندن {props.article.readingTime} دقیقه ای</p>
    </div>
  );
}

export default Article;
