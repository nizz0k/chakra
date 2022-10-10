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

export default function About() {
  const {colorMode} = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
   <Container >
    <Head>
      <title>About the Map </title>
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
            About
          </Heading>
          <Text>Some info about the map and project</Text>
        </Flex>
      </Stack>
      <VStack
      width='100%'
      m='auto'
      >
<Text 
as='p'
p={[4, 4, 6]}


>
This project was born during the lockdowns of 2020 as a way for me to document Peng's art. Over the course of many walks I took geotagged photos of the "Pengs" that I would see. Slowly, I began to realize the full extent of his artistic lexicon and the ubiquity of the art in Frankfurt. This website is an effort to share that art.
</Text>
<Text as='p'
p={[4, 4, 6]}

>
The images and map are my attempts to document and categorize the art that I saw. The typology used is my own interpretation, although it is informed by correspondence with the artist. For this reason, I chose a conflation of the media used and the art types themselves. Over the course of the project, my motivation for taking the pictures changed from simple geographic documentation to sharing the pictures. As a result, some of the pictures are poorer in quality than the rest.  
</Text>
<Text as='p'
p={[4, 4, 6]}

>

The majority of the locations have been manually adjusted because of the inaccuracies in mobile phone GPS systems. Any mistakes are my own attempts at a 'best guess' for locations. Please be respectful of people's property when checking out the art.
</Text>
</VStack>
   </Container>
    </>
  )
}
