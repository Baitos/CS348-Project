import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";

const ViewPage = () => {
    const navigate = useNavigate();
    return (
      <VStack spacing={4}>
        <Button colorScheme="purple" onClick={() => navigate("/view/trainer")}>
          Listed All Trainers
        </Button>
      </VStack>
    );
  };
export default ViewPage