import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import Container from '../components/Container'
import SiteLogo from '../components/Logo'
import NextLink from 'next/link'

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
      m='0 auto 2rem auto'
      maxWidth='1000px'
      px={2}
      >
        <Flex
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='center'
        maxWidth='1000px'
        mb={6}
        >
          <Heading
          mb={2}
          >
            Peng war hier
          </Heading>
          <Text
          mb={4}
          >A map of Peng spots in Frankfurt</Text>
          <Flex
        bg={useColorModeValue('white', 'white')}
        width={[360, 760]}
        justifyContent='center'
        alignItems='center'
        mt={4}
        
        >
          <SiteLogo 
          width='90%' 
          colorMode={useColorModeValue(colorMode)}
          style=''
          
          />
          
        </Flex>
        <Text as='p'
        fontSize='lg'
        mt={4}
        >
            Check out more than 2,000 spots with pictures on our 
            <NextLink href='/map' passHref>
              <Button
              variant='link'
              p={2}
              colorScheme='yellow' >
               Map page</Button>
              </NextLink>
          </Text>
        </Flex>
        
      
        
      </Stack>
    

   </Container>
    </>
  )
}
