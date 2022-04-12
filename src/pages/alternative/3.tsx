import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import EmptyBlock from "src/components/EmptyBlock";
import { useEffect, useState } from "react";

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
								<Div hScreen flex justifyCenter flexCol mxAuto px40 maxW={1400}>
									<Div>
										<Row flex itemsCenter textWhite gapX={10} bgBlack px20>
											<Col>
												<Div maxW={200}>
													<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
												</Div>
											</Col>
											<Col></Col>
											<Col auto>VALUES</Col>
											<Col auto>JOURNEY</Col>
											<Col auto>GALLERY</Col>
											<Col auto>TEAM</Col>
											<Col auto textPrimary>
												BETTER WORLD
											</Col>
										</Row>
									</Div>
									<Div wFull h={"75vh"} style={{ backgroundImage: `url(${IMAGES.gomzWar})`, backgroundSize: "cover" }} relative>
										<Div absolute clx={"animate-pulse"} bottom0 right0 textPrimary textXl px30 py20>
											Scroll for the Gomz Story
										</Div>
										<Scene duration={1000} triggerHook={0} pin={true}>
											{(progress) => (
												<Timeline totalProgress={progress} paused>
													<Timeline
														target={
															<Div
																wFull
																h={"75vh"}
																textXl
																style={{ backgroundImage: `url(${IMAGES.gomzSpaceship})`, backgroundSize: "cover" }}
																flex
																flexCol
																justifyBetween
															>
																<Div flex>
																	<Div maxW={600} textWhite py20 px20 textXl fontThin italic mx20 my20 bgBlack>
																		For the past decade, GOMZ have been in a planet-wide war, a war provoked by excessive indoctrination of
																		competition and capitalism. Such violence has made the planet too hostile, colorless, and systematic, rendering it
																		uninhabitable.{" "}
																	</Div>
																</Div>
																<Div flex justifyEnd>
																	<Div maxW={600} textWhite py20 px20 textXl fontThin italic mx20 my20 bgBlack>
																		8,888 of these bears have turned to space travel with an altruistic vision:”A Better World”
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1, x: 1000 }} to={{ opacity: 1, x: 0 }} />
													</Timeline>
													<Timeline
														target={
															<Div
																wFull
																absolute
																top0
																bgBlack
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzSpace})`,
																	backgroundSize: "cover",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex justifyEnd>
																	<Div maxW={600} py20 px20 textXl fontThin italic mx20 my20 bgBlack textWhite>
																		Instead of fighting these space wanderers, GOMZ decide to establish a better world with these wanderers —— a free,
																		creative, and amicable society for those who recognize a need for change.
																	</Div>
																</Div>
																<Div flex>
																	<Div maxW={600} py20 px20 textXl fontThin italic mx20 my20 bgBlack textWhite>
																		After years of deep hibernation in their space capsules, GOMZ have been awakened by other space wanderers who are
																		also in search of a habitable planet.
																	</Div>
																</Div>
															</Div>
														}
													>
														<Tween from={{ opacity: -1, x: 1000 }} to={{ opacity: 1, x: 0 }} />
													</Timeline>
												</Timeline>
											)}
										</Scene>
									</Div>
									<Div textWhite py20 relative>
										<Div>
											<Row gapX={20}>
												<Col auto maxW={800}>
													GOMZ: The first Klaytn-based collection to lead popularization of NFT through tangible and social values
												</Col>
												<Col />
											</Row>
										</Div>
										<Scene duration={1000} triggerHook={0} pin={true}>
											{(progress) => (
												<Timeline totalProgress={progress} paused>
													<Timeline
														target={
															<Div bgBlack maxW={800}>
																War and Venture
															</Div>
														}
													>
														<Tween from={{ opacity: -1, y: 100 }} to={{ opacity: 1, y: 0 }} />
														<Timeline
															target={
																<Div bgBlack maxW={800}>
																	Dilemma and Action
																</Div>
															}
														>
															<Tween from={{ opacity: -1, y: 100 }} to={{ opacity: 1, y: 0 }} />
														</Timeline>
													</Timeline>
												</Timeline>
											)}
										</Scene>
									</Div>
								</Div>
							</Div>
						</Scene>
					</Controller>
				</Div>
				<Div py50 bgBlack flex itemsCenter justifyCenter>
					<Div mxAuto maxW={1400} px40>
						<Row flex itemsCenter gapX={20}>
							<Col auto text3xl textWhite>
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
									<Div text2xl textWhite textCenter py10>
										Online
									</Div>
									<Div roundedXl textWhite textXl border1 borderWhite bgColor={"rgba(255,255,255,0.1)"} h450 flex itemsCenter>
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
									<Div text2xl textWhite textCenter py10>
										Offline
									</Div>
									<Div roundedXl textWhite textXl border1 borderWhite bgColor={"rgba(255,255,255,0.1)"} h450 flex itemsCenter>
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
					</Div>
				</Div>
				<Div bgBlack>
					<Div mxAuto maxW={1400} px20 py50 clx={"snap-start"}>
						<Row textWhite>
							<Col auto>
								<Div imgTag src={IMAGES.logos.main} w150 h150></Div>
							</Col>
							<Col py20>
								<Row py10>
									<Col auto>VALUES</Col>
									<Col auto>JOURNEY</Col>
									<Col auto>GALLERY</Col>
									<Col auto>TEAM</Col>
									<Col auto textPrimary>
										BETTER WORLD
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
