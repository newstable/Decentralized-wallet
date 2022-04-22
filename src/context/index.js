import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  useEffect,
} from "react";

var CryptoJS = require("crypto-js");
import { ethers } from "ethers";
import {
  DefaultRPCS,
  getProviers,
  getERC20Contract,
  getERC721Contract,
  getWallet,
} from "../contracts";

import { delay, handleAlert, toBigNum, fromBigNum } from "../utils";
import defaultchains from "./chains.json";

const BlockchainContext = createContext();

export function useBlockchainContext() {
  return useContext(BlockchainContext);
}

function reducer(state, { type, payload }) {
  return {
    ...state,
    [type]: payload,
  };
}
/**
 * acccount type
 * @param {String} name - account name
 * @param {String} id - account id ( if imported ,-1)
 * @param {String} privateKey - account privateKey(for imported)
 */

const INIT_STATE = {
  isAuth: false,
  seedHash: "",
  accountInfos: "{}",
  pass: "",
  mnemonic: "",
  accounts: [],
  chains: defaultchains,
  cChainID: 26,
  cAccount: 0,
  password: "",
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // check state
  useEffect(() => {
    try {
      chrome.storage.local.get("SeedHash", (res) => {
        // console.log("SeedHash", res);
        dispatch({
          type: "seedHash",
          payload: res.SeedHash,
        });
      });

      chrome.storage.local.get("accountInfos", (res) => {
        dispatch({
          type: "accountInfos",
          payload: res,
        });
      });
    } catch (err) {
      console.log("init state error", err.message);
    }
  }, []);

  const unlockWallet = async (pass) => {
    try {
      var mnemonic = CryptoJS.AES.decrypt(state.seedHash, pass).toString(
        CryptoJS.enc.Utf8
      );

      //check valid mnemonic
      dispatch({
        type: "mnemonic",
        payload: mnemonic,
      });

      var accountInfos = CryptoJS.AES.decrypt(
        state.accountInfos,
        pass
      ).toString(CryptoJS.enc.Utf8);
      accountInfos = JSON.parse(accountInfos);

      dispatch({
        type: "accounts",
        payload: accountInfos,
      });

      dispatch({
        type: "isAuth",
        payload: true,
      });

      chrome.storage.local.set({ Pass: pass });
    } catch (err) {
      console.log("unlock failed", err.message);
      dispatch({
        type: "accounts",
        payload: [],
      });
    }
  };

  // default accounts
  useEffect(() => {
    console.log("checkState", state);
    if (state.accounts == []) {
    }
  }, [state]);

  // auth action
  const createWallet = async (password) => {
    const wallet = ethers.Wallet.createRandom();
    var mnemonic = wallet.mnemonic.phrase;
    var SeedHash = CryptoJS.AES.encrypt(
      JSON.stringify(mnemonic),
      password
    ).toString();

    dispatch({
      type: "mnemonic",
      payload: mnemonic,
    });
    chrome.storage.local.set({ SeedHash: SeedHash });
    dispatch({
      type: "password",
      payload: password,
    });
  };

  const confirmMnemonic = async (cMnemonic) => {
    if (cMnemonic == state.mnemonic) {
      chrome.storage.local.set({ confirmed: true });
    }
  };

  // const checkBalance = async () => {
  //     try {
  //         var signedTokenContract = tokenContract.connect(state.signer);
  //         var userAddress = await state.signer.getAddress();
  //     } catch (err) {
  //     }
  // }

  return (
    <BlockchainContext.Provider
      value={useMemo(
        () => [
          state,
          {
            unlockWallet,
            createWallet,
            confirmMnemonic,
          },
        ],
        [state]
      )}
    >
      {children}
    </BlockchainContext.Provider>
  );
}
