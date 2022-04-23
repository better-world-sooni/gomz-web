import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Footer from "src/components/common/Footer";
import EmptyBlock from "src/components/EmptyBlock";
import MainTopBar from "src/components/common/MainTopBar";

const Index: NextPage = () => {
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
								<Div hScreen flex justifyBetween flexCol>
									<MainTopBar />
									<Div
										wFull
										style={{ backgroundImage: `url(${IMAGES.gomzStory1Bg})`, backgroundSize: "cover", backgroundPositionY: "center" }}
										relative
										h={"75vh"}
										italic
										my10
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
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter bgColor={"rgba(0,0,0,0.7)"}>
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
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter bgColor={"rgba(0,0,0,0.7)"}>
																		8,888 of these bears have turned to space travel with an altruistic vision: <br />
																		&quot;A Better World&quot;
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
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter bgColor={"rgba(0,0,0,0.7)"}>
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
																	<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter bgColor={"rgba(0,0,0,0.7)"}>
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
									<Div textWhite italic pb30>
										<Div maxW={1200} mxAuto px40 relative textSm fontSemibold>
											<Div>
												<Row gapX={20} flex itemsCenter>
													<Col auto maxW={800}>
														Gomz is the collection to lead popularization of NFT through tangible and social values
													</Col>
													<Col></Col>
													<Col auto>
														<Div roundedXl bgPrimary py10 px50 textBlack flex itemsCenter textXl fontBold>
															Mint
														</Div>
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
				<Div py100 flex itemsCenter justifyCenter style={{ backdropFilter: "brightness(15%)" }}>
					<Div mxAuto maxW={1200} px40 borderT1 borderB1 borderGray700 py100>
						<Row flex itemsCenter gapX={20} fontBold italic>
							<Col auto textXl textWhite>
								Gomz are builders, investors, and settlers of <br />
								<Div spanTag textPrimary>
									BetterWorld{" "}
								</Div>
							</Col>
							<Col textWhite></Col>
						</Row>
						<EmptyBlock h={20} />
						<Div>
							<Row textWhite flex itemsCenter>
								<Col py10>
									<Div imgTag src={IMAGES.logos.betterWorldPurpleBox} mxAuto roundedXl w={"40%"}></Div>
								</Col>
								<Col>
									<Div italic>
										<Div fontBold textLg textPrimary>
											온라인
										</Div>
										<Div py10 textBase>
											BetterWorld 앱을 통해 NFT 공간을 선도하는 다양한 홀더들이 활발히 교류할 수 있습니다. 이 곳에 홀더들은 본인의 PFP가 자신의
											아바타이자 정체성이되어 표현하고, 활동하고, 소통하며 PFP 생태계 활성화에 앞장섭니다.
										</Div>
										<Div pt10 fontBold textLg textPrimary>
											오프라인
										</Div>
										<Div py10 textBase>
											우리가 일상 속에서 흔히 만나는 것들에 GOMZ가 함께하는 것으로 더 나은 세상은 시작됩니다. 자주가는 음식점, 카페, 바에서 GOMZ
											홀더로서 다양한 혜택을 받으세요. 이는 모두가 함께 상생할 수 있는 구조의 협약을 기반으로 이루어집니다.뿐만 아니라, NFT 홀더들이
											교류하고 네트워킹 할 수 있는 다양한 행사들도 준비되어있습니다.
										</Div>
									</Div>
								</Col>
							</Row>
						</Div>
					</Div>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }} pb100>
					<Row mxAuto maxW={1200} px40 fontBold>
						<Col auto textXl textWhite italic>
							Gomz uphold{" "}
							<Div spanTag textPrimary>
								3 Core Values
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<Row mxAuto maxW={1200} px40 flex itemsCenter gapX={30} borderB1 borderGray700 pt50 pb100 italic>
						<Col h700 flex flexCol justifyAround>
							<Div maxW={300} mxAuto>
								<Div imgTag src={IMAGES.gomzInnovate}></Div>
							</Div>
							<Div>
								<Div textXl fontBold>
									<Div spanTag textPrimary>
										혁신
									</Div>
									<Div spanTag textWhite>
										하고,
									</Div>
								</Div>
								<Div textWhite>
									GOMZ는 NFT 공간을 통합하는 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을 준비합니다. 웹과 앱 내에서 다양한
									홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는 홀더들에게 지속적으로 만질 수 있는
									가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
								</Div>
							</Div>
						</Col>
						<Col h700 flex flexCol justifyAround>
							<Div>
								<Div textXl fontBold>
									<Div spanTag textPrimary>
										반항
									</Div>
									<Div spanTag textWhite>
										하며,
									</Div>
								</Div>
								<Div textWhite>
									GOMZ는 묻습니다. “여러분의 진정한 꿈은 무엇인가요? 무엇을 할 때 가장 행복한가요?” GOMZ는 보편적인 사회구조에 도전하고 이들만의
									문화를 개척하기 위해 나타났습니다. 이들은 자유가 더 넓은 차원의 지식과 혁신을 만들어낸다고 믿습니다. 그리고 자유와 책임의 적정선을
									잘 인지하고 있습니다. 따라서 외칩니다. “멋있게 일하고, 더 멋있게 놀자!” GOMZ는 모두에게 더 많은 꿈을, 그리고 더 자유로운 일상을
									제공하고자 나타났습니다.
								</Div>
							</Div>
							<Div style={{ flex: 1 }}></Div>
							<Div maxW={300} mxAuto>
								<Div imgTag src={IMAGES.gomzRebel}></Div>
							</Div>
						</Col>
						<Col h700 flex flexCol justifyAround>
							<Div maxW={500} mxAuto>
								<Div imgTag src={IMAGES.gomzTogether}></Div>
							</Div>
							<Div>
								<Div textXl fontBold>
									<Div spanTag textPrimary>
										함께
									</Div>
									<Div spanTag textWhite>
										하다.
									</Div>
								</Div>
								<Div textWhite>
									GOMZ는 Klaytn 시장 최초로 NFT 공간을 통합하는 모바일 기반 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을
									준비합니다. 앱 내에서 다양한 홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는 홀더들에게
									지속적으로 만질 수 있는 가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
								</Div>
							</Div>
						</Col>
					</Row>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Row mxAuto maxW={1200} px40 fontBold>
						<Col auto textXl textWhite italic>
							Team: Simply the{" "}
							<Div spanTag textPrimary>
								First 8 Gomz
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<Row mxAuto maxW={1200} px40 py50>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.mj}></Div>
							</Div>
							<Div textWhite py20>
								MJ
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.eric}></Div>
							</Div>
							<Div textWhite py20>
								Eric
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.ian}></Div>
							</Div>
							<Div textWhite py20>
								Ian
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.serena}></Div>
							</Div>
							<Div textWhite py20>
								Serena
							</Div>
						</Col>
					</Row>
					<Row mxAuto maxW={1200} px40 borderB1 borderGray700 pb100>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.jay}></Div>
							</Div>
							<Div textWhite py20>
								Jay
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.jieun}></Div>
							</Div>
							<Div textWhite py20>
								Jieun
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.seungan}></Div>
							</Div>
							<Div textWhite py20>
								Seungan
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.seonghyun}></Div>
							</Div>
							<Div textWhite py20>
								SeongHyun
							</Div>
						</Col>
					</Row>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

export default Index;
