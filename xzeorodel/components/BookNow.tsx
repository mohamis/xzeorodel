/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Book() {
  const [input, setInput] = useState("");

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Center minH={"90vh"}>
      <Stack
        m={5}
        p={5}
        shadow="md"
        borderWidth="1px"
        spacing={8}
        direction="row"
      >
        <FormControl>
          <SimpleGrid columns={2} spacing={10}>
            <Box height="80px">
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </Box>
            <Box height="80px">
              <FormLabel>Second name</FormLabel>
              <Input placeholder="Second name" />
            </Box>

            <Box height="80px">
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                value={input}
                onChange={handleInputChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you&apos;d like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </Box>
            <Box>
              <FormLabel>Phone number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+33" />
                <Input type="tel" placeholder="phone number" />
              </InputGroup>
            </Box>
            <Box height="80px">
              <FormLabel>Package</FormLabel>
              <Select placeholder="Select package">
                <option>Kidfriendly</option>
                <option>Discovery</option>
                <option>Group</option>
              </Select>
            </Box>
            <Box height="80px">
              <FormLabel as="legend">Breakfast</FormLabel>
              <RadioGroup defaultValue="Yes">
                <HStack spacing="24px">
                  <Radio value="Yes">Vegetarian</Radio>
                  <Radio value="No">Gluten free</Radio>
                  <Radio value="Halal">Halal</Radio>
                  <Radio value="Suggest me">Other</Radio>
                </HStack>
              </RadioGroup>
              <FormHelperText>
                Select only you need breakfast during your trip.
              </FormHelperText>
            </Box>
            <Box height="80px">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Submit
              </Button>
            </Box>
          </SimpleGrid>
        </FormControl>
      </Stack>
    </Center>
  );
}
