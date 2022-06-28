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
import { MintingState, MintingStep } from "src/modules/minting";
import { useContractState } from "src/hooks/klaytn/useContractState";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useDispatch } from "react-redux";
import { inviteModalAction, mintingModalAction } from "src/store/reducers/modalReducer";

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
			alert("Please install kaikas.");
		}
	};
	const { mintingStep, totalSupply, maxSupply } = useContractState();
	const { invitesRemaining, mintRemaining, mintingState, invitor, amountMinted, balance, loading } = useAddressState({
		kaikas,
	});

	if (isTablet) {
		return (
			<>
				<BasicHead />
				<MainTopBar />
				<Div hScreen bgTertiary px15>
					<Div flex itemsCenter justifyCenter hFull mxAuto z100 relative>
						<Div>
							<Div mxAuto bgSecondary rounded20 borderWhite border10 relative shadowSm mt50 wFull px30>
								<Div imgTag src={"/images/webeIceCream.png"} mb={-1} mt={"-13%"}></Div>
								{/* change height of the above line to change overall size of the box*/}
								{/* <Div imgTag src={"/images/spaceship.png"} h={"34%"} top={"-10%"} right={"-15%"} absolute z={-100} clx={""}></Div> */}
								<Div absolute imgTag h={"8%"} src={"/images/earth.png"} top={"55%"} right={"5%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/moon.png"} top={"63%"} right={"10%"}></Div>
								<Div absolute imgTag h={"13%"} src={"/images/alien.png"} top={"80%"} left={"-5%"}></Div>
								<Div absolute imgTag h={"7%"} src={"/images/saturn.png"} top={"60%"} left={"10%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/planet.png"} top={"20%"} left={"3%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/spaceGun.png"} top={"10%"} left={"15%"}></Div>
							</Div>
							<EmptyBlock h={20} />
							<Div flex justifyCenter>
								<Div textPrimary fontSize18 textCenter>
									Webe is a cultural franchise dedicated to <br />
									young,{" "}
									<Div spanTag textSecondary>
										WEirD
									</Div>{" "}
									innovators.
								</Div>
							</Div>
							<EmptyBlock h={20} />
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
									<Div imgTag src={"/images/spaceship.png"} h30></Div>
									<Div>GET WHITELISTED</Div>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
				<Div style={{ background: "linear-gradient(180deg, #37315A 0%, #413F70 37.81%, rgb(102, 129, 197) 100%)" }} relative>
					<Div px15>
						<EmptyBlock h={100} />
						<Div
							data-aos="fade-up"
							shadowLg
							style={{
								backgroundImage: `url(${"/images/storyBannerMobile.png"})`,
								backgroundSize: "cover",
								backgroundPositionY: "center",
								backgroundPositionX: "center",
							}}
							h150
							rounded20
							flex
							px30
							onClick={handleClickReadStory}
							cursorPointer
						>
							<Div flex flexCol justifyCenter>
								<Div textWhite fontSize14>
									Becoming WEirD isn&apos;t easy.. <br />
									It requires courage. <br />
									It&apos;s something to be proud of.
								</Div>
								<Div flex mt10>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgPrimary
										roundedFull
										px15
										py4
										fontSize16
										textWhite
										borderBlack
										border2
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										READ OUR STORY
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>
					<EmptyBlock h={100} />
					<Div textWhite fontSize42 leadingNone data-aos="fade-up" px30>
						We Be
						<Div spanTag textSecondary>
							{" "}
							Weird, Different, and Free.
						</Div>
					</Div>
					<EmptyBlock h={30} />
					<Div textSecondary2 fontSize18 px30 data-aos="fade-up">
						Webe challenges those in their 20 and 30s to refuse to conform to what others think is a good university, a good job, and a good life and
						find what they truely want.
						<br />
						<br />
						The collection begins with 88 whitelisted holders minting on{" "}
						<Div spanTag textSecondary>
							July 18, 2022
						</Div>{" "}
						and will expand to a total of 8,888 NFTs by the end of the summer. Holders of Webe will have exclusive access to future products and
						experiences which are planned and designed in the{" "}
						<Div spanTag textSecondary>
							WEirDest
						</Div>{" "}
						manner possible.
					</Div>
					<EmptyBlock h={30} />
					<Div grid gridCols4 gapX={20} gapY={15} px15 data-aos="fade-up">
						{team(locale).map((member, index) => {
							return (
								<Div key={index} inlineBlock>
									<Div imgTag src={member.imageUri} roundedLg shadowLg></Div>
								</Div>
							);
						})}
						{team(locale).map((member, index) => {
							return (
								<Div key={index} inlineBlock>
									<Div imgTag src={member.imageUri} roundedLg shadowLg></Div>
								</Div>
							);
						})}
					</Div>
					<EmptyBlock h={100} />
					<Div textCenter textWhite fontSize42 data-aos="fade-up">
						Vision:
						<Div spanTag textSecondary>
							{" "}
							Digital{" "}
						</Div>
						Embodiment
					</Div>
					<EmptyBlock h={30} />
					<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"} data-aos="fade-up">
						<Div inlineFlex itemsCenter>
							<Div relative w180 h200 shadowLg bgPrimaryLight py30 ml15 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Re-<br></br>Birth
								<Div imgTag src={IMAGES.journeyIcons.rebirth}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div relative w180 h200 shadowLg bgPrimaryLight py30 ml15 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Weird<br></br>Wine
								<Div imgTag src={IMAGES.journeyIcons.weirdWine}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div textSecondary fontSize36 mx15>
								Collection
							</Div>
						</Div>
					</Div>
					<EmptyBlock h={15} />
					<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"} data-aos="fade-up">
						<Div inlineFlex itemsCenter>
							<Div textSecondary2 fontSize36 mx30>
								BetterWorld
							</Div>
							<Div relative w180 h200 shadowLg bgPrimaryLight mr15 py30 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Pioneer
								<Div imgTag src={IMAGES.journeyIcons.pioneer}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div relative w180 h200 shadowLg bgPrimaryLight mr15 py30 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Capsule
								<Div imgTag src={IMAGES.journeyIcons.capsule}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
					<Div textCenter textWhite fontSize42 data-aos="fade-up">
						Vision:
						<Div spanTag textSecondary>
							{" "}
							Physical{" "}
						</Div>
						Embodiment
					</Div>
					<EmptyBlock h={30} />
					<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"} data-aos="fade-up">
						<Div inlineFlex itemsCenter>
							<Div relative w180 h200 shadowLg bgPrimaryLight py30 ml15 textCenter roundedLg style={{ overflowY: "hidden" }}>
								WeBe Goods
								<Div imgTag src={IMAGES.journeyIcons.webeGoods}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div relative w180 h200 shadowLg bgPrimaryLight py30 ml15 textCenter roundedLg style={{ overflowY: "hidden" }}>
								WeBe<br></br>Partners
								<Div imgTag src={IMAGES.journeyIcons.webePartners}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div textSecondary fontSize36 mx30>
								Brand
							</Div>
						</Div>
					</Div>
					<EmptyBlock h={15} />
					<Div textSecondary2 fontSize24 style={{ overflow: "auto", overflowY: "hidden" }} clx={"scrollbar-off"} data-aos="fade-up">
						<Div inlineFlex itemsCenter>
							<Div textSecondary2 fontSize36 mx30>
								Community
							</Div>
							<Div relative w180 h200 shadowLg bgPrimaryLight mr15 py30 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Weird IRL
								<Div imgTag src={IMAGES.journeyIcons.weirdIRL}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div relative w180 h200 shadowLg bgPrimaryLight mr15 py30 textCenter roundedLg style={{ overflowY: "hidden" }}>
								Weird Project
								<Div imgTag src={IMAGES.journeyIcons.weirdProjects}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
							<Div relative w180 h200 shadowLg bgPrimaryLight mr10 py30 textCenter roundedLg style={{ overflowY: "hidden" }}>
								WeBe DAO
								<Div imgTag src={IMAGES.journeyIcons.webeDAO}></Div>
								<Div absolute flex itemsCenter wFull hFull top0 left0 clx={"group transition hover:bg-primary-light hover:transition-all"} roundedLg>
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
					<Div textCenter textWhite fontSize42 data-aos="fade-up">
						The{" "}
						<Div spanTag textSecondary2>
							{" "}
							Team
						</Div>
					</Div>
					<EmptyBlock h={30} />
					<Div style={{ whiteSpace: "nowrap", overflow: "auto" }} clx={"scrollbar-off"} data-aos="fade-up">
						{team(locale).map((member, index) => {
							return (
								<Div key={index} inlineBlock mx15 balooR>
									<Div imgTag src={member.imageUri} w150 h150 roundedFull shadowLg></Div>
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
					<Div textCenter textWhite fontSize42 data-aos="fade-up">
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
			</>
		);
	}
	return (
		<Div relative>
			<BasicHead />
			<MainTopBar />
			<Div hScreen bgTertiary px80>
				{kaikas?.selectedAddress ? (
					<MainPageActions
						mintingStep={mintingStep}
						invitesRemaining={invitesRemaining}
						mintRemaining={mintRemaining}
						mintingState={mintingState}
						invitor={invitor}
						amountMinted={amountMinted}
						balance={balance}
						totalSupply={totalSupply}
						maxSupply={maxSupply}
						loading={loading}
					/>
				) : (
					<Div flex itemsCenter justifyCenter hFull maxW={1150} mxAuto mt={-60} z100 relative>
						<Div>
							<Div mxAuto bgSecondary rounded20 borderWhite border10 px150 relative shadowSm mt50>
								<Div imgTag src={"/images/webeIceCream.png"} h={"35vw"} mb={-1} mt={"-13%"}></Div>
								{/* change height of the above line to change overall size of the box*/}
								<Div imgTag src={"/images/spaceship.png"} h={"28%"} top={"-3%"} right={"-10%"} absolute z={-100} clx={""}></Div>
								<Div absolute imgTag h={"8%"} src={"/images/earth.png"} top={"55%"} right={"5%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/moon.png"} top={"63%"} right={"10%"}></Div>
								<Div absolute imgTag h={"13%"} src={"/images/alien.png"} top={"80%"} left={"-5%"}></Div>
								<Div absolute imgTag h={"7%"} src={"/images/saturn.png"} top={"60%"} left={"10%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/planet.png"} top={"20%"} left={"3%"}></Div>
								<Div absolute imgTag h={"5%"} src={"/images/spaceGun.png"} top={"10%"} left={"15%"}></Div>
							</Div>
							<EmptyBlock h={20} />
							<Div flex justifyCenter>
								<Div textPrimary fontSize18 textCenter>
									Webe is a cultural franchise dedicated to young,{" "}
									<Div spanTag textSecondary>
										WEirD
									</Div>{" "}
									innovators.
								</Div>
							</Div>
							<EmptyBlock h={20} />
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
									style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
								>
									CONNECT WALLET
								</Div>
							</Div>
						</Div>
					</Div>
				)}
			</Div>
			<Div
				style={{
					background: "linear-gradient(180deg, #37315A 0%, #413F70 37.81%, rgb(102, 129, 197) 100%)",
					overflow: "auto",
				}}
				relative
			>
				<Div absolute w350 top0 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
				<Div absolute w280 top400 right50 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
				<Div px80>
					<Div maxW={1150} mxAuto>
						<EmptyBlock h={100} />
						<Div
							data-aos="fade-up"
							shadowLg
							style={{
								backgroundImage: `url(${"/images/storyBanner.png"})`,
								backgroundSize: "cover",
								backgroundPositionY: "center",
								backgroundPositionX: "center",
							}}
							h200
							rounded20
							flex
							px50
							onClick={handleClickReadStory}
							cursorPointer
						>
							<Div flex flexCol justifyCenter>
								<Div textWhite fontSize18>
									Becoming WEirD isn&apos;t easy.. <br />
									It requires courage. It&apos;s something to be proud of.
								</Div>
								<Div flex mt10>
									<Div
										clx={"group transition hover:bg-primary-light"}
										bgPrimary
										roundedFull
										px30
										py8
										fontSize23
										textWhite
										borderBlack
										border2
										style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										READ OUR STORY
									</Div>
								</Div>
							</Div>
						</Div>
						<EmptyBlock h={200} />
						<Div flex gapX={50} itemsCenter data-aos="fade-up">
							<Div grid gridCols3 gapX={20} gapY={20}>
								{team(locale).map((member, index) => {
									return (
										<Div key={index} inlineBlock>
											<Div imgTag src={member.imageUri} roundedLg shadowLg w120 h120></Div>
										</Div>
									);
								})}
								{team(locale).map((member, index) => {
									return (
										<Div key={index} inlineBlock>
											<Div imgTag src={member.imageUri} roundedLg shadowLg w120 h120></Div>
										</Div>
									);
								})}
							</Div>
							<Div flex1>
								<Div textWhite fontSize52 leadingNone>
									We Be
									<Div spanTag textSecondary>
										{" "}
										Weird, Different, and Free.
									</Div>
								</Div>
								<Div textSecondary2 fontSize18 mt30>
									Webe challenges those in their 20 and 30s to refuse to conform to what others think is a good university, a good job, and a good
									life and find what they truely want.
									<br />
									<br />
									The collection begins with 88 whitelisted holders minting on{" "}
									<Div spanTag textSecondary>
										July 18, 2022
									</Div>{" "}
									and will expand to a total of 8,888 NFTs by the end of the summer. Holders of Webe will have exclusive access to future products and
									experiences which are planned and designed in the{" "}
									<Div spanTag textSecondary>
										WEirDest
									</Div>{" "}
									manner possible.
								</Div>
								<Div flex mt30>
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
										<Div imgTag src={"/images/spaceship.png"} h30></Div>
										<Div>GET WHITELISTED</Div>
									</Div>
								</Div>
							</Div>
						</Div>
						<EmptyBlock h={200} />
						<Div textCenter textWhite fontSize52 data-aos="fade-up">
							Vision:
							<Div spanTag textSecondary>
								{" "}
								Digital{" "}
							</Div>
							Embodiment
						</Div>
						<Div wFull flex mt40 textSecondary2 fontSize28 gapX={30} data-aos="fade-up">
							<Div relative flex1 h200 shadowMd bgPrimaryLight pt40 px40 roundedLg>
								Re-Birth
								<Div absolute top0 left0 wFull hFull flex itemsEnd justifyEnd>
									<Div flex1></Div>
									<Div flex1>
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
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg>
								Weird<br></br>Wine
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex1></Div>
									<Div flex1>
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
							<Div flex1 flex textSecondary2 fontSize40 itemsCenter justifyCenter>
								Collection
							</Div>
						</Div>
						<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 gapX={30} data-aos="fade-up">
							<Div flex1 flex textSecondary2 fontSize40 itemsCenter justifyCenter>
								BetterWorld
							</Div>
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								Pioneer
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex1></Div>
									<Div flex1>
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
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								Capsule
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex1></Div>
									<Div flex1>
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
						<EmptyBlock h={200} />
						<Div textCenter textWhite fontSize52 data-aos="fade-up">
							Vision:
							<Div spanTag textSecondary>
								{" "}
								Physical{" "}
							</Div>
							Embodiment
						</Div>
						<Div flex justifyCenter itemsCenter mt40 textSecondary2 fontSize28 gapX={30} data-aos="fade-up">
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								WeBe Goods
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex2></Div>
									<Div flex1>
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
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								WeBe Partners
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex2></Div>
									<Div flex1>
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
							<Div flex1 flex textSecondary2 fontSize40 itemsCenter justifyCenter>
								Brand
							</Div>
						</Div>
						<Div flex justifyCenter itemsCenter mt30 textSecondary2 fontSize28 gap={30} data-aos="fade-up">
							<Div flex1 flex textSecondary2 fontSize40 itemsCenter justifyCenter>
								Community
							</Div>
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
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
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								Weird<br></br>Project
								<Div absolute top0 left0 wFull hFull flex itemsEnd>
									<Div flex1></Div>
									<Div flex1>
										<Div imgTag src={IMAGES.journeyIcons.weirdProjects}></Div>
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
							<Div relative flex1 h200 shadowMd bgPrimaryLight p40 roundedLg overflowHidden>
								WeBe<br></br>DAO
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
										{wording.index.InRealWorld.webedao[locale]}
									</Div>
								</Div>
							</Div>
						</Div>
						{/* <EmptyBlock h={200} />
						<Div textCenter textWhite fontSize52>
							FAQs
						</Div>
						<Div maxW={900} mxAuto>
							{faqs(locale).map(({ question, answer }, index) => {
								return <Faq key={index} question={question} answer={answer} isTablet={false} />;
							})}
						</Div> */}
						<EmptyBlock h={200} />
						<Div textCenter textSecondary fontSize52 data-aos="fade-up">
							The{" "}
							<Div spanTag textWhite>
								{" "}
								Team
							</Div>
						</Div>
						<Div mt40 mxAuto gapX={30} flex data-aos="fade-up">
							{team(locale).map((member, index) => {
								return (
									<Div key={index} inlineBlock>
										<Div imgTag src={member.imageUri} roundedFull shadowLg></Div>
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
						<EmptyBlock h={200} />
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
						<EmptyBlock h={200} />
					</Div>
					<Footer />
				</Div>
			</Div>
		</Div>
	);
};

function MainPageActions({
	mintingStep,
	invitesRemaining,
	mintRemaining,
	mintingState,
	invitor,
	amountMinted,
	totalSupply,
	balance,
	maxSupply,
	loading,
}) {
	const tokensLeft = maxSupply - totalSupply;
	const dispatch = useDispatch();
	const handleClickReadStory = () => {
		href(urls.story.index);
	};
	const handleClickDiscord = () => {
		href("https://discord.com/invite/7tV3WxWf8p");
	};
	const handleClickCheckOnMyWebes = () => {
		href(urls["my-webes"].index);
	};
	const handleClickMint = () => dispatch(mintingModalAction({ enabled: true }));
	const handleClickInvite = () => dispatch(inviteModalAction({ enabled: true }));
	const loadingSubtitle = "loading...";
	if (mintingStep == MintingStep.Initial) {
		const subtitle =
			mintingState == MintingState.Initial
				? "The cultural franchise dedicated to global innovators, party heads, and Web 3 enthusiasts"
				: "And you are set! Just join the countdown in Discord:)";
		const buttons =
			mintingState == MintingState.Initial
				? [
						{ text: "Apply", handleClick: null },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ]
				: [
						{ text: "Enter Discord", handleClick: handleClickDiscord },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ];
		return (
			<Div flex itemsCenter justifyCenter hScreen maxW={1150} mxAuto mt={-60}>
				<Div flexCol>
					<Div textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						We Be
						<Div spanTag textSecondary>
							{" "}
							Weird, Different, and Free.
						</Div>
					</Div>
					<Div pt20 textSecondary2 fontSize27 style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
						{loading ? loadingSubtitle : subtitle}
					</Div>
					<Div py15></Div>
					{!loading && (
						<Div flex itemsCenter gapX={10}>
							{buttons.map((button, index) => (
								<Div
									key={index}
									flex
									justifyCenter
									clx={index == 0 ? "group transition hover:bg-primary-light" : "text-stroke"}
									bgSecondary={index == 0}
									roundedFull
									px35
									py8
									fontSize23
									textSecondary2
									borderBlack={index == 0}
									border2={index == 0}
									cursorPointer
									onClick={button.handleClick}
									style={index == 0 && { boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
								>
									{button.text}
								</Div>
							))}
						</Div>
					)}
				</Div>
				<Div ml110 maxW330>
					<Div pt60 style={{ animation: "float 6s ease-in-out infinite" }} imgTag src={IMAGES.webeMainAstronaut}></Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.WhitelistMint) {
		const subtitle =
			mintingState == MintingState.Initial
				? "Apply to be an early WeBe for exclusive privileges and important responsibilities!"
				: amountMinted > 0
				? mintRemaining > 0 || invitesRemaining > 0
					? `You have${mintRemaining > 0 ? ` ${mintRemaining} more chance${mintRemaining > 1 && "s"} to mint` : ""}${
							mintRemaining > 0 && invitesRemaining > 0 ? " and" : ""
					  }${
							invitesRemaining > 0 ? ` ${invitesRemaining} more chance${invitesRemaining > 1 && "s"} to invite your trusted companions on-chain` : ""
					  }!`
					: "Congrats, you've finished the full package!"
				: mintingState == MintingState.Whitelisted
				? `You are one of the 88 Webes to be whitelisted! Mint to participate in our movement.`
				: `${truncateKlaytnAddress(invitor)} invited you to join the crew! You have ${mintRemaining} more chance${mintRemaining > 0 && "s"} to mint`;
		const buttons =
			mintingState == MintingState.Initial
				? [
						{ text: "Apply", handleClick: null },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ]
				: [
						mintRemaining > 0 && { text: "Mint", handleClick: handleClickMint },
						invitesRemaining > 0 && amountMinted > 0 && { text: "Invite", handleClick: handleClickInvite },
						balance > 0 && { text: "Check on My WeBes", handleClick: handleClickCheckOnMyWebes },
						(mintRemaining == 0 || invitesRemaining == 0 || amountMinted == 0) && { text: "Read the Story", handleClick: handleClickReadStory },
				  ];
		return (
			<Div flex itemsCenter justifyCenter hScreen maxW={1150} mxAuto mt={-60}>
				<Div flexCol>
					<Div textSecondary2 fontSize68 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						The Crew of
						<Div spanTag textSecondary>
							{" "}
							Early WeBes{" "}
						</Div>
						Are Boarding
					</Div>
					<Div pt20 textSecondary2 fontSize27 style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
						{loading ? loadingSubtitle : subtitle}
					</Div>
					<Div py15></Div>
					{!loading && (
						<Div flex itemsCenter gapX={10}>
							{buttons
								.filter((button) => button)
								.map((button, index) => (
									<Div
										key={index}
										flex
										justifyCenter
										clx={index == 0 ? "group transition hover:bg-primary-light" : "text-stroke"}
										bgSecondary={index == 0}
										roundedFull
										px={index == 0 ? 35 : 20}
										py8
										fontSize23
										textSecondary2
										borderBlack={index == 0}
										border2={index == 0}
										cursorPointer
										onClick={button.handleClick}
										style={index == 0 && { boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										{button.text}
									</Div>
								))}
						</Div>
					)}
				</Div>
				<Div ml50 maxW380>
					<Div pt60 imgTag src={IMAGES.whitelist}></Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.PublicMint) {
		const subtitle =
			tokensLeft > 0
				? mintRemaining > 0
					? `You have ${mintRemaining} more chance${mintRemaining > 0 && "s"} to mint!`
					: "Congrats, you've finished the full package!"
				: "All WeBes have departed!";
		const buttons = [
			mintRemaining > 0 && tokensLeft > 0 && { text: "Mint", handleClick: handleClickMint },
			balance > 0 && { text: "Check on My WeBes", handleClick: handleClickCheckOnMyWebes },
			{ text: "Read the Story", handleClick: handleClickReadStory },
		];
		return (
			<Div flex itemsCenter justifyCenter hScreen maxW={1150} mxAuto mt={-60}>
				<Div flexCol>
					<Div textSecondary2 fontSize67 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						Get onBoard!
						<Div spanTag textSecondary>
							{" "}
							All WeBes{" "}
						</Div>
						Are Departing
					</Div>
					<Div pt20 textSecondary2 fontSize27 style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
						{loading ? loadingSubtitle : subtitle}
					</Div>
					<Div py15></Div>
					{!loading && (
						<Div flex itemsCenter gapX={10}>
							{buttons
								.filter((button) => button)
								.map((button, index) => (
									<Div
										key={index}
										clx={index == 0 ? "group transition hover:bg-primary-light" : "text-stroke"}
										bgSecondary={index == 0}
										roundedFull
										px35
										pr0={index != 0}
										textCenter
										py8
										fontSize23
										textSecondary2
										borderBlack={index == 0}
										border2={index == 0}
										cursorPointer
										onClick={button.handleClick}
										style={index == 0 && { boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										{button.text}
									</Div>
								))}
						</Div>
					)}
				</Div>
				<Div ml20 maxW400>
					<Div pt60 imgTag src={IMAGES.journeyIcons.webeGoods}></Div>
				</Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Rebirth) {
		const subtitle = balance > 0 ? `${balance} WeBes may be eligible for rebirth...` : "There's no WeBe eligible for rebirth :(";
		const buttons = [
			balance > 0 && { text: "REBIRTH", handleClick: handleClickCheckOnMyWebes },
			{ text: "Read the Story", handleClick: handleClickReadStory },
		];
		return (
			<Div flex itemsCenter justifyCenter hScreen maxW={1150} mxAuto mt={-60}>
				<Div flexCol>
					<Div textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
						WeeEeWooO! The
						<Div spanTag textSecondary>
							{" "}
							REBIRTH
						</Div>{" "}
						is here
					</Div>
					<Div pt20 textSecondary2 fontSize27 style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
						{loading ? loadingSubtitle : subtitle}
					</Div>
					<Div py15></Div>
					{!loading && (
						<Div flex itemsCenter gapX={10}>
							{buttons
								.filter((button) => button)
								.map((button, index) => (
									<Div
										key={index}
										flex
										justifyCenter
										clx={index == 0 ? "group transition hover:bg-primary-light" : "text-stroke"}
										bgSecondary={index == 0}
										roundedFull
										px35
										py8
										fontSize23
										textSecondary2
										borderBlack={index == 0}
										border2={index == 0}
										cursorPointer
										onClick={button.handleClick}
										style={index == 0 && { boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
									>
										{button.text}
									</Div>
								))}
						</Div>
					)}
				</Div>
				<Div ml50 maxW450 z99>
					<Div pt60 style={{ animation: "spin 0.5s linear" }} imgTag src={IMAGES.journeyIcons.rebirth}></Div>
				</Div>
			</Div>
		);
	} else {
		return (
			<Div flex itemsCenter justifyCenter hScreen maxW={1150} mxAuto mt={-60}>
				<Div flexCol>
					<Div flex maxW400>
						<Div pt30 pb20></Div>
					</Div>
					<Div pb40 imgTag src={IMAGES.mainWord}></Div>
					<Div flex pb30>
						<Div
							mr10
							bgSecondary
							border2
							borderBlack
							flex
							justifyCenter
							roundedFull
							px35
							py8
							fontSize23
							textSecondary2
							onClick={handleClickReadStory}
							cursorPointer
							style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							clx={"group transition hover:bg-primary-light"}
						>
							READ THE STORY
						</Div>
					</Div>
				</Div>
				<Div ml110 maxW330>
					<Div pt60 style={{ animation: "float 6s ease-in-out infinite" }} imgTag src={IMAGES.webeMainAstronaut}></Div>
				</Div>
			</Div>
		);
	}
}


export default Index;
