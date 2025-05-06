import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast, Box, } from "@chakra-ui/react";
import { searchGyms } from '../list/gym';

const UserSearchPage = () => {
  const [gyms, setGyms] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setGymName] = useState("");
  const [location, setLocation] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const fetchGyms = async () => {
    const searchParams = new URLSearchParams();

    if (username) searchParams.append('username', username);
    if (name) searchParams.append('name', name);
    if (location) searchParams.append('location', location);

    const { success, data, message } = await searchGyms(`?${searchParams.toString()}`);
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

  const handleSearch = () => {
    fetchGyms();
  };

  useEffect(() => {
    fetchGyms();
  }, [refresh, name, location]); 

  return (
    <Container maxW="container.lg">
      <Heading my={6} textAlign="center">Search Gold Gyms</Heading>
      <Button colorScheme="red" onClick={() => navigate("/user")}>
        Back
      </Button>

      {}
      <VStack spacing={4} align="stretch" my={6}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Gym Name"
          value={name}
          onChange={(e) => setGymName(e.target.value)}
        />
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSearch} w="full">
          Search
        </Button>
      </VStack>

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
            </Box>
          ))}
        </VStack>
      )}
    </Container>
  );
};
export default UserSearchPage