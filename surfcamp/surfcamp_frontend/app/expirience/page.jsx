import HeroSection from "./../components/HeroSection";
import InfoBlock from "./../components/InfoBlock";
import { fetchDataFromStrapi, processInforBlocks } from "@/utils/strapi.utils";

export default async function Home() {
    const data = await fetchDataFromStrapi('infoblocks-expirience?populate=deep');
    const infoBlockData = processInforBlocks(data);
    console.log(infoBlockData)
    const heroHeadline = (
        <>
          <h1>barrel.</h1>
          <h1>your.</h1>
          <h1>happiness</h1>
        </>
      )

    return (
        <main>
            <HeroSection
                imgSrc="/assets/hero-experience.png"
                headline={heroHeadline}
                theme="orange" />
            {infoBlockData.map((data) =>
        <InfoBlock key={data.id} data={data} />)}
        </main>
    )
}
export const revalidate = 300;
