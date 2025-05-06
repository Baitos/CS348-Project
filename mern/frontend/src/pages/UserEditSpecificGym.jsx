import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast, Spinner, Box } from "@chakra-ui/react";
import { updateGym, searchGyms } from '../list/gym';
import { signInTrainer } from '../list/trainerSignIn';
import { time } from 'framer-motion';

const UserEditSpecificGym = () => {
  const location = useLocation(); 
  const { gym } = location.state || {}; 
  const [newGym, setNewGym] = useState({
    username: "",
    name: "",
    location: "",
    berries: "",
    victories: "",
    time: "",
  });
  const toast = useToast();
  const { currentTrainer } = signInTrainer();
  const navigate = useNavigate();

  useEffect(() => {
    if (gym) {
      setNewGym({
        username: gym.username || "",
        name: gym.name || "",
        location: gym.location || "",
        berries: gym.berries || "",
        victories: gym.victories || "",
        time: gym.time || "",
      });
    }
  }, [gym]);

  const handleEditGym = async () => {
    if (newGym.username != currentTrainer.username) {
      toast({
        title: "Error",
        description: "Wrong user!",
        status: "error",
        isClosable: true,
      });
    } else {
    const { success, message } = await updateGym(gym._id, newGym);
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
    }}
    navigate("/user/modify/edit");
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={4}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Edit Gym Info
        </Heading>

        <Input
          name="name"
          placeholder="Gym Name"
          value={newGym.name}
          onChange={(e) => setNewGym({ ...newGym, name: e.target.value })}
        />
        <Input
          name="location"
          placeholder="Location"
          value={newGym.location}
          onChange={(e) => setNewGym({ ...newGym, location: e.target.value })}
        />
        <Input
          name="berries"
          placeholder="Berries"
          value={newGym.berries}
          onChange={(e) => setNewGym({ ...newGym, berries: e.target.value })}
        />
        <Input
          name="victories"
          placeholder="Victories"
          value={newGym.victories}
          onChange={(e) => setNewGym({ ...newGym, victories: e.target.value })}
        />
        <Input
          name="time"
          placeholder="Time"
          value={newGym.time}
          onChange={(e) => setNewGym({ ...newGym, time: e.target.value })}
        />

        <Button colorScheme="gray" onClick={handleEditGym} w="full">
          Update Gym Info
        </Button>
        <Button colorScheme="red" onClick={() => navigate("/user/modify/edit")}>
          Go Back
        </Button>
      </VStack>
    </Container>
  );
};

export default UserEditSpecificGym