import { useState } from "react";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { SolanaChain, useWallets } from "@particle-network/connectkit";

export function useSendSol() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [primaryWallet] = useWallets();

  const sendSol = async (recipientAddress: string, amount: number) => {
    setIsLoading(true);
    setError(null);

    if (primaryWallet?.connector?.walletConnectorType !== "solanaWallet") {
      setError("Solana wallet not connected");
      setIsLoading(false);
      return null;
    }

    const anchorWallet = primaryWallet.getWalletClient<SolanaChain>();

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(await anchorWallet.publicKey),
        toPubkey: new PublicKey(recipientAddress),
        lamports: amount * 1000000000,
      })
    );

    try {
      const signature = await anchorWallet.sendTransaction(tx);
      setIsLoading(false);
      return signature;
    } catch (err) {
      if (err instanceof Error)
        setError(err.message || "An error occurred while sending SOL");
      setError("An error occurred while sending SOL");
      setIsLoading(false);
      return null;
    }
  };

  return { sendSol, isLoading, error };
}
