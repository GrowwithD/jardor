import FooterClient from "./FooterClient";
import { getSiteInfo } from "@/lib/fetchers";

export default async function Footer() {
    const siteInfo = await getSiteInfo();

    return <FooterClient siteInfo={siteInfo} />;
}