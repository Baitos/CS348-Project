import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
import { useUpdateTrainer, deleteTrainer } from '../list/trainer';
import { signInTrainer } from '../list/trainerSignIn';

const UserEditInfo = () => {
  const [newTrainer, setNewTrainer] = useState({
    username: "",
    password: "",
    team: "",
    level: "",
  });
  const toast = useToast();
  const {updateTrainer} = useUpdateTrainer();
  const { currentTrainer, setCurrentTrainer, logOut } = signInTrainer(); 
  useEffect(() => {
    if (currentTrainer) {
      setNewTrainer({
        username: currentTrainer.username || "",
        password: currentTrainer.password || "",
        team: currentTrainer.team || "",
        level: currentTrainer.level || "",
      });
    }
  }, [currentTrainer]);

  const handleEditTrainer = async () => {
    const { success, message } = await updateTrainer(currentTrainer.id, newTrainer);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      setCurrentTrainer({
        ...currentTrainer,
        ...newTrainer,
      });
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewTrainer({ username: "", password: "", team: "", level: "" });
    navigate("/user");
  };

  const handleDelete = async () => {
    const { success, message } = await deleteTrainer(currentTrainer.id);
    if (success) {
      toast({
        title: "Deleted",
        description: message,
        status: "success",
        isClosable: true,
      });
      logOut();
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
  };



  const navigate = useNavigate();
  return (
    <Container maxW={"container.sm"}>
            <VStack spacing={4}>
              <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                  Edit Info
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
              <Button colorScheme="gray" onClick={handleEditTrainer}  w="full">
                Update Info
              </Button>
        

        <Button colorScheme="blue" onClick={() => navigate("/user")}>
          Go to User Home
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete Account
        </Button>
      </VStack>
    </Container>
  );
}

export default UserEditInfo