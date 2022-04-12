import { IMAGES } from "src/modules/images";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";

function MainTopBar() {
	const handleClickGomz = () => {
		href(urls.index);
	};
	const handleClickValues = () => {
		href(urls.values.index);
	};
	const handleClickJourney = () => {
		href(urls.journey.index);
	};
	const handleClickGallery = () => {
		href(urls.gallery.index);
	};
	return (
		<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textBase>
			<Col auto onClick={handleClickGomz} cursorPointer>
				<Div maxW={200}>
					<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
				</Div>
			</Col>
			<Col>
				<Row flex itemsCenter>
					<Col />
					<Col auto cursorPointer onClick={handleClickValues}>
						Values
					</Col>
					<Col auto cursorPointer onClick={handleClickJourney}>
						Journey
					</Col>
					<Col auto cursorPointer onClick={handleClickGallery}>
						Gallery
					</Col>
					<Col auto cursorPointer>
						Team
					</Col>
					<Col auto cursorPointer>
						BetterWorld
					</Col>
					<Col auto>Public Docs</Col>
					<Col auto>
						<FaDiscord />
					</Col>
					<Col auto>
						<FaTwitter />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default MainTopBar;
