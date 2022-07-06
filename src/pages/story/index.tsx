import type { NextPage } from "next";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Footer from "src/components/common/Footer";
import EmptyBlock from "src/components/EmptyBlock";
import MainTopBar from "src/components/common/MainTopBar";
import useIsTablet from "src/hooks/useIsTablet";
import { wording } from "src/wording/wording";
import { useRouter } from "next/router";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
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
												<Div maxW={150} textWhite mx24 my90 fontSize8 textRight balooR style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}>
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
																	<Div>
																		<Div
																			maxW={150}
																			textWhite
																			mx24
																			my100
																			fontSize8
																			textLeft
																			balooR
																			style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}
																		>
																			{wording.story.index.story2[locale]}
																		</Div>
																		<Div
																			maxW={150}
																			textWhite
																			mx24
																			my-90
																			fontSize8
																			textLeft
																			balooR
																			style={{ textShadow: "0px 3px 0px rgba(0, 0, 0, 0.81)" }}
																		>
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
																		maxW={150}
																		textWhite
																		mx24
																		my90
																		fontSize8
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
									<EmptyBlock h={50} />
									<Div relative textCenter textSecondary2 fontSize36 px20 notItalic>
										We be
										<Div spanTag textSecondary>
											{" "}
											weird, different, and free.
										</Div>
										<Div w120 absolute top5 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
									</Div>
									<EmptyBlock h={30} />
									<Div textSecondary2 fontSize14 px30 textCenter>
										{wording.story.index.value[locale]}
									</Div>
									<EmptyBlock h={30} />
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
