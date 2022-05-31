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
	const { locale: nextLocale } = useRouter();
	const { asPath } = useRouter();
	const handleClickWebe = () => {
		href(urls.index);
	};
	if (isTablet) {
		return (
			<Div relative>
			<Div wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}></Div>
			<Div absolute top20 z99 left24 w70 imgTag src={IMAGES.logos.webeLogo} onClick={handleClickWebe}></Div>
			<Div onClick={() => setClicked((prev) => !prev)}>
				{clicked ? (
					<Div absolute z999 top23 right24 w18 imgTag src={IMAGES.cancelIcon} />
				) : (
					<Div absolute z99 top23 right24 w18 imgTag src={IMAGES.menuIcon} />
					)}
				{clicked && (
					<Div absolute z999 top0 wFull hScreen style={{ background: "rgba(218, 226, 255, 0.96)" }}>
						<Div mt90 mx50 textPrimary fontSize32>
							<Div flex mb38 itemsCenter aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
								<Div w30 imgTag src={IMAGES.logos.webeIconPrimary}></Div>
									<Div ml18 clx={"text-stroke-white"}>Public Docs</Div>
							</Div>
							<Div flex mb38 itemsCenter aTag href={"https://betterworldapp.io"}>
								<Div w32 imgTag src={IMAGES.logos.betterWorldPrimary}></Div>
								<Div ml17 clx={"text-stroke-white"}>BetterWorld</Div>
							</Div>
							<Div flex mb38 itemsCenter aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
								<FaDiscord size={32} />
								<Div ml18 clx={"text-stroke-white"}>Discord</Div>
							</Div>
							<Div flex mb38 itemsCenter aTag href={"https://twitter.com/officialgomz"}>
								<FaTwitter size={32} />
									<Div ml18 clx={"text-stroke-white"}>Twitter</Div>
							</Div>
							<Div flex mb38 itemsCenter aTag href={"https://instagram.com/offical_gomz"}>
								<FaInstagram size={32} />
								<Div ml18 clx={"text-stroke-white"}>Instagram</Div>
							</Div>
						</Div>
					</Div>
				)}
			</Div>
			</Div>
		);
	}
	return (
		<Div absolute top0 wFull z1 flex px80 mt40 style={{webkitTextStroke: "1px #000"}}>
			<Div flex1></Div>
			<Div flex itemsCenter>
				<Div absolute left80 w110 imgTag src={IMAGES.logos.webeLogo} onClick={handleClickWebe} cursorPointer></Div>
				<Div
				mx10
				textSecondary2
				cursorPointer
				aTag
				href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
			>
					<Div roundedFull bgSecondary textSecondary2 py4 px18 fontSize12 trackingWidest
					clx={"group transition hover:bg-primary-light"}>
					Public Docs
					</Div>
				</Div>
				<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
					<Div imgTag src={IMAGES.logos.betterWorldSecondary2} h20 wAuto></Div>
				</Div>
				<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
					<FaDiscord size={30} />
				</Div>
				<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
					<FaTwitter size={25} />
				</Div>
				<Div mx10 textSm textSecondary={nextLocale==LOCALES.KO} textSecondary2={nextLocale!=LOCALES.KO} clx={"group transition hover:text-primary-light"} cursorPointer onClick={() => reloadWithLocale(LOCALES.KO)}>KOR</Div>
				<Div textSm textSecondary2>l</Div>
				<Div ml10 textSm textSecondary={nextLocale==LOCALES.EN} textSecondary2={nextLocale!=LOCALES.EN} clx={"group transition hover:text-primary-light"} cursorPointer onClick={() => reloadWithLocale(LOCALES.EN)}>ENG</Div>
			</Div>
		</Div>
	);
}

export default MainTopBar;
