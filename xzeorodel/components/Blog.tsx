import React, { Fragment } from "react";
import {
  chakra,
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Link,
  Text,
  Icon,
  Tag,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronRight } from "react-icons/go";

const articles = [
  {
    id: 1,
    tags: ["News"],
    title: "Special News about Christmas Eve",
    subtitles: `Christmas is in the corner ! Let's talk about it and what you can do in Xeozrodel during this magical moment 🎅 .`,
    content: `Christmas is in the corner ! Let's talk about it and what you can do in Xeozrodel during this magical moment 🎅 .`,
    created_at: "Wed Apr 06 2022",
    slug: "mg1",
  },
  {
    id: 2,
    tags: ["Discover"],
    title: "A new city to discover in Xeozrodel",
    subtitles: `Magic Safari just add a new city to discover, come wiht us to visit the Aber Woods 🌳.`,
    content: `Magic Safari just add a new city to discover, come wiht us to visit the Aber Woods 🌳.`,
    created_at: "Sun Apr 03 2022",
    slug: "mt2",
  },
  {
    id: 3,
    tags: ["Media", "News"],
    title: "Magic Safari is on XeozrodelNewsTV",
    subtitles: `We were on live ! Let's rewatch the moment of fame that our company had during XeozrodelNewsTV 📺 .`,
    content: `We were on live ! Let's rewatch the moment of fame that our company had during XeozrodelNewsTV 📺 .`,
    created_at: "Sun Jan 03 2022",
    slug: "pm3",
  },
  {
    id: 4,
    tags: ["Creation"],
    title: "Magic Safari of Xeozrodel is born",
    subtitles: `This day will be in the history ! Magis Safari of Xeozrodel is born. Let's talk about the philosophy of our company. 🌟`,
    content: `This day will be in the history ! Magis Safari of Xeozrodel is born. Let's talk about the philosophy of our company. 🌟`,
    created_at: "Sun Dec 03 2021",
    slug: "sto4",
  },
];

const Posts = () => {
  return (
    <Container p={{ base: 5, md: 10 }}>
      <chakra.h1
        p={4}
        mb={5}
        fontSize="3xl"
        lineHeight={1.2}
        fontWeight="bold"
        w="100%"
      >
        Blog
      </chakra.h1>
      <VStack spacing={8} w={{ base: "auto", md: "2xl" }}>
        {articles.map((article, index) => (
          <Fragment key={index}>
            <Stack direction="column" spacing={4} p={4}>
              <HStack spacing={2} mb={1}>
                {article.tags.map((cat) => (
                  <Tag
                    key={cat}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    colorScheme={useColorModeValue("blackAlpha", "gray")}
                    borderRadius="full"
                  >
                    {cat}
                  </Tag>
                ))}
              </HStack>
              <Box textAlign="left">
                <Link
                  fontSize="xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                  w="100%"
                  href={`/blog/${article.slug}`}
                  _hover={{ color: "blue.400", textDecoration: "underline" }}
                >
                  {article.title}
                </Link>
                <Text
                  fontSize="md"
                  color="gray.500"
                  noOfLines={2}
                  lineHeight="normal"
                >
                  {article.subtitles}
                </Text>
              </Box>
              <Box>
                <Stack
                  justify="space-between"
                  direction={{ base: "column", sm: "row" }}
                >
                  <Box>
                    <Text fontSize="sm" color="gray.500">
                      {article.created_at}
                    </Text>
                  </Box>
                  <HStack
                    as={Link}
                    spacing={1}
                    p={1}
                    alignItems="center"
                    height="2rem"
                    w="max-content"
                    margin="auto 0"
                    rounded="md"
                    color="blue.400"
                    href={`/blog/${article.slug}`}
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
                  >
                    <Text fontSize="sm"> Read more</Text>
                    <Icon as={GoChevronRight} w={4} h={4} />
                  </HStack>
                </Stack>
              </Box>
            </Stack>
            {articles.length - 1 !== index && <Divider />}
          </Fragment>
        ))}
      </VStack>
    </Container>
  );
};

export default Posts;
