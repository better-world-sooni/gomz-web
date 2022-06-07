import { useEffect, useState } from "react"
import { MintingStep } from "src/modules/minting";
import { useContract } from "./useContract";

export const useContractState = () => {
    const [mintingStep, setMintingStep] = useState<MintingStep>(MintingStep.Initial)
    const [totalSupply, setTotalSupply] = useState<number>(0)
    const contract = useContract();
    useEffect(() => {
		if(contract){
            contract.methods.mintingStep().call().then(
                (res) => setMintingStep(res)
            )
            contract.methods.totalSupply().call().then(
                (res) => setTotalSupply(res)
            )
        }
	}, [contract])
    const maxSupply = 8888
    return {mintingStep, totalSupply, maxSupply}
}