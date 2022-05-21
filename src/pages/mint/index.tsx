import type { NextPage } from "next";
import { useState } from "react";
import Div from "src/components/Div";
import { useSmartContract } from "src/hooks/contract/kip17";
import { useCaver } from "src/hooks/wallet/kaikas";
import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { VIDEOS } from "src/modules/videos";

const Index: NextPage = () => {
	const handleClickGomz = () => {
		href(urls.index);
	};
	const [error, setError] = useState("");
	const [amountToMint, setAmountToMint] = useState(1);
	const smartContract = useSmartContract();
	const mint = async () => {
		// @ts-ignore
		if (typeof window !== "undefined" && typeof window.klaytn !== "undefined") {
			const klaytn = window["klaytn"];
			try {
				const res = await klaytn.enable();
				const selectedAddress = res[0];
				const caver = window["caver"];
				if (caver && selectedAddress) {
					const res = await klaytn.enable();
					const mintPrepareResponse = await smartContract.methods.mint(amountToMint).send({
						from: selectedAddress,
						gas: "7500000",
						value: caver.utils.toPeb(150, "KLAY"),
					});
				}
			} catch (error) {
				setError("You have declined authentication.");
			}
		} else {
			console.log("Please install Kaikas");
		}
	};
	return (
		<Div
			style={{
				background: "#EDEEE9",
			}}
			relative
			hScreen>
            <Div wFull h110 bgPrimary flex itemsCenter z2 borderB1 borderBlack style={{webkitTextStroke: "1px #000",}}>
                <Div ml250 w200 hAuto imgTag src={IMAGES.logos.webeWhiteLogo}></Div>
                <Div ml20 textWhite text3xl>Air</Div>
                <Div absolute right150 textWhite fontSize32>OnBoarding Pass</Div>
            </Div>
            <Div wFull h10 z1 bgSecondary borderB1 borderBlack></Div>
            <Div flex overMono fontSize25>
                <Div my250 ml90 w50 h50 imgTag src={IMAGES.circleLeftArrow} onClick={handleClickGomz} cursorPointer></Div>
                <Div ml100 my120>
                    <Div flex>
                        <Div mr20>WALLET ADDRESS:</Div>
                        <Div w220 h40 borderBlack border1 roundedFull balooB textTransparent fontSize25 style={{webkitTextStroke: "1px #000"}} flex justifyCenter>
                        Connect Wallet</Div>
                    </Div>
                    <Div flex mt40>
                        <Div mr20>FLIGHT:</Div>
                        <Div fontBold mr20>WhereverYouAre</Div>
                        <Div mr20>TO</Div>
                        <Div fontBold>BetterWorld</Div>
                    </Div>
                    <Div flex mt40>
                        <Div mr20>SEAT TYPE:</Div>
                        <Div fontBold>CohortA</Div>
                    </Div>
                    <Div mt40>AVAILABLE SEATS:</Div>
                </Div>
                <Div absolute top475 right160 borderDashed border1 w700 h0 rotate90 borderBlack></Div>
                <Div absolute top205 right110>
                    <Div flex mt40>
                        <Div mr20>PRICE:</Div>
                        <Div fontBold>150 KLAY</Div>
                    </Div>
                    <Div flex mt40>
                        <Div mr20>AMOUNT:</Div>
                        <Div fontBold> 1 per Wallet</Div>
                    </Div>
                    <Div mt40 w230 h70 borderBlack border1 roundedFull textWhite bgPrimary fontSize36 balooB
                    style={{webkitTextStroke: "1px #000"}} flex justifyCenter itemsCenter>
                        MINT
                    </Div>
                </Div>
            </Div>
            <Div absolute bottom0 right0 w600 z999 imgTag src={IMAGES.webeAir}></Div>
        </Div>
    )
}

export default Index;