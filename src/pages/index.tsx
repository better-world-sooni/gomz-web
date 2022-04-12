import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import Footer from "src/components/common/Footer";

const Index: NextPage = () => {
	const handleClickValues = () => {
		href(urls.values.index);
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
										<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textSm fontBold>
											<Col>
												<Row>
													<Col auto onClick={handleClickValues} cursorPointer>
														Values
													</Col>
													<Col auto cursorPointer>
														Journey
													</Col>
													<Col auto cursorPointer>
														Gallery
													</Col>
													<Col auto cursorPointer>
														Team
													</Col>
													<Col auto cursorPointer>
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
										<Div maxW={1200} mxAuto px40 relative textSm fontBold>
											<Div>
												<Row gapX={20}>
													<Col auto maxW={800}>
														GOMZ: The first Klaytn-based collection to lead popularization of NFT through tangible and social values
													</Col>
													<Col />
													<Col clx={"animate-pulse"} textPrimary auto bgBlack roundedXl>
														Scroll to read our Story
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
				<Div py50 flex itemsCenter justifyCenter style={{ backdropFilter: "brightness(15%)" }}>
					<Div mxAuto maxW={1200} px40>
						<Div hrTag mb50 />
						<Row flex itemsCenter gapX={20} fontBold>
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
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

export default Index;
