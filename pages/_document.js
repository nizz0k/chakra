import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"
import { useRef } from 'react'

export default class Mydocument extends NextDocument {
    
    render() {
        return(
            <Html lang="en">
            <Head />
            <body>
                <ColorModeScript />
                <Main  />
                <NextScript />
            </body>
            </Html>
        )
    }
}