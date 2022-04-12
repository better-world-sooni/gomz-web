import { IMAGES } from "src/modules/images";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";

export default function Footer() {
	return (
		<Div>
			<Div mxAuto maxW={1200} px20 py50>
				<Row textWhite>
					<Col auto>
						<Div imgTag src={IMAGES.logos.main} w150 h150></Div>
					</Col>
					<Col py20>
						<Row py10>
							<Col auto>Values</Col>
							<Col auto>Journey</Col>
							<Col auto>Gallery</Col>
							<Col auto>Team</Col>
							<Col auto>BetterWorld</Col>
							<Col></Col>
						</Row>
						<Row py5>
							<Col auto>
								<Div spanTag>Gomz by </Div>
								<Div spanTag style={{ color: "rgb(20,152,159)" }}>
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
