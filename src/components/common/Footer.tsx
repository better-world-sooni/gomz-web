import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";

export default function Footer() {
	const handleClickGomz = () => {
		href(urls.index);
	};
	const handleClickValues = () => {
		href(urls.values.index);
	};
	const handleClickJourney = () => {
		href(urls.roadmap.index);
	};
	const handleClickGallery = () => {
		href(urls.gallery.index);
	};
	return (
		<Div>
			<Div mxAuto maxW={1200} px20 py50 fontSemibold>
				<Row textWhite>
					<Col auto clx={"hover:animate-pulse"}>
						<Div imgTag src={IMAGES.logos.main} w150 h150></Div>
					</Col>
					<Col py20>
						<Row py10>
							<Col auto onClick={handleClickValues} cursorPointer clx={"hover:text-primary"}>
								Values
							</Col>
							<Col auto cursorPointer onClick={handleClickJourney} clx={"hover:text-primary"}>
								Journey
							</Col>
							<Col auto cursorPointer onClick={handleClickGallery} clx={"hover:text-primary"}>
								Gallery
							</Col>
							<Col auto cursorPointer clx={"hover:text-primary"}>
								BetterWorld
							</Col>
							<Col></Col>
						</Row>
						<Row py5>
							<Col auto>
								<Div spanTag>Gomz by </Div>
								<Div spanTag style={{ color: "rgb(20,152,159)" }} aTag href={"https://soonilabs.com"}>
									SOONI Labs
								</Div>
							</Col>
							<Col></Col>
						</Row>
						<Row textSm textThin>
							<Col auto>
								<Div spanTag>COPYRIGHT © GOMZ. ALL RIGHTS RESERVED</Div>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
			</Div>
		</Div>
	);
}
