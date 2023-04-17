import React from "react";
// import { HStack, Box, Text,  useColorModeValue } from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import { useMediaQuery } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  // Drawer for mobile view of header component using chakra ui drawer component and useDisclosure hook from chakra ui library to open and close drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  //to set width of screen using useState hook
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 600);

  //to set width of screen using useEffect
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditional rendering of header component for mobile and desktop view
  return isLargeScreen ? (
    // HStack for desktop view of header component using chakra ui HStack component
    <HStack p={"4"} shadow={"base"}>
      <Button colorScheme="whatsapp" variant="ghost" size="sm">
        <Link to="/">
          <Text
            fontSize={"large"}
            fontWeight="bold"
            color={useColorModeValue("blackAlpha.800", "whatsapp")}
          >
            Home
          </Text>
        </Link>
      </Button>

      <Button colorScheme="whatsapp" variant="ghost" size="sm">
        <Link to="/exchanges">
          <Text
            fontSize={"large"}
            fontWeight="bold"
            color={useColorModeValue("blackAlpha.800", "whatsapp")}
          >
            Exchnage
          </Text>
        </Link>
      </Button>

      <Button colorScheme="whatsapp" variant="ghost" size="sm">
        <Link to="/coins">
          <Text
            fontSize={"large"}
            fontWeight="bold"
            color={useColorModeValue("blackAlpha.800", "whatsapp")}
          >
            Coins
          </Text>
        </Link>
      </Button>
    </HStack>
  ) : (
     // Drawer for mobile view of header component using chakra ui drawer component and useDisclosure hook from chakra ui library to open and close drawer
    <>
      <Button
      marginTop={2}
        pos={"sticky"}
        top={"4"}
        left={"0"}
        colorScheme="whatsapp"
        p={0}
        w={100}
        h={10}
        boxShadow="xl"
        borderEndRadius={"full"}
        onClick={onOpen}
        transform={"translateX(-50%,-50%)"}
        zIndex={100}
        mb={10}
      >
        <BiMenuAltLeft size={"35"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Crypto.Io</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"} spacing={"5"}>
              <Button
                variant={"ghost"}
                colorScheme={"whatsapp"}
                onClick={onClose}
              >
                <Link to="/">
                  <Text
                    fontSize={"large"}
                    fontWeight="bold"
                    color={useColorModeValue("blackAlpha.800", "whatsapp")}
                  >
                    Home
                  </Text>
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                colorScheme={"whatsapp"}
                onClick={onClose}
              >
                <Link to="/exchanges">
                  <Text
                    fontSize={"large"}
                    fontWeight="bold"
                    color={useColorModeValue("blackAlpha.800", "whatsapp")}
                  >
                    Exchnage
                  </Text>
                </Link>
              </Button>

              <Button
                variant={"ghost"}
                colorScheme={"whatsapp"}
                onClick={onClose}
              >
                <Link to="/coins">
                  <Text
                    fontSize={"large"}
                    fontWeight="bold"
                    color={useColorModeValue("blackAlpha.800", "whatsapp")}
                  >
                    Coins
                  </Text>
                </Link>
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
