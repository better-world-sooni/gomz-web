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
import { COLORS } from "src/modules/colors";
import { MintingStep } from "src/modules/minting";
import { useCaver } from "src/hooks/klaytn/useCaver";

enum ButtonState {
	Rebirth = "Rebirth!",
	Failed = "Failed",
	Loading = "Transacting...",
	Reborn = "Reborn! Wait for the Reveal..",
	ConnectWallet = "Connect Wallet",
}

export function RebirthModal() {
	const { rebirthModal } = useSelector((state: RootState) => ({
		rebirthModal: state.modal.rebirthModal,
	}));
	const kaikas = useKaikas();
	const caver = useCaver();
	const smartContract = useContract(kaikas, true);
	const dispatch = useDispatch();
	const { salePrice } = useContractState();
	const { tokenId, metadata, baseURIType } = useTokenState({ index: rebirthModal.index, selectedAddress: kaikas?.selectedAddress });
	const [currentTokenImage, setCurrentTokenImage] = useState(metadata?.image);
	const [reborn, setReborn] = useState(baseURIType == MintingStep.Rebirth)
	const [buttonState, setButtonState] = useState(ButtonState.Rebirth);
	const rebirth = async () => {
		setButtonState(ButtonState.Loading);
		try {
			await smartContract.methods.rebirth(tokenId).send({
				from: kaikas?.selectedAddress,
				gas: "2500000",
				value: caver.utils.fromPeb(salePrice, "peb"),
			});
			const tokenUri = await smartContract.methods.tokenURI(tokenId).call();
			const metadata = await (await fetch(tokenUri)).json();
			setCurrentTokenImage(metadata?.image);
		} catch {
			setButtonState(ButtonState.Failed);
			return;
		}
		setButtonState(ButtonState.Reborn);
		setReborn(true)
	};
	const handleClose = () => {
		dispatch(rebirthModalAction({ enabled: false, index: rebirthModal.index }));
	};
	const handleClickRebirth = () => {
		if (!(buttonState == ButtonState.Rebirth || buttonState == ButtonState.Reborn)) return;
		if (reborn) return;
		rebirth();
	};
	useEffect(() => {
		setButtonState(kaikas ? ButtonState.Rebirth : ButtonState.ConnectWallet);
	}, [rebirthModal.enabled, rebirthModal.index, kaikas]);
	useEffect(() => {
		setCurrentTokenImage(metadata?.image);
	}, [metadata?.image]);
	useEffect(() => {
		setReborn(baseURIType == MintingStep.Rebirth);
	}, [baseURIType]);
	return (
		<Modal open={rebirthModal.enabled} onClose={handleClose} bdClx={"bg-black/60"}>
			<Div bgSecondary2 w400>
				<Div pt20 textCenter fontSize28 textPrimary>
					{reborn ? "Rebirth Completed" : "Ready for Rebirth?"}
				</Div>
				<Div textCenter pb20 fontSize16 textPrimary balooR>
					{reborn ? "" : "Everybody has 1 second chance"}
				</Div>
				<Div imgTag src={currentTokenImage} wFull hAuto></Div>
				{!reborn && (
					<Div px20 py20>
						<Div flex justifyCenter my10>
							<Div
								clx={"group transition hover:bg-primary-light"}
								bgPrimary
								roundedXl
								px90
								py8
								fontSize21
								textWhite
								borderBlack
								border2
								cursorPointer
								onClick={handleClickRebirth}
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								{buttonState}
							</Div>
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
	if (!imageURI) return <Div wFull hAuto></Div>;
	return <Div imgTag src={imageURI} wFull hAuto rounded10></Div>;
}
