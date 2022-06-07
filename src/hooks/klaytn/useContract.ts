import { deployedAddress } from "src/modules/deployedAddress";
import deployedAbi from 'src/modules/abi.json'
import { AbiItem } from "caver-js";
import { useCaver } from "./useCaver";

export const useContract = (klaytn= null, legacy = false) => {
	const caver = useCaver(klaytn);
	const contractConstrutor = legacy ? caver.klay.Contract : caver.contract;
	const contract = new contractConstrutor(deployedAbi as AbiItem[], deployedAddress);
	contract.defaultBlock = "latest";
	return contract;
};
