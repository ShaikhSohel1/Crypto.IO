import { VStack,Image,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from '@chakra-ui/react'

const ExchangeCard = ({ name, img,rank, url}) => {
  return (
   <a href={url} target="_blank">
    <VStack w={52} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.5s"} m={4}  bgColor={useColorModeValue("whitesmoke", "blackAlpha.200")}
        css={ { "&:hover" : {
            transform: "scale(1.1)",
        },
        }}
        
        >
        
        
        <Image src={img} w={10} h={10} objectFit={"contain"} alt={"Exchanges"}/>
        <Heading size={"md"} noOfLines={1} >{rank}</Heading>
        <Text noOfLines={1}>{name}</Text>
    </VStack>
   </a>
  )
}

export default ExchangeCard