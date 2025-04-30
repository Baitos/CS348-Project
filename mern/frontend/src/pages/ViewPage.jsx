import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";

const ViewPage = () => {
    const navigate = useNavigate();
    return (
      <VStack spacing={4}>
        <Button colorScheme="red" onClick={() => navigate("/view/gym")}>
          List All Gyms
        </Button>
        <Button colorScheme="yellow" onClick={() => navigate("/view/trainer")}>
          List all Trainers
        </Button>
      </VStack>
    );
  };
export default ViewPage