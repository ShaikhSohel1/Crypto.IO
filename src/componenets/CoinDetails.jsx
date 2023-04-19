import { Badge, Box, Container, HStack,Image,Radio,RadioGroup, Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack,  } from '@chakra-ui/react';
import React from 'react'
import Loader from './Loader'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {server} from '../main'
import {useParams} from 'react-router-dom'
import ErrorComponenet from './ErrorComponenet'
import { useColorModeValue } from '@chakra-ui/react'


const CoinDetails = () => {

  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();

  const currencySymbol = 
  currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  useEffect(() => {
   
    const fetchCoin = async () => {
     try {
      const {data} = await axios.get(`${server}/coins/${params.id}`)
      
      setCoin(data);
      console.log(data);
     
      setLoading(false);
     } catch (error) {
       setError(true);
      setLoading(false);
     }
    }
    fetchCoin()
  }, [params.id])

  if(error) return <ErrorComponenet message={"Error While Fetching Coin"}/>


  return (
  <Container maxW={"container.lg"}>
    {
      loading? <Loader/> : (  
      <>
      <Box w={"full"} borderWidth={1}> 

      </Box>
{/* {Button} */}

      <RadioGroup value={currency} onChange={setCurrency} p={8}>
        <HStack spacing={4}>
          <Radio  value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio  value={"eur"}>EUR</Radio>
        </HStack>
      </RadioGroup>

      <VStack spacing={4}  p={16} alignItems={"flex-start"}>
        <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"}>Last Updated On {Date(coin.market_data.last_update).split('G')[0]} </Text>
        <Image src={coin.image.large} w={16} h={16} objectFit={"contain"}/>
       <Stat>
       <StatLabel>{coin.name}</StatLabel>
        <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
        <StatHelpText>
          <Stack direction={"row"} spacing={4}>
            <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase": "decrease"} />
            <Text> {coin.market_data.price_change_percentage_24h}%</Text>
            
          </Stack>

        </StatHelpText>   
       </Stat>
       <Badge fontSize={"2xl"} bgColor={useColorModeValue("whitesmoke", "whatsapp")} color={useColorModeValue("blackAlpha.900", "whatsapp")}>{`#${coin.market_cap_rank}`}</Badge>
      </VStack>
      
      
      </>)
    }
  </Container>
  )
}

export default CoinDetails