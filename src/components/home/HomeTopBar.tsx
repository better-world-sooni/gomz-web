import { IMAGES } from "src/modules/images";
import Col from "../Col";
import Div from "../Div";
import Row from "../Row";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";

function HomeTopBar() {
	const handleClickGomz = () => {
		href(urls.index);
	};
	return (
		<Div italic pt50>
			<Row flex itemsEnd textWhite maxW={1200} mxAuto px40 textSm fontSemibold>
				<Col></Col>
				<Col auto onClick={handleClickGomz} cursorPointer>
					<Div maxW={200} clx={"hover:animate-pulse"}>
						<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
					</Div>
				</Col>
				<Col>
					<Row flex itemsCenter>
						<Col />
						<Col auto cursorPointer clx={"hover:text-primary"}>
							<FaDiscord />
						</Col>
						<Col auto cursorPointer clx={"hover:text-primary"}>
							<FaTwitter />
						</Col>
					</Row>
				</Col>
			</Row>
		</Div>
	);
}
export default HomeTopBar;
