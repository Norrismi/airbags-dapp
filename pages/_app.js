import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (

                                  //ChainId.Mainnet https://portal.thirdweb.com/react
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
