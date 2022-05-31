import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href, LOCALES, reloadWithLocale } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EmptyBlock from "src/components/EmptyBlock";
import { wording } from "src/wording/wording";
import { Faq } from "src/components/Faq";
import Footer from "src/components/common/Footer";
import Col from "src/components/Col";
import Row from "src/components/Row";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const { locale } = useRouter();
	const handleClickHome = () => {
		href(urls.home.index);
	};
	const handleClickMint = () => {
		href(urls.mint.index);
	};
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
					style={{ background: "linear-gradient:(169.77deg, #413F70 59%, #37315A 92.97%)", overflowY: "auto", overflowX: "hidden" }}
					relative
					hScreen
				>
					<Div absolute w180 top60 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
					<Div absolute w120 top280 right20 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
					<Div absolute top0 wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}></Div>
					<Div absolute top20 left24 w70 imgTag src={IMAGES.logos.webeLogo}></Div>
					<Div onClick={() => setClicked((prev) => !prev)}>
						{clicked ? (
							<Div absolute z999 top23 right24 w18 imgTag src={IMAGES.cancelIcon} />
						) : (
							<Div absolute z99 top23 right24 w18 imgTag src={IMAGES.menuIcon} />
							)}
						{clicked && (
							<Div absolute z99 top0 wFull hFull style={{ background: "rgba(218, 226, 255, 0.96)" }}>
								<Div mt90 mx50 textPrimary fontSize32>
									<Div flex pb15 itemsCenter aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
										<Div w30 imgTag src={IMAGES.logos.webeIconPrimary}></Div>
											<Div ml18 clx={"text-stroke-white"}>Public Docs</Div>
									</Div>
									<Div flex py15 itemsCenter aTag href={"https://betterworldapp.io"}>
										<Div w32 imgTag src={IMAGES.logos.betterWorldPrimary}></Div>
										<Div ml17 clx={"text-stroke-white"}>BetterWorld</Div>
									</Div>
									<Div flex py15 itemsCenter aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
										<FaDiscord size={32} />
										<Div ml18 clx={"text-stroke-white"}>Discord</Div>
									</Div>
									<Div flex py15 itemsCenter aTag href={"https://twitter.com/officialgomz"}>
										<FaTwitter size={32} />
											<Div ml18 clx={"text-stroke-white"}>Twitter</Div>
									</Div>
									<Div flex py15 itemsCenter aTag href={"https://instagram.com/offical_gomz"}>
										<FaInstagram size={32} />
										<Div ml18 clx={"text-stroke-white"}>Instagram</Div>
									</Div>
								</Div>
							</Div>
						)}
					</Div>
					<Div flex justifyCenter>
						<Div mt90 w230 imgTag src={IMAGES.webeMainAstronaut} style={{ animation: "float 6s ease-in-out infinite" }}></Div>
					</Div>
					<Div flex justifyCenter>
						<Div px30 imgTag src={IMAGES.mainWordMobile}></Div>
					</Div>
					<Div flex justifyCenter>
						<Div
							flex
							justifyCenter
							itemsCenter
							absolute
							z1
							my30
							bgSecondary
							roundedFull
							w200
							h50
							textSecondary2
							fontSize18
							border1 borderBlack
							style={{ boxShadow: "2px 2px 0px rgba(0, 0, 0, 1)" }}
							onClick={handleClickHome}
							clx={"text-stroke"}
						>
							READ THE STORY
						</Div>
					</Div>

									<EmptyBlock h={200} />
									<Div textCenter textSecondary2 fontSize42 mb30 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										In
										<Div spanTag textSecondary>
											{" "}
											Digital{" "}
										</Div>
										World
									</Div>
									<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														We understand your minted WeBe may not be your favorite. You will be able to re-mint your WeBe up to five times at 50
														$Klay per trial.
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														A mysterious bottle of wine found in BetterWorld! Weird Wine is a utility NFT, allowing WeBe holders to expand WeBe
														collection in BetterWorld metaverse.
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														3D collection of our WeBes. Holders receive a 3D version of their minted WeBe to expand its movement in the metaverse.
													</Div>{" "}
												</Div>
											</Div>
											<Div textSecondary fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												Collection
											</Div>
										</Div>
									</Div>
									<Div mt10 textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														WeBe will be the first collection to join BetterWorld, the first social media for PFPs. Communicate, post, and perform
														in BetterWorld via your Web 3 persona.
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														Connect in the app to receive Klay every week. Socialize to earn passive income.
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														WeBe holders receive a free metaverse land-the capsule-in BetterWorld. Here, you can decorate, communicate, and explore
														the digital world.
													</Div>
												</Div>
											</Div>
										</Div>
									</Div>

									<EmptyBlock h={100} />
									<Div textCenter textSecondary2 fontSize42 mb30 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										In
										<Div spanTag textSecondary>
											{" "}
											Real{" "}
										</Div>
										World
									</Div>
									<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														Providing tangible accesorries to expand our values IRL.
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														Partnering with various restaurants, bars, and entreprises to expand WeBe in various methods. In addition, holders will
														receive discounts and exclusive offers in partnered ventures. More partnerships underway.
													</Div>
												</Div>
											</Div>
											<Div textSecondary fontSize36 mx50 style={{ webkitTextStroke: "1px #000" }}>
												Brand
											</Div>
										</Div>
									</Div>
									<Div mt10 textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														Be weird, together. Regular events for holders to get together. Wine nights, futsal games, and weird events prepared.													</Div>
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														Propose, vote, and discuss weird projects in our decentralized community (Off-chain forums will be available in
														BetterWorld).
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
													>
														A systematic community treasury for holders to utilize. Holders will be able to utilize the fund to turn their visions
														into reality.
													</Div>
												</Div>
											</Div>
										</Div>
									</Div>
									<EmptyBlock h={100} />
									<Div textCenter textSecondary fontSize42 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										First 8{" "}
										<Div spanTag textSecondary2>
											{" "}
											WeBe
										</Div>
									</Div>
									<Div textCenter textSecondary2 text2xl style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
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
									<Div leadingTight textCenter textSecondary fontSize42 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										Partnered with <br></br>{" "}
										<Div spanTag textSecondary2>
											{" "}
											the Best
										</Div>
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
									<Div textCenter textSecondary fontSize42 mb30 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										FAQs
									</Div>
									<Div maxW={900} px40 mxAuto>
										{faqs.map(({ question, answer }, index) => {
											return <Faq key={index} question={question} answer={answer} isTablet={true} />;
										})}
									</Div>
									<EmptyBlock h={30} />
									<Row mt30>
										<Col></Col>
										<Col auto>
											<Div fontSize28 clx={"rainbow-text-mobile"}>WeeEEeeEeWwwoooOO</Div>
										</Col>
										<Col></Col>
									</Row>
									<EmptyBlock h={70} />
								<Footer />
				</Div>
			</>
		);
	}
	return (
		<>
			<BasicHead />
			<Div
				style={{
					background: "linear-gradient(114.31deg, #3E4071 51.1%, #37315A 85.59%)",
					overflow: "auto",
				}}
				hScreen
				relative
			>
				<Div absolute w350 top0 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
				<Div absolute w280 top400 right50 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
				<Div sticky top0 wFull z200 px80 py15 style={{ backgroundColor: "rgba(0,0,0,0.1)" }} clx={"text-stroke"}>
					<Div flex mxAuto maxW={1100}>
						<Div>
							<Div w100 imgTag src={IMAGES.logos.webeLogo}></Div>
						</Div>
						<Div flex1></Div>
						<Div flex flexRow itemsCenter>
							<Div mx10 textSecondary2 cursorPointer aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
								<Div roundedFull bgSecondary py4 px18 fontSize12 trackingWidest borderBlack border1 clx={"group transition hover:bg-primary-light text-stroke-thin"}>
									PUBLIC DOCS
								</Div>
							</Div>
							<Div mx10 clx={"group transition hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
								<Div imgTag src={IMAGES.logos.betterWorldSecondary2} h20 wAuto></Div>
							</Div>
							<Div
								mx10
								textSecondary2
								clx={"group transition hover:text-primary-light"}
								cursorPointer
								aTag
								href={"https://discord.com/invite/7tV3WxWf8p"}
							>
								<FaDiscord size={30} />
							</Div>
							<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
								<FaTwitter size={25} />
							</Div>
							<Div
								mx10
								textSm
								textSecondary={locale == LOCALES.KO}
								textSecondary2={locale != LOCALES.KO}
								clx={"group transition hover:text-primary-light"}
								cursorPointer
								onClick={() => reloadWithLocale(LOCALES.KO)}
							>
								KOR
							</Div>
							<Div textSm textSecondary2>
								l
							</Div>
							<Div
								ml10
								textSm
								textSecondary={locale == LOCALES.EN}
								textSecondary2={locale != LOCALES.EN}
								clx={"group transition hover:text-primary-light"}
								cursorPointer
								onClick={() => reloadWithLocale(LOCALES.EN)}
							>
								ENG
							</Div>
						</Div>
					</Div>
				</Div>
				<Div px80>
					<Div flex itemsCenter justifyCenter hScreen maxW={1100} mxAuto mt={-60}>
						<Div flexCol>
							<Div flex maxW400>
								<Div pt30 pb20></Div>
							</Div>
							<Div maxW650 pb40 imgTag src={IMAGES.mainWord}></Div>
							<Div flex pb30>
								<Div
									maxW150
									flex
									justifyCenter
									clx={"group transition hover:bg-primary-light text-stroke"}
									bgSecondary
									roundedFull
									px40
									py8
									fontSize23
									textSecondary2
									borderBlack
									border2
									onClick={handleClickMint}
									cursorPointer
									style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
								>
									MINT
								</Div>
								<Div mr10 flex justifyCenter roundedFull px40 py8 fontSize23 textSecondary2 onClick={handleClickHome} cursorPointer clx={"text-stroke"}>
									READ THE STORY
								</Div>
							</Div>
							<Div flex maxW250></Div>
						</Div>
						<Div ml50 maxW300>
							{/* <Div pb30 imgTag src={IMAGES.mintingProcess}></Div> */}
							<Div pt60 style={{ animation: "float 6s ease-in-out infinite" }} imgTag src={IMAGES.webeMainAstronaut}></Div>
						</Div>
					</Div>

					<EmptyBlock h={150} />
					<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						In
						<Div spanTag textSecondary>
							{" "}
							Digital{" "}
						</Div>
						World
					</Div>
					<Div flex justifyCenter itemsCenter mt40 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
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
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									We understand your minted WeBe may not be your favorite.
									You will be able to re-mint your WeBe up to five times at 50 $Klay per trial.
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
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									A mysterious bottle of wine found in BetterWorld! Weird Wine is a utility NFT, allowing WeBe holders
									to expand WeBe collection in BetterWorld metaverse.
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
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									3D collection of our WeBes.
									Holders receive a 3D version of their minted WeBe to expand its movement in the metaverse.
								</Div>
							</Div>
						</Div>
						<Div textSecondary fontSize48 mx100>
							Collection
						</Div>
					</Div>
					<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
						<Div textSecondary2 fontSize48 mx80>
							BetterWorld
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							Pioneer
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1 pr10>
									<Div imgTag src={IMAGES.journeyIcons.pioneer}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									WeBe will be the first collection to join BetterWorld,
									the first social media for PFPs. Communicate, post, and perform in BetterWorld via your Web 3 persona.{" "}
								</Div>
							</Div>
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							Socialize<br></br>to Earn
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1 pr10>
									<Div imgTag src={IMAGES.journeyIcons.socializetoEarn}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									Connect in the app to receive Klay every week. Socialize to earn passive income.
								</Div>
							</Div>
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							Capsule
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1 pr10>
									<Div imgTag src={IMAGES.journeyIcons.capsule}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									WeBe holders receive a free metaverse land-the capsule-in BetterWorld.
									Here, you can decorate, communicate, and explore the digital world.
								</Div>
							</Div>
						</Div>
					</Div>

					<EmptyBlock h={250} />
					<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						In
						<Div spanTag textSecondary>
							{" "}
							Real{" "}
						</Div>
						World
					</Div>
					<Div flex justifyCenter itemsCenter mt40 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
						<Div relative w500 h200 border1 borderBlack bgPrimaryLight ml30 p40 roundedLg>
							WeBe Goods
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex2></Div>
								<Div flex1 pr20>
									<Div imgTag src={IMAGES.journeyIcons.webeGoods}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									Providing tangible accesorries to expand our values IRL.
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
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									Partnering with various restaurants, bars, and entreprises to expand WeBe in various methods. In addition, holders will receive
									discounts and exclusive offers in partnered ventures. Check out Public Docs to see our ready-to-go partnerships. More partnerships
									underway.
								</Div>
							</Div>
						</Div>
						<Div textSecondary fontSize48 mx120>
							Brand
						</Div>
					</Div>
					<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off text-stroke"}>
						<Div textSecondary2 fontSize48 mx90>
							Community
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							Weird<br></br>IRL
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1>
									<Div imgTag src={IMAGES.journeyIcons.weirdIRL}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									Be weird, together. Regular events for holders to get together. Wine nights, futsal games, and weird events prepared.
								</Div>{" "}
							</Div>
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							Weird<br></br>Projects
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1>
									<Div imgTag src={IMAGES.journeyIcons.webeDAO}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									Propose, vote, and discuss weird projects in our decentralized community (Off-chain forums will be available in BetterWorld).
								</Div>
							</Div>
						</Div>
						<Div relative w320 h200 border1 borderBlack bgPrimaryLight mr30 p40 roundedLg overflowHidden>
							WeBe<br></br>DAO
							<Div absolute top0 left0 wFull hFull flex itemsEnd>
								<Div flex1></Div>
								<Div flex1 pr10>
									<Div imgTag src={IMAGES.journeyIcons.webeBank}></Div>
								</Div>
							</Div>
							<Div flex itemsCenter absolute wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
								<Div
									textSecondary2
									balooR
									px30
									fontSize={"0.95vw"}
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 text-stroke-none"}
								>
									A systematic community treasury for holders to utilize.
									Holders will be able to utilize the fund to turn their visions into reality.
								</Div>
							</Div>
						</Div>
					</Div>
					<EmptyBlock h={250} />
					<Div maxW={1100} mxAuto>
						<Div textCenter textSecondary fontSize72 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							The First{" "}
							<Div spanTag textSecondary2>
								{" "}
								WeBes
							</Div>
						</Div>
						<Div textCenter textSecondary2 fontSize36 mt-20 style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							Departing for
							<Div spanTag textSecondary>
								{" "}
								BetterWorld
							</Div>
						</Div>
						<Div mt40 mxAuto maxW={960} flex>
							{team.map((member, index) => {
								return (
									<Div key={index} inlineBlock mx20>
										<Div imgTag src={member.imageUri} roundedXl border1 borderBlack></Div>
										<EmptyBlock h={30} />
										<Div textSecondary2 textCenter textXl balooB>
											{member.name}
										</Div>
										<Div textSecondary2 textCenter textLg balooR>
											{member.position}
										</Div>
									</Div>
								);
							})}
						</Div>
						<EmptyBlock h={250} />
						<Div textCenter textSecondary2 fontSize72 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							Partnered with{" "}
							<Div spanTag textSecondary>
								{" "}
								the Best
							</Div>
						</Div>
						<Div flex itemsCenter mt40 gapX={80}>
							<Div flex1>
								<Div imgTag src={IMAGES.partners.aiLabs}></Div>
							</Div>
							<Div flex1>
								<Div imgTag src={IMAGES.partners.bankofWine}></Div>
							</Div>
							<Div flex1>
								<Div imgTag src={IMAGES.partners.blinkers}></Div>
							</Div>
							<Div flex1>
								<Div imgTag src={IMAGES.partners.kote}></Div>
							</Div>
						</Div>
						<EmptyBlock h={200} />
						<Div textCenter textSecondary fontSize72 mb40 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							FAQs
						</Div>
						<Div maxW={900} px40 mxAuto>
							{faqs.map(({ question, answer }, index) => {
								return <Faq key={index} question={question} answer={answer} isTablet={false} />;
							})}
						</Div>
						<EmptyBlock h={100} />
						{/* <Div textCenter textSecondary2 fontSize72 mb40 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							Lastly,{" "}
							<Div spanTag textSecondary>
								{" "}
								Say
							</Div>
						</Div> */}
						<Row mt100>
							<Col></Col>
							<Col auto>
								<Div clx={"rainbow-text"}>WeeEEeeEeWwwoooOO</Div>
							</Col>
							<Col></Col>
						</Row>
						<EmptyBlock h={200} />
					</Div>
				</Div>
				<Footer />
			</Div>
		</>
	);
};


export default Index;
