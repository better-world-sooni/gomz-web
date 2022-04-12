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
											<Col auto>BETTER WORLD</Col>
										</Row>
									</Div>
									<Div wFull h={"75vh"} style={{ backgroundImage: `url(${IMAGES.gomzWar})`, backgroundSize: "cover" }} relative>
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
																bgWhite
																h={"75vh"}
																textXl
																style={{
																	backgroundImage: `url(${IMAGES.gomzSpace})`,
																	backgroundSize: "cover",
																	filter: "invert(100%)",
																}}
																flex
																flexCol
																justifyBetween
															>
																<Div flex>
																	<Div maxW={600} py20 px20 textXl fontThin italic mx20 my20 bgWhite>
																		After years of deep hibernation in their space capsules, GOMZ have been awakened by other space wanderers who are
																		also in search of a habitable planet.
																	</Div>
																</Div>
																<Div flex justifyEnd>
																	<Div maxW={600} py20 px20 textXl fontThin italic mx20 my20 bgWhite>
																		Instead of fighting these space wanderers, GOMZ decide to establish a better world with these wanderers —— a free,
																		creative, and amicable society for those who recognize a need for change.
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
										<Div maxW={800}>GOMZ: The first Klaytn-based collection to lead popularization of NFT through tangible and social values</Div>
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
																	Dilemma and Call to Action
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
								<Div absolute top0 wFull hFull>
									<Scene duration={1000} triggerHook={0} pin={true}>
										{(progress) => (
											<Timeline totalProgress={progress} paused>
												<Timeline target={<Div wFull hFull></Div>}>
													<Tween />
													<Timeline target={<Div absolute top0 wFull hFull style={{ backdropFilter: "invert(100%)" }}></Div>}>
														<Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
													</Timeline>
												</Timeline>
											</Timeline>
										)}
									</Scene>
								</Div>
							</Div>
						</Scene>
					</Controller>
				</Div>
			</Div>
		</>
	);
};

export default Index;
