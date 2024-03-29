import Link from "next/link"

const HighLightArticle = ({ data }) => {
    const { headline, exerpt, slug, featuredImage } = data;
    return (
        <article className="highlight-article">
            <div className="highlight-article__info">
                <h3>{headline}</h3>
                <p className="copy">{exerpt}</p>
                <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
                    Read more
                </Link>
            </div>
            <img className="highlight-article__image" src={featuredImage} alt="" />
        </article>
    )
}

export default HighLightArticle