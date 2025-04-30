import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";

const CreatePageTrainer = () => {
  const [newTrainer, setNewTrainer] = useState({
    username: "",
    team: "",
    level: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setNewTrainer({ ...newTrainer, [e.target.name]: e.target.value });
  };




  const navigate = useNavigate();
  return (
    <Container maxW={"container.sm"}>
            <VStack spacing={4}>
              <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                  Create New Trainer
              </Heading>
                
              <Input
                name="username"
                placeholder="Trainer Username"
                value={newTrainer.username}
                onChange={handleChange}
              />
              <Input
                name="team"
                placeholder="Trainer Team"
                value={newTrainer.team}
                onChange={handleChange}
              />
              <Input
                name="level"
                placeholder="Trainer Level"
                value={newTrainer.level}
                onChange={handleChange}
              />
              <Button colorScheme="gray" onClick={navigate("/")} w="full">
                Add Trainer
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
export default CreatePageTrainer