import { Box, Container } from '@chakra-ui/react';
import React from 'react'
import Loader from './Loader'
import {useEffect, useState} from 'react'

const CoinDetails = () => {

  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  const [currency, setCurrency] = useState("inr");
  return (
  <Container maxW={"container.lg"}>
    {
      loading? <Loader/> : (  
      <>
      <Box w={"full"} borderWidth={1}> 
asd
      </Box>
      
      
      </>)
    }
  </Container>
  )
}

export default CoinDetails