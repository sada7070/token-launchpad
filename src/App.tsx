import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import '@solana/wallet-adapter-react-ui/styles.css';
import { CreateMint } from "./components/CreateMint";


function App() {

  return <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
  
        <div className='flex flex-col items-center min-h-screen bg-zinc-900 pt-6'>
          <p className="text-5xl text-white pb-20">Token Launchpad</p>
          <WalletMultiButton />
          <CreateMint />
        </div>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
}

export default App
