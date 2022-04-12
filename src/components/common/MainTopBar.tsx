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
	const handleClickValues = () => {
		href(urls.values.index);
	};
	const handleClickRoadmap = () => {
		href(urls.roadmap.index);
	};
	const handleClickGallery = () => {
		href(urls.gallery.index);
	};
	const selectedProps = { roundedXl: true, py10: true, bgOpacity10: true, bgWhite: true };
	return (
		<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textBase fontSemibold>
			<Col auto onClick={handleClickGomz} cursorPointer>
				<Div maxW={200} clx={"hover:animate-pulse"}>
					<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
				</Div>
			</Col>
			<Col>
				<Row flex itemsCenter>
					<Col />
					<Col auto cursorPointer onClick={handleClickValues} clx={"hover:text-primary"} {...(asPath == urls.values.index && selectedProps)}>
						Values
					</Col>
					<Col auto cursorPointer onClick={handleClickRoadmap} clx={"hover:text-primary"} {...(asPath == urls.roadmap.index && selectedProps)}>
						Roadmap
					</Col>
					<Col auto cursorPointer onClick={handleClickGallery} clx={"hover:text-primary"} {...(asPath == urls.gallery.index && selectedProps)}>
						Gallery
					</Col>
					<Col auto cursorPointer clx={"hover:text-primary"}>
						BetterWorld
					</Col>
					<Col auto cursorPointer clx={"hover:text-primary"}>
						Public Docs
					</Col>
					<Col auto cursorPointer clx={"hover:text-primary"}>
						<FaDiscord />
					</Col>
					<Col auto cursorPointer clx={"hover:text-primary"}>
						<FaTwitter />
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default MainTopBar;
