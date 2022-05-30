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
				<BasicHead />
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
									<Div
										onClick={() => setClicked((prev) => !prev)}
										h250
										style={{
											backgroundImage: `url(${IMAGES.storyPreview})`,
											backgroundSize: "cover",
											backgroundPositionY: "center",
											backgroundPositionX: "center",
										}}
									>
										{clicked ? (
											<Div />
										) : (
											<Div flex justifyCenter itemsCenter hFull>
												<Div
													flex
													justifyCenter
													itemsCenter
													w200
													h50
													border1
													borderBlack
													bgSecondary
													roundedFull
													textSecondary2
													style={{ webkitTextStroke: "1px #000" }}
												>
													View Their Story
												</Div>
											</Div>
										)}
										{clicked && (
											<Div style={{ backgroundSize: "cover", backgroundPositionY: "center" }} relative italic textSm>
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
															WeBe have been in a planet-wide war for the past years. The war was provoked by excessive indoctrination of competition
															and uniformity. Such violence has made the planet too hostile, colorless, and systematic,<br></br>rendering it
															uninhabitable.
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
																					8,888 of these bears have turned to space travel with an altruistic vision:
																				</Div>
																				<Div maxW={150} textWhite mx24 my-80 fontSize8 textLeft balooR>
																					Establish a “BetterWorld”, a free and creative playground for diverse innovators.
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
																				During deep hibernation in their capsules in BetterWorld, WeBe have been awakened by other space wanderers
																				<br></br>who are also in search of a habitable planet.
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
																				Instead of fighting these space wanderers,<br></br>
																				WeBe decides to invite and welcome them<br></br>to BetterWorld.
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
										)}
									</Div>
									<Div relative textCenter textSecondary2 fontSize36 pt50 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }} notItalic>
										&quot;We be
										<Div spanTag textSecondary>
											{" "}
											weird, different, and free.
										</Div>
										&quot;
										<Div w120 absolute top5 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
									</Div>
									<Div relative flex justifyCenter balooR textWhite textCenter textSm mt20 pb80 px40 notItalic>
										8,888 WeBes cultivating a culture of its own. We be weird, sometimes. We are not exactly introverts, but frankly, a little
										different compared to the majority. Individuals nowadays, especially those in 20 and 30s, are living breathlessly conforming to
										society’s expectations: go to a good university, find a stable job, and so on. WeBe challenges these social norms by creating a
										cultural franchise suggesting an unique identity in both worlds, digital and real.
										<Div w120 absolute right0 bottom0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
									</Div>

									<EmptyBlock h={70} />
									<Div textCenter textSecondary2 fontSize42 mb30 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										In
										<Div spanTag textSecondary>
											{" "}
											Digital{" "}
										</Div>
										World
									</Div>
									<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
										<Div inlineFlex itemsCenter>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight py40 px10 ml10 textCenter roundedLg>
												Re-<br></br>Birth
												<Div flex justifyCenter imgTag src={IMAGES.journeyIcons.rebirth}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Re-Birth:
														<Div fontSize12 balooR>
															We understand your minted WeBe may not be your favorite. You will be able to re-mint your WeBe up to five times at 50
															$Klay per trial.
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight p40 ml10 textCenter roundedLg>
												Weird<br></br>Wine
												<Div flex justifyCenter imgTag src={IMAGES.journeyIcons.weirdWine}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Weird Wine:
														<Div fontSize12 balooR>
															A mysterious bottle of wine found in BetterWorld! Weird Wine is a utility NFT, allowing WeBe holders to expand WeBe
															collection in BetterWorld metaverse.
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight p40 ml10 textCenter roundedLg>
												Wizard<br></br>WeBe
												<Div flex justifyCenter imgTag src={IMAGES.journeyIcons.wizardWebe}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Wizard WeBe:
														<Div fontSize12 balooR>
															{" "}
															3D collection of our WeBes. Holders receive a 3D version of their minted WeBe to expand its movement in the metaverse.
														</Div>
													</Div>{" "}
												</Div>
											</Div>
											<Div textSecondary fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												Collection
											</Div>
										</Div>
									</Div>
									<Div mt10 textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
										<Div inlineFlex itemsCenter>
											<Div textSecondary2 fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												BetterWorld
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												Pioneer
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.pioneer}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Pioneer:
														<Div fontSize12 balooR>
															WeBe will be the first collection to join BetterWorld, the first social media for PFPs. Communicate, post, and perform
															in BetterWorld via your Web 3 persona.{" "}
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												Socialize<br></br>to Earn
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.socializetoEarn}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Socialize<br></br>to Earn:
														<Div fontSize12 balooR>
															Connect in the app to receive $Klay every week. Socialize to earn passive income.
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												Capsule
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.capsule}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Capsule:
														<Div fontSize12 balooR>
															WeBe holders receive a free metaverse land-the capsule-in BetterWorld. Here, you can decorate, communicate, and explore
															the digital world.
														</Div>
													</Div>
												</Div>
											</Div>
										</Div>
									</Div>

									<EmptyBlock h={100} />
									<Div textCenter textSecondary2 fontSize42 mb30 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										In
										<Div spanTag textSecondary>
											{" "}
											Real{" "}
										</Div>
										World
									</Div>
									<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
										<Div inlineFlex itemsCenter>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight p40 ml10 textCenter roundedLg>
												WeBe Goods
												<Div flex justifyCenter imgTag src={IMAGES.journeyIcons.webeGoods}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														WeBe Goods:
														<Div fontSize12 balooR>
															Providing tangible accesorries to expand our values IRL.
														</Div>
													</Div>{" "}
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight py40 ml10 textCenter roundedLg>
												WeBe<br></br>Partners
												<Div flex justifyCenter imgTag src={IMAGES.journeyIcons.webePartners}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														WeBe Partners:
														<Div fontSize8 balooR>
															Partnering with various restaurants, bars, and entreprises to expand WeBe in various methods. In addition, holders will
															receive discounts and exclusive offers in partnered ventures. More partnerships underway.
														</Div>
													</Div>
												</Div>
											</Div>
											<Div textSecondary fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												Brand
											</Div>
										</Div>
									</Div>
									<Div mt10 textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
										<Div inlineFlex itemsCenter>
											<Div textSecondary2 fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												Community
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												Weird IRL
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.weirdIRL}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Weird IRL:
														<Div fontSize12 balooR>
															Be weird, together. Regular events for holders to get together. Wine nights, futsal games, and weird events prepared.
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												Weird Projects
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.webeDAO}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														Weird Projects:
														<Div fontSize12 balooR>
															Propose, vote, and discuss weird projects in our decentralized community (Off-chain forums will be available in
															BetterWorld).
														</Div>
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												WeBe Bank
												<Div flex JustifyCenter imgTag src={IMAGES.journeyIcons.webeBank}></Div>
												<Div
													absolute
													flex
													itemsCenter
													wFull
													hFull
													top0
													left0
													clx={"group transition hover:bg-primary-light hover:transition-all"}
													roundedLg
												>
													<Div
														textSecondary2
														textLg
														px20
														textLeft
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
													>
														WeBe Bank:
														<Div fontSize12 balooR>
															A systematic community treasury for holders to utilize. Holders will be able to utilize the fund to turn their visions
															into reality.
														</Div>
													</Div>
												</Div>
											</Div>
										</Div>
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter textSecondary fontSize42 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										First 8{" "}
										<Div spanTag textSecondary2>
											{" "}
											WeBe
										</Div>
									</Div>
									<Div textCenter textSecondary2 text2xl style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)" }}>
										Departing for
										<Div spanTag textSecondary>
											{" "}
											BetterWorld
										</Div>
									</Div>
									<Div style={{ whiteSpace: "nowrap", overflow: "auto" }} py30 clx={"scrollbar-off"}>
										{team.map((member, index) => {
											return (
												<Div key={index} inlineBlock mx10 balooR>
													<Div imgTag src={member.imageUri} w150 h150 roundedXl border1 borderBlack></Div>
													<EmptyBlock h={30} />
													<Div textSecondary2 textCenter textLg balooB>
														{member.name}
													</Div>
													<Div textSecondary2 textCenter textSm>
														{member.position}
													</Div>
												</Div>
											);
										})}
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter textSecondary2 fontSize42 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										Partnered with
									</Div>
									<Div textCenter textSecondary fontSize42 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										the Best
									</Div>
									<Div flex justifyCenter itemsCenter mt30>
										<Div w100 mx20 imgTag src={IMAGES.partners.aiLabs}></Div>
										<Div w100 mx20 imgTag src={IMAGES.partners.bankofWine}></Div>
									</Div>
									<Div flex justifyCenter itemsCenter mt30>
										<Div w130 h18 mx20 imgTag src={IMAGES.partners.blinkers}></Div>
										<Div w90 h25 mx20 imgTag src={IMAGES.partners.kote}></Div>
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter textSecondary fontSize42 mb30 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
										FAQs
									</Div>
									<Div maxW={900} px40 mxAuto>
										{faqs.map(({ question, answer }, index) => {
											return <Faq key={index} question={question} answer={answer} isTablet={true} />;
										})}
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
			<BasicHead />
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
									<MainTopBar />
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
													WeBe have been in a planet-wide war for the past years. The war was provoked by excessive indoctrination of competition and
													uniformity. Such violence has made the planet too hostile, colorless, and systematic,<br></br>rendering it uninhabitable.
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
																			8,888 of these bears have turned to space travel with an altruistic vision:
																		</Div>
																		<Div maxW={500} textWhite mx80 my-360 fontSize24 textLeft balooR>
																			Establish a “BetterWorld”, a free and creative playground for diverse innovators.
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
																		During deep hibernation in their capsules in BetterWorld, WeBe have been awakened by other space wanderers
																		<br></br>who are also in search of a habitable planet.
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
																		Instead of fighting these space wanderers,<br></br>
																		WeBe decides to invite and welcome them<br></br>to BetterWorld.
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
																	background: "linear-gradient(180deg, #37315A 0%, #413F70 100%)",
																	backgroundSize: "cover",
																	backgroundPositionY: "center",
																	backgroundPositionX: "center",
																}}
																flex
																flexCol
															>
																<Div flex wFull hFull justifyCenter itemsCenter>
																	<Div w250 absolute top5 left0 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
																	<Div flexCol>
																		<Div textCenter textSecondary2 fontSize64 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }} notItalic>
																			&quot;We be
																			<Div spanTag textSecondary>
																				{" "}
																				weird, different, and free.
																			</Div>
																			&quot;{" "}
																		</Div>
																		<Div balooR textWhite textCenter textXl mt30 notItalic>
																			8,888 WeBes cultivating a culture of its own. We be weird, sometimes. We are not exactly introverts,
																			<br></br>but frankly, a little different compared to the majority. Individuals nowadays, especially those in 20
																			and 30s,
																			<br></br>are living breathlessly conforming to society’s expectations: go to a good university, find a stable
																			job, and so on.
																			<br></br>WeBe challenges these social norms by creating a cultural franchise suggesting
																			<br></br>an unique identity in both worlds, digital and real.
																			<Div w300 absolute right0 bottom0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
																		</Div>
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
								<EmptyBlock h={150} />
								<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)" }}>
									In
									<Div spanTag textSecondary>
										{" "}
										Digital{" "}
									</Div>
									World
								</Div>
								<Div
									flex
									justifyCenter
									itemsCenter
									mt40
									textSecondary2
									fontSize28
									style={{ overflow: "auto", overflowY: "hidden" }}
									clx={"scrollbar-off"}
								>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight ml30 pt40 px40 roundedLg>
										Re-Birth
										<Div absolute top0 left0 wFull hFull flex itemsEnd justifyEnd>
											<Div flex1></Div>
											<Div flex2 pr10>
												<Div imgTag src={IMAGES.journeyIcons.rebirth}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all hover:hard-shadow"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Re-Birth:
												<Div balooR fontSize={"0.95vw"}>
													We understand your minted WeBe may not be your favorite. You will be able to re-mint your WeBe up to five times at 50 $Klay
													per trial.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight ml30 p40 roundedLg>
										Weird<br></br>Wine
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex2 pr10>
												<Div imgTag src={IMAGES.journeyIcons.weirdWine}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Weird Wine:
												<Div balooR fontSize={"0.95vw"}>
													A mysterious bottle of wine found in BetterWorld! Weird Wine is a utility NFT, allowing WeBe holders to expand WeBe
													collection in BetterWorld metaverse.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight ml30 p40 roundedLg>
										Wizard<br></br>WeBe
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.wizardWebe}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Wizard WeBe:
												<Div balooR fontSize={"0.95vw"}>
													{" "}
													3D collection of our WeBes. Holders receive a 3D version of their minted WeBe to expand its movement in the metaverse.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div textSecondary fontSize48 mx100 style={{ webkitTextStroke: "1px #000" }}>
										Collection
									</Div>
								</Div>
								<Div
									flex
									justifyCenter
									itemsCenter
									mt30
									textSecondary2
									fontSize28
									style={{ overflow: "auto", overflowY: "hidden" }}
									clx={"scrollbar-off"}
								>
									<Div textSecondary2 fontSize48 mx80 style={{ webkitTextStroke: "1px #000" }}>
										BetterWorld
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										Pioneer
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.pioneer}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Pioneer:
												<Div balooR fontSize={"0.95vw"}>
													WeBe will be the first collection to join BetterWorld, the first social media for PFPs. Communicate, post, and perform in
													BetterWorld via your Web 3 persona.{" "}
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										Socialize<br></br>to Earn
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.socializetoEarn}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Socialize to Earn:
												<Div balooR fontSize={"0.95vw"}>
													Connect in the app to receive $Klay every week. Socialize to earn passive income.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										Capsule
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.capsule}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Capsule:
												<Div balooR fontSize={"0.95vw"}>
													WeBe holders receive a free metaverse land-the capsule-in BetterWorld. Here, you can decorate, communicate, and explore the
													digital world.
												</Div>
											</Div>
										</Div>
									</Div>
								</Div>

								<EmptyBlock h={250} />
								<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)" }}>
									In
									<Div spanTag textSecondary>
										{" "}
										Real{" "}
									</Div>
									World
								</Div>
								<Div
									flex
									justifyCenter
									itemsCenter
									mt40
									textSecondary2
									fontSize28
									style={{ overflow: "auto", overflowY: "hidden" }}
									clx={"scrollbar-off"}
								>
									<Div relative w500 h200 border1 borderBlack bgPrimaryLight ml30 p40 roundedLg>
										WeBe Goods
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex2></Div>
											<Div flex1 pr20>
												<Div imgTag src={IMAGES.journeyIcons.webeGoods}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												WeBe Goods:
												<Div balooR fontSize={"0.95vw"}>
													Providing tangible accesorries to expand our values IRL.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w500 h200 border1 borderBlack bgPrimaryLight ml30 p40 roundedLg>
										WeBe Partners
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.webePartners}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												WeBe Partners:
												<Div balooR fontSize={"0.95vw"}>
													Partnering with various restaurants, bars, and entreprises to expand WeBe in various methods. In addition, holders will
													receive discounts and exclusive offers in partnered ventures. Check out Public Docs to see our ready-to-go partnerships.
													More partnerships underway.
												</Div>
											</Div>
										</Div>
									</Div>
									<Div textSecondary fontSize48 mx120 style={{ webkitTextStroke: "1px #000" }}>
										Brand
									</Div>
								</Div>
								<Div
									flex
									justifyCenter
									itemsCenter
									mt30
									textSecondary2
									fontSize28
									style={{ overflow: "auto", overflowY: "hidden" }}
									clx={"scrollbar-off"}
								>
									<Div textSecondary2 fontSize48 mx90 style={{ webkitTextStroke: "1px #000" }}>
										Community
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										Weird<br></br>IRL
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1>
												<Div imgTag src={IMAGES.journeyIcons.weirdIRL}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Weird IRL:
												<Div balooR fontSize={"0.95vw"}>
													Be weird, together. Regular events for holders to get together. Wine nights, futsal games, and weird events prepared.
												</Div>
											</Div>{" "}
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										Weird<br></br>Projects
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1>
												<Div imgTag src={IMAGES.journeyIcons.webeDAO}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												Weird Projects:
												<Div balooR fontSize={"0.95vw"}>
													Propose, vote, and discuss weird projects in our decentralized community (Off-chain forums will be available in
													BetterWorld).
												</Div>
											</Div>
										</Div>
									</Div>
									<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg>
										WeBe<br></br>Bank
										<Div absolute top0 left0 wFull hFull flex itemsEnd>
											<Div flex1></Div>
											<Div flex1 pr10>
												<Div imgTag src={IMAGES.journeyIcons.webeBank}></Div>
											</Div>
										</Div>
										<Div
											flex
											itemsCenter
											absolute
											wFull
											hFull
											top0
											left0
											clx={"group transition hover:bg-primary-light hover:transition-all"}
											roundedLg
										>
											<Div
												textSecondary2
												px30
												fontSize={"1.5vw"}
												clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100"}
											>
												WeBe Bank:
												<Div balooR fontSize={"0.95vw"}>
													A systematic community treasury for holders to utilize. Holders will be able to utilize the fund to turn their visions into
													reality.
												</Div>
											</Div>
										</Div>
									</Div>
								</Div>
								<EmptyBlock h={250} />
								<Div textCenter textSecondary fontSize72 style={{ textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)" }}>
									First 8{" "}
									<Div spanTag textSecondary2>
										{" "}
										WeBe
									</Div>
								</Div>
								<Div textCenter textSecondary2 fontSize36 mt-20 style={{ textShadow: "5px 5px 0px rgba(0, 0, 0, 0.25)" }}>
									Departing for
									<Div spanTag textSecondary>
										{" "}
										BetterWorld
									</Div>
								</Div>
								<Div mt40 style={{ whiteSpace: "nowrap", overflow: "auto" }} clx={"scrollbar-off"}>
									{team.map((member, index) => {
										return (
											<Div key={index} inlineBlock mx20 balooR>
												<Div imgTag src={member.imageUri} w200 h200 roundedXl border1 borderBlack></Div>
												<EmptyBlock h={30} />
												<Div textSecondary2 textCenter textXl balooB>
													{member.name}
												</Div>
												<Div textSecondary2 textCenter textLg>
													{member.position}
												</Div>
											</Div>
										);
									})}
								</Div>
								<EmptyBlock h={250} />
								<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)" }}>
									Partnered with{" "}
									<Div spanTag textSecondary>
										{" "}
										the Best
									</Div>
								</Div>
								<Div flex itemsCenter mt40>
									<Div flex1>
										<Div mxAuto maxW250 imgTag src={IMAGES.partners.aiLabs}></Div>
									</Div>
									<Div flex1>
										<Div mxAuto maxW250 imgTag src={IMAGES.partners.bankofWine}></Div>
									</Div>
									<Div flex1>
										<Div mxAuto maxW250 imgTag src={IMAGES.partners.blinkers}></Div>
									</Div>
									<Div flex1>
										<Div mxAuto maxW250 imgTag src={IMAGES.partners.kote}></Div>
									</Div>
								</Div>
								<EmptyBlock h={200} />
								<Div textCenter textSecondary fontSize72 mb40 style={{ textShadow: "8px 8px 0px rgba(0, 0, 0, 0.25)" }}>
									FAQs
								</Div>
								<Div maxW={900} px40 mxAuto>
									{faqs.map(({ question, answer }, index) => {
										return <Faq key={index} question={question} answer={answer} isTablet={false} />;
									})}
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
};

function Faq({ question, answer, isTablet }) {
	const [clicked, setClicked] = useState(false);
	if (isTablet) {
		return (
			<Div textSecondary2 my15 onClick={() => setClicked((prev) => !prev)} cursorPointer>
				<Row textLg p15 border1 roundedLg borderBlack itemsCenter bgPrimaryLight balooR>
					<Col auto balooB style={{webkitTextStroke: "1px #000"}}>
						Q.{" "}
					</Col>
					<Col>
						<Div>{question}</Div>
					</Col>
					<Col auto>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
				</Row>
				{clicked && (
					<Row py20 px30>
						<Col auto textSecondary textBase balooB style={{webkitTextStroke: "1px #000",}}e>
							A.{" "}
						</Col>
						<Col textMed balooR>{answer}</Col>
					</Row>
				)}
			</Div>
		);
	}
	return (
		<Div textSecondary2 my10 onClick={() => setClicked((prev) => !prev)} cursorPointer>
			<Row textXl py15 border1 roundedLg borderBlack itemsCenter bgPrimaryLight balooR>
				<Col auto fontSize36 ml20 balooB style={{webkitTextStroke: "1px #000"}}>
					Q.{" "}
				</Col>
				<Col>{question}</Col>
				<Col auto mr20>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
			</Row>
			{clicked && (
				<Row textXl py20 balooR>
					<Col auto textSecondary fontSize36 ml40 balooB style={{webkitTextStroke: "1px #000",}}>
						A.{" "}
					</Col>
					<Col textLg maxW={690} flex itemsCenter>{answer}</Col>
				</Row>
			)}
		</Div>
	);
}

export default Index;
