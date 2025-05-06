import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";

const CreatePage = () => {
    const navigate = useNavigate();
    return (
      <VStack spacing={4}>
        <Button colorScheme="red" onClick={() => navigate("/create/gym")}>
          Add a Gym
        </Button>
      </VStack>
    );
  };
export default CreatePage