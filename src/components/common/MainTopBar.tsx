import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import { href, LOCALES, reloadWithLocale } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";
import useIsTablet from "src/hooks/useIsTablet";

function MainTopBar() {
	const isTablet = useIsTablet();
	const { locale: nextLocale } = useRouter();
	const { asPath } = useRouter();
	const handleClickGomz = () => {
		href(urls.index);
	};
	if (isTablet) {
		return (
			<Div wFull>
				<Div flex py20 px20>
					<Div onClick={handleClickGomz} cursorPointer>
						<Div maxW={30}>
							<Div imgTag src={IMAGES.logos.webeWhiteLogo}></Div>
						</Div>
					</Div>
					<Div flex1></Div>
					<Div flex flexRow itemsCenter>
						<Div
							mx10
							textWhite
							clx={"hover:opacity-50"}
							cursorPointer
							aTag
							href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
						>
							<Div roundedFull border1 borderWhite py3 px15 textSm>
								Public Docs
							</Div>
						</Div>
						<Div mx10 clx={"hover:opacity-50"} aTag href={"https://betterworldapp.io"}>
							<Div imgTag src={IMAGES.logos.betterWorld} h18 wAuto></Div>
						</Div>
						<Div mx10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
							<FaDiscord size={18} />
						</Div>
						<Div ml10 textWhite clx={"hover:opacity-50"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
							<FaTwitter size={18} />
						</Div>
					</Div>
				</Div>
			</Div>
		);
	}
	return (
		<Div absolute top0 wFull z200 flex px80 mt40 style={{webkitTextStroke: "1px #000"}}>
			<Div flex1></Div>
			<Div flex flexRow itemsCenter>
				<Div absolute left80 w100 imgTag src={IMAGES.logos.webeWhiteLogo} onClick={handleClickGomz} cursorPointer></Div>
				<Div
				mx10
				textWhite
				cursorPointer
				aTag
				href={"https://soonilabs.notion.site/GOMZ-9708c13f69c94ed39672ac8c1b7b8e12"}
			>
					<Div roundedFull bgSecondary textWhite py4 px18 fontSize12 trackingWidest style={{webkitTextStroke: "1px #000"}}
					clx={"group transition hover:bg-primary-light"}>
					Public Docs
					</Div>
				</Div>
				<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
					<Div imgTag src={IMAGES.logos.betterWorldSecondary2} h20 wAuto></Div>
				</Div>
				<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
					<FaDiscord size={30} />
				</Div>
				<Div mx10 textSecondary2 clx={"group transition hover:text-primary-light"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
					<FaTwitter size={25} />
				</Div>
				<Div mx10 textSm textSecondary={nextLocale==LOCALES.KO} textWhite={nextLocale!=LOCALES.KO} clx={"group transition hover:text-primary-light"} cursorPointer onClick={() => reloadWithLocale(LOCALES.KO)}>KOR</Div>
				<Div textSm textSecondary2>l</Div>
				<Div ml10 textSm textSecondary={nextLocale==LOCALES.EN} textWhite={nextLocale!=LOCALES.EN} clx={"group transition hover:text-primary-light"} cursorPointer onClick={() => reloadWithLocale(LOCALES.EN)}>ENG</Div>
			</Div>
		</Div>
	);
}

export default MainTopBar;
