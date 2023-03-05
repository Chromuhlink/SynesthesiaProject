import * as React from 'react'
import {
 usePrepareContractWrite,
 useContractWrite,
 useWaitForTransaction,
 useAccount
} from 'wagmi'


export function MintNFT() {
const { address } = useAccount()

console.log(address)

    
const { config } = usePrepareContractWrite({
 address: '0x217bE3247D72E20431C159505E91E1541B10c330',
 abi: [
 {
 name: 'safeMint',
 type: 'function',
 stateMutability: 'payable',
 inputs: [{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],
 outputs: [],
 },
 ],
 functionName: 'safeMint',
    args: [ address as any, 'bafkreifmdylgj67z34jsp62oftlqk44u4mtf4r3sjnn3eqdewnfmc7byzy'],
    enabled: Boolean(address),
 })
 const { data, write } = useContractWrite(config)

 const { isLoading, isSuccess } = useWaitForTransaction({
 hash: data?.hash,
 })

 return (
 <div>
 <button onClick={() => write?.()}>
 {isLoading ? 'Minting...' : 'Mint'}
 </button>
 {isSuccess && (
 <div>
 Successfully minted your NFT!
 <div>
 <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
 </div>
 </div>
 )}
 </div>
 )
}
