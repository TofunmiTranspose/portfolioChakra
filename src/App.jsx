import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  IconButton,
  Link,
  Spacer,
  Image,
  Stat,
  StatLabel,
  StatHelpText,
  SimpleGrid,
  useDisclosure,
  useMediaQuery,
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";

const customThemeConfig = defineConfig({
  theme: {
    tokens: {
      colors: defineTokens({
        primary: {
          50: { value: "#E3F2FD" },
          100: { value: "#BBDEFB" },
          200: { value: "#90CAF9" },
          300: { value: "#64B5F6" },
          400: { value: "#42A5F5" },
          500: { value: "#2196F3" },
          600: { value: "#1976D2" },
          700: { value: "#1565C0" },
          800: { value: "#0D47A1" },
          900: { value: "#002884" },
        },
        accent: {
          gold: { value: "#FFD700" },
          green: { value: "#4CAF50" },
          red: { value: "#F44336" },
        },
      }),
    },
  },
});

const system = createSystem(defaultConfig, customThemeConfig);

const sections = [
  { id: "profile", title: "Profile" },
  { id: "projects", title: "Projects" },
  { id: "feedback", title: "Feedback" },
  { id: "earnings", title: "Earnings" },
  { id: "contact", title: "Contact" },
];

const mockProjects = [
  {
    id: 1,
    title: "Crypto Dashboard",
    description: "React, API consumption, Tailwind CSS",
    image: "./src/assets/crypto.png",
  },
  {
    id: 2,
    title: "Firebase ToDo App",
    description: "HTML, CSS, JavaScript, Firebase",
    image: "./src/assets/fire.png",
  },
  {
    id: 3,
    title: "Fullstack School Web App",
    description: "React, Tailwind CSS, Firebase",
    image: "./src/assets/school.png",
  },
  {
    id: 4,
    title: "My Portfolio Website",
    description: "React, Tailwind CSS",
    image: "./src/assets/portfolio.png",
  },
];

const mockFeedback = [
  {
    id: 1,
    client: "Adeniyi Israel",
    rating: "★★★★★",
    comment: "Exceptional work and communication!",
  },
  {
    id: 2,
    client: "Owolabi Joshua",
    rating: "★★★★☆",
    comment: "Very skilled and efficient developer.",
  },
];

const mockEarnings = {
  total: "₦2.25M",
  projects: 15,
  rate: "₦20k/hr",
  growth: "+12%",
};

// --- Main App Component ---
function App() {
  const { isOpen, onToggle } = useDisclosure();
  const [activeSection, setActiveSection] = useState("profile");
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    if (isOpen) onToggle();
  };

  return (
    <ChakraProvider value={system}>
      {" "}
      <Flex
        direction={{ base: "column", md: "row" }}
        minH="100vh"
        bg="primary.50"
      >
        <Box
          display={{ base: "block", md: "none" }}
          bg="primary.900"
          color="white"
          p={4}
          position="fixed"
          top="0"
          width="100%"
          zIndex="sticky"
          shadow="md"
          borderBottomRadius="lg"
        >
          <HStack justifyContent="space-between" alignItems="center">
            <Text fontSize="xl" fontWeight="bold">
              Dashboard
            </Text>
            <IconButton
              aria-label="Toggle navigation"
              icon={isOpen ? <Text>✕</Text> : <Text>☰</Text>}
              onClick={onToggle}
              variant="unstyled"
              color="white"
              fontSize="2xl"
            />
          </HStack>
          <VStack as="nav" spacing={2} align="stretch" mt={4}>
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                color="white"
                justifyContent="flex-start"
                onClick={() => scrollToSection(section.id)}
                _hover={{ bg: "primary.700" }}
                isActive={activeSection === section.id}
                _active={{ bg: "primary.700", fontWeight: "bold" }}
                borderRadius="md"
              >
                {section.title}
              </Button>
            ))}
          </VStack>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          flexDir="column"
          width="280px"
          bg="primary.900"
          color="white"
          p={6}
          alignItems="center"
          py={10}
          shadow="lg"
        >
          <VStack spacing={6} align="stretch" w="100%">
            <Image
              borderRadius="full"
              boxSize="150px"
              mb={4}
              src="../src/assets/pic.png" // Gold-accented placeholder
              alt="Tofunmi Paul Okeowo"
              border="4px solid"
              borderColor="accent.gold"
              shadow="md"
            />
            <Heading size="lg" color="accent.gold" textAlign="center">
              Tofunmi Paul Okeowo
            </Heading>
            <Text fontSize="md" color="gray.300" textAlign="center" mb={6}>
              FRONT-END WEB DEVELOPER
            </Text>
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                color="white"
                justifyContent="flex-start"
                onClick={() => scrollToSection(section.id)}
                _hover={{ bg: "primary.700" }}
                isActive={activeSection === section.id}
                _active={{ bg: "primary.700", fontWeight: "bold" }}
                borderRadius="md"
              >
                {section.title}
              </Button>
            ))}
            <Spacer />
            <Button
              colorScheme="teal"
              size="md"
              mt={8}
              alignSelf="center"
              borderRadius="full"
              px={8}
              _hover={{ opacity: 0.9, transform: "translateY(-2px)" }}
              transition="all 0.2s ease-in-out"
            >
              <a href="https://wa.link/yjileb">Hire Me</a>
            </Button>
          </VStack>
        </Box>
        <Box
          flex="1"
          p={{ base: 4, md: 8 }}
          mt={{ base: "70px", md: "0" }}
          overflowY="auto"
          bg="primary.50"
          color="gray.800"
        >
          <VStack
            id="profile"
            spacing={6}
            align="flex-start"
            mb={16}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
          >
            <Heading
              as="h2"
              size="xl"
              color="primary.700"
              borderBottom="2px"
              borderColor="primary.500"
              pb={2}
            >
              Profile Overview
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              Hello! I'm Tofunmi Paul Okeowo, a passionate Front-End Web
              Developer with 1+ years of experience. I specialize in crafting
              engaging, responsive, and accessible web applications using modern
              web technologies.
            </Text>
            <Text fontSize="lg">
              My expertise lies in building high-performing interfaces that not
              only look great but also deliver seamless interactions. I am
              always keen to collaborate on exciting projects and learn new
              technologies.
            </Text>
            <HStack spacing={4} wrap="wrap">
              <Button colorScheme="primary" size="lg" shadow="md">
                <a href="https://drive.usercontent.google.com/download?id=10opdh0gA6nAq60mcvP5Astv01BG2lbxU&export=download&authuser=0">
                  Download CV
                </a>
              </Button>
              <Button
                colorScheme="primary"
                variant="outline"
                size="lg"
                shadow="md"
              >
                <a target="_blank" href="https://github.com/TofunmiTranspose">
                  View My GitHub
                </a>
              </Button>
            </HStack>
          </VStack>

          <VStack
            id="projects"
            spacing={6}
            align="flex-start"
            mb={16}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
          >
            <Heading
              as="h2"
              size="xl"
              color="primary.700"
              borderBottom="2px"
              borderColor="primary.500"
              pb={2}
            >
              Recent Projects
            </Heading>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={6}
              gap={5}
              w="100%"
            >
              {mockProjects.map((project) => (
                <Box
                  key={project.id}
                  p={4}
                  shadow="xl"
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  borderColor="gray.200"
                  _hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
                  transition="all 0.3s ease-in-out"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    borderRadius="md"
                    mb={3}
                    objectFit="cover"
                    w="100%"
                    h="120px"
                  />
                  <Heading fontSize="lg" mb={2} color="primary.800">
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {project.description}
                  </Text>
                  <HStack spacing={2} mt={3}>
                    <Link href="#" isExternal color="primary.500" fontSize="sm">
                      Demo
                    </Link>
                    <Link href="#" isExternal color="primary.500" fontSize="sm">
                      Code
                    </Link>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <VStack
            id="feedback"
            spacing={6}
            align="flex-start"
            mb={16}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
          >
            <Heading
              as="h2"
              size="xl"
              color="primary.700"
              borderBottom="2px"
              borderColor="primary.500"
              pb={2}
            >
              Client Feedback
            </Heading>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={6}
              gap={5}
              w="100%"
            >
              {mockFeedback.map((feedback) => (
                <Box
                  key={feedback.id}
                  p={5}
                  shadow="xl"
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  borderColor="gray.200"
                  _hover={{ transform: "translateY(-3px)", shadow: "2xl" }}
                  transition="all 0.3s ease-in-out"
                >
                  <Text fontSize="2xl" color="accent.gold" mb={2}>
                    {feedback.rating}
                  </Text>
                  <Text fontStyle="italic" mb={3}>
                    "{feedback.comment}"
                  </Text>
                  <Text fontWeight="semibold" color="primary.800">
                    - {feedback.client}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          <Box
            id="earnings"
            display="flex"
            flexDirection="column"
            gap={{ base: 6, md: 8 }}
            mb={16}
            p={{ base: 6, md: 8 }}
            bg="white"
            borderRadius="xl"
            shadow="2xl"
            border="1px solid"
            borderColor="blue.100" // Using default Chakra blue shade
            _hover={{
              transform: "scale(1.005)",
              shadow: "3xl",
            }}
            transition="all 0.3s ease-in-out"
            cursor="pointer"
          >
            {/* Section Heading */}
            <Heading
              as="h2"
              size="xl"
              fontWeight="extrabold"
              color="blue.700" // Using default Chakra blue shade
              borderBottom="4px solid"
              borderColor="blue.500" // Using default Chakra blue shade
              pb={3}
              letterSpacing="wide"
            >
              Earnings Snapshot
            </Heading>

            {/* Grid of Stat Cards */}
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={{ base: 6, md: 8 }}
              gap={5}
              w="100%"
            >
              {/* Stat Card 1: Total Earned */}
              <Box // Replaced Stat with Box
                p={6}
                bg="white"
                borderRadius="lg"
                shadow="xl"
                border="1px solid"
                borderColor="blue.200" // Using default Chakra blue shade
                _hover={{
                  transform: "translateY(-8px)",
                  shadow: "2xl",
                }}
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                cursor="pointer"
              >
                {/* Replaced StatLabel with Text */}
                <Text
                  fontSize="base"
                  fontWeight="semibold"
                  color="gray.600"
                  mb={2}
                >
                  Total Earned
                </Text>
                {/* StatNumber replacement */}
                <Text
                  fontSize="4xl"
                  fontWeight="extrabold"
                  color="blue.600"
                  mb={2}
                >
                  {mockEarnings.total}
                </Text>
                {/* Replaced StatHelpText with Text */}
                <Text fontSize="sm" color="gray.700" mt={1}>
                  {/* StatArrow replacement */}
                  <Text
                    as="span"
                    color={
                      mockEarnings.isGrowthPositive ? "green.500" : "red.500"
                    }
                    fontWeight="bold"
                  >
                    {mockEarnings.isGrowthPositive ? "↑ " : "↓ "}
                  </Text>
                  <Text as="span" fontWeight="medium">
                    {mockEarnings.growth}
                  </Text>{" "}
                  from last period
                </Text>
              </Box>

              {/* Stat Card 2: Projects Completed */}
              <Box // Replaced Stat with Box
                p={6}
                bg="white"
                borderRadius="lg"
                shadow="xl"
                border="1px solid"
                borderColor="blue.200" // Using default Chakra blue shade
                _hover={{
                  transform: "translateY(-8px)",
                  shadow: "2xl",
                }}
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                cursor="pointer"
              >
                {/* Replaced StatLabel with Text */}
                <Text
                  fontSize="base"
                  fontWeight="semibold"
                  color="gray.600"
                  mb={2}
                >
                  Projects Completed
                </Text>
                {/* StatNumber replacement */}
                <Text
                  fontSize="4xl"
                  fontWeight="extrabold"
                  color="blue.700"
                  mb={2}
                >
                  {mockEarnings.projects}
                </Text>
                {/* Replaced StatHelpText with Text */}
                <Text fontSize="sm" color="gray.700" mt={1}>
                  Milestones achieved
                </Text>
              </Box>

              {/* Stat Card 3: Avg. Hourly Rate */}
              <Box // Replaced Stat with Box
                p={6}
                bg="white"
                borderRadius="lg"
                shadow="xl"
                border="1px solid"
                borderColor="blue.200" // Using default Chakra blue shade
                _hover={{
                  transform: "translateY(-8px)",
                  shadow: "2xl",
                }}
                transition="transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
                cursor="pointer"
              >
                {/* Replaced StatLabel with Text */}
                <Text
                  fontSize="base"
                  fontWeight="semibold"
                  color="gray.600"
                  mb={2}
                >
                  Avg. Hourly Rate
                </Text>
                {/* StatNumber replacement */}
                <Text
                  fontSize="4xl"
                  fontWeight="extrabold"
                  color="blue.600"
                  mb={2}
                >
                  {mockEarnings.rate}
                </Text>
                {/* Replaced StatHelpText with Text */}
                <Text fontSize="sm" color="gray.700" mt={1}>
                  Your current earning benchmark
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <VStack
            id="contact"
            spacing={6}
            align="flex-start"
            mb={12}
            p={6}
            bg="white"
            borderRadius="lg"
            shadow="md"
          >
            <Heading
              as="h2"
              size="xl"
              color="primary.700"
              borderBottom="2px"
              borderColor="primary.500"
              pb={2}
            >
              Contact Me
            </Heading>
            <Text fontSize="md">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </Text>
            <VStack align="flex-start" spacing={3} fontSize="lg">
              <Text>
                Email:{" "}
                <Link
                  href="mailto:tofexzyno@gmail.com"
                  color="primary.600"
                  fontWeight="semibold"
                >
                  tofexzyno@gmail.com
                </Link>
              </Text>
              <Text>
                LinkedIn:{" "}
                <Link
                  href="https://linkedin.com/in/tofunmitranspose?"
                  isExternal
                  color="primary.600"
                  fontWeight="semibold"
                  target="_blank"
                >
                  linkedin.com/in/tofunmitranspose?
                </Link>
              </Text>
              <Text>
                GitHub:{" "}
                <Link
                  href="https://github.com/TofunmiTranspose"
                  isExternal
                  color="primary.600"
                  fontWeight="semibold"
                  target="blank"
                >
                  github.com/TofunmiTranspose
                </Link>
              </Text>
              <Text>
                Phone:{" "}
                <Link
                  href="tel:+2349013123768"
                  color="primary.600"
                  fontWeight="semibold"
                >
                  +1 (234) 901-312-3768
                </Link>
              </Text>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
