import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
import { makeTrainer } from '../list/trainer';


const SignUpPage = () => {
  const [newTrainer, setNewTrainer] = useState({
    username: "",
    password: "",
    team: "",
    level: "",
  });
  const toast = useToast();
  const {createTrainer} = makeTrainer();

  const handleAddTrainer = async () => {
		const { success, message } = await createTrainer(newTrainer);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewTrainer({ username: "", password: "", team: "", level: "" });
    navigate("/");
	};





  const navigate = useNavigate();
  return (
    <Container maxW={"container.sm"}>
            <VStack spacing={4}>
              <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                  Sign Up
              </Heading>
                
              <Input
                name="username"
                placeholder="Username"
                value={newTrainer.username}
                onChange={(e) => setNewTrainer({ ...newTrainer, username: e.target.value })}
              />
              <Input
                name="password"
                placeholder="Password"
                value={newTrainer.password}
                onChange={(e) => setNewTrainer({ ...newTrainer, password: e.target.value })}
              />
              <Input
                name="team"
                placeholder="Team"
                value={newTrainer.team}
                onChange={(e) => setNewTrainer({ ...newTrainer, team: e.target.value })}
              />
              <Input
                name="level"
                placeholder="Level"
                value={newTrainer.level}
                onChange={(e) => setNewTrainer({ ...newTrainer, level: e.target.value })}
              />
              <Button colorScheme="gray" onClick={handleAddTrainer}  w="full">
                Add Trainer
              </Button>
        

        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
}
export default SignUpPage