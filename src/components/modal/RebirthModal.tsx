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
	const { tokenId, tokenUri, rebirthHistory, metadata } = useTokenState({ index: rebirthModal.index, selectedAddress: kaikas?.selectedAddress });
	const [currentTokenImage, setCurrentTokenImage] = useState(metadata?.image);
	const rebirthChancesUsed = rebirthHistory?.filter((used) => used).length || 1;
	const [buttonState, setButtonState] = useState(ButtonState.Rebirth);
	const rebirth = async () => {
		setButtonState(ButtonState.Loading);
		try {
			await smartContract.methods.rebirth(tokenId).send({
				from: kaikas?.selectedAddress,
				gas: "2500000",
			});
			const tokenUri = await smartContract.methods.tokenURI(tokenId).call();
			const metadata = await(await fetch(tokenUri)).json();
			setCurrentTokenImage(metadata?.image);
		} catch {
			setButtonState(ButtonState.Failed);
			return;
		}
		setButtonState(rebirthChancesUsed > 4 ? ButtonState.Reborn : ButtonState.RebornTryAgain);
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
		setButtonState(kaikas ? ButtonState.Rebirth : ButtonState.ConnectWallet);
	}, [rebirthModal.enabled, rebirthModal.index, kaikas]);
	useEffect(() => {
		setCurrentTokenImage(metadata?.image);
	}, [metadata?.image]);
	return (
		<Modal open={rebirthModal.enabled} onClose={handleClose} bdClx={"bg-black/60"}>
			<Div bgSecondary2 w400>
				<Div px20 py20 textCenter fontSize23 textPrimary>
					{rebirthChancesUsed > 5 ? "Rebirth Completed" : "Rebirth Possibilities"}
				</Div>
				{rebirthChancesUsed < 6 && (buttonState == ButtonState.Loading || buttonState == ButtonState.Rebirth) ? (
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
									const jsonURI = `${baseURIArray[obj.index]}${tokenId}.json`;
									return <ImageFromMetadatum key={jsonURI} jsonURI={jsonURI} />;
								})}
						</Carousel>
					) : (
						<Div imgTag src={IMAGES.team.jieun} w400 h400></Div>
					)
				) : (
					<Div imgTag src={currentTokenImage} w400 h400></Div>
				)}
				{rebirthChancesUsed < 6 && (
					<Div px20 py20>
						{buttonState == ButtonState.RebornTryAgain && (
							<Div flex justifyCenter roundedFull px40 py8 fontSize23 cursorPointer onClick={() => location?.reload()}>
								Reload
							</Div>
						)}
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
				)}
			</Div>
		</Modal>
	);
}

function ImageFromMetadatum({ jsonURI }) {
	const [imageURI, setImageURI] = useState(null);
	useEffect(() => {
		fetch(jsonURI)
			.then((res) => res.json())
			.then((res) => {
				setImageURI(res.image);
			});
	}, [jsonURI]);
	if (!imageURI) return <Div w318 h318></Div>;
	return <Div imgTag src={imageURI} w318 h318 rounded10></Div>;
}
