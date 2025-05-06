import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
const UserModifyGyms = () => {
  const navigate = useNavigate();
  return (
    <VStack spacing={4}>
      <Button colorScheme="yellow" onClick={() => navigate("/user/modify/add")}>
        Add Gold Gyms
      </Button>
      <Button colorScheme="yellow" onClick={() => navigate("/user/modify/edit")}>
        Edit Existing Gold Gyms
      </Button>
      <Button colorScheme="teal" onClick={() => navigate("/user")}>
        Back to User Home Page
      </Button>
    </VStack>
  );
}

export default UserModifyGyms