import { deployedAddress } from "src/modules/deployedAddress";
import deployedAbi from 'src/modules/abi.json'
import { useCaver } from "../wallet/kaikas";

export const useSmartContract = () => {
	// @ts-ignore
	const caver = useCaver();
	if (caver) {
		return new caver.klay.Contract(deployedAbi, deployedAddress);
	}
	return null;
};
