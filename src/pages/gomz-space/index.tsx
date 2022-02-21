import Div from "src/components/Div";
import useIsTablet from "src/hooks/useIsTablet";
import Helmet from "react-helmet";
import TopBar from "src/components/TopBar";
import dynamic from "next/dynamic";
import Row from "src/components/Row";
import Col from "src/components/Col";
import FullMapTopBar from "src/components/FullMapTopBar";
import { useEffect, useState } from "react";
import EmptyBlock from "src/components/EmptyBlock";
import { useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";

const LoadingComponent = () => {
	return (
		<Div hScreen wScreen bgWhite>
			Loading...
		</Div>
	);
};
export default function GomzSpace() {
	const isTablet = useIsTablet();
	const [dynamicallyLoadedFullMap, setDynamicallyLoadedFullMap] = useState(<LoadingComponent />);
	const { selectedLandId } = useSelector((state: RootState) => ({
		selectedLandId: state.fullMap.selectedLandId,
	}));
	useEffect(() => {
		setTimeout(() => {
			const FullMap = dynamic(() => import("src/components/FullMap"), { loading: LoadingComponent, ssr: false });
			setDynamicallyLoadedFullMap(<FullMap />);
		}, 100);
	}, []);
	return (
		<Div overflowHidden hScreen>
			<Helmet bodyAttributes={{ style: "background-color : #000; overflow-x: hidden;" }} />
			<Row>
				<Col px0>
					<FullMapTopBar mode={"dark"} />
					<Div pr30 pl40>
						<EmptyBlock h={100} />

						<Div overflowHidden w={"100%"} z10>
							<video autoPlay width="100%" muted loop>
								<source src="/gomRoomz.mp4" type="video/mp4" />
							</video>
						</Div>
						<Div textWhite>{selectedLandId}</Div>
						<Div textWhite>hello</Div>
					</Div>
				</Col>
				<Col auto overflowHidden bgGray900 w={"70%"} px0>
					{dynamicallyLoadedFullMap}
				</Col>
			</Row>
		</Div>
	);
}
