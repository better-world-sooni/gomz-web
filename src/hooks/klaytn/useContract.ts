import { deployedAddress } from "src/modules/deployedAddress";
import deployedAbi from 'src/modules/abi.json'
import { AbiItem } from "caver-js";
import { useCaver } from "./useCaver";

export const useContract = () => {
	const caver = useCaver();
	const contract = new caver.contract(deployedAbi as AbiItem[], deployedAddress);
	contract.defaultBlock = "latest";
	return contract;
};
