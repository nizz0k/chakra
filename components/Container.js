import React from "react";
import {
    useColorMode,
    Flex,
    Box
} from '@chakra-ui/react'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Footer from "./Footer";

const Container = ({children}) => {

    const { colorMode } = useColorMode();

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

   
    return( <>
    <DarkModeSwitch />
    <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        width='100%'
        
    >
        {children}
    </Flex>
    <Footer />
    </>
    )
   

}

export default Container