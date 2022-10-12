import React, { useEffect, useState } from 'react'
import  { setCookie, hasCookie} from 'cookies-next'
import { ButtonGroup, Flex, Button } from '@chakra-ui/react'

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
        width='90%'
        bottom='0'
        height='20px'
        alignItems='center'

        className={`${
          consent ? 'hidden' : ''
        }`}
      >
        This Site use cookies to function, please accept them for the best experience.
        <Flex 
        alignItems='center'
        justify='space-between'
        pl={1}
        >
        <ButtonGroup>
        <Button
           variant='link'
           colorScheme='yellow'
            onClick={(e) => {
              closeP();
            }}
          >
            Close
          </Button>
          <Button
            onClick={(e) => denyCookie()}
            variant='link'
            colorScheme='yellow'
            
          >
            Deny All
          </Button>
          <Button
           variant='link'
           colorScheme='yellow'
            onClick={() => {
              acceptCookie();
            }}
            className="p-2 bg-green-400 rounded-md"
          >
            Accept All
          </Button>
          </ButtonGroup>
 
        </Flex>
      </Flex>

      )
}

export default Consent
