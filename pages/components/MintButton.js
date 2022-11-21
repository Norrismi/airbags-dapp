import { Web3Button } from '@thirdweb-dev/react'
import { text } from 'express'


const MintButton = () => {






    return (
        <div>
       
            <Web3Button
                className="bg-black h-16 w-full p-2 text-white rounded-full mt-10 font-bold"
                contractAddress='0xBC6453EF4374bA4bC8d5CbCAF2b02C38D46Bfb75' action={(contract) => { contract.erc721.claim(1) }}
            >
                Mint NFT
            </Web3Button>
        </div>
    )
}

export default MintButton