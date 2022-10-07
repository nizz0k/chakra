import React from "react";
import {
    useColorMode,
    Flex,
} from '@chakra-ui/react'
import DarkModeSwitch from '../components/DarkModeSwitch'

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
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
    >
        {children}
    </Flex>
    
    </>
    )
   

}

export default Container