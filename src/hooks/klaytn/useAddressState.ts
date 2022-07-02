import { useEffect, useState } from "react"
import { AddressState } from "src/modules/minting";
import { useContract } from "./useContract";

export const useAddressState = ({kaikas}) => {
    const [addressState, setAddressState] = useState<AddressState>({
        amountMinted: 0,
        whitelisted: false,
    })
    const [balance, setBalance] = useState(0)
    const [loading, setLoading] = useState(true)
    const contract = useContract();
    useEffect(() => {
		if(kaikas?.selectedAddress){
            try {
                contract.methods.addressState(kaikas.selectedAddress).call().then(
                    (res) => setAddressState(res)
                )
                contract.methods.balanceOf(kaikas.selectedAddress).call().then(
                    (balanceOfRes) =>{
                         setBalance(parseInt(balanceOfRes))
                         setLoading(false)
                        }
                )
            } catch {}
        }
	}, [kaikas?.selectedAddress])
    const whitelisted = addressState.whitelisted
    const amountMinted = addressState.amountMinted
    return {whitelisted, amountMinted, balance, loading}
}