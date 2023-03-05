import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Web3Button, Web3NetworkSwitch } from '@web3modal/react'
import styles from '@/styles/Home.module.css'
import { Web3Provider } from '@ethersproject/providers'
import { MintNFT } from './mintNFT'
import { useEffect, useState, useCallback } from 'react';
import { DroneSeeker } from './hooks /zdktest'; 


export default function HomePage() {
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    DroneSeeker().then((tokens) => setTokens(tokens.nodes.length));
  }, []);


 return (
    <>
      {/* Predefined button  */}
      <Web3Button icon="show" label="Connect Wallet" balance="show" />
      <br />

      {/* Network Switcher Button */}
      <Web3NetworkSwitch />
      <br />
 
      <div>
        <MintNFT />
      </div>

      <div>Token Count is {tokens}</div>

</>
)

}