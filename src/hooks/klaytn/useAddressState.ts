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
    const [tokens, setTokens] = useState([])
    const [loading, setLoading] = useState(true)
    const contract = useContract();
    const mapThoughTokens = async (length) => {
        return await Promise.all(new Array(length).map((_, index) => getTokenObject(index)))
    }
    const getTokenObject = async (index) => {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(kaikas.selectedAddress, index).call()
        const tokenUri = await contract.methods.tokenURI(tokenId).call()
        const metadata = await (await fetch(tokenUri)).json()
        return {
            index,
            tokenId,
            tokenUri,
            metadata
        }
    }
    useEffect(() => {
		if(kaikas?.selectedAddress){
            try{
                contract.methods.addressState(kaikas.selectedAddress).call().then(
                    (res) => setAddressState(res)
                )
                contract.methods.balanceOf(kaikas.selectedAddress).call().then(
                    (balanceOfRes) => {
                        if(balanceOfRes > 0){
                            mapThoughTokens(balanceOfRes).then((tokensRes) => {
                                setTokens(tokensRes);
                            })
                        }
                        setLoading(false)
                    }
                )
            } catch {

            }
        }
	}, [kaikas?.selectedAddress])
    const invitesRemaining = MintingState.Whitelisted ? 5 - addressState.inviteCount : 3 - addressState.inviteCount;
	const mintRemaining = 3 - addressState.amountMinted;
    const mintingState = addressState.mintingState
    const invitor = addressState.invitor
    const amountMinted = addressState.amountMinted
    return {invitesRemaining, mintRemaining, mintingState, invitor, amountMinted, balance: tokens.length, tokens, loading}
}