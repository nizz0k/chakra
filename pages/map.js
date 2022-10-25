import Head from 'next/head'
import { useColorMode, Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import Container from '../components/Container'
import points from '../data/pengs.json'

export async function getStaticProps(context){
   return{
    props: {
        points,
    }
   }
}

export default function MapPage(props) {

const {colorMode} = useColorMode()
const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
}

const MapWithNoSSR = dynamic(() => import("../components/Map"), {
ssr: false
});

return(
    <>
    <Container>
        <Head> 
            <title>Map</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        </Head>
        <Box
        height={{
            base: '720px',
            sm: '720px'

        }}
        >
        <MapWithNoSSR points={props.points} />
        </Box>

    </Container>
    </>
)
}