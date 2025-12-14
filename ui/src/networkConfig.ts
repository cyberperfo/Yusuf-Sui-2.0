import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

/**
 * Package ID retrieved from transaction summary
 */

// EKLENECEK KISIM: Admin Cap ID (Terminalden aldığımız yetki kodu)

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        packageId: "0x5dcf4c8fa2bc95746e223590be2153010a9b2c1997a7de4e954d62599ec31321",

      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "0x5dcf4c8fa2bc95746e223590be2153010a9b2c1997a7de4e954d62599ec31321",
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: "0x5dcf4c8fa2bc95746e223590be2153010a9b2c1997a7de4e954d62599ec31321",
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };