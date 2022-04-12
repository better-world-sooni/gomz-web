import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			const handleResize = () => {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};

			// Add event listener
			window.addEventListener("resize", handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

const Index: NextPage = () => {
	return (
		<>
			<BasicHead />

			<Div bgBlack>
				<Div>
					<Controller>
						<Scene duration={1000} triggerHook={0} pin={true}>
							<Div relative>
								<Div hScreen flex justifyCenter flexCol>
									<Div>
										<Row flex itemsEnd textWhite bgBlack maxW={1200} mxAuto px40>
											<Col>
												<Row>
													<Col auto>Values</Col>
													<Col auto>Journey</Col>
													<Col auto>Gallery</Col>
													<Col auto>Team</Col>
													<Col auto textPrimary>
														BetterWorld
													</Col>
													<Col />
												</Row>
											</Col>
											<Col auto>
												<Div maxW={200}>
													<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
												</Div>
											</Col>
											<Col>
												<Row flex itemsCenter>
													<Col />
													<Col auto>Public Docs</Col>
													<Col auto>
														<FaDiscord />
													</Col>
													<Col auto>
														<FaTwitter />
													</Col>
												</Row>
											</Col>
										</Row>
									</Div>
									<Div
										wFull
										h={"75vh"}
										style={{ backgroundImage: `url(${IMAGES.gomzStory1Bg})`, backgroundSize: "cover", backgroundPositionY: "center" }}
										relative
										my20
									>
										<Scene duration={1000} triggerHook={0} pin={true}>
											{(progress) => (
												<Timeline totalProgress={progress} paused>
													<Timeline
														target={
															<Div
																wFull
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzStory1Char})`,
																	backgroundSize: "cover",
																	backdropFilter: "brightness(50%)",
																	backgroundPositionY: "center",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex justifyEnd>
																	<Div maxW={600} textWhite py20 px20 textBasse mx20 my20>
																		For the past decade, GOMZ have been in a planet-wide war, a war provoked by excessive indoctrination of
																		competition and capitalism. Such violence has made the planet too hostile, colorless, and systematic, rendering it
																		uninhabitable.{" "}
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
													</Timeline>
													<Timeline
														target={
															<Div
																wFull
																absolute
																top0
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzStory2})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex>
																	<Div maxW={600} textWhite py20 px20 textBasse mx20 my20>
																		8,888 of these bears have turned to space travel with an altruistic vision:”A Better World”
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
													</Timeline>
													<Timeline
														target={
															<Div
																wFull
																absolute
																top0
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzStory3})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex>
																	<Div maxW={600} textWhite py20 px20 textBasse mx20 my20>
																		After years of deep hibernation in their space capsules, GOMZ have been awakened by other space wanderers who are
																		also in search of a habitable planet.
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
													</Timeline>
													<Timeline
														target={
															<Div
																wFull
																absolute
																top0
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzStory4})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex justifyEnd>
																	<Div maxW={600} textWhite py20 px20 textBasse mx20 my20>
																		Instead of fighting these space wanderers, GOMZ decides to establish the better world —— a free, creative, and
																		amicable society for space wanderers.
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
													</Timeline>
												</Timeline>
											)}
										</Scene>
									</Div>
									<Div textWhite py20>
										<Div maxW={1200} mxAuto px40 relative>
											<Div>
												<Row gapX={20}>
													<Col auto maxW={800}>
														GOMZ: The first Klaytn-based collection to lead popularization of NFT through tangible and social values
													</Col>
													<Col />
													<Col clx={"animate-pulse"} textPrimary auto>
														Scroll for our Story
													</Col>
												</Row>
											</Div>
											<Scene duration={1000} triggerHook={0} pin={true}>
												{(progress) => (
													<Timeline totalProgress={progress} paused>
														<Timeline
															target={
																<Div bgBlack absolute top0 wFull>
																	War
																</Div>
															}
														>
															<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
														</Timeline>
														<Timeline
															target={
																<Div bgBlack absolute top0 wFull>
																	Venture
																</Div>
															}
														>
															<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
														</Timeline>
														<Timeline
															target={
																<Div bgBlack absolute top0 wFull>
																	Wanderers
																</Div>
															}
														>
															<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
														</Timeline>
														<Timeline
															target={
																<Div bgBlack absolute top0 wFull>
																	BetterWorld
																</Div>
															}
														>
															<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
														</Timeline>
													</Timeline>
												)}
											</Scene>
										</Div>
									</Div>
								</Div>
							</Div>
						</Scene>
					</Controller>
				</Div>
				<Div py50 bgBlack flex itemsCenter justifyCenter>
					<Div mxAuto maxW={1200} px40>
						<Div hrTag mb50 />
						<Row flex itemsCenter gapX={20}>
							<Col auto text2xl textWhite>
								Build a{" "}
								<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
									Better{" "}
								</Div>
								<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
									World
								</Div>
							</Col>
							<Col textWhite>
								대중들이 블록체인 커뮤니티를 통하여
								<br /> 실질적인 가치를 창출하는 창의적인 세상
							</Col>
						</Row>
						<Div>
							<Row flex itemsCenter gapX={20}>
								<Col>
									<Div textWhite h450 flex itemsCenter>
										<Div>
											<Div imgTag src={IMAGES.logos.betterWorldBlue} mxAuto w={"40%"}></Div>
											<Div px40>
												BetterWorld 앱을 통해 NFT 공간을 선도하는 다양한 홀더들이 활발히 교류할 수 있습니다. 이 곳에 홀더들은 본인의 PFP가 자신의
												아바타이자 정체성이되어 표현하고, 활동하고, 소통하며 PFP 생태계 활성화에 앞장섭니다.
											</Div>
										</Div>
									</Div>
								</Col>
								<Col>
									<Div h450 flex itemsCenter textWhite>
										<Div>
											<Div mxAuto wMax={300} style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }} text3xl leadingNone pb30>
												Innovators <br /> Program
											</Div>
											<Div px40>
												우리가 일상 속에서 흔히 만나는 것들에 GOMZ가 함께하는 것으로 더 나은 세상은 시작됩니다. 자주가는 음식점, 카페, 바에서 GOMZ
												홀더로서 다양한 혜택을 받으세요. 이는 모두가 함께 상생할 수 있는 구조의 협약을 기반으로 이루어집니다.뿐만 아니라, NFT 홀더들이
												교류하고 네트워킹 할 수 있는 다양한 행사들도 준비되어있습니다.
											</Div>
										</Div>
									</Div>
								</Col>
							</Row>
						</Div>
						<Div hrTag />
					</Div>
				</Div>
				<Div bgBlack>
					<Div mxAuto maxW={1200} px20 py50 clx={"snap-start"}>
						<Row textWhite>
							<Col auto>
								<Div imgTag src={IMAGES.logos.main} w150 h150></Div>
							</Col>
							<Col py20>
								<Row py10>
									<Col auto>Values</Col>
									<Col auto>Journey</Col>
									<Col auto>Gallery</Col>
									<Col auto>Team</Col>
									<Col auto textPrimary>
										BetterWorld
									</Col>
									<Col></Col>
								</Row>
								<Row py5>
									<Col auto>
										<Div spanTag>Gomz by </Div>
										<Div spanTag style={{ color: "rgb(20,152,159)" }}>
											SOONI Labs
										</Div>
									</Col>
									<Col></Col>
								</Row>
								<Row textSm textThin>
									<Col auto>
										<Div spanTag>COPYRIGHT © GOMZ. ALL RIGHTS RESERVED</Div>
									</Col>
									<Col></Col>
								</Row>
							</Col>
						</Row>
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
