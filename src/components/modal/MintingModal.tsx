import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp, FaMinus, FaMinusCircle, FaRegMinusSquare, FaRegPlusSquare, FaVolumeDown } from "react-icons/fa";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useCaver } from "src/hooks/klaytn/useCaver";
import { useContract } from "src/hooks/klaytn/useContract";
import { useContractState } from "src/hooks/klaytn/useContractState";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { COLORS } from "src/modules/colors";
import { IMAGES } from "src/modules/images";
import {
	MAX_MINT,
	MAX_SUPPLY,
	MintingStep,
	POST_WHITELIST2_SUPPLY,
	POST_WHITELIST_PRESALE_SUPPLY,
	POST_WHITELIST_SUPPLY,
	WHITELIST_MAX_MINT,
} from "src/modules/minting";
import { mintingModalAction } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./Modal";

enum ButtonState {
	Confirm = "Confirm",
	Failed = "Failed. Reload?",
	Loading = "Loading...",
	GetOnboard = "Get Onboard!",
	ConnectWallet = "Connect Wallet",
}

export function MintingModal() {
	const kaikas = useKaikas();
	const smartContract = useContract(kaikas, true);
	const caver = useCaver();
	const dispatch = useDispatch();
	const { mintingStep, totalSupply, salePrice } = useContractState();
	const { amountMinted, whitelisted } = useAddressState({
		kaikas,
	});
	const { mintingModalEnabled } = useSelector((state: RootState) => ({
		mintingModalEnabled: state.modal.mintingModal.enabled,
	}));
	const [mintResponse, setMintResponse] = useState(null);
	const [amountToMint, setAmountToMint] = useState(1);
	const [buttonState, setButtonState] = useState(ButtonState.Confirm);
	const currentStageMintRemaining =
		(mintingStep == MintingStep.WhitelistPresale || mintingStep == MintingStep.Public ? MAX_MINT : WHITELIST_MAX_MINT) - amountMinted;
	const currentStageMaxSupply =
		mintingStep == MintingStep.Whitelist
			? POST_WHITELIST_SUPPLY
			: mintingStep == MintingStep.Whitelist2
			? POST_WHITELIST2_SUPPLY
			: mintingStep == MintingStep.WhitelistPresale
			? POST_WHITELIST_PRESALE_SUPPLY
			: MAX_SUPPLY;
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
		if (buttonState == ButtonState.Failed) {
			window.location.reload();
			return;
		}
	};
	const mint = async () => {
		try {
			setButtonState(ButtonState.Loading);
			const mintRes = await smartContract.methods.mint(amountToMint).send({
				from: kaikas?.selectedAddress,
				gas: "2500000",
				value: caver.utils.fromPeb(salePrice * amountToMint, "peb"),
			});
			setMintResponse(mintRes);
			setButtonState(ButtonState.GetOnboard);
		} catch {
			setButtonState(ButtonState.Failed);
		}
	};
	const handlePressUp = () => {
		if (amountToMint >= Math.min(currentStageMintRemaining, currentStageMaxSupply - totalSupply)) return;
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
			<Div roundedLg overflowHidden w800 mx80 fontBold>
				<Div flex bgSecondary fontSize24>
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
				<Div flex h14 z1 bgTertiary borderB2 borderT2 borderBlack>
					<Div style={{ flex: 2 }} pl50 py20 flexRow></Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py20></Div>
				</Div>
				<Div flex bgWhite fontSize22>
					<Div style={{ flex: 2 }} pl50 py40>
						<Div flex mb20 balooR>
							<Div mr20>Destination:</Div>
							<Div>BetterWorld</Div>
						</Div>
						<Div flex mb20 balooR>
							<Div mr20>Seat Type:</Div>
							<Div>{whitelisted ? "WL" : "PB"}</Div>
						</Div>
						<Div flex balooR>
							<Div mr20>Seats Available:</Div>
							<Div>{currentStageMaxSupply - totalSupply}</Div>
						</Div>
					</Div>
					<Div relative style={{ flex: 1 }} borderL1 borderBlack borderDashed px50 py40>
						<Div flex mb20 balooR>
							<Div mr20>Price:</Div>
							<Div spanTag>{caver.utils.fromPeb(salePrice * amountToMint, "KLAY")} Klay</Div>
						</Div>
						<Div flex mb20 itemsCenter balooR>
							<Div>
								<Div mr20>Amount:</Div>
							</Div>
							<Div cursorPointer onClick={handlePressDown}>
								<FaRegMinusSquare color={amountToMint <= 1 ? COLORS.GRAY300 : "black"}></FaRegMinusSquare>
							</Div>
							<Div px15>
								<Div>{amountToMint}</Div>
							</Div>
							<Div cursorPointer onClick={handlePressUp}>
								<FaRegPlusSquare
									color={amountToMint >= Math.min(currentStageMintRemaining, currentStageMaxSupply - totalSupply) ? COLORS.GRAY300 : "black"}
								></FaRegPlusSquare>
							</Div>
						</Div>
						<Div
							mt20
							py8
							borderBlack
							border2
							roundedXl
							textWhite
							bgDanger={buttonState == ButtonState.Failed}
							bgSecondary
							bgInfo={buttonState == ButtonState.GetOnboard}
							fontSize22
							balooB
							style={{ boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)" }}
							flex
							justifyCenter
							itemsCenter
							onClick={handlePressButton}
							clx={"group transition hover:bg-primary-light"}
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
