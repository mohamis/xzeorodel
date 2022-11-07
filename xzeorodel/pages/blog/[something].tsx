import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import {
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Avatar,
  Box,
  Image,
  Text,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import SmallWithSocial from "../../components/Footer";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";

interface starInterface {
  id: string;
  name: string;
  description: string;
  link: string;
  created_at: string;
  img: string;
}
async function getData() {
  const filePath = path.join(
    process.cwd(),
    "backendData",
    "some-backend-data.json"
  );
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData.toString());

  return data;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const itemID = context.params?.something;
  const data = await getData();
  const foundItem = data.stars.find(
    (item: starInterface) => itemID === item.id
  );

  if (!foundItem) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      specificStarData: foundItem,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.stars.map((star: starInterface) => ({
    params: { something: star.id },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

function ProjectPage(props: {
  specificStarData: starInterface;
  hasError: boolean;
}) {
  const router = useRouter();

  if (props.hasError) {
    return (
      <>
        <h1>Error - please try another parameter</h1>
        <Button
          mt={7}
          maxW={"7vw"}
          onClick={() => {
            router.push("/blog");
          }}
          colorScheme="green"
          size="md"
          rounded="2xl"
          display={{ base: "none", md: "block" }}
        >
          👈🏻 Go back
        </Button>
      </>
    );
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NextSeo
        title={`Magic Safari ✨ - ${props.specificStarData.name}`}
        description="Magical Safari aims to open the doors to the realms of Xeozrodel. We are planning to organize a magic safari and let the tourist discover the magnificent world with our magical creatures."
        canonical="https://www.xeozrodel.fr/blog"
        openGraph={{
          url: "https://www.xeozrodel.fr/blog",
          title: `Magic Safari ✨ - ${props.specificStarData.name}`,
          description: `Magic Safari ✨ - ${props.specificStarData.description}`,
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
        <Center minH={"95vh"} py={6}>
          <Box
            maxW={"40vw"}
            w={"full"}
            bg={"white"}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              w={"auto"}
              bg={"grey.500"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Center>
                <Image
                  src={props.specificStarData.img}
                  alt="image"
                  objectFit="cover"
                />
              </Center>
            </Box>
            <Stack color={"gray.500"} whiteSpace="pre-line">
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>

              <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
                <br /> <br />
                {props.specificStarData.name}
              </Heading>
              <ReactMarkdown>
                {props.specificStarData.description}
              </ReactMarkdown>
            </Stack>
            <Button
              mt={7}
              maxW={"7vw"}
              onClick={() => {
                router.push("/blog");
              }}
              colorScheme="green"
              size="md"
              rounded="2xl"
              display={{ base: "none", md: "block" }}
            >
              👈🏻 Go back
            </Button>
          </Box>
        </Center>
      </main>

      <footer>
        <SmallWithSocial />
      </footer>
    </>
  );
}

export default ProjectPage;
