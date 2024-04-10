import {
  Text,
  VStack,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import React from "react";

function About() {
  return (
    <VStack alignItems="flex-start">
      <Heading>Hello!👋</Heading>
      <Text>
        Hey, my name is Nisha Kumari.Excellent problem-solving skills and ability to perform well in teams Passionate and have extensive experience in Competitive
         Programming, eager to learn and adapt to diﬀerent environments, and determined to accept new challenges.
      </Text>
      <Text>Here are a few technologies I’ve been working with recently:</Text>
      <HStack
        justifyContent="space-around"
        width="100%"
        alignItems="flex-start"
      >
        <VStack>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Android
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Java
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Kotlin
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Flutter
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Dart
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Figma
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Jetpack Compose
            </ListItem>
          </List>
        </VStack>
        <VStack>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              HTML
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              CSS
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              BootStrap
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Git
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Bitbucket
            </ListItem>

            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              Node.js
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
              JavaScript (ES6+)
            </ListItem>
            {/* You can also use custom icons from react-icons */}
          </List>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default About;
