import { useRouter } from "next/router";
import { IMAGES } from "src/modules/images";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";

export default function Footer() {
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
		<Div>
			<Div mxAuto maxW={1200} px20 py50 fontSemibold italic>
				<Row textWhite itemsCenter>
					<Col auto clx={"hover:animate-pulse"} p30 onClick={handleClickGomz}>
						<Div imgTag src={IMAGES.logos.main} w100 h100></Div>
					</Col>
					<Col py20>
						<Row py5>
							<Col auto>
								<Div spanTag>Gomz by </Div>
								<Div spanTag style={{ color: "rgb(20,152,159)" }} aTag href={"https://soonilabs.com"}>
									SOONI Labs
								</Div>
							</Col>
							<Col></Col>
						</Row>
						<Row textSm>
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
