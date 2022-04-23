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
	const handleClickHome = () => {
		href(urls.home.index);
	};
	const handleClickJourney = () => {
		href(urls.journey.index);
	};
	const handleClickGallery = () => {
		href(urls.gallery.index);
	};
	const selectedProps = { textPrimary: true };
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
						<Div mx10 textWhite>
							<FaBook size={20} />
						</Div>
						<Div mx10>
							<Div imgTag src={IMAGES.logos.betterWorld} h20 wAuto></Div>
						</Div>
						<Div mx10 textWhite>
							<FaDiscord size={20} />
						</Div>
						<Div ml10 textWhite>
							<FaTwitter size={20} />
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
					<Div maxW={50} clx={"hover:animate-pulse"}>
						<Div imgTag src={IMAGES.logos.main}></Div>
					</Div>
				</Div>
				<Div flex1></Div>
				<Div flex flexRow itemsCenter>
					<Div mx12>
						<Div imgTag src={IMAGES.logos.betterWorld} h30 wAuto></Div>
					</Div>
					<Div mx12>
						<FaDiscord size={35} />
					</Div>
					<Div mx12>
						<FaTwitter size={35} />
					</Div>
				</Div>
			</Div>
		</Div>
	);
}

export default MainTopBar;
