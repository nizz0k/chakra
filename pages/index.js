import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box
} from '@chakra-ui/react'
import Container from '../components/Container'
import SiteLogo from '../components/Logo'

export default function Index() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
   <Container >
    <Head>
      <title>Home </title>
    </Head>
      <Stack
      as="main"
      spacing={8}
      justifyContent='center'
      alignItems='flex-start'
      m='0 auto 4rem auto'
      maxWidth='1000px'
      px={2}
      >
        <Flex
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='center'
        maxWidth='1000px'
        >
          <Heading
          mb={2}
          >
            Peng war hier
          </Heading>
          <Text>A map of Peng spots in Frankfurt</Text>
        </Flex>
      
        
      </Stack>
    

   </Container>
    </>
  )
}
