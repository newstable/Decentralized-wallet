import { ethers } from "ethers";
import ABIs from "./abis.json";

const DefaultRPCS = {
    1: "http://13.59.118.124/eth",
    250: "https://rpc.ftm.tools/",
    4002: "https://rpc.testnet.fantom.network",
    26: "https://rpc.icicb.com",
    1337: "http://localhost:7545",
    31337: "http://localhost:8545/"
}

const getProviers = (rpcUrl) => {
    return new ethers.providers.JsonRpcProvider(rpcUrl);
}

const getERC20Contract = (address) => {
    return new ethers.Contract(address, ABIs.ERC20);
}

const getERC721Contract = (address) => {
    return new ethers.Contract(address, ABIs.ERC20);
}

const getWallet = (privateKey) => {
    return new ethers.Wallet(privateKey);
}

export {
    DefaultRPCS, getProviers, getERC20Contract, getERC721Contract, getWallet
}