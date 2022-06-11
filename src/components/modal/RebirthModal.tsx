import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAddressInput from "src/hooks/klaytn/useAddressInput";
import { useContract } from "src/hooks/klaytn/useContract";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { rebirthModalAction } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./Modal";
import { useTokenState } from "src/hooks/klaytn/useTokenState";
import { useContractState } from "src/hooks/klaytn/useContractState";
import Carousel, { autoplayPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IMAGES } from "src/modules/images";

enum ButtonState {
	Rebirth = "Rebirth",
	Failed = "Failed",
	Loading = "Transacting...",
	Reborn = "Reborn!",
	RebornTryAgain = "Reborn! Try Again?",
	ConnectWallet = "Connect Wallet",
}

export function RebirthModal() {
	const { rebirthModal } = useSelector((state: RootState) => ({
		rebirthModal: state.modal.rebirthModal,
	}));
	const kaikas = useKaikas();
	const smartContract = useContract(kaikas, true);
	const dispatch = useDispatch();
	const { baseURIArray } = useContractState();
	const { tokenId, tokenUri, rebirthHistory } = useTokenState({ index: rebirthModal.index, selectedAddress: kaikas?.selectedAddress });
	const [currentTokenUri, setCurrentTokenUri] = useState(null);
	const rebirthChancesUsed = rebirthHistory?.filter((used) => used).length || 1;
	const [buttonState, setButtonState] = useState(ButtonState.Rebirth);
	const rebirth = () => {
		setButtonState(ButtonState.Loading);
		setTimeout(async () => {
			try {
				await smartContract.methods.rebirth(tokenId).send({
					from: kaikas?.selectedAddress,
					gas: "2500000",
				});
				const tokenUri = await smartContract.methods.tokenURI(tokenId).call();
				setCurrentTokenUri(await (await fetch(tokenUri)).json());
			} catch {
				setButtonState(ButtonState.Failed);
				return;
			}
			setButtonState(rebirthChancesUsed > 4 ? ButtonState.Reborn : ButtonState.RebornTryAgain);
		}, 3000);
	};
	const handleClose = () => {
		dispatch(rebirthModalAction({ enabled: false, index: rebirthModal.index }));
	};
	const handleClickRebirth = () => {
		if (!(buttonState == ButtonState.Rebirth || buttonState == ButtonState.Reborn || buttonState == ButtonState.RebornTryAgain)) return;
		if (rebirthChancesUsed > 5) return;
		rebirth();
	};
	useEffect(() => {
		setButtonState(kaikas ? (rebirthChancesUsed == 6 ? ButtonState.Reborn : ButtonState.Rebirth) : ButtonState.ConnectWallet);
	}, [kaikas]);
	useEffect(() => {
		setButtonState(rebirthChancesUsed == 6 ? ButtonState.Reborn : ButtonState.Rebirth);
	}, [rebirthModal.enabled, rebirthModal.index]);
	useEffect(() => {
		if (tokenUri)
			fetch(tokenUri)
				.then((res) => res.json())
				.then(setCurrentTokenUri);
	}, [tokenUri]);
	return (
		<Modal open={rebirthModal.enabled} onClose={handleClose} bdClx={"bg-black/60"}>
			<Div bgSecondary2 w400>
				<Div px20 py20 textCenter fontSize23 textPrimary>
					{buttonState == ButtonState.Reborn ? "Congratulations!" : "Rebirth Possibilities"}
				</Div>
				{buttonState == ButtonState.Loading || buttonState == ButtonState.Rebirth ? (
					typeof rebirthModal.index == "number" && rebirthHistory ? (
						<Carousel
							plugins={
								ButtonState.Loading == buttonState
									? [
											"infinite",
											"arrows",
											{
												resolve: autoplayPlugin,
												options: {
													interval: ButtonState.Loading == buttonState ? 100 : 3000,
												},
											},
									  ]
									: ["infinite", "arrows"]
							}
							animationSpeed={1000}
						>
							{rebirthHistory
								.map((used, index) => {
									return { index, used };
								})
								.filter((obj) => !obj.used)
								.map((obj) => {
									return <Div key={obj.index} imgTag src={`${baseURIArray[obj.index]}${tokenId}.png` || IMAGES.team.jieun} w318 h318 rounded10></Div>;
								})}
						</Carousel>
					) : (
						<Div imgTag src={IMAGES.team.jieun} w400 h400></Div>
					)
				) : (
					<Div imgTag src={currentTokenUri?.image} w400 h400></Div>
				)}
				<Div px20 py20>
					<Div
						flex
						justifyCenter
						clx={"group transition hover:bg-primary-light"}
						bgSecondary
						roundedFull
						px40
						py8
						fontSize23
						textSecondary2
						borderBlack
						border2
						cursorPointer
						onClick={handleClickRebirth}
						style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
					>
						{buttonState == ButtonState.Rebirth ? `REBIRTH! (${rebirthChancesUsed - 1}/5)` : buttonState}
					</Div>
				</Div>
			</Div>
		</Modal>
	);
}
