import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Footer from "src/components/common/Footer";
import HomeTopBar from "src/components/home/HomeTopBar";
import { useState } from "react";
import EmptyBlock from "src/components/EmptyBlock";
import MainTopBar from "src/components/common/MainTopBar";
import { VIDEOS } from "src/modules/videos";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Index: NextPage = () => {
	const handleClickHome = () => {
		href(urls.home.index);
	};
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
							<Div mx10>
								<Div roundedFull border1 borderWhite textWhite flex itemsCenter justifyCenter fontBold py5 px20>
									Public Docs
								</Div>
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
						<Div flex itemsEnd bottom50 textWhite text2xl flexCol pr90>
							<Div textRight fontSize36>
								A Creative Playground with Your Web 3.0 Identity
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
