import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";

export default function SignUp() {
  const [isPasswordShowing, setisPasswordShowing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");

  const [wasNameFocused, setWasNameFocused] = useState(false);
  const [wasEmailFocused, setWasEmailFocused] = useState(false);
  const [wasPasswordFocused, setWasPasswordFocused] = useState(false);
  const [wasConfirmPasswordFocused, setWasConfirmPasswordFocused] =
    useState(false);

  function handleClick() {
    setisPasswordShowing(!isPasswordShowing);
  }

  function postDetails() {}

  function submitHandler() {}

  return (
    <VStack spacing="5px">
      <FormControl id="signup-name">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          isInvalid={(!name || !name.length) && wasNameFocused}
          required
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setWasNameFocused(true)}
        />
      </FormControl>
      <FormControl id="signup-email">
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
      <FormControl id="signup-password">
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={isPasswordShowing ? "text" : "password"}
            placeholder="Enter your password"
            isInvalid={(!password || !password.length) && wasPasswordFocused}
            required
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setWasPasswordFocused(true)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isPasswordShowing ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="signup-confirm-password">
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type={isPasswordShowing ? "text" : "password"}
            placeholder="Confirm your password"
            isInvalid={
              (!confirmPassword || password !== confirmPassword) &&
              wasConfirmPasswordFocused
            }
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => setWasConfirmPasswordFocused(true)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isPasswordShowing ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="signup-picture">
        <FormLabel>Upload Picture:</FormLabel>
        <Input
          type="file"
          p="1.5"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </VStack>
  );
}
