import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href, LOCALES, reloadWithLocale } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import { FaChevronDown, FaChevronUp, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import useIsTablet from "src/hooks/useIsTablet";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import EmptyBlock from "src/components/EmptyBlock";
import { wording } from "src/wording/wording";
import { Faq } from "src/components/Faq";
import Footer from "src/components/common/Footer";
import Col from "src/components/Col";
import Row from "src/components/Row";
import { MintingModal } from "src/components/modal/MintingModal";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const [clicked, setClicked] = useState(false);
	const [open, setOpen] = useState(false);
	const { locale } = useRouter();
	const handleClickHome = () => {
		href(urls.home.index);
	};
	const handleClickMint = () => {
		setOpen(true);
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
			question: wording.faq.question.q1[locale],
			answer: wording.faq.answer.q1[locale],
		},
		{
			question: wording.faq.question.q2[locale],
			answer: wording.faq.answer.q2[locale],
		},
		{
			question: wording.faq.question.q3[locale],
			answer: wording.faq.answer.q3[locale],
		},
		{
			question: wording.faq.question.q4[locale],
			answer: wording.faq.answer.q4[locale],
		},
		{
			question: wording.faq.question.q5[locale],
			answer: wording.faq.answer.q5[locale],
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
					<Div absolute z99 top0 wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}></Div>
					<Div absolute z99 top20 left40 w70 imgTag src={IMAGES.logos.webeLogo}></Div>
					<Div onClick={() => setClicked((prev) => !prev)}>
						{clicked ? (
							<Div absolute z999 top0 wFull px80 py32 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
							<Div absolute z999 top20 left40 w70 imgTag src={IMAGES.logos.webeLogo}></Div>
							<Div absolute z999 top23 right40 w18 imgTag src={IMAGES.cancelIcon} />
							</Div>
						) : (
							<Div absolute z99 top23 right40 w18 imgTag src={IMAGES.menuIcon} />
							)}
						{clicked && (
							<Div absolute z100 top0 wFull hFull style={{ background: "rgba(65, 63, 112, 0.55)", backdropFilter: "blur(20px)" }}>
								<Div mt100 mx40 textSecondary2 fontSize24>
									<Div flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={""}>
										<Div mr18>Public Docs</Div>
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://betterworldapp.io"}>
										<Div mr18>BetterWorld</Div>
										<Div w20 imgTag src={IMAGES.logos.betterWorld}></Div>
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
										<Div mr18>Discord</Div>
										<FaDiscord size={20} />
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://twitter.com/officialgomz"}>
										<Div mr18> Twitter</Div>
										<FaTwitter size={20} />
									</Div>
									<Div mt20 flex px30 py10 border1 borderBlack bgSecondary roundedLg itemsCenter cursorPointer aTag href={"https://instagram.com/offical_gomz"}>
										<Div mr18>Instagram</Div>
										<FaInstagram size={20} />
									</Div>
								</Div>
								<Div flex justifyCenter mt40 mx40 clx={"text-stroke"}>
									<Div
									flex2
									flex
									justifyCenter
									text2xl
									textSecondary={locale == LOCALES.KO}
									textSecondary2={locale != LOCALES.KO}
									cursorPointer
									onClick={() => reloadWithLocale(LOCALES.KO)}
									>
										KOREAN
									</Div>
									<Div flex1 flex justifyCenter text2xl textSecondary2>
										l
									</Div>
									<Div
										flex2
										flex
										justifyCenter
										text2xl
										textSecondary={locale == LOCALES.EN}
										textSecondary2={locale != LOCALES.EN}
										cursorPointer
										onClick={() => reloadWithLocale(LOCALES.EN)}
									>
										ENGLISH
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.rebirth[locale]}
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.weirdwine[locale]}
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.wizardwebe[locale]}
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.pioneer[locale]}
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.socializetoearn[locale]}
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InDigitlaWorld.capsule[locale]}
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InRealWorld.webegoods[locale]}
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InRealWorld.webepartners[locale]}
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InRealWorld.weirdirl[locale]}
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
														fontSize12
														px20
														textLeft
														balooR
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InRealWorld.weirdprojects[locale]}
													</Div>
												</Div>
											</Div>
											<Div relative w180 h200 border1 borderBlack bgPrimaryLight mr10 p40 textCenter roundedLg>
												WeBe DAO
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
														clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
													>
														{wording.index.InRealWorld.webedao[locale]}
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
									<EmptyBlock h={100} />
									<Div textCenter textSecondary2 fontSize42 mb30 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
										Lastly,{" "}
										<Div spanTag textSecondary>
											{" "}
										Say
										</Div>
									</Div>
									<Row mt30>
										<Col></Col>
										<Col auto>
											<Div fontSize28 clx={"rainbow-text-mobile"}>WeeEEeeEeWwwoooOO</Div>
										</Col>
										<Col></Col>
									</Row>
									<EmptyBlock h={100} />
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
				<Div sticky top0 wFull z200 px80 py15 style={{ backgroundColor: "rgba(0,0,0,0.1)" }} clx={"text-stroke-thin"}>
					<Div flex mxAuto maxW={1100}>
						<Div>
							<Div w100 imgTag src={IMAGES.logos.webeLogo}></Div>
						</Div>
						<Div flex1></Div>
						<Div flex flexRow itemsCenter>
							<Div mx10 textSecondary2 cursorPointer aTag href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}>
								<Div roundedFull bgSecondary py4 px18 fontSize12 trackingWidest borderBlack border1 clx={"group transition hover:bg-primary-light"}>
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
							<Div pb40 imgTag src={IMAGES.mainWord}></Div>
							<Div flex pb30>
								<Div
									maxW150
									flex
									justifyCenter
									clx={"group transition hover:bg-primary-light"}
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
						<Div ml110 maxW330>
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
					<Div flex justifyCenter itemsCenter mt40 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.rebirth[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.weirdwine[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.wizardwebe[locale]}
								</Div>
							</Div>
						</Div>
						<Div textSecondary fontSize48 mx100 clx={"text-stroke"}>
							Collection
						</Div>
					</Div>
					<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
						<Div textSecondary2 fontSize48 mx80 clx={"text-stroke"}>
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.pioneer[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.socializetoearn[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InDigitlaWorld.capsule[locale]}
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
					<Div flex justifyCenter itemsCenter mt40 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InRealWorld.webegoods[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InRealWorld.webepartners[locale]}
								</Div>
							</Div>
						</Div>
						<Div textSecondary fontSize48 mx120 clx={"text-stroke"}>
							Brand
						</Div>
					</Div>
					<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"}>
						<Div textSecondary2 fontSize48 mx90 clx={"text-stroke"}>
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InRealWorld.weirdirl[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InRealWorld.weirdprojects[locale]}
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
									clx={"opacity-0 transition group-hover:transition-all group-hover:translate-y-10 group-hover:opacity-100 "}
								>
									{wording.index.InRealWorld.webedao[locale]}
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
						<Div textCenter textSecondary2 fontSize36 mt-20 clx={"text-stroke"}>
							Departing for
							<Div spanTag textSecondary >
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
										<Div textSecondary2 textCenter textXl balooB fontBold>
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
						<Div textCenter textSecondary2 fontSize72 mb40 style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
							Lastly,{" "}
							<Div spanTag textSecondary>
								{" "}
								Say
							</Div>
						</Div>
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
			<MintingModal open={open} onClose={() => setOpen(false)} />
		</>
	);
};


export default Index;
