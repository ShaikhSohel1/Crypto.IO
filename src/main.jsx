import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider ,theme} from '@chakra-ui/react'
import App from './App'
import ColorMode from './componenets/ColorMode'


ReactDOM.createRoot(document.getElementById('root')).render(

    <ChakraProvider theme={theme}>
      <ColorMode/>
       <App />
    </ChakraProvider>

)

export const server = `https://api.coingecko.com/api/v3` ;