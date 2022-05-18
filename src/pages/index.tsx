import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href, LOCALES, reloadWithLocale } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import Footer from "src/components/common/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const { locale: nextLocale } = useRouter();
	const [mainImage, setMainImage] = useState(IMAGES.gomzMainAstronaut);
	const [animation, setAnimation] = useState(null);
	const handleClickHome = () => {
		href(urls.home.index)
	};
	useEffect(() => {
		if (mainImage == IMAGES.gomzMainAstronautGif) {
			const timeout = setTimeout(() => href(urls.home.index), 6500);
			setAnimation(timeout);
		}
	}, [mainImage]);

	if (isTablet) {
		return (
			<>
				<BasicHead />
				<Div
					style={{
						background: "#EDEEE9",
					}}
					relative
					hScreen
				>
						<Div absolute top24 left24 w90 imgTag src={IMAGES.logos.webeWord}></Div>
						<Div onClick={() => setClicked((prev) => !prev)}>
							{clicked ? <Div absolute z999 top24 right24 w18 imgTag src={IMAGES.cancelIcon}/> : <Div absolute top24 right24 w18 imgTag src={IMAGES.menuIcon}/>}
							{clicked && (
								<Div
								absolute
								top0
								wFull
								hFull
								style={{background: "rgba(237, 238, 233, 0.96)"}}
								>
									<Div mt90 ml35 textPrimary fontSize32 fontSemibold>
										<Div flex mb38 itemsCenter aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
											<Div w30 imgTag src={IMAGES.logos.webePrimaryIcon}></Div>
											<Div ml18>Public Docs</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://betterworldapp.io"}>
											<Div w32 imgTag src={IMAGES.logos.betterWorldPrimaryLogo}></Div>
											<Div ml17>BetterWorld</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
											<FaDiscord size={32} />
											<Div ml18>Discord</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://twitter.com/officialgomz"}>
											<FaTwitter size={32} />
											<Div ml18>Twitter</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://instagram.com/offical_gomz"}>
											<FaInstagram size={32} />
											<Div ml18>Instagram</Div>
										</Div>
									</Div>
								</Div>
							)}
						</Div>
					<Div flex justifyCenter>
						<Div mt104 w346 imgTag src={IMAGES.gomzMainAstronaut}></Div>
					</Div>
					<Div flex justifyCenter>
						<Div flex justifyCenter itemsCenter mt45 bgPrimary roundedFull w150 h50 textWhite fontSize20 onClick={handleClickHome}>ENTER</Div>
					</Div>
				</Div>
			</>
					
		);
	}
	return (
		<>
			<BasicHead />
			<Div
				style={{
					background: "#EDEEE9",
				}}
				hScreen
				relative
			>
				<Div absolute top0 wFull z200 flex px80 mt40>
						<Div flex1></Div>
						<Div flex flexRow itemsCenter>
							<Div
								mx10
								textWhite
								clx={"hover:opacity-50"}
								cursorPointer
								aTag
								href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
							>
								<Div roundedFull bgPrimary py4 px18 fontSize12 trackingWidest>
									Public Docs
								</Div>
							</Div>
							<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
								<Div imgTag src={IMAGES.logos.betterWorldSecondary} h20 wAuto></Div>
							</Div>
							<Div mx10 textSecondary clx={"hover:opacity-50"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
								<FaDiscord size={30} />
							</Div>
							<Div mx10 textSecondary clx={"hover:opacity-50"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
								<FaTwitter size={25} />
							</Div>
							<Div mx10 textSm textPrimary={nextLocale==LOCALES.KO} textSecondary={nextLocale!=LOCALES.KO} clx={"hover:opacity-50"} cursorPointer onClick={() => reloadWithLocale(LOCALES.KO)}>KOR</Div>
							<Div textSm textSecondary>l</Div>
							<Div ml10 textSm textPrimary={nextLocale==LOCALES.EN} textSecondary={nextLocale!=LOCALES.EN} clx={"hover:opacity-50"} cursorPointer onClick={() => reloadWithLocale(LOCALES.EN)}>ENG</Div>
						</Div>
				</Div>
				<Div flex hFull relative>
					<Div flexCol z100 ml200 mt120>
						<Div w330 imgTag src={IMAGES.logos.webeWord}></Div>
						<Div mt35 textLeft fontSize25 textPrimary leadingTight>
							Dedicated to global innovators,<br></br>party heads, and Web 3 enthusiasts</Div>
						<Div mt35 clx={"hover:opacity-50"} w140 bgPrimary roundedFull px40 py8 fontSize25 textWhite>
							MINT</Div>
						<Div mt45 w250 imgTag src={IMAGES. mintingProcess}></Div>
					</Div>
					<Div ml200 mt120 mb40 imgTag src={IMAGES.gomzMainAstronaut} cursorPointer onClick={handleClickHome}></Div>
						<Div absolute w150 top200 right150 imgTag src={IMAGES.clickmetoenter}>
						</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
