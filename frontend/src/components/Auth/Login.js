import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowing, setisPasswordShowing] = useState(false);
  const [wasPasswordFocused, setWasPasswordFocused] = useState(false);
  const [wasEmailFocused, setWasEmailFocused] = useState(false);

  function handleClick() {
    setisPasswordShowing(!isPasswordShowing);
  }

  function submitHandler() {}

  return (
    <VStack spacing="5px">
      <FormControl id="login-email">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          isInvalid={
            !/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
              email
            ) && wasEmailFocused
          }
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setWasEmailFocused(true)}
        />
      </FormControl>
      <FormControl id="login-password">
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={isPasswordShowing ? "text" : "password"}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setWasPasswordFocused(true)}
            isInvalid={!password && wasPasswordFocused}
            required
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isPasswordShowing ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        colorScheme="red"
        variant="solid"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest Login Credentials
      </Button>
    </VStack>
  );
}
