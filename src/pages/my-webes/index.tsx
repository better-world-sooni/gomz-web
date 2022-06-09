import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import useIsTablet from "src/hooks/useIsTablet";
import { useEffect } from "react";
import { useRouter } from "next/router";
import EmptyBlock from "src/components/EmptyBlock";
import Footer from "src/components/common/Footer";
import MainTopBar from "src/components/common/MainTopBar";
import { useKaikas } from "src/hooks/klaytn/useKaikas";
import { useAddressState } from "src/hooks/klaytn/useAddressState";
import { useTokenState } from "src/hooks/klaytn/useTokenState";

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
	const { balance, loading } = useAddressState({
		kaikas,
	});

	useEffect(() => {
		if (isTablet || (!loading && balance == 0)) href(urls.index);
	}, [isTablet]);
	return (
		<>
			<BasicHead />
			<Div
				style={{
					background: "linear-gradient(114.31deg, #3E4071 51.1%, #37315A 85.59%)",
					overflow: "auto",
				}}
				relative
				minH="100vh"
			>
				<Div absolute z0 w350 top0 right0 imgTag src={IMAGES.starDusts3} clx={"animate-pulse"}></Div>
				<Div absolute z0 w280 top400 right50 imgTag src={IMAGES.starDusts4} clx={"animate-pulse"}></Div>
				<MainTopBar />
				<Div px80>
					<Div maxW={1100} mxAuto>
						<EmptyBlock h={100} />
						<Div flex itemsCenter>
							<Div textSecondary2 fontSize72 leadingNone style={{ textShadow: "3px 3px 0px rgba(0, 0, 0, 1)" }} clx={"text-stroke-bold"}>
								My{" "}
								<Div spanTag textSecondary>
									{" "}
									WeBes
								</Div>
							</Div>
							<Div flex1></Div>
							<Div
								flex
								z10
								justifyCenter
								clx={"group transition hover:bg-primary-light"}
								bgSecondary
								roundedFull
								px20
								py4
								fontSize18
								textSecondary2
								borderBlack
								border2
								cursorPointer
								style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
							>
								Clear Immigration at BetterWorld
							</Div>
						</Div>
						<Div grid gridCols4 gapX={20} gapY={10} py40>
							{new Array(balance).map((_, index) => {
								return <Webe key={index} index={index} selectedAddress={kaikas.selectedAddress} />;
							})}
						</Div>
						<EmptyBlock h={200} />
					</Div>
				</Div>
				<Div absolute bottom0 wFull>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

function Webe({ index, selectedAddress }) {
	const { tokenId, tokenUri, metadata, rebirthHistory } = useTokenState({ index, selectedAddress });
	const rebirthChances = rebirthHistory?.filter((used) => !used).length || 0;
	return (
		<Div wFull>
			<Div imgTag src={metadata?.image || IMAGES.team.jieun} wFull hAuto roundedXl border1 borderBlack></Div>
			<EmptyBlock h={20} />
			<Div textSecondary2 textCenter fontBold fontSize={"1.2vw"}>
				{metadata?.name}
			</Div>
			<Div textSecondary textCenter fontSize={"1.15vw"}>{rebirthChances} Rebirth Chances</Div>
		</Div>
	);
}

export default Index;
