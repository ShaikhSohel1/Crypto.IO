import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
  <Box bgColor={useColorModeValue("whitesmoke", "dark")} color={useColorModeValue("blackAlpha.900", "whitesmoke")} minH={48} px={16} py={["16","8"]}>

    <Stack direction={['column','row']} h={"full"} alignItems={"center"}>
    <VStack w={"full"} alignItems={['center','flex-start']}>
      <Text fontWeight={"bold"}>
        About Us
      </Text>
      <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={['center','left']}>
        We Provide Best Experience For Crypto Enthusiasts 
      </Text>
    </VStack>

    <VStack>
    <Avatar boxSize={"28"} mt={['8','0']}/>
        <Text>
            Our Founder
        </Text>
    </VStack>
    </Stack>

  </Box>
  )
}

export default Footer