import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href, LOCALES, reloadWithLocale } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import Footer from "src/components/common/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
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
						background: "radial-gradient(50% 50% at 50% 50%, #000000 44.27%, #02012D 100%)",
					}}
					relative
					hScreen
				>
					<Div wFull>
						<Div flex flexRow py20 px20>
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
									<Div roundedFull border1 borderWhite py3 px15 textSm>
										Public Docs
									</Div>
								</Div>
								<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
									<Div imgTag src={IMAGES.logos.betterWorld} h18 wAuto></Div>
								</Div>
								<Div mx10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
									<FaDiscord size={18} />
								</Div>
								<Div ml10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
									<FaTwitter size={18} />
								</Div>
							</Div>
						</Div>
					</Div>
					<Div hFull flexCol flex itemsCenter>
						<Div onClick={handleClickHome}>
							<Div relative>
								<Div imgTag src={mainImage}></Div>
								<Div textCenter wFull textWhite bottom30 absolute textSm clx={"animate-bounce"}>
									{animation ? "Click again to skip" : "Click Me to Enter"}
								</Div>
							</Div>
							<Div imgTag src={IMAGES.logos.gomzWord} mxAuto px50></Div>
							<Div textWhite textBase textCenter px20 textLg>
								Realize your lost identity
							</Div>
						</Div>
					</Div>
				</Div>
				<Footer />
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
				<Div absolute top0 wFull z200 flex flexRow px80 mt40>
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
								<Div roundedFull bgPrimary py4 px18 textSm trackingWidest>
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
					<Div flexCol z100 ml200 mt130>
						<Div w330 imgTag src={IMAGES.logos.webeWord}></Div>
						<Div mt35 textLeft fontSize25 textPrimary leadingTight>
							Dedicated to global innovators,<br></br>party heads, and Web 3 enthusiasts</Div>
						<Div mt40 clx={"hover:opacity-50"} w140 bgPrimary roundedFull px40 py8 fontSize25 textWhite>
							MINT</Div>
						<Div mt50 w250 imgTag src={IMAGES. mintingProcess}></Div>
					</Div>
					<Div ml200 mt120 mb40 imgTag src={IMAGES.gomzMainAstronaut} cursorPointer onClick={handleClickHome}></Div>
						<Div absolute w150 top200 right150 imgTag src={IMAGES.clickmetoenter}>
						</Div>
				</Div>
			</Div>
			<Footer index />
		</>
	);
};

export default Index;
