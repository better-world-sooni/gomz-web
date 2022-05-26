import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href, LOCALES, reloadWithLocale } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
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
	const handleClickMint = () => {
		href(urls.mint.index);
	}
	// useEffect(() => {
	// 	if (mainImage == IMAGES.gomzMainAstronautGif) {
	// 		const timeout = setTimeout(() => href(urls.home.index), 6500);
	// 		setAnimation(timeout);
	// 	}
	// }, [mainImage]);

	if (isTablet) {
		return (
			<>
				<BasicHead />
				<Div
					style={{background:"linear-gradient:(169.77deg, #413F70 59%, #37315A 92.97%)", overflow :"auto"}}
					relative
					hScreen
				>
					<Div absolute w250 bottom20 right-40 imgTag src={IMAGES.starDusts3} rotate45></Div>
					<Div absolute top24 left24 w80 imgTag src={IMAGES.logos.webeLogo}></Div>
					<Div onClick={() => setClicked((prev) => !prev)}>
						{clicked ? <Div absolute z3 top30 right24 w18 imgTag src={IMAGES.cancelIcon}/> : <Div absolute z999 top30 right24 w18 imgTag src={IMAGES.menuIcon}/>}
						{clicked && (
							<Div
								absolute
								z2
								top0
								wFull
								hFull
								style={{background: "rgba(218, 226, 255, 0.96)"}}
								>
								<Div mt90 mx50 textPrimary fontSize32 style={{webkitTextStroke:"1px #fff"}}>
									<Div flex mb38 itemsCenter 
										aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
										style={{webkitTextStroke:"1px #fff"}}>
											<Div w30 imgTag src={IMAGES.logos.webeIconPrimary}></Div>
											<Div ml18>Public Docs</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://betterworldapp.io"}>
											<Div w32 imgTag src={IMAGES.logos.betterWorldPrimary}></Div>
											<Div ml17>BetterWorld</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://discord.com/invite/7tV3WxWf8p"}
										style={{webkitTextStroke:"1px #fff"}}>
											<FaDiscord size={32} />
											<Div ml18>Discord</Div>
										</Div>
										<Div flex mb38 itemsCenter aTag href={"https://twitter.com/officialgomz"}
										style={{webkitTextStroke:"1px #fff"}}>
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
						<Div mt120 w346 imgTag src={IMAGES.webeMainAstronaut} style={{animation:"float 6s ease-in-out infinite"}}></Div>
					</Div>
					<Div flex justifyCenter>
						<Div flex justifyCenter itemsCenter absolute z1 mt35 bgSecondary roundedFull w150 h50 textSecondary2 fontSize22
						style={{webkitTextStroke: "1px #000"}}
						onClick={handleClickHome}>ENTER</Div>
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
					background: "linear-gradient(114.31deg, #3E4071 51.1%, #37315A 89.59%)",
					webkitTextStroke: "1px #000",
					overflow: "auto"
				}}
				hScreen
				relative
			>
				<Div absolute w350 bottom0 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
				<Div absolute top0 wFull z200 flex px80 mt40>
						<Div flex1></Div>
						<Div flex flexRow itemsCenter>
							<Div
								mx10
								textSecondary2
								cursorPointer
								aTag
								href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
							>
								<Div roundedFull bgSecondary py4 px18 fontSize12 trackingWidest borderBlack border1
								style={{webkitTextStroke: "1px #000"}}
								clx={"group transition hover:bg-primary-light"}>
									Public Docs
								</Div>
							</Div>
							<Div mx10 clx={"group transition hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
								<Div imgTag src={IMAGES.logos.betterWorldSecondary2} h20 wAuto></Div>
							</Div>
							<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"}cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
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
				<Div flex hScreen wFull p150>
					<Div flex1 flex justifyStart itemsCenter>
						<Div flexCol>
							<Div flex maxW350>
								<Div pt30 pb20 imgTag src={IMAGES.logos.webeLogo}></Div>
							</Div>
							<Div flex maxW500>
								<Div pb20 textLeft fontSize22 textSecondary2 leadingTight>
								Cultural franchise dedicated to global innovators, party heads, and Web 3 enthusiasts</Div>
							</Div>
							<Div flex pb30>
								<Div maxW150 flex justifyCenter clx={"group transition hover:bg-primary-light"} bgSecondary roundedFull px40 py8 fontSize25 textWhite borderBlack border1
									onClick={handleClickMint} cursorPointer>
									MINT
								</Div>
							</Div>
							<Div flex maxW250>
								<Div pb30 imgTag src={IMAGES. mintingProcess}></Div>
							</Div>
						</Div>
					</Div>
					<Div flex1 flex justifyEnd itemsCenter>
						<Div flex2 maxW400>
							<Div pt60 style={{animation:"float 6s ease-in-out infinite"}}
							imgTag src={IMAGES.webeMainAstronaut} cursorPointer onClick={handleClickHome}>
							</Div>
						</Div>
						<Div flex1 maxW300>
							<Div pb300 imgTag src={IMAGES.clickmetoEnter}></Div>
						</Div>
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
