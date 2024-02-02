import { formDate } from "@/utils/strapi.utils"

const ArticleInto = ({ article }) => {
    console.log(article)
    return <div className="article-intro">
        <div className="article-intro__background">
            <img src={article.featuredImage} alt="" />
        </div>
        <h3 className="article-intro__headline">{article.headline}</h3>
        <p className="copy-small bold">{formDate(article.publishedAt)}</p>
        <p className="copu-small">{article.author}</p>
    </div>
}

export default ArticleInto