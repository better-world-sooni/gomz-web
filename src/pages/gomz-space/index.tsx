import Div from "src/components/Div";
import useIsTablet from "src/hooks/useIsTablet";
import Helmet from "react-helmet";
import TopBar from "src/components/TopBar";
import dynamic from "next/dynamic";
import Row from "src/components/Row";
import Col from "src/components/Col";
import FullMapTopBar from "src/components/FullMapTopBar";

const LoadingComponent = () => {
	return (
		<Div hScreen wScreen bgWhite>
			Loading...
		</Div>
	);
};
const FullMap = dynamic(() => import("src/components/FullMap"), { loading: LoadingComponent, ssr: false });

export default function GomzSpace() {
	const isTablet = useIsTablet();
	return (
		<Div overflowHidden hScreen>
			<Helmet bodyAttributes={{ style: "background-color : #000; overflow-x: hidden;" }} />
			{/* <TopBar mode={"dark"} /> */}
			<Row>
				<Col>
					<FullMapTopBar mode={"dark"} />
				</Col>
				<Col>
					<Div w={1199} overflowHidden bgGray900>
						<FullMap />
					</Div>
				</Col>
			</Row>
		</Div>
	);
}
