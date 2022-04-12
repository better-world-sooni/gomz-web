import { IMAGES } from "src/modules/images";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const MainTopBar = () => {
	return (
		<Div>
			<Row flex itemsEnd textWhite bgBlack maxW={1200} mxAuto px40>
				<Col>
					<Row>
						<Col auto>Values</Col>
						<Col auto>Journey</Col>
						<Col auto>Gallery</Col>
						<Col auto>Team</Col>
						<Col auto textPrimary>
							BetterWorld
						</Col>
						<Col />
					</Row>
				</Col>
				<Col auto>
					<Div maxW={200}>
						<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
					</Div>
				</Col>
				<Col>
					<Row flex itemsCenter>
						<Col />
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
		</Div>
	);
};
