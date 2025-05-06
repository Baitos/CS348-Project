import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
import { signInTrainer } from '../list/trainerSignIn';
import { addGym } from '../list/gym';

const UserAddGyms = () => {
  const { currentTrainer } = signInTrainer();
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({
    name: '',
    location: '',
    victories: '',
    time: '',
    berries: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    if (!currentTrainer) {
      toast({
        title: "Error",
        description: "You must be signed in to add a gym.",
        status: "error",
        isClosable: true,
      });
      return;
    }
    const gymInfo = {
      username: currentTrainer.username,
      name: form.name,
      location: form.location,
      victories: form.victories,
      time: form.time,
      berries: form.berries,
    }
    const { success, message } = await addGym(gymInfo);
    if (success) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
      navigate("/user");
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
  }
  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={4}>
        <Heading>Add Gold Gym</Heading>
  
        <Input
          name="name"
          placeholder="Gym Name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <Input
          name="victories"
          placeholder="Victories (optional)"
          type="number"
          value={form.victories}
          onChange={handleChange}
        />
        <Input
          name="time"
          placeholder="Time Defended (optional, in form XXD XXH XXM)"
          value={form.time}
          onChange={handleChange}
        />
        <Input
          name="berries"
          placeholder="Berries Fed (optional)"
          type="number"
          value={form.berries}
          onChange={handleChange}
        />
  
        <Button colorScheme="yellow" width="full" onClick={handleSubmit}>
          Add Gold Gym
        </Button>
        <Button colorScheme="red" onClick={() => navigate("/user")}>
          Cancel
        </Button>
      </VStack>
    </Container>
  );
}

export default UserAddGyms