import { useEffect, useState } from "react"
import { GATEWAY_PREFIX } from "src/modules/ipfs";
import { useContract } from "./useContract";

export const useTokenState = ({index, selectedAddress}) => {
    const [tokenState, setTokenState] = useState({
        index: null,
        tokenId: null,
        tokenUri: null,
        metadata: null,
        baseURIType: null,
    })
    const contract = useContract();
    const getTokenObject = async (selectedAddress, index) => {
        try{
            const tokenId = await contract.methods.tokenOfOwnerByIndex(selectedAddress, index).call()
            const baseURIType = await contract.methods.tokenBaseURIType(tokenId).call()
            const tokenUri = await contract.methods.tokenURI(tokenId).call()
            const metadata = await (await fetch(tokenUri.replace("ipfs:/", GATEWAY_PREFIX))).json()
            setTokenState({
                index,
                tokenId,
                tokenUri,
                metadata,
                baseURIType,
            })
        } catch {}
    }
    useEffect(() => {
		if(selectedAddress && typeof index == 'number'){
            try{
                getTokenObject(selectedAddress, index)
            } catch {}
        }
	}, [index, selectedAddress])
    return { ...tokenState }
}