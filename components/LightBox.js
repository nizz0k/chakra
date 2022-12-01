import React, {useState} from 'react'
import { Modal, ModalContent, ModalBody, ModalCloseButton, Flex, ModalOverlay, ModalHeader, useDisclosure } from '@chakra-ui/react'

const LightBox = ({children, src, alt, Wrapper = 'div'} ) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Wrapper
    onClick={onOpen}
    >

        {children}
        {isOpen ?
            <Modal isOpen={isOpen} size='lg' onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>
            <ModalBody >
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
               </ModalBody>
               </ModalContent>
            </Modal>
        :null}
    </Wrapper>
    )
} 
export default LightBox