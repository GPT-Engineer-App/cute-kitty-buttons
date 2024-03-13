import React from "react";
import { Box, Button, Container, Heading, SimpleGrid, Text, Image, VStack, useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { FaCat, FaSun, FaMoon, FaHeart, FaPaw } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Function to simulate fetching cat pictures
  const fetchCatPictures = () => {
    console.log("Fetching cat pictures...");
  };

  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={2}>Welcome to Cat Paradise</Heading>
          <Text fontSize="lg">A place where cat lovers can enjoy endless cute cat pictures!</Text>
        </Box>

        <Box>
          <Tooltip label="Toggle Dark/Light Mode" hasArrow placement="bottom">
            <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound size="lg" alignSelf="flex-end" onClick={toggleColorMode} aria-label="Toggle color mode" />
          </Tooltip>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={10}>
          {[...Array(8)].map((_, i) => (
            <Box key={i} boxShadow="md" borderRadius="lg" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwJTI0JTdCaSUyMCUyQiUyMDElN0R8ZW58MHx8fHwxNzEwMjg4NTY1fDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Cute cat ${i + 1}`} />
              <Box p={4} textAlign="center">
                <Button leftIcon={<FaHeart />} colorScheme="pink">
                  Love
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        <Button leftIcon={<FaPaw />} colorScheme="teal" size="lg" onClick={fetchCatPictures}>
          Show me more cats!
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
