import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";

const Index: NextPage = () => {
	const handleClickGomz = () => {
		href(urls.index);
	};
	return (
		<>
			<BasicHead />
			<Div
				style={{
					backgroundImage: `url(${IMAGES.cityBgLong})`,
					backgroundSize: "contain",
					backgroundPositionX: "center",
					backgroundPositionY: "center",
				}}
			>
				<Div>
					<Controller>
						<Scene duration={1000} triggerHook={0} pin={true}>
							<Div relative style={{ backdropFilter: "brightness(15%)" }}>
								<Div hScreen flex justifyCenter flexCol>
									<Div>
										<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textSm fontSemibold>
											<Col auto onClick={handleClickGomz} cursorPointer>
												<Div maxW={200} clx={"hover:animate-pulse"}>
													<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
												</Div>
											</Col>
											<Col auto textLg>
												Story
											</Col>
											<Col></Col>
										</Row>
									</Div>
									<Div
										wFull
										h={"75vh"}
										style={{ backgroundImage: `url(${IMAGES.gomzStory1Bg})`, backgroundSize: "cover", backgroundPositionY: "center" }}
										relative
										my20
										textSm
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
																justifyEnd
															>
																<Div flex justifyCenter>
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter>
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
																justifyEnd
															>
																<Div flex justifyCenter>
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter>
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
																justifyEnd
															>
																<Div flex justifyCenter>
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter>
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
																justifyEnd
															>
																<Div flex justifyCenter>
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter>
																		Instead of kicking these space wanderers out, GOMZ decide to establish a better world —— a free, creative, and
																		amicable society for those who recognize a need for change.
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
										<Div maxW={1200} mxAuto px40 relative textSm fontSemibold>
											<Div>
												<Row gapX={20}>
													<Col auto maxW={800}></Col>
													<Col />
													<Col textPrimary auto bgBlack roundedXl clx={"animate-bounce"}>
														Scroll to read story
													</Col>
												</Row>
											</Div>
										</Div>
									</Div>
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
