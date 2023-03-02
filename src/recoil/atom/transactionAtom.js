import { atom } from "recoil";

export const transactionOutAtom = atom({
    key: "transactionOutState",
    default: []
})
export const transactionInAtom = atom({
    key: "transactionInState",
    default: []
})