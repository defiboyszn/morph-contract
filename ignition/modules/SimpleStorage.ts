import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const SimpleStorageModule = buildModule("SimplleStorageModule", (m: any) => {

  const SimpleStorage = m.contract("SimpleStorage");

  return { SimpleStorage };
});

export default SimpleStorageModule;
