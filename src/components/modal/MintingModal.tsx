import { useState } from "react";
import { href } from "src/helpers/routeHelper";
import { useContract } from "src/hooks/klaytn/useContract";
import { IMAGES } from "src/modules/images";
import { urls } from "src/modules/urls";
import Div from "../Div";
import Modal from "./Modal";

export function MintingModal({ open, onClose }) {
	const handleClickWebe = () => {
		href(urls.index);
	};
	const price = 150;
	const [error, setError] = useState("");
	const [amountToMint, setAmountToMint] = useState(1);
	const smartContract = useContract();
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
			// console.log("Please install Kaikas");
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
		<Modal open={open} onClose={onClose} bdClx={"bg-black/60"}>
			<Div roundedLg overflowHidden w800 mx80>
				<Div flex bgPrimary fontSize24>
					<Div style={{ flex: 2 }} pl50 flex flexRow py20>
						<Div>
							<Div w100 hAuto imgTag src={IMAGES.logos.webeLogo}></Div>
						</Div>
						<Div ml20 textWhite fontSize24>
							GALAXY
						</Div>
					</Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py20>
						<Div mr20 textWhite fontSize24>
							BOARDING PASS
						</Div>
					</Div>
				</Div>
				<Div flex h14 z1 bgSecondary borderB2 borderT2 borderBlack>
					<Div style={{ flex: 2 }} pl50 py20 flexRow></Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py20></Div>
				</Div>
				<Div flex bgWhite fontSize24>
					<Div style={{ flex: 2 }} pl50 py20>
						<Div flex mb20>
							<Div mr20>Destination:</Div>
							<Div>BetterWorld</Div>
						</Div>
						<Div flex mb20>
							<Div mr20>Seat Type:</Div>
							<Div>Cohort A</Div>
						</Div>
					</Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py20>
						<Div flex mb20>
							<Div mr20>Price:</Div>
							<Div spanTag>150 Klay</Div>
						</Div>
						<Div flex mb20>
							<Div mr20>Amount:</Div>
							<Div> 1 WeBe</Div>
						</Div>
						<Div
							mt50
							px3
							py10
							borderBlack
							border2
							roundedFull
							textWhite
							bgPrimary
							fontSize24
							balooB
							style={{ boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)" }}
							flex
							justifyCenter
							itemsCenter
							clx={"group transition hover:bg-primary-teens"}
							cursorPointer
						>
							Confirm
						</Div>
					</Div>
				</Div>
			</Div>
		</Modal>
	);
}
