import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
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
import MainTopBar from "src/components/common/MainTopBar";
import { faqs } from "src/modules/faqs";
import { team } from "src/modules/team";
import { useContract } from "src/hooks/klaytn/useContract";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { truncateKlaytnAddress } from "src/helpers/klaytnAddressHelper";
import { MintingState, MintingStep } from "src/modules/minting";
import { useContractState } from "src/hooks/klaytn/useContractState";
import { useAddressState } from "src/hooks/klaytn/useAddressState";

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
		}
	};
	const { mintingStep, totalSupply, maxSupply } = useContractState();
	const { invitesRemaining, mintRemaining, mintingState, invitor, amountMinted, balance, loading, tokens } = useAddressState({
		kaikas,
	});

	useEffect(() => {
		if (isTablet) href(urls.index);
	}, [isTablet]);
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
				<MainTopBar />
				<Div px80>
					<Div maxW={1100} mxAuto>
						<EmptyBlock h={100} />
						<Div flex itemsEnd>
							<Div textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
								My{" "}
								<Div spanTag textSecondary>
									{" "}
									Webes
								</Div>
							</Div>
							<Div flex1></Div>
							<Div
								flex
								justifyCenter
								clx={"group transition hover:bg-primary-light"}
								bgSecondary
								roundedFull
								px30
								py4
								fontSize18
								textSecondary2
								borderBlack
								border2
								cursorPointer
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								Get Onboard at BetterWorld
							</Div>
						</Div>
						<Div grid gridCols4 gapX={20} gapY={10} py50>
							{tokens.map((tokenObj) => {
								return (
									<Div key={tokenObj.tokenId} rounded10 overflowHidden style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}>
										<Div imgTag src={tokenObj.metadata.image}></Div>
										<Div h50 bgSecondary2 py10 px10>
											{tokenObj.metadata.name}
										</Div>
									</Div>
								);
							})}
						</Div>
						<EmptyBlock h={200} />
					</Div>
				</Div>
				<Footer />
			</Div>
		</>
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
	const [open, setOpen] = useState(false);
	const handleClickReadStory = () => {
		href(urls.story.index);
	};
	const handleClickMint = () => setOpen(true);
	const loadingSubtitle = "Webes are waiting on the blockchain...";
	if (mintingStep == MintingStep.Initial) {
		const subtitle =
			mintingState == MintingState.Initial
				? "Apply for a whitelist for exclusive privileges and important responsibilities!"
				: "And you are set! Just join the count down in Discord:)";
		const buttons =
			mintingState == MintingState.Initial
				? [
						{ text: "Submit Application", handleClick: null },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ]
				: [
						{ text: "Enter Discord", handleClick: null },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ];
		return (
			<Div flexCol>
				<Div textCenter textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
					Webes are
					<Div spanTag textSecondary>
						{" "}
						Getting Ready{" "}
					</Div>
					for Lift Off
				</Div>
				<Div pt20 textCenter textSecondary2 text2xl style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
					{loading ? loadingSubtitle : subtitle}
				</Div>
				<Div pt30 pb20></Div>
				{!loading && (
					<Div flex itemsCenter justifyCenter gapX={20}>
						{buttons.map((button, index) => (
							<Div
								key={index}
								flex
								justifyCenter
								clx={index == 0 && "group transition hover:bg-primary-light"}
								bgSecondary={index == 0}
								roundedFull
								px40
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
				<Div flex maxW250></Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.WhitelistMint) {
		const subtitle =
			mintingState == MintingState.Initial
				? "Apply for a whitelist for exclusive privileges and important responsibilities!"
				: amountMinted > 0
				? mintRemaining > 0 || invitesRemaining > 0
					? `You have${mintRemaining > 0 ? ` ${mintRemaining} more chances to mint` : ""}${mintRemaining > 0 && invitesRemaining > 0 ? " and" : ""}${
							invitesRemaining > 0 ? ` ${invitesRemaining} more chances invite your trusted companions on-chain (gas fee incurred)` : ""
					  }!`
					: "Congrats, you've finished the full package!"
				: mintingState == MintingState.Whitelisted
				? `You are one of the 88 Webes to be whitelisted! Mint to participate in our movement.`
				: `${truncateKlaytnAddress(invitor)} invited you to join the crew! You have ${mintRemaining} more chances to mint`;
		const buttons =
			mintingState == MintingState.Initial
				? [
						{ text: "Submit Application", handleClick: null },
						{ text: "Read the Story", handleClick: handleClickReadStory },
				  ]
				: [
						mintRemaining > 0 && { text: "Mint", handleClick: handleClickMint },
						invitesRemaining > 0 && amountMinted > 0 && { text: "Invite", handleClick: null },
						balance > 0 && { text: "Check on my Webes", handleClick: handleClickReadStory },
						(mintRemaining == 0 || invitesRemaining == 0 || amountMinted == 0) && { text: "Read the Story", handleClick: handleClickReadStory },
				  ];
		return (
			<Div flexCol>
				<Div textCenter textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
					The Crew of
					<Div spanTag textSecondary>
						{" "}
						Whitelisted Webes{" "}
					</Div>
					are boarding
				</Div>
				<Div pt20 textCenter textSecondary2 text2xl style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
					{loading ? loadingSubtitle : subtitle}
				</Div>
				<Div pt30 pb20></Div>
				{!loading && (
					<Div flex itemsCenter justifyCenter gapX={20}>
						{buttons
							.filter((button) => button)
							.map((button, index) => (
								<Div
									key={index}
									flex
									justifyCenter
									clx={index == 0 && "group transition hover:bg-primary-light"}
									bgSecondary={index == 0}
									roundedFull
									px={index == 0 ? 40 : 20}
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
				<Div flex maxW250></Div>
				<MintingModal open={open} onClose={() => setOpen(false)} />
			</Div>
		);
	} else if (mintingStep == MintingStep.PublicMint) {
		const subtitle =
			tokensLeft > 0
				? mintingState == mintRemaining > 0
					? `You have${mintRemaining} more chances to mint!`
					: "Congrats, you've finished the full package!"
				: "Webes have sold out!";
		const buttons = [
			mintRemaining > 0 && tokensLeft > 0 && { text: "Mint", handleClick: handleClickMint },
			balance > 0 && { text: "Check on my Webes", handleClick: handleClickReadStory },
			{ text: "Read the Story", handleClick: handleClickReadStory },
		];
		return (
			<Div flexCol>
				<Div textCenter textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
					Get on board! The
					<Div spanTag textSecondary>
						{" "}
						Whole Sleuth of Webes
					</Div>
					are Departing
				</Div>
				<Div pt20 textCenter textSecondary2 text2xl style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
					{loading ? loadingSubtitle : subtitle}
				</Div>
				<Div pt30 pb20></Div>
				{!loading && (
					<Div flex itemsCenter justifyCenter gapX={20}>
						{buttons
							.filter((button) => button)
							.map((button, index) => (
								<Div
									key={index}
									flex
									justifyCenter
									clx={index == 0 && "group transition hover:bg-primary-light"}
									bgSecondary={index == 0}
									roundedFull
									px40
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
				<MintingModal open={open} onClose={() => setOpen(false)} />
				<Div flex maxW250></Div>
			</Div>
		);
	} else if (mintingStep == MintingStep.Rebirth) {
		const subtitle = balance > 0 ? `${balance} Webes may be eligible for rebirth...` : "Webes have sold out!";
		const buttons = [
			balance > 0 && { text: "Renaissance!", handleClick: handleClickReadStory },
			{ text: "Read the Story", handleClick: handleClickReadStory },
		];
		return (
			<Div flexCol>
				<Div textCenter textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
					The
					<Div spanTag textSecondary>
						{" "}
						Rebirth, Enlightment, RENAISSANCE!!
					</Div>
					is here
				</Div>
				<Div pt20 textCenter textSecondary2 text2xl style={{ textShadow: "1px 1px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke"}>
					{loading ? loadingSubtitle : subtitle}
				</Div>
				<Div pt30 pb20></Div>
				{!loading && (
					<Div flex itemsCenter justifyCenter gapX={20}>
						{buttons
							.filter((button) => button)
							.map((button, index) => (
								<Div
									key={index}
									flex
									justifyCenter
									clx={index == 0 && "group transition hover:bg-primary-light"}
									bgSecondary={index == 0}
									roundedFull
									px40
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
				<Div flex maxW250></Div>
			</Div>
		);
	} else {
		return (
			<Div flexCol>
				<Div flex maxW400>
					<Div pt30 pb20></Div>
				</Div>
				<Div pb40 imgTag src={IMAGES.mainWord}></Div>
				<Div flex pb30>
					s
					<Div
						mr10
						flex
						justifyCenter
						roundedFull
						px40
						py8
						fontSize23
						textSecondary2
						onClick={handleClickReadStory}
						cursorPointer
						clx={"text-stroke"}
					>
						READ THE STORY
					</Div>
				</Div>
				<Div flex maxW250></Div>
			</Div>
		);
	}
}

export default Index;
