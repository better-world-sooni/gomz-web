import { useEffect, useState } from "react"
import { useContract } from "./useContract";

export const useTokenState = ({index, selectedAddress}) => {
    const [tokenState, setTokenState] = useState({
        index: null,
        tokenId: null,
        tokenUri: null,
        metadata: null,
        rebirthHistory: null
    })
    const contract = useContract();
    const getTokenObject = async (selectedAddress, index) => {
        const tokenId = await contract.methods.tokenOfOwnerByIndex(selectedAddress, index).call()
        const tokenUri = await contract.methods.tokenURI(tokenId).call()
        const metadata = await (await fetch(tokenUri)).json()
        const rebirthHistory = await contract.methods.getBaseURITypesLeft(tokenId).call()
        setTokenState({
            index,
            tokenId,
            tokenUri,
            metadata,
            rebirthHistory
        })
    }
    useEffect(() => {
		if(selectedAddress){
            getTokenObject(selectedAddress, index)
        }
	}, [index, selectedAddress])
    return { ...tokenState,  }
}