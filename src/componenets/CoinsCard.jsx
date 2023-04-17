import React from 'react'

import { useColorModeValue } from '@chakra-ui/react'
import { VStack,Image,Heading,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CoinsCard = ({id, name, img, symbol, price, currencySymbol="₹" }) => {
  return (
    <Link to={`/coins/${id}`} >
     <VStack w={52} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.5s"} m={4}  bgColor={useColorModeValue("whitesmoke", "blackAlpha.200")}
         css={ { "&:hover" : {
             transform: "scale(1.1)",
         },
         }}
         
         >
         
         
         <Image src={img} w={10} h={10} objectFit={"contain"} alt={"Exchanges"}/>
         <Heading size={"md"} noOfLines={1} >{symbol}</Heading>
         <Text noOfLines={1}>{name}</Text>
         <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>

     </VStack>
    </Link>
   )};

export default CoinsCard