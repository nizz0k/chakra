import NextLink from 'next/link'
import {Flex, Button } from '@chakra-ui/react'

const Footer = () => {

    return(
<Flex
flexDirection='row'
width='100%'
height='30px'
verticalAlign='bottom'
>
<NextLink href='/privacy' passHref>
<Button
as='a'
variant='link'
p={[1, 2, 4]}
>Privacy</Button>
</NextLink>
</Flex>
)
}

export default Footer