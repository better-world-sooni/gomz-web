import type { NextPage } from "next";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Col from "src/components/Col";
import Div from "src/components/Div";
import Row from "src/components/Row";
import { useSmartContract } from "src/hooks/contract/kip17";
import { useCaver } from "src/hooks/wallet/kaikas";
import { COLORS } from "src/modules/constants";
import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { VIDEOS } from "src/modules/videos";

const Index: NextPage = () => {
	const handleClickWebe = () => {
		href(urls.index);
	};
	const price = 150;
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
						value: caver.utils.toPeb(price, "KLAY"),
					});
				}
			} catch (error) {
				setError("You have declined authentication.");
			}
		} else {
			console.log("Please install Kaikas");
		}
	};
	const handlePressUp = () => {
		if (amountToMint > 4) return;
		setAmountToMint((prevAmount) => prevAmount + 1);
	};
	const handlePressDown = () => {
		if (amountToMint < 2) return;
		setAmountToMint((prevAmount) => prevAmount - 1);
	};
	return (
		<Div
			style={{
				background: "linear-gradient(114.31deg, #3E4071 51.1%, #37315A 89.59%)",
			}}
			relative
            hScreen
            flex
            itemsCenter
            justifyCenter
            >
            <Div flexCol style={{ boxShadow: "25px 25px 0px rgba(0, 0, 0, 0.25)"}} roundedLg>
                <Div flex itemsCenter w1300 h90 bgPrimary z2 borderB1 borderBlack style={{webkitTextStroke: "1px #000", }} roundedTLg>
                    <Div ml70 w150 hAuto imgTag src={IMAGES.logos.webeLogo}></Div>
                    <Div flex1 ml20 textWhite fontSize42>GALAXY</Div>
                    <Div mr70 textWhite fontSize32>OnBOARDING PASS</Div>
                </Div>
                <Div h10 z1 bgSecondary borderB1 borderBlack></Div>
                <Div flex h380 bgWhite overMono fontSize22 roundedBLg>
                    <Div my160 mx70 w40 h40 imgTag src={IMAGES.circleLeftArrow} onClick={handleClickWebe} cursorPointer></Div>
                    <Div flex1 py50>
                        <Div flex>
                            <Div mr20>WALLET ADDRESS:</Div>
                            <Div w180 h35 borderBlack border2 roundedFull balooR fontSize20
                            style={{webkitTextStroke: "1px #000"}} flex justifyCenter
                            cursorPointer>
                            Connect Wallet</Div>
                        </Div>
                        <Div flex mt30>
                            <Div mr20>FLIGHT:</Div>
                            <Div fontBold mr20>WhereverYouAre</Div>
                            <Div mr20>TO</Div>
                            <Div fontBold>BetterWorld</Div>
                        </Div>
                        <Div flex mt30>
                            <Div mr20>SEAT TYPE:</Div>
                            <Div fontBold>CohortA</Div>
                        </Div>
                        <Div mt30>AVAILABLE SEATS:</Div>
                    </Div>
                    <Div mr90 py20 borderL1 borderBlack borderDashed pl120>
                        <Div flex mt30>
                            <Div mr20>PRICE:</Div>
                            <Div fontBold>150 KLAY</Div>
                        </Div>
                        <Div flex mt30>
                            <Div mr20>AMOUNT:</Div>
                            <Div fontBold> 1 per Wallet</Div>
                        </Div>
                        <Div mt40 w180 h60 borderBlack border1 roundedFull textWhite bgPrimary fontSize32 balooB
                        style={{webkitTextStroke: "1px #000"}} flex justifyCenter itemsCenter
                        clx={"group transition hover:bg-primary-teens"} cursorPointer>
                            MINT
                        </Div>
                    </Div>
                    <Div absolute right400 bottom180 w270 rotate12 imgTag src={IMAGES.webeGalaxy}></Div>
                </Div>
            </Div>
            <Div absolute right0 bottom0 w200 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
        </Div>
    )
}

export default Index;