// src/components/Providers.tsx
"use client";

import { Suspense } from "react";
import { AuthKitProvider } from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { WagmiProvider } from "@/components/WagmiProvider";

const authKitConfig = {
  relay: "https://relay.farcaster.xyz",
  rpcUrl: "https://mainnet.optimism.io",
  siweUri: "http://example.com/login",
  domain: "example.com",
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthKitProvider config={authKitConfig}>
      <Suspense fallback={<div>Loading...</div>}>
        <WagmiProvider>{children}</WagmiProvider>
      </Suspense>
    </AuthKitProvider>
  );
}
