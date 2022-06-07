import { useEffect, useState } from "react"
import { AddressState, MintingState } from "src/modules/minting";
import { useContract } from "./useContract";

export const useAddressState = ({kaikas}) => {
    const [addressState, setAddressState] = useState<AddressState>({
        amountMinted: 0,
        mintingState: MintingState.Initial,
        invitor: "0x",
        inviteCount: 0,
    })
    const [balance, setBalance] = useState<number>(0)
    const contract = useContract();
    useEffect(() => {
		if(kaikas?.selectedAddress){
            contract.methods.addressState(kaikas.selectedAddress).call().then(
                (res) => setAddressState(res)
            )
            contract.methods.balanceOf(kaikas.selectedAddress).call().then(
                (res) => setBalance(res)
            )
        }
	}, [kaikas?.selectedAddress])
    const invitesRemaining = MintingState.Whitelisted ? 5 - addressState.inviteCount : 3 - addressState.inviteCount;
	const mintRemaining = MintingState.Whitelisted ? 5 - addressState.amountMinted : 3 - addressState.amountMinted;
    const mintingState = addressState.mintingState
    const invitor = addressState.invitor
    const amountMinted = addressState.amountMinted
    return {invitesRemaining, mintRemaining, mintingState, invitor, amountMinted, balance}
}