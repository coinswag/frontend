// import SolanaWalletProvider from "./solanaWalletProvider";
import { ParticleConnectkit } from "@/connectKit";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ParticleConnectkit>
      {/* <SolanaWalletProvider> */}
      {children}
      {/* </SolanaWalletProvider> */}
    </ParticleConnectkit>
  );
}
