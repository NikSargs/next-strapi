
import ArticleInto from "@/app/components/Blog/ArticleInto";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils"
import ArticleOverview from "../ArticleOverview";
import ArticleComponent from "@/app/components/Blog/ArticleComponent";
import { Component } from "react";

export default async function Page({ params }) {
    const { article: slug } = params;

    const articles = await fetchBlogArticles();

    const article = articles.find((article) => article.slug === slug);
    return (
        <main>
            <ArticleInto article={article} />
            <section className="article-section">
                <ArticleOverview article={article} />
                {/* {article.articleContent.map((component) => (
                    <ArticleComponent key={component.id} component={component} />
                ))} */}
            </section>

        </main>
    )
}


export async function generateStaticParams() {
    const articles = await fetchDataFromStrapi("articles");

    return articles.map((article) => ({
        article: article.attributes.slug,
    }))
}