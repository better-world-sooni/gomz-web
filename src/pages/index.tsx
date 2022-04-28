import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import Footer from "src/components/common/Footer";
import { useEffect, useState } from "react";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const [mainImage, setMainImage] = useState(IMAGES.gomzMainAstronaut);
	const handleClickHome = () => {
		if (mainImage == IMAGES.gomzMainAstronautGif) {
			href(urls.home.index);
			return;
		}
		setMainImage(IMAGES.gomzMainAstronautGif);
	};
	useEffect(() => {
		if (mainImage == IMAGES.gomzMainAstronautGif) {
			setTimeout(() => href(urls.home.index), 6500);
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
									Click Me to Enter
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
					background: "radial-gradient(50% 50% at 50% 50%, #000000 44.27%, #02012D 100%)",
				}}
				hScreen
				relative
			>
				<Div absolute top0 wFull z200>
					<Div flex flexRow px80 mt50>
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
								<Div imgTag src={IMAGES.logos.betterWorld} h20 wAuto></Div>
							</Div>
							<Div mx10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
								<FaDiscord size={25} />
							</Div>
							<Div ml10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
								<FaTwitter size={25} />
							</Div>
						</Div>
					</Div>
				</Div>
				<Div flex flexRow hFull relative>
					<Div hFull absolute>
						<Div flex flexRow hFull style={{ pointerEvents: "none" }}>
							<Div style={{ flex: 1 }}></Div>
							<Div style={{ flex: 1.3 }} flex justifyCenter itemsCenter relative>
								<Div imgTag src={mainImage}></Div>
								<Div absolute bottom50 textWhite>
									<Div>Click Me to Enter</Div>
								</Div>
							</Div>
							<Div style={{ flex: 1 }}></Div>
						</Div>
					</Div>
					<Div style={{ flex: 1 }} flex justifyCenter itemsCenter z100>
						<Div imgTag src={IMAGES.logos.gomzWord} pl50 pr100 ml30></Div>
					</Div>
					<Div style={{ flex: 0.8 }} flex justifyCenter itemsCenter cursorPointer onClick={handleClickHome} z100></Div>
					<Div style={{ flex: 1 }} flex justifyCenter itemsCenter textWhite fontMedium z100>
						<Div flex itemsEnd bottom50 textWhite text2xl flexCol pr90>
							<Div textRight fontSize30>
								REVOLUTIONARY SOCIAL NETWORK OF WEB3 IDENTITIES
							</Div>
							<Div px50 py10 roundedFull border1 borderWhite fontExtrabold mt20>
								MINT
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
			<Footer index />
		</>
	);
};

export default Index;
