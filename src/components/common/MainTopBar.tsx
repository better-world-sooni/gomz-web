import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaBook, FaDiscord, FaTwitter } from "react-icons/fa";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";
import useIsTablet from "src/hooks/useIsTablet";

function MainTopBar() {
	const isTablet = useIsTablet();
	const { asPath } = useRouter();
	const handleClickGomz = () => {
		href(urls.index);
	};
	if (isTablet) {
		return (
			<Div wFull>
				<Div flex flexRow py20 px20>
					<Div onClick={handleClickGomz} cursorPointer>
						<Div maxW={30} clx={"hover:animate-pulse"}>
							<Div imgTag src={IMAGES.logos.main}></Div>
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
		<Div pt40>
			<Div flex itemsEnd textWhite maxW={1200} mxAuto px40 textLg fontSemibold justifyEnd>
				<Div onClick={handleClickGomz} cursorPointer>
					<Div maxW={50} clx={"hover:animate-pulse"} cursorPointer>
						<Div imgTag src={IMAGES.logos.main}></Div>
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
					<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://betterworldapp.io"}>
						<Div imgTag src={IMAGES.logos.betterWorld} h20 wAuto></Div>
					</Div>
					<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://discord.com/invite/7tV3WxWf8p"}>
						<FaDiscord size={25} />
					</Div>
					<Div mx10 clx={"hover:opacity-50"} cursorPointer aTag href={"https://twitter.com/officialgomz"}>
						<FaTwitter size={25} />
					</Div>
				</Div>
			</Div>
		</Div>
	);
}

export default MainTopBar;
