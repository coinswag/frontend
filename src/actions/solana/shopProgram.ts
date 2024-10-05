"use client";
import { Connection } from "@solana/web3.js";
import {
  AnchorProvider,
  Program as AnchorProgram,
  Idl,
  Program,
} from "@coral-xyz/anchor";
import type { ShopProgram } from "@/types";

// import { AnchorWallet } from "@solana/wallet-adapter-react";

import IDL from "@/contants/idl.json";
import { SolanaChain, useWallets } from "@particle-network/connectkit";

export function useShopProgram() {
  const [primaryWallet] = useWallets();
  if (primaryWallet?.connector?.walletConnectorType === "solanaWallet") {
    const anchorWallet = primaryWallet.getWalletClient<SolanaChain>();
    const connection = new Connection("https://api.devnet.solana.com");
    const provider = new AnchorProvider(connection, anchorWallet, {
      commitment: "confirmed",
    });
    const program = new AnchorProgram(
      IDL as Idl,
      provider
    ) as unknown as Program<ShopProgram>;

    return program;
  }
  return null;
}
