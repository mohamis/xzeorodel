import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/NavBar";
import SmallWithSocial from "../components/Footer";
import { NextSeo } from "next-seo";
import CallToActionWithVideo from "../components/CTA";
import Destinations from "../components/Destinations";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Magic Safari ✨ - Our destinations"
        description="Discover the realms of Xeozrodel. Enjoy navigating through our interactive map to find your next adventure."
        canonical="https://www.xeozrodel.fr/destinations"
        openGraph={{
          url: "https://www.xeozrodel.fr/destinations",
          title: "Magic Safari ✨ - Destinations",
          description:
            "Enjoy a unique adventure in the realms of Xeozrodel. Meet the local that live in the world, and enjoy magnificent landscape on our amazing animals.",
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
        <Destinations />
      </main>

      <footer>
        <SmallWithSocial />
      </footer>
    </div>
  );
};

export default Home;
