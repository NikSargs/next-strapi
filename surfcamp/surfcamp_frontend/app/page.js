import { fetchDataFromStrapi, processInforBlocks } from "@/utils/strapi.utils";
import HeroSection from "./components/HeroSection";
import InfoBlock from "./components/InfoBlock";
import axios from "axios";

export default async function Home() {
  const data = await fetchDataFromStrapi('infoblocks-landing?populate=deep');
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
      <HeroSection headline={heroHeadline} />
      {infoBlockData.map((data) =>
        <InfoBlock key={data.id} data={data} />)}
      {/* <InfoBlock data={infoBlockData} />
      <InfoBlock data={{ ...infoBlockData, reversed: true }} /> */}
    </main>
  )
}
export const revalidate = 300;