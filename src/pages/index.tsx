import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import Footer from "src/components/common/Footer";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const handleClickHome = () => {
		href(urls.home.index);
	};
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
								<Div mx10 textWhite>
									<FaBook size={20} />
								</Div>
								<Div mx10>
									<Div imgTag src={IMAGES.logos.betterWorld} h20 wAuto></Div>
								</Div>
								<Div mx10 textWhite>
									<FaDiscord size={20} />
								</Div>
								<Div ml10 textWhite>
									<FaTwitter size={20} />
								</Div>
							</Div>
						</Div>
					</Div>
					<Div hFull flexCol flex itemsCenter>
						<Div onClick={handleClickHome}>
							<Div imgTag src={IMAGES.gomzMainAstronaut}></Div>
							<Div imgTag src={IMAGES.logos.gomzWord} mxAuto px50></Div>
							<Div textWhite textBase textCenter px20 textLg>
								Realize your lost identity
							</Div>
						</Div>
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
					background: "radial-gradient(50% 50% at 50% 50%, #000000 44.27%, #02012D 100%)",
				}}
				hScreen
				relative
			>
				<Div absolute top0 wFull>
					<Div flex flexRow px80 mt50>
						<Div flex1></Div>
						<Div flex flexRow itemsCenter>
							<Div mx10 textWhite>
								<FaBook size={35} />
							</Div>
							<Div mx10>
								<Div imgTag src={IMAGES.logos.betterWorld} h30 wAuto></Div>
							</Div>
							<Div mx10 textWhite>
								<FaDiscord size={35} />
							</Div>
							<Div ml10 textWhite>
								<FaTwitter size={35} />
							</Div>
						</Div>
					</Div>
				</Div>
				<Div flex flexRow hFull relative>
					<Div hFull absolute>
						<Div flex flexRow hFull style={{ pointerEvents: "none" }}>
							<Div style={{ flex: 1 }}></Div>
							<Div style={{ flex: 1.3 }} flex justifyCenter itemsCenter>
								<Div imgTag src={IMAGES.gomzMainAstronaut}></Div>
							</Div>
							<Div style={{ flex: 1 }}></Div>
						</Div>
					</Div>
					<Div style={{ flex: 1 }} flex justifyCenter itemsCenter z100>
						<Div imgTag src={IMAGES.logos.gomzWord} px50 ml30></Div>
					</Div>
					<Div style={{ flex: 1 }} flex justifyCenter itemsCenter cursorPointer onClick={handleClickHome} z100></Div>
					<Div style={{ flex: 1 }} flex justifyCenter itemsCenter textWhite fontMedium z100>
						<Div flex itemsCenter bottom50 textWhite text2xl flexCol pr90>
							<Div textRight fontSize36>
								Realize your lost identity
							</Div>
							<Div px50 py10 roundedFull border1 borderWhite fontExtrabold mt20>
								MINT
							</Div>
						</Div>
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
