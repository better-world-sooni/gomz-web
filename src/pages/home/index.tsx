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
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Index: NextPage = () => {
	const team = [
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
		{
			name: "sehan",
		},
	];
	const faqs = [
		{
			question: "왜 8,888 인가요?",
			answer:
				"숫자 ‘8’은 부, 명예, ∞(무한대) 등 삶의 다양한 측면을 의미합니다. 곰즈는 다양한 의미 중에서 ∞ 로 인해 8,888을 선택했습니다. 변덕스러운 가격, 폰지 사기가 수두룩한 NFT 공간의 모든 외부 요인에도 불구하고 GOMZ는 무한한 혁신적인 커뮤니티를 보장합니다. 8,888 혁신가 GOMZ들과 함께 Web 3 Identity를 구축할 것입니다.",
		},
		{
			question: "왜 Klaytn 인가요?",
			answer: "GOMZ는 에너지 효율성, 짧은 지연 시간, 카카오톡 접근성, 안정적인 가스비 등의 이유로 Klaytn에서 출시하기로 결정했습니다.",
		},
		{
			question: "GOMZ 로드맵은 어떻게 확인하나요?",
			answer: "GOMZ Public Docs를 통해 로드맵을 확인하실 수 있습니다. 다가오는 GOMZ만의 온/오프라인 이벤트에 대해 자세히 알아보세요!",
		},
		{
			question: "어떻게 민팅할 수 있나요?",
			answer:
				"GOMZ의 민팅 과정은 4가지로 (코호트 A, 코호트 B, 코호트 C, 퍼블릭 민팅)으로 나뉘어있습니다. 코호트 A, B, C로 선정되려면 1) 코호트 회원의 초대를 받거나 2) GOMZ 화이트리스트 지원서를 제출하여 통과거나 3) 화이트리스트 이벤트에 선정되어야합니다. 화이트리스트에서 퍼블릭 민팅까지, 모든 판매는 해당 공식 웹사이트에서만 이루어집니다. 2차 판매의 경우 OpenSea를 통해 제공됩니다.",
		},
		{
			question: "민팅 날짜와 가격은 어떻게 되나요?",
			answer: "화이트리스트 사전 민팅: 날짜 - 진행 중 I 가격- 100 KLAY Public 민팅: 날짜 - 미정 I 가격 -  200 KLAY",
		},
		{
			question: "최대 몇 개의 GOMZ를 민팅할 수 있나요?",
			answer: "다양한 구성원으로 이루어진 커뮤니티를 보장하기 위해 지갑당 5개의 GOMZ로 제한합니다.",
		},
	];
	return (
		<>
			<BasicHead />
			<Div
				style={{
					background: "linear-gradient(180deg, #000000 0%, #02012D 51.56%, #02012D 76.56%, #000000 100%)",
				}}
			>
				<Div>
					<Controller>
						<Scene duration={1000} triggerHook={0} pin={true}>
							<Div relative>
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
										<Div
											wFull
											h={"75vh"}
											textXl
											style={{
												backgroundImage: `url(${IMAGES.gomzStory1Char})`,
												backgroundSize: "cover",
												backdropFilter: "brightness(50%)",
												backgroundPositionY: "center",
												backgroundPositionX: "center",
											}}
											flex
											flexCol
										>
											<Div flex justifyEnd>
												<Div maxW={600} textWhite py20 px20 mx80 my50 text2xl textRight>
													지나친 경쟁과 획일화로 인해 곰즈는 지난 수년간 전쟁 상태에 있었습니다. 이와 같은 갈등은 이미 행성을 너무 적대적이고 삭막하여
													거주하기 힘든 환경으로 만들어버렸습니다.
												</Div>
											</Div>
										</Div>
										<Scene duration={1000} triggerHook={0} pin={true}>
											{(progress) => (
												<Timeline totalProgress={progress} paused>
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
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
																justifyEnd
															>
																<Div flex justifyStart>
																	<Div>
																		<Div maxW={600} textWhite py20 px20 mx80 text2xl textLeft>
																			전쟁에 지친 8,888 마리의 GOMZ는 이타적인 비전을 가지고 우주여행을 떠났습니다:
																		</Div>
																		<Div maxW={600} textWhite py20 px20 mx80 mb50 text2xl textLeft>
																			---- 더 많은 자유와 다양성이 존재하는 세상, “BetterWorld”를 구축하다.
																		</Div>
																		<EmptyBlock h={100} />
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
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
																justifyStart
															>
																<Div flex justifyStart>
																	<Div maxW={600} textWhite py20 px20 mx80 my50 text2xl textLeft>
																		어느 날, 구축한 BetterWorld 캡슐에서 수면 중이던 GOMZ는 거주 가능한 행성을 찾고 있는 다른 우주 방랑자들에 의해
																		깨어났습니다.
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
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
															>
																<Div flex justifyEnd>
																	<Div maxW={600} textWhite py20 px20 mx80 my50 text2xl textRight>
																		GOMZ는 이들과 맞서 싸우는 대신 BetterWorld로 초대하고 환영하기로 합니다.
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
									<Div h={"8vh"} />
								</Div>
								<Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
									<Div mxAuto my52 maxW={500} pl20>
										<Div imgTag src={IMAGES.quote}></Div>
									</Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
									<Div imgTag src={IMAGES.circle} mxAuto h10 w10 my52></Div>
								</Div>
								<EmptyBlock h={100} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter>
									<Div textWhite text2xl textCenter maxW={750} px40 lineHeight={1.8}>
										GOMZ는 획일화된 교육, 이로 인한 지나친 경쟁, 다름을 틀림으로 보는 사회에 지쳤습니다. 따라서{" "}
										<Div textPrimary>더 많은 자유와 다양성이 보장되는 창의적인 문화</Div>를 전하고자 나타났습니다.
									</Div>
									<Div flex1>
										<Div imgTag src={IMAGES.gomzPlanet}></Div>
									</Div>
								</Div>
								<EmptyBlock h={150} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter>
									<Div flex1>
										<Div imgTag src={IMAGES.gomzInnovate}></Div>
									</Div>
									<Div maxW={750} px40>
										<Div textWhite text3xl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Innovators.</Div>
										</Div>
										<Div textLeft textWhite lineHeight={1.8} py10>
											현재 수만개의 PFP 컬렉션이 존재하지만, 대부분 트위터 프로필 사진으로만 쓰여지고 있습니다. 해당 프로젝트에서는 GOMZ만의 Web 3.0
											SNS인 BetterWorld 앱에서 홀더가 본인의 GOMZ에 인생을 부여하여 자신의 혁신가적인 “Web 3.0 부캐”를 직접 생성합니다. 부캐들의 SNS
											활동, 네트워킹, 오디오 세션 등 홀더들은 GOMZ로서 마음껏 활동하고 교류하며 서로 상생하고 발전할 수 있는 프로그램에 함께하고
											다양한 보상을 받습니다. GOMZ를 보유하는 누구든 혁신에 앞장설 수 있습니다.
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={150} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter>
									<Div maxW={750} px40>
										<Div textWhite text3xl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Rebels.</Div>
										</Div>
										<Div textLeft textWhite lineHeight={1.8} py10>
											현재 수만개의 PFP 컬렉션이 존재하지만, 대부분 트위터 프로필 사진으로만 쓰여지고 있습니다. 해당 프로젝트에서는 GOMZ만의 Web 3.0
											SNS인 BetterWorld 앱에서 홀더가 본인의 GOMZ에 인생을 부여하여 자신의 혁신가적인 “Web 3.0 부캐”를 직접 생성합니다. 부캐들의 SNS
											활동, 네트워킹, 오디오 세션 등 홀더들은 GOMZ로서 마음껏 활동하고 교류하며 서로 상생하고 발전할 수 있는 프로그램에 함께하고
											다양한 보상을 받습니다. GOMZ를 보유하는 누구든 혁신에 앞장설 수 있습니다.
										</Div>
									</Div>
									<Div flex1>
										<Div imgTag src={IMAGES.gomzRebel}></Div>
									</Div>
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter bungee textPrimary text3xl>
									Mileage
								</Div>
								<EmptyBlock h={50} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter style={{ justifyContent: "space-evenly" }}>
									<Div maxW={300}>
										<Div imgTag src={IMAGES.document}></Div>
										<Div textWhite text2xl textCenter>
											PFP 100% 소유 <br />및 상업적 이용 권리
										</Div>
									</Div>
									<Div maxW={300}>
										<Div imgTag src={IMAGES.gomzCards}></Div>
										<Div textWhite text2xl textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={50} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter justifyBetween>
									<Div maxW={300}>
										<Div imgTag src={IMAGES.appMain} mxAuto px50></Div>
										<Div textPrimary text2xl textCenter>
											BetterWorld Alpha
										</Div>
										<Div textWhite text2xl textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
									<Div maxW={300}>
										<Div imgTag src={IMAGES.gomzHeart}></Div>
										<Div textPrimary text2xl textCenter>
											GOMZ Partners
										</Div>
										<Div textWhite text2xl textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
									<Div maxW={300}>
										<Div imgTag src={IMAGES.appForum} mxAuto px50></Div>
										<Div textPrimary text2xl textCenter>
											GOMZ Governance
										</Div>
										<Div textWhite text2xl textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter bungee textPrimary text3xl>
									First 8{" "}
									<Div spanTag textWhite>
										GOMZ
									</Div>
								</Div>
								<Div textCenter bungee textWhite text2xl>
									Departing for{" "}
									<Div spanTag textPrimary>
										BetterWorld
									</Div>
								</Div>
								<Div style={{ whiteSpace: "nowrap", overflow: "auto" }} py40 clx={"scrollbar-off"}>
									{team.map((member, index) => {
										return (
											<Div key={index} w300 inlineBlock mx25>
												<Div imgTag src={`/images/team/${index + 1}.png`} w300 h300 roundedXl></Div>
											</Div>
										);
									})}
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter bungee textPrimary text3xl>
									FAQS
								</Div>
								<Div maxW={1200} px40 mxAuto>
									{faqs.map(({ question, answer }, index) => {
										return <Faq key={index} question={question} answer={answer} />;
									})}
								</Div>
								<EmptyBlock h={100} />
							</Div>
						</Scene>
					</Controller>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

function Faq({ question, answer }) {
	const [clicked, setClicked] = useState(false);
	return (
		<Div textWhite my20 onClick={() => setClicked((prev) => !prev)} cursorPointer>
			<Row fontSize36 py20 borderB1 borderWhite>
				<Col auto bungee>
					Q.{" "}
				</Col>
				<Col>{question}</Col>
				<Col auto>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
			</Row>
			{clicked && (
				<Row text2xl py20>
					<Col auto bungee fontSize36 textPrimary>
						A.{" "}
					</Col>
					<Col>{answer}</Col>
				</Row>
			)}
		</Div>
	);
}

export default Index;
