import {
  Box,
  Flex,
  HStack,
  Button,
  Link,
  Stack,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import router from "next/router";

const navLinks = [
  { name: "About Us", path: "about" },
  { name: "Services", path: "services" },
  { name: "Destinations", path: "destinations" },
  { name: "Blog", path: "blog" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={useColorModeValue("white", "gray.800")}>
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto">
        <Image
          onClick={() => {
            window.open("/", "_self");
          }}
          cursor="pointer"
          src={"logoipsum.svg"}
          h={8}
          w={8}
          color="white"
          alt="logo"
        />{" "}
        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={6}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </HStack>
        </HStack>
        <Button
          colorScheme="green"
          size="md"
          rounded="2xl"
          display={{ base: "none", md: "block" }}
          onClick={() => {
            router.push("/reservations");
          }}
        >
          Book Now
        </Button>
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component
interface NavLinkProps {
  name: string;
  path: string;
  onClose: () => void;
}

const NavLink = ({ name, path, onClose }: NavLinkProps) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: "none",
        color: useColorModeValue("blue.500", "blue.200"),
      }}
    >
      {name}
    </Link>
  );
};
