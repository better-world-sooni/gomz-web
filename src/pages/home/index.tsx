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
import useIsTablet from "src/hooks/useIsTablet";
import { wording } from "src/wording/wording";
import { useRouter } from "next/router";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	const team = [
		{
			name: wording.team.index.members.jieun.name[locale],
			position: wording.team.index.members.jieun.position[locale],
			desc: wording.team.index.members.jieun.desc[locale],
			specialty: wording.team.index.members.jieun.specialty[locale],
			countries: wording.team.index.members.jieun.countries,
		},
		{
			name: wording.team.index.members.jade.name[locale],
			position: wording.team.index.members.jade.position[locale],
			desc: wording.team.index.members.jade.desc[locale],
			specialty: wording.team.index.members.jade.specialty[locale],
			countries: wording.team.index.members.jade.countries,
		},
		{
			name: wording.team.index.members.minjun.name[locale],
			position: wording.team.index.members.minjun.position[locale],
			desc: wording.team.index.members.minjun.desc[locale],
			specialty: wording.team.index.members.minjun.specialty[locale],
			countries: wording.team.index.members.minjun.countries,
		},
		{
			name: wording.team.index.members.yeajean.name[locale],
			position: wording.team.index.members.yeajean.position[locale],
			desc: wording.team.index.members.yeajean.desc[locale],
			specialty: wording.team.index.members.yeajean.specialty[locale],
			countries: wording.team.index.members.yeajean.countries,
		},
		{
			name: wording.team.index.members.eric.name[locale],
			position: wording.team.index.members.eric.position[locale],
			desc: wording.team.index.members.eric.desc[locale],
			specialty: wording.team.index.members.eric.specialty[locale],
			countries: wording.team.index.members.eric.countries,
		},
		{
			name: wording.team.index.members.ian.name[locale],
			position: wording.team.index.members.ian.position[locale],
			desc: wording.team.index.members.ian.desc[locale],
			specialty: wording.team.index.members.ian.specialty[locale],
			countries: wording.team.index.members.ian.countries,
		},
		{
			name: wording.team.index.members.jaehwan.name[locale],
			position: wording.team.index.members.jaehwan.position[locale],
			desc: wording.team.index.members.jaehwan.desc[locale],
			specialty: wording.team.index.members.jaehwan.specialty[locale],
			countries: wording.team.index.members.jaehwan.countries,
		},
		{
			name: wording.team.index.members.seungan.name[locale],
			position: wording.team.index.members.seungan.position[locale],
			desc: wording.team.index.members.seungan.desc[locale],
			specialty: wording.team.index.members.seungan.specialty[locale],
			countries: wording.team.index.members.seungan.countries,
		},
	];
	const faqs = [
		{
			question: "왜 8,888 인가요?",
			answer:
				"숫자 ‘8’은 부, 명예, ∞(무한대) 등 삶의 다양한 측면을 의미합니다. 위비는 다양한 의미 중에서 ∞ 로 인해 8,888을 선택했습니다. 변덕스러운 가격, 폰지 사기가 수두룩한 NFT 공간의 모든 외부 요인에도 불구하고 위비는 무한하고 혁신적인 커뮤니티를 보장합니다.",
		},
		{
			question: "왜 Klaytn 인가요?",
			answer: "에너지 효율성, 짧은 지연 시간, 카카오톡 접근성, 안정적인 가스비 등의 이유로 Klaytn에서 출시하기로 결정했습니다.",
		},
		{
			question: "어떻게 민팅할 수 있나요?",
			answer:
				"위비의 민팅 과정은 4가지로 (코호트 A, 코호트 B, 코호트 C, 퍼블릭 민팅)으로 나뉘어있습니다. 코호트 A, B, C로 선정되려면 1) 코호트 회원의 초대를 받거나 2) 각 코호트 모집 기간 동안 위비 지원서를 제출하여 통과거나 3) 화이트리스트 이벤트에 선정되어야합니다. 화이트리스트에서 퍼블릭 민팅까지, 모든 판매는 해당 공식 웹사이트에서만 이루어집니다. 2차 판매의 경우 OpenSea를 통해 제공됩니다.",
		},
		{
			question: "민팅 가격은 어떻게 되나요?",
			answer: "화이트리스트 사전 민팅: 150 KLAY l Public 민팅: 200 KLAY",
		},
		{
			question: "최대 몇 개의 위비를 민팅할 수 있나요?",
			answer: "다양한 구성원으로 이루어진 커뮤니티를 보장하기 위해 지갑당 5개의 위비로 제한합니다.",
		},
	];
	if (isTablet) {
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
							<Scene duration={1500} triggerHook={0} pin={true}>
								<Div relative>
									<Div flex justifyBetween flexCol>
										<MainTopBar />
										<Div
											wFull
											style={{backgroundSize: "cover", backgroundPositionY: "center" }}
											relative
											h={"200px"}
											italic
											my10
											textSm
										>
											<Div
												wFull
												h={"200px"}
												textXl
												style={{
													backgroundImage: `url(${IMAGES.gomzStory1})`,
													backgroundSize: "cover",
													backdropFilter: "brightness(50%)",
													backgroundPositionY: "center",
													backgroundPositionX: "center",
												}}
											>
												<EmptyBlock h={200} />
												<Div flex itemsCenter my10 px20 textWhite textBase textCenter h100 bgBlack>
													지나친 경쟁과 획일화로 인해 곰즈는 지난 수년간 전쟁 상태에 있었습니다. 이와 같은 갈등은 이미 행성을 너무 적대적이고 삭막하여
													거주하기 힘든 환경으로 만들어버렸습니다.
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
																	h={"200px"}
																	textXl
																	style={{
																		backgroundImage: `url(${IMAGES.gomzStory2})`,
																		backgroundSize: "cover",
																		backgroundPositionY: "center",
																		backgroundPositionX: "center",
																	}}
																>
																	<EmptyBlock h={200} />
																	<Div flex itemsCenter my10 px20 textWhite textBase textCenter h100 bgBlack>
																		<Div>
																			<Div>전쟁에 지친 8,888 마리의 GOMZ는 이타적인 비전을 가지고 우주여행을 떠났습니다:</Div>
																			<Div>---- 더 많은 자유와 다양성이 존재하는 세상, “BetterWorld”를 구축하다.</Div>
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
																	h={"200px"}
																	textXl
																	style={{
																		backgroundImage: `url(${IMAGES.gomzStory3})`,
																		backgroundSize: "cover",
																		backgroundPositionY: "center",
																		backgroundPositionX: "center",
																	}}
																>
																	<EmptyBlock h={200} />
																	<Div flex itemsCenter my10 px20 textWhite textBase textCenter h100 bgBlack>
																		어느 날, 구축한 BetterWorld 캡슐에서 수면 중이던 GOMZ는 거주 가능한 행성을 찾고 있는 다른 우주 방랑자들에 의해
																		깨어났습니다
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
																	h={"200px"}
																	textXl
																	style={{
																		backgroundImage: `url(${IMAGES.gomzStory4})`,
																		backgroundSize: "cover",
																		backgroundPositionY: "center",
																		backgroundPositionX: "center",
																	}}
																>
																	<EmptyBlock h={200} />
																	<Div flex itemsCenter my10 px20 textWhite textBase textCenter h100 bgBlack>
																		GOMZ는 이들과 맞서 싸우는 대신 BetterWorld로 초대하고 환영하기로 합니다.
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
									</Div>
									<EmptyBlock h={200} />
									<Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
										<Div mxAuto my52 maxW={400} px20>
											<Div imgTag src={IMAGES.quote}></Div>
										</Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
										<Div imgTag src={IMAGES.circle} mxAuto h5 w5 my10></Div>
									</Div>
									<EmptyBlock h={100} />
									<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter>
										<Div textWhite textBase textCenter maxW={750} px40 lineHeight={1.8}>
											GOMZ는 획일화된 교육, 이로 인한 지나친 경쟁, 다름을 틀림으로 보는 사회에 지쳤습니다. 따라서{" "}
											<Div textPrimary>더 많은 자유와 다양성이 보장되는 창의적인 문화</Div>를 전하고자 나타났습니다.
										</Div>
									</Div>
									<EmptyBlock h={150} />
									<Div imgTag src={IMAGES.gomzInnovate} px40></Div>
									<Div maxW={750} px40>
										<Div textWhite textXl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Innovators.</Div>
										</Div>
										<Div textSm textLeft textWhite lineHeight={1.8} py10>
											현재 수만개의 PFP 컬렉션이 존재하지만, 대부분 트위터 프로필 사진으로만 쓰여지고 있습니다. 해당 프로젝트에서는 GOMZ만의 Web 3.0
											SNS인 BetterWorld 앱에서 홀더가 본인의 GOMZ에 인생을 부여하여 자신의 혁신가적인 “Web 3.0 부캐”를 직접 생성합니다. 부캐들의 SNS
											활동, 네트워킹, 오디오 세션 등 홀더들은 GOMZ로서 마음껏 활동하고 교류하며 서로 상생하고 발전할 수 있는 프로그램에 함께하고
											다양한 보상을 받습니다. GOMZ를 보유하는 누구든 혁신에 앞장설 수 있습니다.
										</Div>
									</Div>
									<EmptyBlock h={150} />
									<Div imgTag src={IMAGES.gomzRebel} px40></Div>
									<Div maxW={750} px40>
										<Div textWhite textXl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Rebels.</Div>
										</Div>
										<Div textSm textLeft textWhite lineHeight={1.8} py10>
											GOMZ는 Web 3.0 의 잠재력을 높게 사고있습니다. 하지만, Web 3의 잠재력은 더 많은 사람들이 일상생활에서 이를 이용할 수 있을 때
											극대화될 수 있습니다. 따라서 GOMZ는 사회에 더 큰 영향을 미치는 실질적이고 사회적인 가치를 제공함으로써 더 많은 사람들과
											함께합니다. 그 첫 번째 파트너는 코로나 여파로부터 회복하고 있는 소상공인으로, 다양한 지역의 소상공인과 공생 관계를 맺어 돕고,
											음식점, 카페 할인 등 홀더들의 오프라인 혜택 또한 극대화합니다. 머지않아 GOMZ는 곧 당신 일상의 일부가 될 것입니다.
										</Div>
									</Div>
									<EmptyBlock h={150} />
									<Div imgTag src={IMAGES.gomzStore} px40></Div>
									<Div maxW={750} px40>
										<Div textWhite textXl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Amigos.</Div>
										</Div>
										<Div textSm textLeft textWhite lineHeight={1.8} py10>
											현재 수만개의 PFP 컬렉션이 존재하지만, 대부분 트위터 프로필 사진으로만 쓰여지고 있습니다. 해당 프로젝트에서는 GOMZ만의 Web 3.0
											SNS인 BetterWorld 앱에서 홀더가 본인의 GOMZ에 인생을 부여하여 자신의 혁신가적인 “Web 3.0 부캐”를 직접 생성합니다. 부캐들의 SNS
											활동, 네트워킹, 오디오 세션 등 홀더들은 GOMZ로서 마음껏 활동하고 교류하며 서로 상생하고 발전할 수 있는 프로그램에 함께하고
											다양한 보상을 받습니다. GOMZ를 보유하는 누구든 혁신에 앞장설 수 있습니다.
										</Div>
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter bungee textPrimary textXl>
										Mileage
									</Div>
									<EmptyBlock h={50} />
									<Div maxW={300} mxAuto>
										<Div imgTag src={IMAGES.document} mxAuto maxW={150}></Div>
										<Div textWhite textBase textCenter>
											PFP 100% 소유 <br />및 상업적 이용 권리
										</Div>
									</Div>
									<EmptyBlock h={50} />
									<Div maxW={300} mxAuto>
										<Div imgTag src={IMAGES.gomzCards} mxAuto maxW={150}></Div>
										<Div textWhite textBase textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
									<EmptyBlock h={50} />
									<Div maxW={300} mxAuto>
										<Div imgTag src={IMAGES.gomzHeart} mxAuto maxW={150}></Div>
										<Div textWhite textBase textCenter>
											일상 속에서 만나는 <br /> 오프라인 혜택
										</Div>
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter bungee textPrimary textXl>
										First 8{" "}
										<Div spanTag textWhite>
											GOMZ
										</Div>
									</Div>
									<Div textCenter bungee textWhite textBase>
										Departing for{" "}
										<Div spanTag textPrimary>
											BetterWorld
										</Div>
									</Div>
									<Div style={{ whiteSpace: "nowrap", overflow: "auto" }} py40 clx={"scrollbar-off"}>
										{team.map((member, index) => {
											return (
												<Div key={index} w100 inlineBlock mx20>
													<Div imgTag src={`/images/team/${index + 1}.png`} w100 h100 roundedXl></Div>
													<EmptyBlock h={30} />
													<Div textWhite textCenter textXl fontBold>
														{member.name}
													</Div>
													<EmptyBlock h={10} />
													<Div textGray600 textCenter textLg fontBold>
														{member.position}
													</Div>
												</Div>
											);
										})}
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter bungee textPrimary textXl>
										FAQS
									</Div>
									<Div maxW={1200} px40 mxAuto>
										{faqs.map(({ question, answer }, index) => {
											return <Faq key={index} question={question} answer={answer} isTablet={true} />;
										})}
									</Div>
								</Div>
							</Scene>
						</Controller>
						<Footer />
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
					background: "linear-gradient(180deg, #37315A 0%, #3E4071 21.35%, #3E4071 69.27%, #37315A 100%)",
				}}
			>
				<Div>
					<Controller>
						<Scene duration={1000} triggerHook={0} pin={true}>
							<Div relative>
								<Div hScreen>
									<MainTopBar />
									<Div
										wFull
										style={{ backgroundSize: "cover", backgroundPositionY: "center" }}
										relative
										hFull
										italic
										textSm
									>
										<Div
											wFull
											hFull
											textXl
											style={{
												backgroundImage: `url(${IMAGES.gomzStory1})`,
												backgroundSize: "cover",
												backdropFilter: "brightness(50%)",
												backgroundPositionY: "center",
												backgroundPositionX: "center",
											}}
											flex
											flexCol
										>
											<Div flex justifyEnd>
												<Div maxW={500} textWhite mx80 my160 text2xl textRight fontMedium
												style={{textShadow: "0px 4px 0px rgba(0, 0, 0, 0.81)"}}>
													지나친 경쟁과 획일화로 인해 위비는 지난 수년간 전쟁 상태에 있었습니다. 이와 같은 갈등은 이미 행성을 너무 적대적이고 삭막하여
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
																hFull
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
																	<Div style={{textShadow: "0px 4px 0px rgba(0, 0, 0, 0.81)"}}>
																		<Div maxW={500} textWhite my30 mx80 text2xl textLeft fontMedium>
																			전쟁에 지친 8,888 마리의 위비는<br></br>이타적인 비전을 가지고 우주여행을 떠났습니다:
																		</Div>
																		<Div maxW={500} textWhite mb70 mx80 text2xl textLef fontMedium>
																			더 많은 자유와 다양성이 존재하는 세상, “BetterWorld”를 구축하다.
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
																hFull
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
																	<Div maxW={500} textWhite mx80 my160 text2xl textLeft fontMedium
																	style={{textShadow: "0px 4px 0px rgba(0, 0, 0, 0.81)"}}>
																		어느 날, 구축한 BetterWorld 캡슐에서 수면 중이던 위비는 거주 가능한 행성을 찾고 있는 다른 우주 방랑자들에 의해
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
																hFull
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
																	<Div maxW={500} textWhite mx80 my180 text2xl textRight fontMedium
																	style={{textShadow: "0px 4px 0px rgba(0, 0, 0, 0.81)"}}>
																		위비는 이들과 맞서 싸우는 대신<br></br>BetterWorld로 초대하고 환영하기로 합니다.
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
									<Div h={"8vh"}></Div>
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
								<EmptyBlock h={150} />
								<Div maxW={1200} px40 flex flexRow mxAuto itemsCenter>
									<Div flex1>
										<Div imgTag src={IMAGES.gomzStore}></Div>
									</Div>
									<Div maxW={750} px40>
										<Div textWhite text3xl textLeft lineHeight={1.2} bungee>
											We Are
											<Div textPrimary>Amigos.</Div>
										</Div>
										<Div textLeft textWhite lineHeight={1.8} py10>
											GOMZ는 Web 3.0 의 잠재력을 높게 사고있습니다. 하지만, Web 3의 잠재력은 더 많은 사람들이 일상생활에서 이를 이용할 수 있을 때
											극대화될 수 있습니다. 따라서 GOMZ는 사회에 더 큰 영향을 미치는 실질적이고 사회적인 가치를 제공함으로써 더 많은 사람들과
											함께합니다. 그 첫 번째 파트너는 코로나 여파로부터 회복하고 있는 소상공인으로, 다양한 지역의 소상공인과 공생 관계를 맺어 돕고,
											음식점, 카페 할인 등 홀더들의 오프라인 혜택 또한 극대화합니다. 머지않아 GOMZ는 곧 당신 일상의 일부가 될 것입니다.
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={150} />
								<Div textCenter bungee textSecondary text3xl>
									Mileage
								</Div>
								<EmptyBlock h={50} />
								<Div maxW={1200} flex flexRow mxAuto itemsCenter justifyCenter>
									<Div flex1 flex flexCol itemsCenter>
										<Div imgTag src={IMAGES.document} maxW={150}></Div>
									</Div>
									<Div flex1 flex flexCol itemsCenter>
										<Div imgTag src={IMAGES.gomzHeart} maxW={150}></Div>
									</Div>
									<Div flex1 flex flexCol itemsCenter>
										<Div imgTag src={IMAGES.gomzCards} maxW={250}></Div>
									</Div>
								</Div>
								<Div maxW={1200} flex flexRow mxAuto itemsCenter justifyCenter>
									<Div flex1 flex flexCol itemsCenter>
										<Div textWhite text2xl textCenter>
											PFP 100% 소유 <br />및 상업적 이용 권리
										</Div>
									</Div>
									<Div flex1 flex flexCol itemsCenter>
										<Div textWhite text2xl textCenter>
											일상 속에서 만나는 <br /> 오프라인 혜택
										</Div>
									</Div>
									<Div flex1 flex flexCol itemsCenter>
										<Div textWhite text2xl textCenter>
											공정성 확보를 위한 <br /> 8,888 GOMZ 랜덤화
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter bungee textSecondary text3xl>
									First 8{" "}
									<Div spanTag textWhite>
										WeBe
									</Div>
								</Div>
								<Div textCenter bungee textSecondary2 text2xl>
									Departing for{" "}
									<Div spanTag textSecondary>
										BetterWorld
									</Div>
								</Div>
								<Div style={{ whiteSpace: "nowrap", overflow: "auto" }} py40 clx={"scrollbar-off"}>
									{team.map((member, index) => {
										return (
											<Div key={index} w200 inlineBlock mx25>
												<Div imgTag src={`/images/team/${index + 1}.png`} w200 h200 roundedXl></Div>
												<EmptyBlock h={30} />
												<Div textWhite textCenter textXl fontBold>
													{member.name}
												</Div>
												<EmptyBlock h={10} />
												<Div textGray600 textCenter textLg fontBold>
													{member.position}
												</Div>
											</Div>
										);
									})}
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter bungee textSecondary text3xl
								style={{textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)"}}>
									FAQS
								</Div>
								<Div maxW={1000} px40 mxAuto>
									{faqs.map(({ question, answer }, index) => {
										return <Faq key={index} question={question} answer={answer} isTablet={false} />;
									})}
								</Div>
								<EmptyBlock h={70} />
							</Div>
						</Scene>
					</Controller>
					<Footer  />
				</Div>
			</Div>
		</>
	);
};

function Faq({ question, answer, isTablet }) {
	const [clicked, setClicked] = useState(false);
	if (isTablet) {
		return (
			<Div textWhite my20 onClick={() => setClicked((prev) => !prev)} cursorPointer>
				<Row textBase py20 borderB1 borderWhite>
					<Col auto bungee>
						Q.{" "}
					</Col>
					<Col>
						<Div>{question}</Div>
					</Col>
					<Col auto>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
				</Row>
				{clicked && (
					<Row py20>
						<Col auto bungee textPrimary textBase>
							A.{" "}
						</Col>
						<Col textSm>{answer}</Col>
					</Row>
				)}
			</Div>
		);
	}
	return (
		<Div textWhite my10 onClick={() => setClicked((prev) => !prev)} cursorPointer>
			<Row textXl py20 borderB1 borderWhite itemsEnd fontThin>
				<Col auto bungee fontSize36 ml40 style={{textShadow:"1px 4px 0px rgba(0, 0, 0, 0.25)"}}>
					Q.{" "}
				</Col>
				<Col>{question}</Col>
				<Col auto mr40>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
			</Row>
			{clicked && (
				<Row textXl py20 fontThin>
					<Col auto bungee textSecondary fontSize36 ml40 style={{textShadow:"1px 4px 0px rgba(0, 0, 0, 0.25)"}}>
						A.{" "}
					</Col>
					<Col textLg maxW={775} flex itemsEnd>{answer}</Col>
				</Row>
			)}
		</Div>
	);
}

export default Index;
