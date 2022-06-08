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
    const [balance, setBalance] = useState(0)
    const [loading, setLoading] = useState(true)
    const contract = useContract();
    useEffect(() => {
		if(kaikas?.selectedAddress){
            contract.methods.addressState(kaikas.selectedAddress).call().then(
                (res) => setAddressState(res)
            )
            contract.methods.balanceOf(kaikas.selectedAddress).call().then(
                (balanceOfRes) =>{
                     setBalance(balanceOfRes)
                     setLoading(false)
                    }
            )
        }
	}, [kaikas?.selectedAddress])
    const invitesRemaining = MintingState.Whitelisted ? 5 - addressState.inviteCount : 3 - addressState.inviteCount;
	const mintRemaining = 3 - addressState.amountMinted;
    const mintingState = addressState.mintingState
    const invitor = addressState.invitor
    const amountMinted = addressState.amountMinted
    return {invitesRemaining, mintRemaining, mintingState, invitor, amountMinted, balance, loading}
}