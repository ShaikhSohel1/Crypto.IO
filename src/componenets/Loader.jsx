import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Spinner size={"xl"}/>
    </VStack>
  )
}

export default Loader