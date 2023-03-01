import { atom } from "recoil";

export const transactionAtom = atom({
    key: "transactionState",
    default: []
})