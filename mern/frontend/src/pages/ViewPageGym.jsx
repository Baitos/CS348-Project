import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";

const ViewPage = () => {
    const navigate = useNavigate();
    return (
      <VStack spacing={4}>
        <Button colorScheme="green" onClick={() => navigate("/view/gym")}>
          Listed All Gyms
        </Button>
      </VStack>
    );
  };
export default ViewPage