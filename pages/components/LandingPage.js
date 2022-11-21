import React, { useState, useEffect } from 'react'
 //import MintButton from '../components/MintButton'
import {useAddress, useMetamask, useDisconnect, useContract } from "@thirdweb-dev/react";
import Image from 'next/image'


const LandingPage = ({ data }) => {
    // Auth
    const connectWithMM = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    const [connectedAddress, setConnectedAddress] = useState(false)

   
    const {contract} = useContract('0xBC6453EF4374bA4bC8d5CbCAF2b02C38D46Bfb75')
   


    return (
        <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>

            <div className="lg:col-span-4 bg-gradient-to-br from-black to-gray-400 h-screen flex-col">

                <div className="flex flex-col py-2 lg:min-h-screen justify-center items-center mx-auto ">
                    <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl ">


                        <picture>
                            <img className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 ' src="https://links.papareact.com/8sg" alt="ab1" />
                        </picture>

                    </div>


                    <div className="text-white text-center p-5 space-y-2">
                        <h1 className='text-4xl flex justify-center font-bold'>
                            Airbags
                        </h1>
                        <h2 className='tex-xl text-gray-300'>
                            Airdrop money to your bag
                        </h2>
                    </div>

                </div>
            </div>

            <div className="flex flex-1 flex-col p-12  lg:col-span-6">
                <header className=" flex items-center justify-between ">
                    <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
                        The <span className='font-extrabold underline decoration-pink-600/50'>Airbags</span> NFT Market Place
                    </h1>

                    <button onClick={() => (address ? disconnect() : connectWithMM())} className="rounded-full bg-black text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base">
                        {address ? 'Sign Out' : 'Sign In'}
                    </button>
                </header>

                <hr className='my-2 border' />
                <div className="mx-auto text-[#507dbc]">{address ? `Your logged in with wallet ${address.slice(0, 5)}....${address.slice(-5)}` : null}</div>


                <div className="flex flex-col flex-1 items-center mt-10 space-y-6 text-center lg:justify-center lg:space-y-0">
                    <picture>
                        <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="ab2" />
                    </picture>
                    <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold ">Airbags</h1>
                    
                    <p className="pt-2 text-xl text-[#507dbc] ">12/21 NFTs Claimed</p>
                </div>

                <button className="bg-black h-16 w-full p-2 text-white rounded-full mt-10 font-bold">Mint</button>
                {/* <MintButton/> */}


                <div className="mint">

                </div>
            </div>
        </div>
    )
}

export default LandingPage