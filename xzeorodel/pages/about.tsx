import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import SmallWithSocial from "../components/Footer";
import { NextSeo } from "next-seo";
import SplitWithImage from "../components/AboutUs";
import SimpleThreeColumns from "../components/Features";
import WithSpeechBubbles from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Magic Safari ✨ - About Us"
        description="Our agency has been working on putting our customers in the first place so you as your clients you will have the best experience that you wish."
        canonical="https://www.xeozrodel.fr/about"
        openGraph={{
          url: "https://www.xeozrodel.fr/about",
          title: "Magic Safari ✨ - About",
          description:
            "Our agency has been working on putting our customers in the first place so you as your clients you will have the best experience that you wish.",
          images: [
            {
              url: "https://www.xeozrodel.fr/opengraph/screen.png",
              width: 800,
              height: 600,
              alt: "The magical cat of Xeozrodel",
              type: "image/jpeg",
            },
          ],
          site_name: "Magic Safari in Xeozrodel",
        }}
        twitter={{
          handle: "@safarixeozrodel",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <main>
        <Navbar />
        <SplitWithImage />
        <br />
        <SimpleThreeColumns />
        <br />
        <WithSpeechBubbles />
      </main>

      <footer>
        <SmallWithSocial />
      </footer>
    </div>
  );
};

export default Home;
