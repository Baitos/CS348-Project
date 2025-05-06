import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <VStack spacing={4}>
      <Button colorScheme="yellow" onClick={() => navigate("/signin")}>
        Sign In
      </Button>
      <Button colorScheme="red" onClick={() => navigate("/signup")}>
        Sign Up
      </Button>
    </VStack>
  );
}

export default HomePage