import axios from "axios";
import Link from "next/link";
const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337/api";

export async function fetchDataFromStrapi(route) {
    const url = `${BASE_URL}/${route}`;

    try {
        const response = await axios.get(url);
        return response.data.data;
    } catch (err) {
        console.log(err);
        throw new Error(`Could not fetch data from ${url}`);
    }

}

export function processInforBlocks(data) {
    const infoBlockRaw = data.attributes.info_blocks.data;
    return infoBlockRaw.map((InfoBlock) => ({
        ...InfoBlock.attributes,
        imageSrc: BASE_URL + InfoBlock.attributes?.image?.data?.attributes?.url,
        id: InfoBlock.id,
        button: createInfoBlockButton(InfoBlock.attributes.button),
    }))
}

function createInfoBlockButton(buttonData) {
    if (!buttonData) {
        return null;
    }
    return (
        <Link href={`/${buttonData.slug}`}
            className={`btn btn--medium btn--${buttonData.color}`}>

            {buttonData.text}
        </Link>
    )
}
export async function fetchBlogArticles() {
    const blogData = await fetchDataFromStrapi("articles?populate=deep");
    const processBlogArticles = blogData.map(processBlogArticle);

    processBlogArticles.sort(
        (a, z) => new Date(z.publishedAt) - new Date(a.publishedAt)
        )
        
    
    return processBlogArticles;
}
function processBlogArticle(article) {
        return {
        ...article.attributes,
        id: article.id,
        featuredImage: 
            BASE_URL + article.attributes?.featuredImage?.data.attributes?.url
    }
}