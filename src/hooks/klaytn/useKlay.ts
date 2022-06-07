import { useCaver } from "./useCaver";


export const useKlay = () => {
	const caver = useCaver()
    const klay = caver.rpc.klay
	return klay
};