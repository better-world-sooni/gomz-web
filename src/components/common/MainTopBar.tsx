import { IMAGES } from "src/modules/images";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
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
			<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textSm fontSemibold italic justifyEnd>
				<Col auto onClick={handleClickGomz} cursorPointer>
					<Div maxW={50} clx={"hover:animate-pulse"}>
						<Div imgTag src={IMAGES.logos.main}></Div>
					</Div>
				</Col>
				<Col>
					<Row flex itemsCenter>
						<Col />
						<Col auto cursorPointer py10 onClick={handleClickHome} clx={"hover:text-primary"} {...(asPath == urls.home.index && selectedProps)}>
							Home
						</Col>
						<Col auto cursorPointer py10 onClick={handleClickJourney} clx={"hover:text-primary"} {...(asPath == urls.journey.index && selectedProps)}>
							Journey
						</Col>
						<Col auto cursorPointer py10 onClick={handleClickGallery} clx={"hover:text-primary"} {...(asPath == urls.gallery.index && selectedProps)}>
							Gallery
						</Col>
						<Col auto cursorPointer py10 clx={"hover:text-primary"}>
							BetterWorld
						</Col>
						<Col auto cursorPointer py10 clx={"hover:text-primary"}>
							Public Docs
						</Col>
						<Col auto cursorPointer py10 clx={"hover:text-primary"}>
							<FaDiscord />
						</Col>
						<Col auto cursorPointer py10 clx={"hover:text-primary"}>
							<FaTwitter />
						</Col>
					</Row>
				</Col>
			</Row>
		</Div>
	);
}

export default MainTopBar;
