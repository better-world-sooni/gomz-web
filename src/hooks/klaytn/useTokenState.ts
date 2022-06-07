import { useEffect, useState } from "react"
import { useContract } from "./useContract";

export const useTokenState = ({index, selectedAddress}) => {
    const [tokenState, setTokenState] = useState(null)
    const contract = useContract();
    const getTokenObject = async (selectedAddress, index) => {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(selectedAddress, index).call()
        const tokenUri = await contract.methods.tokenURI(tokenId).call()
        const metadata = await (await fetch(tokenUri)).json()
        setTokenState({
            index,
            tokenId,
            tokenUri,
            metadata
        })
    }
    useEffect(() => {
		if(selectedAddress){
            getTokenObject(selectedAddress, index)
        }
	}, [index, selectedAddress])
    return tokenState
}