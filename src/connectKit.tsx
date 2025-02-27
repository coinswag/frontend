"use client";

import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
import {
  solana,
  solanaDevnet,
  solanaTestnet,
} from "@particle-network/connectkit/chains";
import {
  injected as solaInjected,
  solanaWalletConnectors,
} from "@particle-network/connectkit/solana";

// import { wallet, EntryPosition } from "@particle-network/connectkit/wallet";
import React from "react";

//Retrived from https://dashboard.particle.network
const projectId = "ce727df6-81f2-4f76-b3e6-1f577403b0f9";

const clientKey = "cSgnSp1kvpwXbZweXEWCkdC3nTsjC20piumsU7BY";
const appId = "4a09c433-1746-4257-b868-23ce4fb3b26c";
// const walletConnectProjectId = process.env
//   .NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string;

if (!projectId || !clientKey || !appId) {
  throw new Error("Please configure the Particle project in .env first!");
}

const config = createConfig({
  projectId,
  clientKey,
  appId,
  initialChainId: {
    solana: solanaDevnet.id,
  },
  appearance: {
    // Optional, collection of properties to alter the appearance of the connection modal
    // Optional, label and sort wallets (to be shown in the connection modal)
    recommendedWallets: [
      { walletId: "solflare", label: "Recommended" },
      { walletId: "phantom", label: "popular" },
    ],
    splitEmailAndPhone: false, // Optional, displays Email and phone number entry separately
    collapseWalletList: false, // Optional, hide wallet list behind a button
    hideContinueButton: false, // Optional, remove "Continue" button underneath Email or phone number entry
    connectorsOrder: ["email", "phone", "social", "wallet"], //  Optional, sort connection methods (index 0 will be placed at the top)
    language: "en-US", // Optional, also supported ja-JP, zh-CN, zh-TW, and ko-KR
    mode: "dark", // Optional, changes theme between light, dark, or auto (which will change it based on system settings)
    theme: {
      "--pcm-accent-color": "#ff4d4f",
      // ... other options
    },
    logo: "http://localhost:5173/Images/logo.svg",
    filterCountryCallingCode: (countries) => {
      // Optional, whitelist or blacklist phone numbers from specific countries
      return countries.filter((item) => item === "US");
    },
  },

  walletConnectors: [
    // evmWalletConnectors({
    //   metadata: { name: "My App", icon: "", description: "", url: "" }, // Optional, this is Metadata used by WalletConnect and Coinbase
    //   walletConnectProjectId: "Replace with your WalletConnect Project ID", // optional, retrieved from https://cloud.walletconnect.com
    // }),

    authWalletConnectors({
      // Optional, configure this if you're using social logins
      authTypes: ["email", "google", "apple", "twitter", "github"], // Optional, restricts the types of social logins supported
      fiatCoin: "USD", // Optional, also supports CNY, JPY, HKD, INR, and KRW
      promptSettingConfig: {
        // Optional, changes the frequency in which the user is asked to set a master or payment password
        // 0 = Never ask
        // 1 = Ask once
        // 2 = Ask always, upon every entry
        // 3 = Force the user to set this password
        promptMasterPasswordSettingWhenLogin: 1,
        promptPaymentPasswordSettingWhenSign: 1,
      },
    }),
    solanaWalletConnectors({
      // Optional, defines specific wallet connectors to be supported
      connectorFns: [
        solaInjected({ target: "phantom" }),
        solaInjected({ target: "coinbaseWallet" }),
        solaInjected({ target: "bitKeep" }),
        solaInjected({ target: "trustWallet" }),
        solaInjected({ target: "okxWallet" }),
        // Optional, include support for a specific injected wallet (that isn't already supported)
        solaInjected({
          target: {
            icon: "https://...",
            id: "xxx", // wallet unique id
            name: "XXX Wallet",
            provider: () => {
              //   return window?.xxx.solana;
              return undefined;
            },
          },
        }),
      ],
    }),
  ],
  plugins: [
    // wallet({
    //   entryPosition: EntryPosition.BL, // Alters the position in which the modal button appears upon login
    //   visible: false, // Dictates whether or not the wallet modal is included/visible or not
    // }),
  ],
  chains: [solana, solanaDevnet, solanaTestnet],
});

// Export ConnectKitProvider to be used within your index or layout file (or use createConfig directly within those files).
export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
