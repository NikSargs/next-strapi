import axios from "axios"
import HighLightArticle from "../components/Blog/HighLightArticle"
import SubscribeToNewsletter from "../components/Blog/SubscribeToNewsletter"
import FeaturedItems from "../components/FeaturedArticles/FeaturedItems"
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils"
import ArticleComponent from "../components/Blog/ArticleComponent"

export default async function Page({ }) {
    const data = await fetchBlogArticles();
    // console.log(data);
    const foundHighlightArticle = data.find(
        (article) => article.isHightlight
    )
    const featuredArticles = data.filter(
        (article) => !article.isHightlight
    )
    console.log(featuredArticles)
    return <main className="blog-page">
        <HighLightArticle data={foundHighlightArticle} />
        <SubscribeToNewsletter />
        <FeaturedItems items={featuredArticles} />
    </main>
}

export const revalidate = 300;