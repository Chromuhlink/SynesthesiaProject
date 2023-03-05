import { ZDK, ZDKNetwork, ZDKChain, TokensQuery } from "@zoralabs/zdk";
import { useEffect } from "react";


export async function DroneSeeker() {
  const networkInfo = {
    network: ZDKNetwork.Ethereum,
    chain: ZDKChain.Goerli,
  }

const API_ENDPOINT = "https://api.zora.co/graphql";
const args = { 
              endPoint:API_ENDPOINT, 
              networks:[networkInfo], 
              apiKey: process.env.API_KEY 
            } 

const zdk = new ZDK(args) // All arguments are optional

const args1 = { 
    where: { 
      collectionAddresses: ["0xf6080f0D23525e2216d74FEA938983a408209250"], 
      ownerAddresses: ["0x7b5330E0B4C56640FDe6a450849765166F738046"] 
    }, 
    pagination: {limit: 5}, // Optional, limits the response size to 3 NFTs
    includeFullDetails: false, // Optional, provides more data on the NFTs such as events
    includeSalesHistory: false // Optional, provides sales data on the NFTs
  };
  
  const response = await zdk.tokens(args1);
  console.log(response.tokens);
  return response.tokens;
}

    