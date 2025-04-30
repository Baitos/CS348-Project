import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";



const CreatePageGym = () => {
  const [newGym, setNewGym] = useState({
    name: "",
    location: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setNewGym({ ...newGym, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5700/api/gym", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGym),
      });
      
      if (!response.ok) throw new Error("Failed to create gym");

      const result = await response.json();
      toast({ title: "Gym Created", status: "success", duration: 3000, isClosable: true });
      navigate("/");
    } catch (error) {
      toast({ title: "Error creating gym", status: "error", duration: 3000, isClosable: true });
    }
  };

  const navigate = useNavigate();
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={4}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
            Create New Gym
        </Heading>
          
        <Input
          name="name"
          placeholder="Gym Name"
          value={newGym.name}
          onChange={handleChange}
        />
        <Input
          name="location"
          placeholder="Gym Location"
          value={newGym.location}
          onChange={handleChange}
        />
        <Button colorScheme="gray" onClick={handleSubmit} w="full">
          Add Gym
        </Button>

        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Go to Home
        </Button>
        <Button colorScheme="teal" onClick={() => navigate("/create")}>
          Back to Create Page
        </Button>
      </VStack>
    </Container>
  );
}
export default CreatePageGym