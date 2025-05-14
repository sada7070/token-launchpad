import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import '@solana/wallet-adapter-react-ui/styles.css';


function App() {

  return <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
        <div>
          <div className='flex flex-col justify-center items-center min-h-screen bg-zinc-900'>
            <WalletMultiButton />
          </div>
        </div>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
}

export default App
