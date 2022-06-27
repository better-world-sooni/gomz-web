import { useRouter } from "next/router";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IMAGES } from "src/modules/images";
// import { href } from "src/helpers/routeHelper";
import { urls } from "src/modules/urls";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
import useIsTablet from "src/hooks/useIsTablet";

export default function Footer() {
	const handleClickGomz = () => {
		// href(urls.index);
	};
	const isTablet = useIsTablet();

	if (isTablet) {
		return (
			<Div px20 bgSecondary bgOpacity90>
				<Div mxAuto maxW={1150} py20 balooR>
					<Row textWhite itemsCenter>
						<Col auto clx={"hover:animate-pulse"} p30 onClick={handleClickGomz}>
							<Div imgTag src={IMAGES.logos.webeLogo} w100></Div>
						</Col>
						<Col py20 fontSize14>
							<Row py5>
								<Col auto>
									<Div spanTag>WeBe from </Div>
									<Div spanTag textSecondary aTag href={"https://soonilabs.com"}>
										SOONI Labs
									</Div>
								</Col>
								<Col></Col>
							</Row>
							<Row fontSize12>
								<Col auto>
									<Div spanTag>
										COPYRIGHT ©<br></br>WeBe. ALL RIGHTS RESERVED
									</Div>
								</Col>
								<Col></Col>
							</Row>
						</Col>
					</Row>
				</Div>
			</Div>
		);
	}

	return (
		<Div mxAuto maxW={1150} py30 balooR>
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
	);
}
