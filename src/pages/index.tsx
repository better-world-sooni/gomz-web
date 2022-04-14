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

const Index: NextPage = () => {
	const handleClickHome = () => {
		href(urls.home.index);
	};
	return (
		<>
			<BasicHead />
			<Div
				style={{
					backgroundImage: `url(${IMAGES.cityBgLong})`,
					backgroundSize: "cover",
					backgroundPositionX: "center",
					backgroundPositionY: "center",
				}}
			>
				<Div>
					<Div relative style={{ backdropFilter: "brightness(15%)" }}>
						<MainTopBar />
						<Div mxAuto maxW={1200} px40>
							<Row>
								<Col flex itemsCenter>
									<Div>
										<Div>
											<Div imgTag src={IMAGES.logos.gomzWord}></Div>
										</Div>
										<Div textWhite italic py20>
											Gomz is the collection to lead popularization of NFT through tangible and social values
										</Div>
									</Div>
								</Col>
								<Col>
									<Div relative cursorPointer onClick={handleClickHome}>
										<video autoPlay width="100%" muted loop>
											<source src={VIDEOS.gomzAstronaut} type="video/mp4" />
										</video>
										<Div wFull absolute bottom80 left0 z10>
											<Div textCenter textWhite clx={"animate-bounce"} italic fontSemibold>
												Click to Enter
											</Div>
										</Div>
									</Div>
								</Col>
							</Row>
						</Div>
					</Div>
				</Div>

				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

export default Index;
