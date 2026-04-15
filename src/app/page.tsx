import { HomepageContentLoader } from "@/components/homepage-content-loader";
import { fallbackHomepageContent } from "@/lib/site-content";

export default function Home() {
  return <HomepageContentLoader initialContent={fallbackHomepageContent} />;
}
