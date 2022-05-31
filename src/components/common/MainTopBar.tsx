import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaBook, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { href, LOCALES, reloadWithLocale } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";
import useIsTablet from "src/hooks/useIsTablet";
import { useState } from "react";

function MainTopBar() {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const { locale } = useRouter();
	const { asPath } = useRouter();
	const handleClickWebe = () => {
		href(urls.index);
	};
	if (isTablet) {
		return (
			<Div relative>
				<Div wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}></Div>
				<Div absolute top20 z99 left40 w70 imgTag src={IMAGES.logos.webeLogo} onClick={handleClickWebe}></Div>
				<Div onClick={() => setClicked((prev) => !prev)}>
						{clicked ? (
							<Div absolute z999 top0 wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
							<Div absolute z999 top20 left40 w70 imgTag src={IMAGES.logos.webeLogo}></Div>
							<Div absolute z999 top23 right40 w18 imgTag src={IMAGES.cancelIcon} />
							</Div>
						) : (
							<Div absolute z99 top23 right40 w18 imgTag src={IMAGES.menuIcon} />
							)}
						{clicked && (
							<Div absolute z100 top0 wFull hScreen style={{ background: "rgba(65, 63, 112, 0.85)", backdropFilter: "blur(20px)" }}>
								<Div mt100 mx40 textSecondary2 fontSize24>
									<Div flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={""}>
										<Div mr18>Public Docs</Div>
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://betterworldapp.io"}>
										<Div mr18>BetterWorld</Div>
										<Div w20 imgTag src={IMAGES.logos.betterWorld}></Div>
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
										<Div mr18>Discord</Div>
										<FaDiscord size={20} />
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://twitter.com/officialgomz"}>
										<Div mr18> Twitter</Div>
										<FaTwitter size={20} />
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://instagram.com/offical_gomz"}>
										<Div mr18>Instagram</Div>
										<FaInstagram size={20} />
									</Div>
								</Div>
								<Div flex justifyCenter mt40 mx40 clx={"text-stroke"}>
									<Div
									flex2
									flex
									justifyCenter
									text2xl
									textSecondary={locale == LOCALES.KO}
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
										textSecondary={locale == LOCALES.EN}
										textSecondary2={locale != LOCALES.EN}
										cursorPointer
										onClick={() => reloadWithLocale(LOCALES.EN)}
									>
										ENGLISH
									</Div>
								</Div>
							</Div>
						)}
					</Div>
			</Div>
		);
	}
	return (
		<Div absolute top0 wFull z200 px80 py15 style={{ backgroundColor: "rgba(0,0,0,0.2)" }} clx={"text-stroke"}>
		<Div flex mxAuto maxW={1100}>
			<Div>
				<Div w100 imgTag src={IMAGES.logos.webeLogo} cursorPointer onClick={handleClickWebe}></Div>
			</Div>
			<Div flex1></Div>
			<Div flex flexRow itemsCenter>
				<Div mx10 textSecondary2 cursorPointer aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
					<Div roundedFull bgSecondary py4 px18 fontSize12 trackingWidest borderBlack border1 clx={"group transition hover:bg-primary-light"}>
						PUBLIC DOCS
					</Div>
				</Div>
				<Div mx10 clx={"group transition hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
					<Div imgTag src={IMAGES.logos.betterWorldSecondary2} h20 wAuto></Div>
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
					textSecondary={locale == LOCALES.EN}
					textSecondary2={locale != LOCALES.EN}
					clx={"group transition hover:text-primary-light"}
					cursorPointer
					onClick={() => reloadWithLocale(LOCALES.EN)}
				>
					ENG
				</Div>
			</Div>
		</Div>
	</Div>
	);
}

export default MainTopBar;
