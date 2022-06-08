import { useEffect, useState } from "react";
import { truncateKlaytnAddress } from "src/helpers/klaytnAddressHelper";
import useAddressInput from "src/hooks/klaytn/useAddressInput";
import { useContract } from "src/hooks/klaytn/useContract";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { COLORS } from "src/modules/colors";
import { IMAGES } from "src/modules/images";
import Div from "../Div";
import Modal from "./Modal";

enum ButtonState {
	Confirm = "Confirm",
	Failed = "Failed",
	Loading = "Loading...",
	Success = "Success!",
	ConnectWallet = "Connect Wallet",
}

export function InviteModal({ open, onClose }) {
	const kaikas = useKaikas();
	const smartContract = useContract(kaikas, true);
	const { address, handleAddressInput, error } = useAddressInput();
	const [buttonState, setButtonState] = useState(ButtonState.Confirm);
	const mint = async () => {
		if (ButtonState.Confirm != buttonState) return;
		try {
			setButtonState(ButtonState.Loading);
			const inviteRes = await smartContract.methods.invite(address).send({
				from: kaikas?.selectedAddress,
				gas: "2500000",
			});
			setButtonState(ButtonState.Success);
		} catch {
			setButtonState(ButtonState.Failed);
		}
	};

	useEffect(() => {
		setButtonState(kaikas ? ButtonState.Confirm : ButtonState.ConnectWallet);
	}, [kaikas]);
	useEffect(() => {
		setButtonState(ButtonState.Confirm);
	}, [open]);
	return (
		<Modal open={open} onClose={onClose} bdClx={"bg-black/60"}>
			<Div roundedLg overflowHidden w650 mx80>
				<Div flex bgPrimary fontSize24 px50>
					<Div style={{ flex: 2 }} flex flexRow py20>
						<Div>
							<Div w100 hAuto imgTag src={IMAGES.logos.webeLogo}></Div>
						</Div>
						<Div ml20 textWhite fontSize24>
							Invitation
						</Div>
					</Div>
				</Div>
				<Div flex h14 z1 bgSecondary borderB2 borderT2 borderBlack px50>
					<Div style={{ flex: 2 }} py20 flexRow></Div>
				</Div>
				<Div flex bgWhite fontSize24 px50>
					<Div style={{ flex: 2 }} py20>
						<Div flex mb20>
							<Div mr20>From:</Div>
							{kaikas?.selectedAddress && <Div>{truncateKlaytnAddress(kaikas.selectedAddress)}</Div>}
						</Div>
						<Div flex mb20>
							<Div mr20>To:</Div>
							<Div wFull>
								<input
									onChange={handleAddressInput}
									style={{ border: "none", outline: "none", backgroundColor: COLORS.GRAY400, borderRadius: 10, padding: 4, width: "100%" }}
								></input>
							</Div>
						</Div>
						{error && (
							<Div textDanger fontSize12 mb20>
								{error}
							</Div>
						)}
						<Div
							px3
							py10
							borderBlack
							border2
							roundedFull
							textWhite
							bgPrimary
							bgDanger={buttonState == ButtonState.Failed}
							bgSecondary={buttonState == ButtonState.ConnectWallet}
							fontSize24
							balooB
							style={{ boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)" }}
							flex
							justifyCenter
							itemsCenter
							onClick={mint}
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
