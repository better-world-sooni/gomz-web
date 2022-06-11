import { useEffect, useState } from "react"
import { MintingStep } from "src/modules/minting";
import { useContract } from "./useContract";

export const useContractState = () => {
    const [mintingStep, setMintingStep] = useState<MintingStep>(MintingStep.Initial)
    const [totalSupply, setTotalSupply] = useState<number>(0)
    const [baseURIArray, setBaseURIArray] = useState(["https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json/", "https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json1/", "https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json/", "https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json1/", "https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json/", "https://gomz-pfp-test.s3.ap-northeast-2.amazonaws.com/json1/"])
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
            } catch{}
            // Promise.all(baseURIArray.map((_, index) => contract.methods.baseURI(index).call())).then(
            //     res => setBaseURIArray(res)
            // )
        }
	}, [])
    const maxSupply = 8888
    return {mintingStep, totalSupply, maxSupply, baseURIArray}
}