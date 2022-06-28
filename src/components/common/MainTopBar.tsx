import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaBars, FaBook, FaDiscord, FaInstagram, FaTimes, FaTwitter, FaWindowMinimize, FaXbox, FaXing, FaXingSquare } from "react-icons/fa";
import { href, LOCALES, reloadWithLocale } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";
import useIsTablet from "src/hooks/useIsTablet";
import { useState } from "react";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { truncateKlaytnAddress } from "src/helpers/klaytnAddressHelper";
import { MintingModal } from "../modal/MintingModal";
import { InviteModal } from "../modal/InviteModal";
import { RebirthModal } from "../modal/RebirthModal";
import { COLORS } from "src/modules/colors";

function MainTopBar({ absolute = false }) {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const { locale } = useRouter();
	const { asPath } = useRouter();
	const handleClickWebe = () => {
		href(urls.index);
	};
	const kaikas = useKaikas();
	const connectWallet = async () => {
		if (kaikas) {
			await kaikas.enable();
		}
	};

	if (isTablet) {
		return (
			<>
				<Div wFull z300 px15 py15 bgSecondary absolute>
					<Div flex mxAuto maxW={1150} itemsCenter>
						<Div onClick={handleClickWebe} cursorPointer>
							<Div w70 imgTag src={IMAGES.logos.webeLogo} onClick={handleClickWebe} cursorPointer></Div>
						</Div>
						<Div flex1></Div>
						<Div onClick={() => setClicked((prev) => !prev)}>
							{clicked ? <FaTimes size={25} color={COLORS.SECONDARY2} /> : <FaBars size={25} color={COLORS.SECONDARY2} />}
						</Div>
					</Div>
				</Div>
				{clicked && (
					<Div absolute z200 top0 wFull hScreen style={{ background: COLORS.SECONDARY, backdropFilter: "blur(20px)" }}>
						<Div mt100 mx40 textSecondary2 fontSize24>
							<Div flex px30 py10 border2 borderSecondary bgSecondary roundedLg itemsCenter cursorPointer aTag href={""}>
								<Div mr18>Public Docs</Div>
							</Div>
							<Div
								mt20
								flex
								px30
								py10
								border2
								borderSecondary
								bgSecondary
								roundedLg
								itemsCenter
								cursorPointer
								aTag
								href={"https://betterworldapp.io"}
							>
								<Div mr18>BetterWorld</Div>
								<Div w20 imgTag src={"/images/betterWorld.png"}></Div>
							</Div>
							<Div
								mt20
								flex
								px30
								py10
								border2
								borderSecondary
								bgSecondary
								roundedLg
								itemsCenter
								cursorPointer
								aTag
								href={"https://discord.com/invite/7tV3WxWf8p"}
							>
								<Div mr18>Discord</Div>
								<FaDiscord size={20} />
							</Div>
							<Div
								mt20
								flex
								px30
								py10
								border2
								borderSecondary
								bgSecondary
								roundedLg
								itemsCenter
								cursorPointer
								aTag
								href={"https://twitter.com/officialgomz"}
							>
								<Div mr18> Twitter</Div>
								<FaTwitter size={20} />
							</Div>
							<Div
								mt20
								flex
								px30
								py10
								border2
								borderSecondary
								bgSecondary
								roundedLg
								itemsCenter
								cursorPointer
								aTag
								href={"https://instagram.com/offical_gomz"}
							>
								<Div mr18>Instagram</Div>
								<FaInstagram size={20} />
							</Div>
						</Div>
						<Div flex justifyCenter mt40 mx40>
							<Div
								flex2
								flex
								justifyCenter
								text2xl
								textPrimary={locale == LOCALES.KO}
								textSecondary2={locale != LOCALES.KO}
								cursorPointer
								onClick={() => reloadWithLocale(LOCALES.KO)}
							>
								KOREAN
							</Div>
							<Div flex1 flex justifyCenter text2xl textSecondary2>
								l
							</Div>
							<Div
								flex2
								flex
								justifyCenter
								text2xl
								textPrimary={locale == LOCALES.EN}
								textSecondary2={locale != LOCALES.EN}
								cursorPointer
								onClick={() => reloadWithLocale(LOCALES.EN)}
							>
								ENGLISH
							</Div>
						</Div>
					</Div>
				)}
			</>
		);
	}
	return (
		<Div
			sticky={!absolute}
			absolute={absolute}
			top0
			wFull
			z200
			px80
			py12
			bgSecondary={!absolute}
			bgBlack={absolute}
			bgOpacity60={!absolute}
			bgOpacity30={absolute}
		>
			<MintingModal />
			<InviteModal />
			<RebirthModal />
			<Div flex mxAuto maxW={1150}>
				<Div onClick={handleClickWebe} cursorPointer>
					<Div w100 imgTag src={IMAGES.logos.webeLogo}></Div>
				</Div>
				<Div flex1></Div>
				<Div flex flexRow itemsCenter>
					<Div
						mx10
						textSm
						textSecondary={locale == LOCALES.KO}
						textSecondary2={locale != LOCALES.KO}
						clx={"group transition hover:text-primary-light"}
						cursorPointer
						onClick={() => reloadWithLocale(LOCALES.KO)}
					>
						KOR
					</Div>
					<Div textSm textSecondary2>
						l
					</Div>
					<Div
						ml10
						textSm
						textPrimary={locale == LOCALES.EN}
						textSecondary2={locale != LOCALES.EN}
						clx={"group transition hover:text-primary-light"}
						cursorPointer
						onClick={() => reloadWithLocale(LOCALES.EN)}
					>
						ENG
					</Div>
					<Div mx10 textSecondary2 cursorPointer aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
						<Div roundedFull py4 px10 fontSize12 trackingWidest clx={"group transition hover:text-primary-light"}>
							PUBLIC DOCS
						</Div>
					</Div>
					<Div mr10 clx={"group transition hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
						<Div imgTag src={"/images/betterWorld.png"} h30 wAuto></Div>
					</Div>
					<Div
						mx10
						textSecondary2
						clx={"group transition hover:text-primary-light"}
						cursorPointer
						aTag
						href={"https://discord.com/invite/7tV3WxWf8p"}
					>
						<FaDiscord size={30} />
					</Div>
					<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
						<FaTwitter size={25} />
					</Div>
					<Div ml10 textPrimary cursorPointer>
						{kaikas?.selectedAddress ? (
							<Div
								roundedFull
								bgSecondary2
								py4
								px18
								fontSize12
								trackingWidest
								borderBlack
								border1
								clx={"group transition hover:bg-secondary"}
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								{truncateKlaytnAddress(kaikas.selectedAddress)}
							</Div>
						) : (
							<Div
								roundedFull
								bgSecondary2
								py4
								px18
								fontSize12
								trackingWidest
								borderBlack
								border1
								onClick={connectWallet}
								clx={"group transition hover:bg-secondary"}
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								CONNECT WALLET
							</Div>
						)}
					</Div>
				</Div>
			</Div>
		</Div>
	);
}

export default MainTopBar;
