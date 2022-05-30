import { useRouter } from "next/router";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IMAGES } from "src/modules/images";
import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";

export default function Footer() {
	const handleClickGomz = () => {
		href(urls.index);
	};
	return (
		<Div px80 style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
			<Div mxAuto maxW={1100} py30 balooR>
				<Row textWhite itemsCenter>
					<Col auto clx={"hover:animate-pulse"} p30 onClick={handleClickGomz}>
						<Div imgTag src={IMAGES.logos.webeLogo} h60></Div>
					</Col>
					<Col py20>
						<Row py5>
							<Col auto>
								<Div spanTag>WeBe from </Div>
								<Div spanTag textSecondary aTag href={"https://soonilabs.com"}>
									SOONI Labs
								</Div>
							</Col>
							<Col></Col>
						</Row>
						<Row textSm>
							<Col auto>
								<Div spanTag>COPYRIGHT © WeBe. ALL RIGHTS RESERVED</Div>
							</Col>
							<Col></Col>
						</Row>
					</Col>
				</Row>
			</Div>
		</Div>
	);
}
