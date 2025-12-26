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
        packageId: "",

      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        packageId: "",
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        packageId: "",
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };