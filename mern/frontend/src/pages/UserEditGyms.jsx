import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast, Spinner, Box } from "@chakra-ui/react";
import { deleteGym, searchGyms } from '../list/gym';
import { signInTrainer } from '../list/trainerSignIn';

const UserEditGyms = () => {
  const { currentTrainer } = signInTrainer();
  const [gyms, setGyms] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleEditGym = async (gym) => {
    navigate(`/user/modify/edit/gym`, { state: { gym: gym}});
  }

  const handleDeleteGym = async (gym_id) => {
    const { success, message } = await deleteGym(gym_id);
    if (success) {
      toast({
        title: "Deleted",
        description: message,
        status: "success",
        isClosable: true,
      });
      setRefresh(!refresh);
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
    fetchGyms();    
  }

  useEffect(() => {
    const fetchGyms = async () => {

      const { success, data, message } = await searchGyms(`?username=${currentTrainer.username}`);
      if (success) {
        setGyms(data);
      } else {
        toast({
          title: "Error",
          description: message,
          status: "error",
          isClosable: true,
        });
      }
    };

    fetchGyms();
  }, [refresh]);

  return (
    <Container maxW="container.lg">
      <Heading my={6} textAlign="center">My Gold Gyms</Heading>
      <Button colorScheme="red" onClick={() => navigate("/user")}>
        Back
      </Button>
      {gyms.length === 0 ? (
        <Text>No gyms found. (Potentially Searching...)</Text>
      ) : (
        <VStack spacing={4} align="stretch">
          {gyms.map((gym) => (
            <Box key={gym._id} p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{gym.name}</Heading>
              <Text><strong>Username:</strong> {gym.username}</Text>
              <Text><strong>Location:</strong> {gym.location}</Text>
              <Text><strong>Berries:</strong> {gym.berries}</Text>
              <Text><strong>Victories:</strong> {gym.victories}</Text>
              <Text><strong>Time:</strong> {gym.time}</Text>
              <Button 
                colorScheme="green" 
                onClick={() => handleEditGym(gym)} 
                mt={4}
              >
                Edit Gym
              </Button>
              <Button 
                colorScheme="red" 
                onClick={() => handleDeleteGym(gym._id)} 
                mt={4} 
                ml={4}
              >
                Delete Gym
              </Button>
            </Box>
          ))}
        </VStack>
      )}
    </Container>
  );
};

export default UserEditGyms