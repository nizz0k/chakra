import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  VStack
} from '@chakra-ui/react'
import Container from '../components/Container'

export default function Privacy() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
   <Container >
    <Head>
      <title>Privacy</title>
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
            Privacy
          </Heading>
          </Flex>
        
      </Stack>
      <VStack>
        <Text as='p'
        p={[4, 6, 8]}
        >
            This site like many others uses Google Analytics to see who is visiting the site and how they are using it. This means that some 'private' information might get logged, but every effort is made to keep the information as anonymous as possible. I mean, it's the internet, so someone is always spying on you. The site might may implement more features in the future, but for now just enjoy the art. 
        </Text>
      </VStack>

   </Container>
    </>
  )
}
