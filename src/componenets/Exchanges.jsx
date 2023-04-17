import React from 'react'
import axios from 'axios'
import {server} from '../main'
import {useEffect, useState} from 'react'
import { Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
import ExchangeCard from './ExchangeCard'
import ErrorComponenet from './ErrorComponenet'


const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);




  useEffect(() => {
   
    const fetchEcchanges = async () => {
     try {
      const {data} = await axios.get(`${server}/exchanges`)
      
      setExchanges(data);
   
      setLoading(false);
     } catch (error) {
       setError(true);
      setLoading(false);
     }
    }
    fetchEcchanges()
  }, [])

  if(error) return <ErrorComponenet message={"Error While Fetching Data"}/>
  

  return (
    <Container maxW={"container.xl"}>
      {loading? <Loader/> : (<>
      <HStack wrap={"wrap"}>
        {
          exchanges.map((exchange) => (
            <ExchangeCard key= {exchange.id} name= {exchange.name} img = {exchange.image} rank = {exchange.trust_score_rank} url = {exchange.url}/>
          ))
        }
      </HStack>
         
          
      </>)}
    </Container>
  )
}

export default Exchanges