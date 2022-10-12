import * as React from "react";
import { SimpleGrid, Container, chakra, Box } from "@chakra-ui/react";
import RepositoryCard from "./utils/card";
import destinationList from "./configs/destination-list";
import castlesList from "./configs/castle-list";

const Destinations = () => {
  return (
    <Container maxW="7xl" p="5" mx="auto">
      <Box m={30}>
        <chakra.h1
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          The places to be&nbsp;
          <chakra.span color="teal">in Xeozrodel</chakra.span>
        </chakra.h1>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {destinationList().map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            cover={repo.cover}
            techStack={repo.techStack}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </SimpleGrid>

      <Box m={30}>
        <chakra.h1
          fontSize="5xl"
          lineHeight={1}
          fontWeight="bold"
          textAlign="left"
        >
          The castles to visit&nbsp;
          <chakra.span color="teal">in Xeozrodel</chakra.span>
        </chakra.h1>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {castlesList().map((repo, index) => (
          <RepositoryCard
            key={index}
            title={repo.title}
            description={repo.description}
            cover={repo.cover}
            techStack={repo.techStack}
            stargazers_count={repo.stargazers_count}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Destinations;
