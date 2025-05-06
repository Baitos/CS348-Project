import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { PlusSquareIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { signInTrainer } from "../list/trainerSignIn";
import { useEffect } from "react";


const Navbar = () => {
    const { currentTrainer, logOut } = signInTrainer(); 
    useEffect(() => {
      console.log("CurrentTrainer is:", currentTrainer);
    }, [currentTrainer]);
    const navigate = useNavigate(); 
    const { colorMode, toggleColorMode } = useColorMode();
    const handleLogout = () => {
      logOut();
      navigate("/");
    };

    let usernameColor = "grey";
    if (currentTrainer) {
      if (currentTrainer.team.toLowerCase() == 'mystic') {
        usernameColor = "blue";
      }
      else if (currentTrainer.team.toLowerCase() == 'instinct') {
        usernameColor = "yellow";
      }
      else if (currentTrainer.team.toLowerCase() == 'valor') {
        usernameColor = "red";
      }
    }

    return <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row",
        }}
      >
        <Text 
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient='linear(to-r, #FFD700, #FFC107, #FFB300)'
          bgClip={"text"}
        >
          <Text>Pogo Gold Gym Database</Text>
        </Text>

        <HStack
          spacing={2}
          alignItems={"center"}>
          {currentTrainer ? (
            <>
              <Text fontSize="sm" color={usernameColor}><strong>{currentTrainer.username + ", " + currentTrainer.level}</strong></Text>
              <Button size="sm" colorScheme="red" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <Text fontSize="sm">Not signed in</Text>
          )}

					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
        </HStack>
      </Flex>
    </Container>
};

export default Navbar