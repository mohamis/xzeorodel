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
        title="Magic Safari ✨ - The blog"
        description="Magical Safari aims to open the doors to the realms of Xeozrodel. Let's read our blog and latest news!"
        canonical="https://www.xeozrodel.fr/blog"
        openGraph={{
          url: "https://www.xeozrodel.fr/blog",
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
