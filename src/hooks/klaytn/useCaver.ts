import Caver from "caver-js";
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const useCaver = (klaytn?) => {
	const caver = new Caver( klaytn || (publicRuntimeConfig.CONF_IS_DEVELOPMENT ? "https://kaikas.baobab.klaytn.net:8651/" : "https://public-node-api.klaytnapi.com/v1/cypress"));
	return caver
};