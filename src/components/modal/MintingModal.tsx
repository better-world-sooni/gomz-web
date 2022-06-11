import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useCaver } from "src/hooks/klaytn/useCaver";
import { useContract } from "src/hooks/klaytn/useContract";
import { useContractState } from "src/hooks/klaytn/useContractState";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { COLORS } from "src/modules/colors";
import { IMAGES } from "src/modules/images";
import { MintingState, MintingStep } from "src/modules/minting";
import { mintingModalAction } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./Modal";

enum ButtonState {
	Confirm = "Confirm",
	Failed = "Failed",
	Loading = "Loading...",
	GetOnboard = "Get Onboard!",
	ConnectWallet = "Connect Wallet",
}

export function MintingModal() {
	const price = 150;
	const kaikas = useKaikas();
	const smartContract = useContract(kaikas, true);
	const caver = useCaver();
	const dispatch = useDispatch();
	const { mintingStep, totalSupply, maxSupply } = useContractState();
	const { mintRemaining, mintingState } = useAddressState({
		kaikas,
	});
	const { mintingModalEnabled } = useSelector((state: RootState) => ({
		mintingModalEnabled: state.modal.mintingModal.enabled,
	}));
	const [mintResponse, setMintResponse] = useState(null);
	const [amountToMint, setAmountToMint] = useState(1);
	const [buttonState, setButtonState] = useState(ButtonState.Confirm);
	const handleClose = () => {
		dispatch(mintingModalAction({ enabled: false }));
	};
	const handlePressButton = async () => {
		if (buttonState == ButtonState.Confirm) {
			mint();
			return;
		}
		if (buttonState == ButtonState.ConnectWallet) {
			await kaikas.enable();
			return;
		}
		if (buttonState == ButtonState.GetOnboard) {
			window.location.href = "www.betterworldapp.io/onboarding";
			return;
		}
	};
	const mint = async () => {
		try {
			setButtonState(ButtonState.Loading);
			const mintRes = await smartContract.methods.mint(amountToMint).send({
				from: kaikas?.selectedAddress,
				gas: "2500000",
				value: caver.utils.toPeb(price * amountToMint, "KLAY"),
			});
			setMintResponse(mintRes);
			setButtonState(ButtonState.GetOnboard);
		} catch {
			setButtonState(ButtonState.Failed);
		}
	};
	const handlePressUp = () => {
		if (amountToMint >= Math.min(mintRemaining, maxSupply - totalSupply)) return;
		setAmountToMint((prevAmount) => prevAmount + 1);
	};
	const handlePressDown = () => {
		if (amountToMint <= 1) return;
		setAmountToMint((prevAmount) => prevAmount - 1);
	};
	useEffect(() => {
		setButtonState(kaikas ? ButtonState.Confirm : ButtonState.ConnectWallet);
	}, [kaikas]);
	useEffect(() => {
		setButtonState(ButtonState.Confirm);
	}, [mintingModalEnabled]);
	return (
		<Modal open={mintingModalEnabled} onClose={handleClose} bdClx={"bg-black/60"}>
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
							<Div>{mintingState == MintingState.Whitelisted ? "Whitelist" : mintingState == MintingState.Invited ? "Invited" : "Public"}</Div>
						</Div>
						<Div flex mb20>
							<Div mr20>Seats Available:</Div>
							<Div>{maxSupply - totalSupply}</Div>
						</Div>
					</Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py20>
						<Div flex mb20>
							<Div mr20>Price:</Div>
							<Div spanTag>{price * amountToMint} Klay</Div>
						</Div>
						<Div flex mb20 itemsCenter>
							<Div>
								<Div mr20>Amount:</Div>
							</Div>
							<Div cursorPointer onClick={handlePressDown}>
								<FaChevronDown color={amountToMint <= 1 ? COLORS.GRAY400 : "black"}></FaChevronDown>
							</Div>
							<Div px15>
								<Div>{amountToMint}</Div>
							</Div>
							<Div cursorPointer onClick={handlePressUp}>
								<FaChevronUp color={amountToMint >= Math.min(mintRemaining, maxSupply - totalSupply) ? COLORS.GRAY400 : "black"}></FaChevronUp>
							</Div>
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
							bgDanger={buttonState == ButtonState.Failed}
							bgSecondary={buttonState == ButtonState.ConnectWallet}
							bgInfo={buttonState == ButtonState.GetOnboard}
							fontSize24
							balooB
							style={{ boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)" }}
							flex
							justifyCenter
							itemsCenter
							onClick={handlePressButton}
							clx={"group transition hover:bg-primary-teens"}
							cursorPointer
						>
							{buttonState}
						</Div>
					</Div>
				</Div>
			</Div>
		</Modal>
	);
}
