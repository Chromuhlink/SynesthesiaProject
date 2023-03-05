import { AppProps } from 'next/app';
import { 
  EthereumClient, 
  modalConnectors, 
  walletConnectProvider 
} from '@web3modal/ethereum';
import { ethers } from 'ethers';
import { Web3Button, Web3Modal, Web3NetworkSwitch } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli } from "wagmi/chains"; 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import * as React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


// Get projectID 
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide YOUR_PROJECT_ID env variable')
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const chains = [ goerli ];

const Contract_Address = "0x217bE3247D72E20431C159505E91E1541B10c330";


// wagmi core client 
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    version: "1", 
    appName: "web3modal",
    chains,
  }),
  provider,
});


//Web3Modal client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const queryClient = new QueryClient()


export default function App({ Component, pageProps }: AppProps) {
  

  const [ready, setReady] = useState(false)

  return(
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal
        projectId= {projectId}
        ethereumClient={ethereumClient}
      />
    </QueryClientProvider>
  
  ) 
};



