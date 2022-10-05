import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcCloseUpMode } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW={"5xl"} py={12} p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Always with you"}
          text={
            "Our customers relationships service will always with you when you need the most. We will help on each steps with your trip."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Donations to associations"}
          text={
            "10% of the price for the reseversation of a trip with us, will be donated to different organizations that help to protect Xeorodrel."
          }
        />
        <Feature
          icon={<Icon as={FcCloseUpMode} w={10} h={10} />}
          title={"Eco-friendly"}
          text={
            "We are an agency that respect the environment that we have around us, all our animals that will be with your customers are love and respect by all the guides."
          }
        />
      </SimpleGrid>
    </Container>
  );
}
