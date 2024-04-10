import {
  Image,
  VStack,
  IconButton,
  Heading,
  useColorMode,
  HStack,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, DownloadIcon, EmailIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Projects from "./components/Projects";
import About from "./components/About";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import resume from "./Nishakumari'Resume.pdf";
import bimbifood from "./imgs/bimbifood.png";
import quiz from "./imgs/quiz.png";
import spam from "./imgs/spam.png";
import result from "./imgs/exam.png";
import zetdrop from "./imgs/zetdrop.png";

function App() {
  function getYear() {
    return new Date().getFullYear();
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack>
      <VStack
        p={2}
        m="auto"
        maxW={{ base: "90vw", sm: "60vw", lg: "45vw", xl: "35vw" }}
      >
        <HStack width="100%" justifyContent="space-between">
          <Heading size="md" fontWeight="bold">
            Nisha Kumari
          </Heading>
          <IconButton
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            isRound="true"
            size="sm"
            onClick={toggleColorMode}
          />
        </HStack>
        <VStack alignItems="flex-start">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://avatars.githubusercontent.com/u/78425146?v=4"
            alt="Nisha Kumari"
          />

          <Text as="b" fontSize="xl">
            Nisha Kumari
          </Text>

          <Text w="80%">
            Excellent problem-solving skills and ability to perform well in teams Passionate and have extensive experience in Competitive
           Programming, eager to learn and adapt to diﬀerent environments, and determined to accept new challenges ✨
          </Text>
          <HStack>
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
              <Button rightIcon={<DownloadIcon />}> Resume</Button>
            </a>
            <Button
              leftIcon={<EmailIcon />}
              colorScheme="blue"
              variant="solid"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:nishakumari77109@gmail.com";
              }}
            >
              Email
            </Button>
          </HStack>
        </VStack>
      </VStack>
      <Tabs
        w="100%"
        isFitted
        maxW={{ base: "90vw", sm: "60vw", lg: "45vw", xl: "35vw" }}
      >
        <TabList>
          <Tab>Projects</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanels minHeight="55vh">
          <TabPanel>
            <Projects
              url="https://bimbi-c05ca.web.app/"
              img={bimbifood}
              name="bimbi"
              about="A new food delivery website is coming soon, and you can be a part of it. Pre-register now to help us determine the best areas to start our business. Get ready to enjoy your favorite food delivered right to your doorstep with our easy-to-use website. "
              github="https://github.com/sanitbandekar"
            />
            <Projects
              url="https://github.com/sanitbandekar/SpamDetector"
              img={spam}
              name="Spam"
              about=" Android app that acts as an SMS spam detector, helping users identify and filter out unwanted spam messages"
              github="https://github.com/sanitbandekar/SpamDetector"
            />
            <Projects
              url="https://github.com/sanitbandekar/Zetdrop"
              img={zetdrop}
              name="Zetdrop"
              about="he app offers a simple and intuitive interface that allows riders
to request rides with just a few taps."
              github="https://github.com/sanitbandekar/Zetdrop"
            />
            <Projects
              url="https://github.com/sanitbandekar2/College-Result"
              img={result}
              name="College Exam Result"
              about="The College Result Website is built using React.js and Node.js,
providing a robust and scalable platform for delivering high quality results."
              github="https://github.com/sanitbandekar2/College-Result"
            />
            <Projects
              url="https://github.com/sanitbandekar2/QuizProject"
              img={quiz}
              name="Quiz"
              about="The quiz website made on Node.js and MongoDB offers a unique and modern way of creating and taking quizzes. It is built on two powerful technologies that provide a fast, scalable, and flexible platform for developers to work with. The website offers a range of features for users, including the ability to create and take quizzes, view leaderboards."
              github="https://github.com/sanitbandekar2/QuizProject"
            />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <VStack p={4}>
        <HStack width="100%" justifyContent="center">
          <Link href="https://www.instagram.com/nishakumari77109/?hl=en" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://github.com/nisha-74" isExternal>
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nisha-yadav-34b346207/"
            isExternal
          >
            <FaLinkedin />
          </Link>
         
        </HStack>
        <HStack>
          <Text>Nisha Kumari</Text>
          <BiCopyright />
          <Text>{getYear()}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default App;
