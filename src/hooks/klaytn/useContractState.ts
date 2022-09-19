import { useEffect, useState } from "react"
import { MintingStep } from "src/modules/minting";
import { useContract } from "./useContract";

export const useContractState = () => {
    const [salePrice, setSalePrice] = useState(0)
    const [mintingStep, setMintingStep] = useState<MintingStep>(MintingStep.Initial)
    const [totalSupply, setTotalSupply] = useState<number>(0)
    const contract = useContract();
    useEffect(() => {
		if(contract){
            try{
                contract.methods.mintingStep().call().then(
                    (res) => setMintingStep(res)
                )
                contract.methods.totalSupply().call().then(
                    (res) => setTotalSupply(res)
                )
                contract.methods.salePrice().call().then(
                    (res) => setSalePrice(res)
                )
            } catch{}
        }
	}, [])
    return {mintingStep, totalSupply, salePrice}
}