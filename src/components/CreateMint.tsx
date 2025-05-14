import { useState } from "react"
import { createMint } from '@solana/spl-token';

export function CreateMint() {
    const [ tokenName, setTokenName ] = useState("");
    const [ tokenSymbol, setTokenSymbol ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ initialSupply, setInitialSupply ] = useState(0);

    async function createMint() {
        
    }

    return <div>
        <div className="mt-12">
            <input onChange={(e) => {
                setTokenName(e.target.value);
            }} type="text" placeholder="Enter the token name" className="border-2 border-slate-500 rounded-lg pr-14 pl-2 py-3 text-white" />
        </div>
        
        <div className="mt-6">
            <input onChange={(e) => {
                setTokenSymbol(e.target.value);
            }} type="text" placeholder=" Enter the token symbol" className="border-2 border-slate-500 rounded-lg px-14 pl-2 py-3 text-white" />
        </div>

        <div className="mt-6">
            <input onChange={(e) => {
                setImageUrl(e.target.value);
            }} type="text" placeholder="Enter the token image URL" className="border-2 border-slate-500 rounded-lg px-14 pl-2 py-3 text-white" />
        </div>

        <div className="mt-6">
            <input onChange={(e) => {
                setInitialSupply(Number(e.target.value));
            }} type="number" placeholder="Initial supply of token" className="border-2 border-slate-500 rounded-lg px-14 pl-2 py-3 text-white" />
        </div>

        <button onClick={createMint} className="bg-violet-900 px-8 py-2 text-white rounded-md font-bold mt-6 cursor-pointer ml-16">
            Submit
        </button>
        
        
    </div>
}