import React, {useState} from 'react'
import { Flex } from '@chakra-ui/react'

const LightBox = ({children, src, alt, Wrapper = 'div'}, zIndex=1) => {
    const [ isOpen, setisOpen ] = useState(false)
    
    const toggleIsOpen = () =>{
        setisOpen(!isOpen)
    }

    return (
    <Wrapper
    onClick={toggleIsOpen}
    >
        {children}
        {isOpen ?
            <Flex onClick={toggleIsOpen}
            
             style={{
					position: 'fixed',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100vh',
					backgroundColor: 'rgba(0,0,0,0.7)',
					cursor: 'pointer',
                    zIndex
			
				}}
            >
                <img src={src}
						alt={alt}
						style={{
							height: 'auto',
							width: '100%'
						}}
					/>
            </Flex>
        :null}
    </Wrapper>
    )
} 
export default LightBox