// "use client";

// import { PrivyProvider as Provider } from "@privy-io/react-auth";
// export default function PrivyProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const PRIVY_APP_ID = "clylz5wm10981dqm02eblg3rt";
//   return (
//     <Provider
//       appId={PRIVY_APP_ID}
//       config={{
//         // Customize Privy's appearance in your app
//         appearance: {
//           theme: "dark",
//           accentColor: "#676FFF",
//           logo: "http://localhost:3000/images/logo.svg",
//           walletChainType: "ethereum-and-solana",
//           walletList: ["phantom"],
//         },
//         // Create embedded wallets for users who don't have a wallet
//         embeddedWallets: {
//           createOnLogin: "off",
//         },
//       }}
//     >
//       {children}
//     </Provider>
//   );
// }
