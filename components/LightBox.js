import React, {useState} from 'react'
import { Modal, ModalContent, ModalBody, ModalCloseButton, Flex, ModalOverlay, ModalHeader, useDisclosure } from '@chakra-ui/react'

const LightBox = ({children, src, alt, Wrapper = 'div'}, zIndex=200) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //const [ isOpen, setisOpen ] = useState(false)
    
    //const toggleIsOpen = () =>{
    //    setisOpen(!isOpen)
    //}

    return (
    <Wrapper
    onClick={onOpen}
    >

        {children}
        {isOpen ?
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

            <Flex
             onClick={onClose}           
            
            >
                <img src={src}
						alt={alt}
						style={{
							height: 'auto',
							width: '100%'
						}}
					/>
               </Flex> 
               </ModalContent>
            </Modal>
        :null}
    </Wrapper>
    )
} 
export default LightBox