import { Box, Image, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assets/btc.png';
import {motion} from 'framer-motion'

const Home = () => {
  return (
   <Box bgColor={useColorModeValue("whitesmoke", "whatsapp")} w={"full"} h={"85vh"}>
    
<motion.div style={{
  height: "80vh",

}}
animate={{
  translateY: "20px",
}}

transition={{
  duration: 2,
  // ease: "linear",
  repeat: Infinity,
  repeatType: "reverse",

}}
>

    <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} filter={useColorModeValue("grayscale(1)", "grayscale(0)")}/>
</motion.div>

   
   <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={useColorModeValue("blackAlpha.900", "whitesmoke")} mt={-20}> Crypto.IO</Text>
   </Box>
  )
}

export default Home