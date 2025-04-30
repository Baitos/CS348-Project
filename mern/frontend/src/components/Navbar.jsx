import { Button, Container, Flex, HStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

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
          <Link to={"/"}>Pogo Gym DB</Link>
        </Text>

        <HStack
          spacing={2}
          alignItems={"center"}>
          <Link to={"/create"}>
						<Button>
							<PlusSquareIcon fontSize={20} />
						</Button>
					</Link>
          <Link to={"/view"}>
						<Button>
							<CheckCircleIcon fontSize={20} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
        </HStack>
      </Flex>
    </Container>
};

export default Navbar