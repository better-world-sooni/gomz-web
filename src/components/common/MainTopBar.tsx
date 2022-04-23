import { IMAGES } from "src/modules/images";
import Div from "../Div";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import { useRouter } from "next/router";

function MainTopBar() {
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
	return (
		<Div pt40>
			<Div flex itemsEnd textWhite maxW={1200} mxAuto px40 textLg fontSemibold justifyEnd>
				<Div auto onClick={handleClickGomz} cursorPointer>
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
