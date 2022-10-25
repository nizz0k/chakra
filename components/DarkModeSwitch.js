import { useColorMode, IconButton, Flex, Button, Spacer, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { useState } from "react"
import styled from "@emotion/styled";
import SiteLogo from "./Logo"


const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode} = useColorMode()
    const [display, changeDisplay] = useState("none")
    const iconColor = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    
    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

  const logoBg = {
    light: 'white',
    dark: 'white'
  }


    const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 2000;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height .5s, line-height .5s;
    `

    return(
    <StickyNav 
    flexDir="row"
    justify="space-between"
    alignItems="center"
    width="100%"
    bg={bgColor[colorMode]}
    color={color[colorMode]}
    as="nav"
    px={[2, 6, 6]}
    py={2}
  //  mb={[0, 0, 8]}
    mx="auto"
    >    
        <Flex
        align="center"
        justify="space-between"
        flexDirection="row"
        width="100%"
        >
        <Box bg={logoBg[colorMode]}>
        <SiteLogo 
        width="100px"
        colorMode={colorMode}
        />
        </Box>
        <Flex >
        <Flex 
        display={['none', 'none', 'flex', 'flex']}
        ml="auto"
        justifySelf="end"
            >
            <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                    Home
                </Button>
                                </NextLink>
                <NextLink href="/map" passHref>
                <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                     Map
                </Button>
            </NextLink>
            <NextLink href="/about" passHref>
                    <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                        About
                    </Button>
            </NextLink>
        </Flex>
        <IconButton
        aria-label="Open Menu"
        size="lg"
        mr="2"
        icon={<HamburgerIcon />}
        display={['flex', 'flex', 'none', 'none']}
        onClick={() => changeDisplay('flex')}
        />
        <IconButton 
        aria-label="Toggle Dark Mode"
        size="lg"
        icon={colorMode === 'dark' ? <SunIcon />: <MoonIcon />}
        onClick={toggleColorMode}
        color={iconColor[colorMode]}
        />
    </Flex>
    </Flex>
    <Flex 
    w="100vw"
    bgColor="gray.500"
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    overflow="auto"
    flexDir="column"
    display={display}
    position='absolute'
    >
    <Flex 
        justify="flex-end"
    >
        <IconButton 
        mt={2}
        mr={2}
        aria-label="Close Menu"
        size="lg"
        icon={<CloseIcon />}
        onClick={() => changeDisplay('none')}
            /> 
        </Flex>
        <Spacer />
        <Flex
        flexDirection="column"
        align="center"
        justify="space-between"
        mb='60%'
        >
            <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p={[4, 4, 10]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                    Home
                </Button>
            </NextLink>
            <NextLink href="/map" passHref>
                <Button as="a" variant="ghost" p={[4, 4, 10]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                     Map
                </Button>
            </NextLink>
            <NextLink href="/about" passHref>
                <Button as="a" variant="ghost" p={[4, 4, 10]} _hover={{backgroundColor: navHoverBg[colorMode]}}>
                    About
                </Button>
            </NextLink>
        </Flex>
    </Flex>
    </StickyNav>
    )
}

export default DarkModeSwitch