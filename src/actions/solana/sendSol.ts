import { useState } from "react";
import {
  PublicKey,
  Transaction,
  SystemProgram,
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { useSolana } from "@particle-network/authkit";
import { solanaDevnet } from "@particle-network/connectkit/chains";

export function useSendSol() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signAndSendTransaction, wallet, switchChain } = useSolana();
  const connection = new Connection(clusterApiUrl("devnet"), {
    commitment: "confirmed",
  });

  const sendSol = async (recipientAddress: string, d: number) => {
    console.log(d);

    setIsLoading(true);
    setError(null);

    if (!wallet) {
      setError("Solana wallet not connected");
      setIsLoading(false);
      return null;
    }

    try {
      await switchChain(solanaDevnet.id);

      const tx = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey!,
          toPubkey: new PublicKey(recipientAddress),
          lamports: 0.1 * LAMPORTS_PER_SOL,
        })
      );
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();

      tx.recentBlockhash = blockhash;
      tx.lastValidBlockHeight = lastValidBlockHeight;

      const signature = await signAndSendTransaction(tx);
      console.log(signature);

      setIsLoading(false);
      return signature;
    } catch (err) {
      console.log(err);
      if (err instanceof Error)
        setError(err.message || "An error occurred while sending SOL");
      setError("An error occurred while sending SOL");
      setIsLoading(false);
      return null;
    }
  };

  return { sendSol, isLoading, error };
}
