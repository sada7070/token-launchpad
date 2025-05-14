import { useState } from "react"
import { createInitializeMint2Instruction, getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";

export function CreateMint() {
    const [ tokenName, setTokenName ] = useState("");
    const [ tokenSymbol, setTokenSymbol ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ initialSupply, setInitialSupply ] = useState(0);

    const { connection } = useConnection();
    const wallet = useWallet();

    async function createMint() {
        const mintKeypair = Keypair.generate();                                             // creating account for new token
        const lamports = await getMinimumBalanceForRentExemptMint(connection);

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey!,
                newAccountPubkey: mintKeypair.publicKey,
                lamports,
                space: MINT_SIZE,                                   // std space
                programId: TOKEN_PROGRAM_ID                         // token program using to mint
            }),
            createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey!, wallet.publicKey!, TOKEN_PROGRAM_ID)
        );

        transaction.feePayer = wallet.publicKey!;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;        // in solana we have fetch recent block so that we can add ours nect to it
        transaction.partialSign(mintKeypair);
        
        await wallet.sendTransaction(transaction, connection);
        alert(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
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