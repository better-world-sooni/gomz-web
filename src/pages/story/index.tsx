import type { NextPage } from "next";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Footer from "src/components/common/Footer";
import EmptyBlock from "src/components/EmptyBlock";
import MainTopBar from "src/components/common/MainTopBar";
import { useState } from "react";
import useIsTablet from "src/hooks/useIsTablet";
import { wording } from "src/wording/wording";
import { useRouter } from "next/router";
import { Faq } from "src/components/Faq";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const { locale } = useRouter();
	const team = [
		{
			name: wording.team.index.members.jieun.name[locale],
			imageUri: IMAGES.team.jieun,
			position: wording.team.index.members.jieun.position[locale],
			desc: wording.team.index.members.jieun.desc[locale],
			specialty: wording.team.index.members.jieun.specialty[locale],
			countries: wording.team.index.members.jieun.countries,
		},
		{
			name: wording.team.index.members.jade.name[locale],
			imageUri: IMAGES.team.seonghyun,
			position: wording.team.index.members.jade.position[locale],
			desc: wording.team.index.members.jade.desc[locale],
			specialty: wording.team.index.members.jade.specialty[locale],
			countries: wording.team.index.members.jade.countries,
		},
		{
			name: wording.team.index.members.minjun.name[locale],
			imageUri: IMAGES.team.mj,
			position: wording.team.index.members.minjun.position[locale],
			desc: wording.team.index.members.minjun.desc[locale],
			specialty: wording.team.index.members.minjun.specialty[locale],
			countries: wording.team.index.members.minjun.countries,
		},
		{
			name: wording.team.index.members.yeajean.name[locale],
			imageUri: IMAGES.team.serena,
			position: wording.team.index.members.yeajean.position[locale],
			desc: wording.team.index.members.yeajean.desc[locale],
			specialty: wording.team.index.members.yeajean.specialty[locale],
			countries: wording.team.index.members.yeajean.countries,
		},
		{
			name: wording.team.index.members.eric.name[locale],
			imageUri: IMAGES.team.eric,
			position: wording.team.index.members.eric.position[locale],
			desc: wording.team.index.members.eric.desc[locale],
			specialty: wording.team.index.members.eric.specialty[locale],
			countries: wording.team.index.members.eric.countries,
		},
		{
			name: wording.team.index.members.ian.name[locale],
			imageUri: IMAGES.team.ian,
			position: wording.team.index.members.ian.position[locale],
			desc: wording.team.index.members.ian.desc[locale],
			specialty: wording.team.index.members.ian.specialty[locale],
			countries: wording.team.index.members.ian.countries,
		},
		{
			name: wording.team.index.members.jaehwan.name[locale],
			imageUri: IMAGES.team.jay,
			position: wording.team.index.members.jaehwan.position[locale],
			desc: wording.team.index.members.jaehwan.desc[locale],
			specialty: wording.team.index.members.jaehwan.specialty[locale],
			countries: wording.team.index.members.jaehwan.countries,
		},
		{
			name: wording.team.index.members.seungan.name[locale],
			imageUri: IMAGES.team.seungan,
			position: wording.team.index.members.seungan.position[locale],
			desc: wording.team.index.members.seungan.desc[locale],
			specialty: wording.team.index.members.seungan.specialty[locale],
			countries: wording.team.index.members.seungan.countries,
		},
	];
	const faqs = [
		{
			question: "Why 8,888?",
			answer:
				"Eight signifies various aspects of life. Wealth, prosperity, ∞ (infinity), and many more. Out of all the different meanings, WeBe has chosen 8,888 due to ∞ . Despite all the external factors in the NFT space, such as volatile floor prices, rug pulls, and ponzi-like schemes, WeBe ensures an innovative community that will be infinite. We are here to create a culture of its own with 8,888 WeBe. ",
		},
		{
			question: "Why Klaytn?",
			answer:
				"WeBe decided to launch on Klaytn for the following reasons— energy efficient, low latency, easy access to Kakao Talk, and stable gas fee.",
		},
		{
			question: "How to mint?",
			answer:
				"WeBe's minting process is divided into 4 categories (Cohort A, Cohort B, Cohort C, and Public Minting). To be selected for Cohort A, B, or C, you must either 1) be invited by a cohort member, 2) submit a WeBe whitelist application, or 3) be selected for a whitelisted event. From whitelist to public minting, all sales are performed on this website. For secondary sales, it will be available via OpenSea.",
		},
		{
			question: "Mint date & price?",
			answer: "Whitelist Minting: Date- TBD I Price- 100 KLAY Public Minting: Date- TBD I Price: 200 KLAY",
		},
		{
			question: "How many WeBe can I mint?",
			answer: "To ensure a wide range of community, we are limiting holders to five WeBe per wallet",
		},
	];
	if (isTablet) {
		return (
			<>
				<Div
					style={{
						background: "linear-gradient(180deg, #37315A 0%, #413F70 21.35%, #413F70 69.27%, #37315A 100%)",
					}}
				>
					<Div>
						<Controller>
							<Scene duration={1000} triggerHook={0} pin={true}>
								<Div relative>
									<MainTopBar />
									<Div style={{ backgroundSize: "cover", backgroundPositionY: "center" }} relative italic textSm fontSemibold>
										<Div
											style={{
												backgroundImage: `url(${IMAGES.webeStory1})`,
												backgroundSize: "cover",
												backgroundPositionY: "center",
												backgroundPositionX: "center",
											}}
											flex
											flexCol
										>
											<Div flex justifyEnd>
												<Div maxW={150} textWhite mx24 my90 fontSize8 textRight balooR style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.81)" }}>
													{wording.story.index.story1[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory2})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flexCol
																justifyEnd
															>
																<Div flex justifyStart>
																	<Div style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.81)" }}>
																		<Div maxW={150} textWhite mx24 my100 fontSize8 textLeft balooR>
																			{wording.story.index.story2[locale]}
																		</Div>
																		<Div maxW={150} textWhite mx24 my-90 fontSize8 textLeft balooR>
																			{wording.story.index.story22[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory3})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
																justifyStart
															>
																<Div flex justifyStart>
																	<Div
																		maxW={150}
																		textWhite
																		mx24
																		my90
																		fontSize8
																		textLeft
																		balooR
																		style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.81)" }}
																	>
																		{wording.story.index.story3[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory4})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
															>
																<Div flex justifyEnd>
																	<Div
																		maxW={150}
																		textWhite
																		mx24
																		my90
																		fontSize8
																		textRight
																		balooR
																		style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 0.81)" }}
																	>
																		{wording.story.index.story4[locale]}
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
									<Div
										relative
										textCenter
										textSecondary2
										fontSize36
										pt50
										px20
										style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 2)" }}
										clx={"text-stroke"}
										notItalic
									>
										&quot;We be
										<Div spanTag textSecondary>
											{" "}
											weird, different, and free.
										</Div>
										&quot;
										<Div w120 absolute top5 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
									</Div>
									<Div relative flex justifyCenter balooR textWhite textCenter textSm mt20 pb80 px40 notItalic>
										{wording.story.index.value[locale]}
										<Div w120 absolute right0 bottom0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
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
			<Div
				style={{
					background: "linear-gradient(180deg, #37315A 0%, #413F70 21.35%, #413F70 69.27%, #37315A 100%)",
					overflow: "hidden",
				}}
			>
				<Div>
					<Controller>
						<Scene duration={1000} triggerHook={0} pin={true}>
							<Div relative>
								<Div hScreen>
									<MainTopBar absolute />
									<Div wFull style={{ backgroundSize: "cover", backgroundPositionY: "center" }} relative hFull italic textSm>
										<Div
											wFull
											hFull
											textXl
											style={{
												backgroundImage: `url(${IMAGES.webeStory1})`,
												backgroundSize: "cover",
												backdropFilter: "brightness(50%)",
												backgroundPositionY: "center",
												backgroundPositionX: "center",
											}}
											flex
											flexCol
										>
											<Div flex justifyEnd>
												<Div maxW={600} textWhite mx80 my120 fontSize24 textRight balooR style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}>
													{wording.story.index.story1[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory2})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flexCol
																justifyEnd
															>
																<Div flex justifyStart>
																	<Div style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}>
																		<Div maxW={500} textWhite mx80 my380 fontSize24 textLeft balooR>
																			{wording.story.index.story2[locale]}
																		</Div>
																		<Div maxW={500} textWhite mx80 my-360 fontSize24 textLeft balooR>
																			{wording.story.index.story22[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory3})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
																justifyStart
															>
																<Div flex justifyStart>
																	<Div
																		maxW={600}
																		textWhite
																		mx80
																		my120
																		fontSize24
																		textLeft
																		balooR
																		style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}
																	>
																		{wording.story.index.story3[locale]}
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
																	backgroundImage: `url(${IMAGES.webeStory4})`,
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
															>
																<Div flex justifyEnd>
																	<Div
																		maxW={600}
																		textWhite
																		mx80
																		my120
																		fontSize24
																		textRight
																		balooR
																		style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}
																	>
																		{wording.story.index.story4[locale]}
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
							</Div>
						</Scene>
					</Controller>
				</Div>
			</Div>
		</>
	);
};

export default Index;
