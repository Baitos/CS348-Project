import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
const UserHomePage = () => {
  const navigate = useNavigate();
  return (
    <VStack spacing={4}>
      <Button colorScheme="red" onClick={() => navigate("/user/edit")}>
        Edit Account Info
      </Button>
      <Button colorScheme="yellow" onClick={() => navigate("/user/modify")}>
        Modify Gold Gyms
      </Button>
      <Button colorScheme="yellow" onClick={() => navigate("/user/modify/edit")}>
        View Gold Gyms
      </Button>
      <Button colorScheme="gray" onClick={() => navigate("/user/search")}>
        Search Gyms
      </Button>
    </VStack>
  );
}

export default UserHomePage