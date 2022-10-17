import React, { useEffect, useState } from 'react'
import  { setCookie, hasCookie} from 'cookies-next'
import { ButtonGroup, Flex, Button, Text } from '@chakra-ui/react'

function Consent() {
    const [consent, setConsent] = useState(true);
    useEffect(() => {
      setConsent(hasCookie('localConsent'));
    }, [])


    const acceptCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
        console.log('accepring cookies');
      };
      const closeP = () => {
        setConsent(true);
        console.log('closing');
      };
      const denyCookie = () => {
        setConsent(true);
        setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
        console.log('denying cookie');
      };
      if (consent === true) {
        return null;
      }
      return (
        <Flex
        position='absolute'
        flexDirection={{base: 'column', lg: 'row'}}
        width='100%'
        bottom='0'
        alignItems='center'
        p={2}

        className={`${
          consent ? 'hidden' : ''
        }`}
      >
    
        <Text
        fontSize={{base: 'xs', md: 'md'}}
        >
        This Site use cookies to function and track usage, please accept them for the best experience. Consult our Privacy policy for more information.
        </Text>
        <Flex 
        alignItems='center'
        justify='space-between'
        pl={1}
        >
        <ButtonGroup
        variant='link'
        spacing={6}
        >
        <Button
           colorScheme='yellow'
            onClick={(e) => {
              closeP();
            }}
          >
            Close
          </Button>
          <Button
            onClick={(e) => denyCookie()}
            colorScheme='yellow'
            
          >
            Deny All
          </Button>
          <Button
           colorScheme='yellow'
            onClick={() => {
              acceptCookie();
            }}
          >
            Accept All
          </Button>
          </ButtonGroup>
 
        </Flex>
      </Flex>

      )
}

export default Consent
