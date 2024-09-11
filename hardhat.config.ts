import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import {config as $config} from "dotenv";
$config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    morph: {
      chainId: 2810,
      url: "https://rpc-quicknode-holesky.morphl2.io/",
      accounts: [process.env.PRIVATE_KEY as string]
    }
  }
};

export default config;
