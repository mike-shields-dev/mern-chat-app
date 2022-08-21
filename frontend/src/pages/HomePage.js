import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

export default function Home() {
  return (
    <Container maxWidth="xl" centerContent>
      <Box
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        d="flex"
        justifyContent="center"
        textAlign="center"
        m="40px 0 15px 0"
        w="100%"
      >
        <Text
          fontSize="4xl"
          fontFamily="Arial, Helvetica, sans-serif"
          color="black"
        >
          Squawkr
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p="4px"
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList marginBottom="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
