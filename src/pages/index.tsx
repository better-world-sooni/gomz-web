import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import useIsTablet from "src/hooks/useIsTablet";
import { useRouter } from "next/router";
import EmptyBlock from "src/components/EmptyBlock";
import { wording } from "src/wording/wording";
import Footer from "src/components/common/Footer";
import Col from "src/components/Col";
import Row from "src/components/Row";
import MainTopBar from "src/components/common/MainTopBar";
import { team } from "src/modules/team";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { truncateKlaytnAddress } from "src/helpers/klaytnAddressHelper";
import {
	MAX_MINT,
	MAX_SUPPLY,
	MintingStep,
	POST_WHITELIST2_SUPPLY,
	POST_WHITELIST_PRESALE_SUPPLY,
	POST_WHITELIST_SUPPLY,
	WHITELIST_MAX_MINT,
} from "src/modules/minting";
import { useContractState } from "src/hooks/klaytn/useContractState";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useDispatch } from "react-redux";
import { mintingModalAction } from "src/store/reducers/modalReducer";
import { faqs } from "src/modules/faqs";
import { Faq } from "src/components/Faq";
import { FaArrowsAlt, FaDirections, FaDiscord, FaLink, FaLocationArrow } from "react-icons/fa";

const Index: NextPage = () => {
	const isTablet = useIsTablet();
	const { locale } = useRouter();
	const handleClickReadStory = () => {
		href(urls.story.index);
	};
	const kaikas = useKaikas();
	const connectWallet = async () => {
		if (kaikas) {
			await kaikas.enable();
		} else {
			alert("카이카스를 설치해 주세요.");
		}
	};
	const { mintingStep, totalSupply } = useContractState();
	const { whitelisted, amountMinted, balance } = useAddressState({
		kaikas,
	});

	if (isTablet) {
		return (
			<Div relative overflowHidden>
				<BasicHead />
				<MainTopBar />
				<Div hScreen bgTertiary px15>
					<Div flex itemsCenter justifyCenter hFull mxAuto relative>
						<Div>
							<Div mxAuto bgSecondary rounded20 borderWhite shadowSm border5 relative mt50 wFull px30>
								<Div imgTag src={IMAGES.webeTshirtillust} mb={-1} mt={"-13%"}></Div>
								{/* change height of the above line to change overall size of the box*/}
								<Div absolute imgTag h={"5%"} src={IMAGES.heart} top={"12%"} right={"10%"}></Div>
								<Div absolute imgTag h={"8%"} src={IMAGES.earth} top={"55%"} right={"5%"}></Div>
								<Div absolute imgTag h={"5%"} src={IMAGES.moon} top={"63%"} right={"10%"}></Div>
								<Div absolute imgTag h={"13%"} src={IMAGES.alien} top={"80%"} left={"-5%"}></Div>
								<Div absolute imgTag h={"7%"} src={IMAGES.saturn} top={"60%"} left={"10%"}></Div>
								<Div absolute imgTag h={"5%"} src={IMAGES.planet} top={"20%"} left={"3%"}></Div>
								<Div absolute imgTag h={"5%"} src={IMAGES.spaceGun} top={"10%"} left={"15%"}></Div>
							</Div>
							<EmptyBlock h={20} />
							<Div flex justifyCenter>
								<Div textPrimary fontSize18 textCenter>
								The Weird Promoters of 
								<Div spanTag textSecondary>
								{" "}BetterWorld
									</Div>, the Ultimate Playground for Your Web 3.0 Identites.{" "}
									
								</Div>
							</Div>
							<EmptyBlock h={20} />
							<Div flex justifyCenter>
								<Div
									clx={"group transition hover:bg-primary-light"}
									bgSecondary
									roundedFull
									px25
									py8
									fontSize18
									textWhite
									borderBlack
									border2
									aTag
									href={"https://ov0lo4k3pio.typeform.com/to/X2mrqgWB"}
									cursorPointer
									flex
									gapX={10}
									itemsCenter
									style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
								>
									<Div imgTag src={IMAGES.twinkle} h20></Div>
									<Div spanTag>Apply for 2nd OG</Div>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
				<Div style={{ background: "linear-gradient(180deg, #37315A 0%, #413F70 72%, rgb(102, 129, 197) 100%)" }} relative>
					<EmptyBlock h={100} />
					<Div textWhite fontSize36 leadingNone data-aos="fade-up" px30>
						We Be
						<Div spanTag textSecondary>
							{" "}
							Weird, Different, and Free.
						</Div>
					</Div>
					<EmptyBlock h={30} />
					<Div fontSize15 balooR px30 mt5 data-aos="fade-up">
						{wording.story.index.value[locale]}
					</Div>
					<EmptyBlock h={30} />
					<Div grid gridCols4 gapX={20} gapY={15} px30 data-aos="fade-up">
						{new Array(12).fill(null).map((_, index) => {
							return (
								<Div key={index} inlineBlock>
									<Div imgTag src={IMAGES.examplePfp[index + 1]} roundedLg shadowLg></Div>
								</Div>
							);
						})}
					</Div>
					<EmptyBlock h={100} />
					<Div px15>
						<Div
							data-aos="fade-up"
							shadowMd
							style={{
								backgroundImage: `url(${IMAGES.storyBannerMobile})`,
								backgroundSize: "cover",
								backgroundPositionY: "center",
								backgroundPositionX: "center",
							}}
							h150
							roundedLg
							flex
							px30
							onClick={handleClickReadStory}
							cursorPointer
						>
							<Div flex flexCol justifyCenter>
								<Div textWhite fontSize14>
									How did the weird journey begin?
									<br/>Once upon a time...{/* Becoming WEirD isn&apos;t easy.. <br />
									It requires courage. <br />
									It&apos;s something to be proud of. */}
								</Div>
								<Div flex mt10>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgPrimary
										roundedFull
										px15
										py4
										fontSize13
										textWhite
										borderBlack
										border2
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										READ THE STORY
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>
					<EmptyBlock h={100} />
					<Div flex px30 gapX={20} data-aos="fade-up">
							<Div maxW={150} imgTag src={IMAGES.bwpreview2}></Div>
							<Div maxW={150} imgTag src={IMAGES.bwpreview}></Div>
					</Div>
					<EmptyBlock h={30} />
							<Div px30 textCenter textWhite fontSize36>
								<Div spanTag textSecondary leadingNone>
									Be Weird to Earn
								</Div><br/>in BetterWorld
								<EmptyBlock h={30} />
								<Div fontSize15 balooR mt5>
								{wording.index.BetterWorld[locale]}
								</Div>
								<EmptyBlock h={30} />
								<Div flex justifyCenter mt5>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgSecondary
										roundedFull
										px30
										py8
										fontSize18
										textWhite
										borderBlack
										border2
										aTag
										href={"https://www.betterworldapp.io"}
										cursorPointer
										flex
										gapX={10}
										itemsCenter
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>	
										<FaLocationArrow></FaLocationArrow>
										<Div> Go to BetterWorld</Div>
									</Div>
								</Div>
							</Div>
					<EmptyBlock h={100} />
					<Div textCenter textWhite fontSize36 data-aos="fade-up">
						Partnered with<br></br>
						<Div spanTag textSecondary>
							{" "}
							the Best
						</Div>
					</Div>
					<Div px30 flex itemsCenter mt30 gapX={20} data-aos="fade-up">
						<Div flex1 px15>
							<Div w100 imgTag src={IMAGES.partners.pala}></Div>
						</Div>
						<Div flex1 px15>
							<Div imgTag src={IMAGES.partners.aiLabs}></Div>
						</Div>
					</Div>
					<Div px30 flex itemsCenter mt30 gapX={20} data-aos="fade-up">
						<Div flex1 px15>
							<Div imgTag src={IMAGES.partners.blinkers}></Div>
						</Div>
						<Div flex1 px30>
							<Div imgTag src={IMAGES.partners.kote}></Div>
						</Div>
					</Div>
					<Div px30 flex itemsCenter mt30 gapX={20} data-aos="fade-up">
						<Div flex1 px15>
							<Div imgTag src={IMAGES.partners.club021}></Div>
						</Div>
						<Div flex1 px30>
							<Div imgTag src={IMAGES.partners.lgc}></Div>
						</Div>
					</Div>
					<Div px30 flex itemsCenter mt30 gapX={20} data-aos="fade-up">
						<Div flex1 px15>
							<Div imgTag src={IMAGES.partners.level19}></Div>
						</Div>
						<Div flex1 px30>
							<Div imgTag src={IMAGES.partners.myBias}></Div>
						</Div>
					</Div>
					<EmptyBlock h={100} />
					<Div textCenter textWhite fontSize36 data-aos="fade-up">
						The{" "}
						<Div spanTag textSecondary>
							{" "}
							First 8
						</Div>{" "}
						WeBe
						<Div textCenter textWhite fontSize18 data-aos="fade-up">
							Departing for{" "}
							<Div spanTag textSecondary>
								{" "}
								BetterWorld
							</Div>
						</Div>
					</Div>
					<Div mt20 data-aos="fade-up">
						{team(locale).map((member, index) => {
							return (
								<Div key={index} inlineBlock>
									<Div flex mt20 itemsCenter>
										<Div mx15 w150 imgTag src={member.imageUri} roundedXl shadowLg></Div>
										<Div flexCol mr15>
											<Div textSecondary2 textLeft textMd balooB fontBold>
												{member.name} {"  "}
												<Div textSecondary2 textLeft fontSize8 balooR italic spanTag>
													{member.position}
												</Div>
											</Div>
											<Div mt5 textSecondary2 textLeft fontSize10 balooR>
												{member.specialty}
											</Div>
										</Div>
									</Div>
								</Div>
							);
						})}
					</Div>
					<EmptyBlock h={100} />
					<Div textCenter textWhite fontSize36 mb30 data-aos="fade-up">
						FAQs
					</Div>
					<Div px30 data-aos="fade-up">
						{faqs(locale).map(({ question, answer, image }, index) => {
							return <Faq key={index} question={question} answer={answer} image={image} isTablet={true} />;
						})}
					</Div>
					<EmptyBlock h={100} />
					<Div textCenter textWhite fontSize36 data-aos="fade-up">
						Lastly,{" "}
						<Div spanTag textSecondary>
							{" "}
							Say
						</Div>
					</Div>
					<EmptyBlock h={30} />
					<Row data-aos="fade-up">
						<Col></Col>
						<Col auto>
							<Div fontSize28 clx={"rainbow-text-mobile"}>
								WeeEEeeEeWwwoooOO
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<EmptyBlock h={100} />
					<Footer />
				</Div>
			</Div>
		);
	}
	return (
		<Div relative>
			<BasicHead />
			<MainTopBar />
			<Div hScreen bgTertiary px80>
				<Div flex itemsCenter hFull mxAuto z10 relative>
					<Div flex itemsCenter>
						<Div flexCol>
						<Div flex justifyCenter>
							<Div imgTag src={IMAGES.logos.webeLogo} w300></Div>
						</Div>
						<Div px={kaikas?.selectedAddress ? 130 : 150} relative mt20 w700>
							{kaikas?.selectedAddress ? (
								<Div textWhite fontSize={"1.5vw"} textCenter itemsCenter>
									<Title
										mintingStep={mintingStep}
										whitelisted={whitelisted}
										totalSupply={totalSupply}
										amountMinted={amountMinted}
										balance={balance}
									/>
								</Div>
							) : (
								<Div textPrimary fontSize={"1.5vw"} textCenter>
								The Weird Promoters of 
								<Div spanTag textSecondary>
								{" "}BetterWorld
									</Div>, the Ultimate Playground for Your Web 3.0 Identites.{" "}
								</Div>
							)}
						</Div>
						<EmptyBlock h={20} />
						{kaikas?.selectedAddress ? (
							<CallToAction
								mintingStep={mintingStep}
								whitelisted={whitelisted}
								totalSupply={totalSupply}
								amountMinted={amountMinted}
								balance={balance}
							/>
						) : (
							<Div flex justifyCenter>
								<Div
									clx={"group transition hover:bg-primary-light"}
									bgSecondary
									roundedFull
									px30
									py8
									fontSize23
									textWhite
									borderBlack
									border2
									onClick={connectWallet}
									cursorPointer
									flex
									gapX={10}
									itemsCenter
									style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
								>
									<Div imgTag src={IMAGES.twinkle} h25></Div>
									<Div>MINT</Div>
								</Div>
							</Div>
						)}
						</Div>
						<Div absolute right={-80} imgTag src={IMAGES.webeBetterworld} hScreen></Div>
					</Div>
				</Div>
			</Div>
			<Div
				style={{
					background: "linear-gradient(180deg,  #37315A 0%, #413F70 72%, rgb(102, 129, 197) 100%)",
					overflow: "hidden",
				}}
				relative
			>
				<Div absolute w350 top0 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
				<Div absolute w280 top400 right50 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
				<Div px80>
					<Div maxW={1150} mxAuto>
						<EmptyBlock h={160} />
						<Div flex gapX={50} itemsCenter data-aos="fade-up">
							<Div grid gridCols3 gapX={20} gapY={20}>
								{new Array(9).fill(null).map((_, index) => {
									return (
										<Div key={index} inlineBlock>
											<Div imgTag src={IMAGES.examplePfp[index + 1]} roundedLg shadowLg w100 h100></Div>
										</Div>
									);
								})}
							</Div>

							<Div flex1>
								<Div textWhite fontSize52 leadingNone>
									We Be
									<Div spanTag textSecondary>
										{" "}
										Weird,<br></br> Different, and Free.
									</Div>
								</Div>
								<Div fontSize18 balooR mt30>
									{wording.story.index.value[locale]}
								</Div>
							</Div>
						</Div>
						<EmptyBlock h={160} />
						<Div
							data-aos="fade-up"
							shadowMd
							style={{
								backgroundImage: `url(${IMAGES.storyBanner})`,
								backgroundSize: "cover",
								backgroundPositionY: "center",
								backgroundPositionX: "center",
							}}
							h200
							roundedLg
							flex
							px50
							onClick={handleClickReadStory}
							cursorPointer
						>
							<Div flex flexCol justifyCenter>
								<Div textWhite fontSize18>
									How did the weird journey begin?
									<br/>Once upon a time...{/* Becoming WEirD isn&apos;t easy.. <br />
									It requires courage. It&apos;s something to be proud of. */}
								</Div>
								<Div flex mt10>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgPrimary
										roundedFull
										px30
										py8
										fontSize20
										textWhite
										borderBlack
										border2
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										READ THE STORY
									</Div>
								</Div>
							</Div>
						</Div>
						<EmptyBlock h={160} />
						<Div flex gapX={20} justifyCenter itemsCenter data-aos="fade-up">
							<Div w250 imgTag src={IMAGES.bwpreview2}></Div>
							<Div w250 imgTag src={IMAGES.bwpreview}></Div>
							<Div ml50 textCenter textWhite maxW={550} fontSize52>
								<Div spanTag textSecondary>
									Be Weird to Earn
								</Div><br/>in BetterWorld
								<Div fontSize18 balooR mt20>
								{wording.index.BetterWorld[locale]}
								</Div>
								<Div flex justifyCenter mt30>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgSecondary
										roundedFull
										px30
										py8
										fontSize23
										textWhite
										borderBlack
										border2
										aTag
										href={"https://www.betterworldapp.io"}
										cursorPointer
										flex
										gapX={10}
										itemsCenter
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>	
										<FaLocationArrow></FaLocationArrow>
										<Div> Go to BetterWorld</Div>
									</Div>
								</Div>
							</Div>
						</Div>

						<EmptyBlock h={160} />
						<Div textCenter textWhite fontSize52 data-aos="fade-up">
							Partnered with{" "}
							<Div spanTag textSecondary>
								{" "}
								the Best
							</Div>
						</Div>
						<Div flex itemsCenter gapX={100} mt30 data-aos="fade-up">
							<Div flex1>
								<Div imgTag h40 src={IMAGES.partners.aiLabs}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h30 src={IMAGES.partners.blinkers}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h30 src={IMAGES.partners.level19}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h40 src={IMAGES.partners.club021}></Div>
							</Div>
						</Div>
						<Div flex justifyCenter itemsCenter gapX={100} mt30 data-aos="fade-up">
							<Div flex1>
								<Div imgTag h40 src={IMAGES.partners.pala}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h40 src={IMAGES.partners.lgc}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h40 src={IMAGES.partners.kote}></Div>
							</Div>
							<Div flex1>
								<Div imgTag h60 src={IMAGES.partners.myBias}></Div>
							</Div>
						</Div>
						<EmptyBlock h={160} />
						<Div textCenter textWhite fontSize52 data-aos="fade-up">
							The{" "}
							<Div spanTag textSecondary>
								{" "}
								First 8
							</Div>{" "}
							WeBe
							<Div textCenter textWhite fontSize24 data-aos="fade-up">
								Departing for{" "}
								<Div spanTag textSecondary>
									{" "}
									BetterWorld
								</Div>
							</Div>
						</Div>
						<Div mt20 data-aos="fade-up" grid gridCols2 gapX={30} gapY={30}>
							{team(locale).map((member, index) => {
								return (
									<Div key={index} inlineBlock mx30>
										<Div flex mt20 maxW500>
											<Col itemsCenter justifyCenter><Div maxH180 imgTag src={member.imageUri} roundedXl shadowLg/></Col>
											<Col ml30>
												<Div textSecondary2 textLeft textLg balooB fontBold>
													{member.name}
												</Div>
												<Div textSecondary2 textLeft fontSize11 balooR italic>
													{member.position}
												</Div>
												<Div mt5 textSecondary2 textLeft fontSize12 balooR>
													{member.specialty}
												</Div>
											</Col>
										</Div>
									</Div>
								);
							})}
						</Div>
						<EmptyBlock h={160} />
						<Div textCenter textWhite fontSize52 mb30 data-aos="fade-up">
							FAQs
						</Div>
						<Div maxW={900} px40 mxAuto data-aos="fade-up">
							{faqs(locale).map(({ question, answer, image }, index) => {
								return <Faq key={index} question={question} answer={answer} image={image} isTablet={false} />;
							})}
						</Div>
						<EmptyBlock h={160} />
						<Div textCenter textWhite fontSize52 data-aos="fade-up">
							Lastly,{" "}
							<Div spanTag textSecondary>
								{" "}
								Say
							</Div>
						</Div>
						<Row mt100 h100>
							<Col></Col>
							<Col auto>
								<Div clx={"rainbow-text"}>WeeEEeeEeWwwoooOO</Div>
							</Col>
							<Col></Col>
						</Row>
						<EmptyBlock h={160} />
					</Div>
					<Footer />
				</Div>
			</Div>
		</Div>
	);
};

const Title = ({ mintingStep, whitelisted, totalSupply, amountMinted, balance }) => {
	if (mintingStep == MintingStep.Initial) {
		if (whitelisted)
			return (
				<Div spanTag>
					You are our first OGs! Your minting starts{" "}
					<Div spanTag textPrimary>
						June 28th
					</Div>
					. Enter Discord for the countdown.
				</Div>
			);
		return (
			<Div spanTag>
				our first OGs minting starts{" "}
				<Div spanTag textPrimary>
					June 28th
				</Div>
				. Enter Discord to apply to get on our first OGs!
			</Div>
		);
	} else if (mintingStep == MintingStep.Whitelist) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST_SUPPLY) {
				if (amountMinted < WHITELIST_MAX_MINT)
					return (
						<Div spanTag>
							our first OGs minting is in progress.{" "}
							<Div spanTag textPrimary>
								Mint{" "}
							</Div>
							your first WeBe!
						</Div>
					);
				return (
					<Div spanTag>
						Looks like you&apos;ve minted. Talk to your fellow WeBes on{" "}
						<Div spanTag textPrimary>
							Discord{" "}
						</Div>
						!
					</Div>
				);
			}
			if (amountMinted < WHITELIST_MAX_MINT)
				return (
					<Div spanTag>
						The first WeBe OG has sold out. Get ready for the next one on{" "}
						<Div spanTag textPrimary>
							Discord
						</Div>
						!
					</Div>
				);
			return (
				<Div spanTag>
					The first WeBe OG has sold out. Join WeBe&apos;s journey on{" "}
					<Div spanTag textPrimary>
						BetterWorld{" "}
					</Div>
					!
				</Div>
			);
		}
		if (totalSupply < POST_WHITELIST_SUPPLY) {
			return (
				<Div spanTag>
					our first OGs minting is in progress. Enter{" "}
					<Div spanTag textPrimary>
						Discord{" "}
					</Div>
					to apply to get on the next OG!
				</Div>
			);
		}
		return (
			<Div spanTag>
				The first WeBe OG has sold out. {" "}
				<Div spanTag textPrimary>
					Apply now{" "}
				</Div>
					to be the 2nd OG!
			</Div>
		);
	} else if (mintingStep == MintingStep.Whitelist2) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST2_SUPPLY) {
				if (amountMinted < WHITELIST_MAX_MINT)
					return (
						<Div spanTag>
							The second OG minting is in progress.{" "}
							<Div spanTag textPrimary>
								Mint{" "}
							</Div>
							your first WeBe!
						</Div>
					);
				return (
					<Div spanTag>
						Looks like you&apos;ve minted. You can now talk to your fellow WeBes on{" "}
						<Div spanTag textPrimary>
							BetterWorld{" "}
						</Div>
						!
					</Div>
				);
			}
			if (amountMinted < WHITELIST_MAX_MINT)
				return (
					<Div spanTag>
						The second WeBe OG has sold out. You can now talk to your fellow WeBes on{" "}
						<Div spanTag textPrimary>
							BetterWorld{" "}
						</Div>
						!
					</Div>
				);
			return (
				<Div spanTag>
					The second Webe OG has sold out. Enter{" "}
					<Div spanTag textPrimary>
						Discord{" "}
					</Div>
					for to apply for the whitelist!
				</Div>
			);
		}
		if (totalSupply < POST_WHITELIST2_SUPPLY) {
			return (
				<Div spanTag>
					The second OG minting is in progress. Enter{" "}
					<Div spanTag textPrimary>
						Discord{" "}
					</Div>
					to apply for the whitelist!
				</Div>
			);
		}
		return (
			<Div spanTag>
				The second Webe OG has sold out. Enter{" "}
				<Div spanTag textPrimary>
					Discord{" "}
				</Div>
				to apply for the whitelist!
			</Div>
		);
	} else if (mintingStep == MintingStep.WhitelistPresale) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST_PRESALE_SUPPLY) {
				if (amountMinted < MAX_MINT) {
					if (amountMinted > 0)
						return (
							<Div spanTag>
								Whitelist is in progress.{" "}
								<Div spanTag textPrimary>
									Mint{" "}
								</Div>
								another WeBe!
							</Div>
						);
					return (
						<Div spanTag>
							Whitelist is in progress.{" "}
							<Div spanTag textPrimary>
								Mint{" "}
							</Div>
							your first WeBe!
						</Div>
					);
				}
				return (
					<Div spanTag>
						Looks like you&apos;ve minted the max amount allowed for a wallet. You can now talk to your fellow WeBes on{" "}
						<Div spanTag textPrimary>
							BetterWorld{" "}
						</Div>
						!
					</Div>
				);
			}
			if (amountMinted > 0)
				return (
					<Div spanTag>
						The WeBe whitelist has sold out. You can now talk to your fellow WeBes on{" "}
						<Div spanTag textPrimary>
							BetterWorld{" "}
						</Div>
						!
					</Div>
				);
			return (
				<Div spanTag>
					The WeBe whitelist has sold out. You can now talk to your fellow WeBes on{" "}
					<Div spanTag textPrimary>
						BetterWorld{" "}
					</Div>
					!
				</Div>
			);
		}
		if (totalSupply < POST_WHITELIST_PRESALE_SUPPLY) {
			return (
				<Div spanTag>
					Whitelist minting is in progress. Enter{" "}
					<Div spanTag textPrimary>
						Discord{" "}
					</Div>
					to get ready for the public sale!
				</Div>
			);
		}
		return (
			<Div spanTag>
				The WeBe whitelist has sold out. Enter{" "}
				<Div spanTag textPrimary>
					Discord{" "}
				</Div>
				to get ready for the public sale!
			</Div>
		);
	} else if (mintingStep == MintingStep.Public) {
		if (totalSupply < MAX_SUPPLY) {
			if (amountMinted < MAX_MINT) {
				if (amountMinted > 0)
					return (
						<Div spanTag>
							Public mint is in progress.{" "}
							<Div spanTag textPrimary>
								Mint{" "}
							</Div>
							your first WeBe!
						</Div>
					);
				return (
					<Div spanTag>
						Public mint is in progress.{" "}
						<Div spanTag textPrimary>
							Mint
						</Div>
						another Webe!
					</Div>
				);
			}
			return (
				<Div spanTag>
					Looks like you&apos;ve minted the max amount allowed for a wallet. You can now talk to your fellow WeBes on{" "}
					<Div spanTag textPrimary>
						BetterWorld{" "}
					</Div>
					!
				</Div>
			);
		}
		if (amountMinted > 0)
			return (
				<Div spanTag>
					WeBes have sold out! You can now talk to your fellow WeBes on{" "}
					<Div spanTag textPrimary>
						BetterWorld{" "}
					</Div>
					!
				</Div>
			);
		return (
			<Div spanTag>
				WeBes have sold out! Check out the weird community in{" "}
				<Div spanTag textPrimary>
					Discord{" "}
				</Div>
				!
			</Div>
		);
	} else if (mintingStep == MintingStep.Rebirth) {
		if (balance > 0)
			return (
				<Div spanTag>
					Everybody deserves a second chance! Check on your WeBes for{" "}
					<Div spanTag textPrimary>
						Rebirth
					</Div>
					.
				</Div>
			);
		return (
			<Div spanTag>
				WeBes have sold out! Check out the weird community in{" "}
				<Div spanTag textPrimary>
					Discord{" "}
				</Div>
				!
			</Div>
		);
	} else {
		if (balance > 0)
			return (
				<Div spanTag>
					Check on your{" "}
					<Div spanTag textPrimary>
						WeBes{" "}
					</Div>
					!
				</Div>
			);
		return (
			<Div spanTag>
				WeBes have sold out! Check out the weird community in{" "}
				<Div spanTag textPrimary>
					Discord{" "}
				</Div>
				!
			</Div>
		);
	}
};

const CallToAction = ({ mintingStep, whitelisted, totalSupply, amountMinted, balance }) => {
	const dispatch = useDispatch();
	const handleClickDiscord = () => {
		href("https://discord.com/invite/7tV3WxWf8p");
	};
	const handleClickCheckOnMyWebes = () => {
		href(urls["my-webes"].index);
	};
	const handleClickMint = () => dispatch(mintingModalAction({ enabled: true }));
	if (mintingStep == MintingStep.Initial) {
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Whitelist) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST_SUPPLY) {
				if (amountMinted < WHITELIST_MAX_MINT)
					return (
						<Div flex justifyCenter>
							<Div
								clx={"group transition hover:bg-primary-light"}
								bgSecondary
								roundedFull
								px30
								py8
								fontSize23
								textWhite
								borderBlack
								border2
								onClick={handleClickMint}
								cursorPointer
								flex
								gapX={10}
								itemsCenter
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								<Div>MINT</Div>
							</Div>
						</Div>
					);
			}
		}
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					aTag
					href={"https://ov0lo4k3pio.typeform.com/to/X2mrqgWB"}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>Apply for 2nd OG</Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Whitelist2) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST2_SUPPLY) {
				if (amountMinted < WHITELIST_MAX_MINT)
					return (
						<Div flex justifyCenter>
							<Div
								clx={"group transition hover:bg-primary-light"}
								bgSecondary
								roundedFull
								px30
								py8
								fontSize23
								textWhite
								borderBlack
								border2
								onClick={handleClickMint}
								cursorPointer
								flex
								gapX={10}
								itemsCenter
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								<Div>MINT</Div>
							</Div>
						</Div>
					);
			}
		}
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.WhitelistPresale) {
		if (whitelisted) {
			if (totalSupply < POST_WHITELIST_PRESALE_SUPPLY) {
				if (amountMinted < MAX_MINT) {
					return (
						<Div flex justifyCenter>
							<Div
								clx={"group transition hover:bg-primary-light"}
								bgSecondary
								roundedFull
								px30
								py8
								fontSize23
								textWhite
								borderBlack
								border2
								onClick={handleClickMint}
								cursorPointer
								flex
								gapX={10}
								itemsCenter
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								<Div>MINT</Div>
							</Div>
						</Div>
					);
				}
			}
		}
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Public) {
		if (totalSupply < MAX_SUPPLY) {
			if (amountMinted < MAX_MINT) {
				return (
					<Div flex justifyCenter>
						<Div
							clx={"group transition hover:bg-primary-light"}
							bgSecondary
							roundedFull
							px30
							py8
							fontSize23
							textWhite
							borderBlack
							border2
							onClick={handleClickMint}
							cursorPointer
							flex
							gapX={10}
							itemsCenter
							style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
						>
							<Div>MINT</Div>
						</Div>
					</Div>
				);
			}
		}
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Rebirth) {
		if (balance > 0)
			return (
				<Div flex justifyCenter>
					<Div
						clx={"group transition hover:bg-primary-light"}
						bgSecondary
						roundedFull
						px30
						py8
						fontSize23
						textWhite
						borderBlack
						border2
						onClick={handleClickCheckOnMyWebes}
						cursorPointer
						flex
						gapX={10}
						itemsCenter
						style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
					>
						<Div>CHECK ON MY WEBES</Div>
					</Div>
				</Div>
			);
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	} else {
		if (balance > 0)
			return (
				<Div flex justifyCenter>
					<Div
						clx={"group transition hover:bg-primary-light"}
						bgSecondary
						roundedFull
						px30
						py8
						fontSize23
						textWhite
						borderBlack
						border2
						onClick={handleClickCheckOnMyWebes}
						cursorPointer
						flex
						gapX={10}
						itemsCenter
						style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
					>
						<Div>CHECK ON MY WEBES</Div>
					</Div>
				</Div>
			);
		return (
			<Div flex justifyCenter>
				<Div
					clx={"group transition hover:bg-primary-light"}
					bgSecondary
					roundedFull
					px30
					py8
					fontSize23
					textWhite
					borderBlack
					border2
					onClick={handleClickDiscord}
					cursorPointer
					flex
					gapX={10}
					itemsCenter
					style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
				>
					<FaDiscord size={30} />
					<Div>ENTER DISCORD</Div>
				</Div>
			</Div>
		);
	}
};


export default Index;
