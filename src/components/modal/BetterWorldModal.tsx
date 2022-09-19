import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "src/modules/images";
import { betterWorldModalAction } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./Modal";

export function BetterWorldModal() {
	const dispatch = useDispatch();
	const { betterWorldModalEnabled } = useSelector((state: RootState) => ({
		betterWorldModalEnabled: state.modal.betterWorldModal.enabled,
	}));
	const handleClose = () => {
		dispatch(betterWorldModalAction({ enabled: false }));
	};
	return (
		<Modal open={betterWorldModalEnabled} onClose={handleClose} bdClx={"bg-black/80"}>
			<Div roundedLg overflowHidden>
				<Div textSecondary2 fontSize={24} textCenter>
					Departing for BetterWorld soon...
				</Div>
				<Div imgTag src={IMAGES.spaceship} mxAuto w250 mt30></Div>
			</Div>
		</Modal>
	);
}
