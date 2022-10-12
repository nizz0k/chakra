import { ChakraProvider, ColorModeProvider, useColorMode, CSSReset } from "@chakra-ui/react"
import { Global, css } from "@emotion/react"
import customTheme from "../styles/theme"
import Head from 'next/head'
import Script from "next/script"

const GlobalStyle = ({children}) => {
const { colorMode } = useColorMode();
  return(
    <>
    <Global 
      styles={css`
      ::selection {
        background-color: #90CDF4;
        color: #fefefe;
      }
      ::-moz-selectiong {
        background: #ffb7b7;
        color: #fefefe;
      }
      html {
        min-width: 356px
        scroll-behavior: smooth;
      }
      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: ${colorMode === 'light' ? 'white' : '#171717'};
      }
      `}
      />
    {children}
    </>
  )
}
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFR9PBK');
`,
        }}
      />
    
   
  <ChakraProvider resetCSS theme={customTheme}>
    <CSSReset />
    <ColorModeProvider 
      options={{
        initialColorMode: "light",
        userSystemColorMode: true,

      }}
    >
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
   </ColorModeProvider>
  </ChakraProvider>
  </>
  )
}

export default MyApp
