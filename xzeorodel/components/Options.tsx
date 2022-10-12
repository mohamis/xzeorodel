import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options = [
  { id: 1, desc: "1 new location of choice" },
  { id: 2, desc: "Goodies from Magic Safari." },
  { id: 3, desc: "Intergalactic Support 6 days 24H" },
];
const optionsPlus = [
  { id: 1, desc: "3 new location" },
  { id: 2, desc: "Supplementary meals (up to 3)." },
  { id: 3, desc: "Satellite tracking and air support" },
];
const optionsPro = [
  { id: 1, desc: "10 new location" },
  { id: 2, desc: "VIP support, private security 24H." },
  { id: 3, desc: "Luggage storage" },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} minH={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              The Right Options for{" "}
              <Text as="span" color="purple.400">
                your next trip.
              </Text>
            </Heading>
            m
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={"Starter"} typePlan="Free" options={options} />
        <Divider />
        <PackageTier
          title={"Magic Plus"}
          checked={true}
          typePlan="$32.00"
          options={optionsPlus}
        />
        <Divider />
        <PackageTier
          title={"Magic Pro"}
          typePlan="$50.00"
          options={optionsPro}
        />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
