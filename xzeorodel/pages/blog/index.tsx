import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../../components/NavBar";
import SmallWithSocial from "../../components/Footer";
import { NextSeo } from "next-seo";
import Posts from "../../components/Blog";

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="Magic Safari ✨ - A luxury adventure"
        description="Magical Safari aims to open the doors to the realms of Xeozrodel. We are planning to organize a magic safari and let the tourist discover the magnificent world with our magical creatures."
        canonical="https://www.xeozrodel.fr/"
        openGraph={{
          url: "https://www.xeozrodel.fr/",
          title: "Magic Safari ✨ - Home",
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
        <Posts />
      </main>

      <footer>
        <SmallWithSocial />
      </footer>
    </div>
  );
};

export default Home;
