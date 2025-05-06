import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, VStack, Text, Container, Input, Heading, useToast } from "@chakra-ui/react";
import { signInTrainer } from '../list/trainerSignIn';

const SignInPage = () => {
  const [oldTrainer, setOldTrainer] = useState({
    username: "",
    password: "",
  });
  const toast = useToast();
  const {createTrainer} = signInTrainer();

   const handleSignInTrainer = async () => {
		const { success, message } = await createTrainer(oldTrainer);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
      navigate("/");
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
      navigate("/user");
		}
		setOldTrainer({ username: "", password: "" });
    
	};




  const navigate = useNavigate();
  return (
    <Container maxW={"container.sm"}>
            <VStack spacing={4}>
              <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                  Sign In
              </Heading>
                
              <Input
                name="username"
                placeholder="Username"
                value={oldTrainer.username}
                onChange={(e) => setOldTrainer({ ...oldTrainer, username: e.target.value })}
              />
              <Input
                name="password"
                placeholder="Password"
                value={oldTrainer.password}
                onChange={(e) => setOldTrainer({ ...oldTrainer, password: e.target.value })}
              />
              <Button colorScheme="gray" onClick={handleSignInTrainer}  w="full">
                Sign In
              </Button>
        

        <Button colorScheme="blue" onClick={() => navigate("/")}>
          Go to Home
        </Button>
      </VStack>
    </Container>
  );
}
export default SignInPage