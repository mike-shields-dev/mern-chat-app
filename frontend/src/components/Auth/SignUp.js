import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";

export default function SignUp() {
  const [isPasswordShowing, setisPasswordShowing] = useState(false);
  const [name, setName] = useState("");
  const [ email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");

  function handleClick() {
    setisPasswordShowing(!isPasswordShowing);
  }

  function postDetails() {}

  function submitHandler() {}

  return (
    <VStack spacing="5px">
      <FormControl id="first-name">
        <FormLabel>Name:</FormLabel>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          isInvalid = { !name.length }
          required
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email:</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          isInvalid = { !/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email) }
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password:</FormLabel>
        <InputGroup>
          <Input
            type={isPasswordShowing ? "text" : "password"}
            placeholder="Enter your password"
            isInvalid = { !password }
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isPasswordShowing ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password">
        <FormLabel>Confirm Password:</FormLabel>
        <InputGroup>
          <Input
            type={isPasswordShowing ? "text" : "password"}
            placeholder="Confirm your password"
            isInvalid={!confirmPassword || password !== confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {isPasswordShowing ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="picture">
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
