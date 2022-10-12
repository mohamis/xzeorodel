import * as React from "react";
import {
  Box,
  Image,
  useColorModeValue,
  VStack,
  Text,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Center,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import LazyImage from "./lazy-image";
// Here we have used react-icons package for the icons
import { AiOutlineStar } from "react-icons/ai";

interface RepositoryCardProps {
  title: string;
  description: string;
  cover: string;
  techStack: string[];
  stargazers_count: number;
}

const RepositoryCard = (props: RepositoryCardProps) => {
  const { title, cover, techStack, stargazers_count, description } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <Box onClick={handleClick} cursor="pointer" boxSize="xl">
      <VStack
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.100", "gray.700")}
        _hover={{
          shadow: "lg",
          textDecoration: "none",
        }}
        overflow="hidden"
        align="start"
        spacing={0}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={1.85 / 1}
            w="100%"
            borderBottomWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          >
            <LazyImage src={cover} />
          </AspectRatio>
        </Box>

        <VStack py={2} px={[2, 4]} spacing={1} align="start" w="100%">
          <Flex justifyContent="space-between" width="100%">
            <VStack>
              <HStack>
                <Text fontSize="md" noOfLines={1} fontWeight="600" align="left">
                  {title}
                </Text>
              </HStack>
            </VStack>
            <Flex alignItems="center">
              <Icon as={AiOutlineStar} boxSize="0.9em" mt="1px" />
              <Box as="span" ml="1" fontSize="sm">
                {stargazers_count}
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <Text fontSize="sm" fontWeight="400" align="left">
                {description}
              </Text>
            </Box>
          </Flex>
        </VStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
        <ModalOverlay />
        <ModalContent bg="none" maxW="28rem" w="auto">
          <ModalBody p={0} rounded="lg" overflow="hidden" bg="none">
            <Center>
              <Image src={cover} rounded="lg" alt="Repo image" />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RepositoryCard;
