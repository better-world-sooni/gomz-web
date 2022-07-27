import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "src/modules/images";
import { alertModalAction } from "src/store/reducers/modalReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "../Div";
import Modal from "./Modal";

export function AlertModal() {
	const dispatch = useDispatch();
	const { alertModalEnabled } = useSelector((state: RootState) => ({
		alertModalEnabled: state.modal.alertModal.enabled,
	}));
	const handleClose = () => {
		dispatch(alertModalAction({ enabled: false }));
	};
	return (
		<Modal open={alertModalEnabled} onClose={handleClose} bdClx={"bg-black/60"}>
			<Div roundedLg overflowHidden w500 mx80>
				<Div flex bgPrimary fontSize24 px50>
					<Div style={{ flex: 2 }} flex flexRow py20 itemsCenter justifyCenter>
						<Div textWhite fontSize24>
							Invalid Chain Alert
						</Div>
					</Div>
				</Div>
				<Div flex h14 z1 bgSecondary borderB2 borderT2 borderBlack px50>
					<Div style={{ flex: 2 }} py20 flexRow></Div>
				</Div>
				<Div flex bgWhite fontSize24 px50>
					<Div style={{ flex: 2 }} py20>
						카이카스 체인을 메인넷으로 전환해 주세요
					</Div>
				</Div>
			</Div>
		</Modal>
	);
}
