import type { AppProps } from 'next/app'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import theme from '../style/theme'
import Header from '../components/header'

import '../style/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <VStack bgColor='brand.100' w='100%' h='100%'>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </VStack>
    </ChakraProvider>
  )
}

export default MyApp
