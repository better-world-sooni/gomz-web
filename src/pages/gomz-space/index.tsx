import Div from "src/components/Div";
import useIsTablet from "src/hooks/useIsTablet";
import Helmet from "react-helmet";
import dynamic from "next/dynamic";
import FullMapTopBar from "src/components/FullMapTopBar";
import EmptyBlock from "src/components/EmptyBlock";
import { useSelector } from "react-redux";
import { RootState } from "src/store/reducers/rootReducer";
import { gifs } from "src/modules/gifs";
import { apiHelper } from "src/modules/apiHelper";
import apis from "src/modules/apis";

const LoadingComponent = () => {
	return (
		<Div hFull wFull bgGray100 flex itemsCenter justifyCenter>
			<Div imgTag src={gifs.loading} w70 h70></Div>
		</Div>
	);
};

const FullMap = dynamic(() => import("src/components/FullMap"), { loading: LoadingComponent, ssr: false });

const GomzSpace = () => {
	const isTablet = useIsTablet();
	const { selectedLandId } = useSelector((state: RootState) => ({
		selectedLandId: state.fullMap.selectedLandId,
	}));
	return (
		<Div overflowHidden hScreen>
			<Helmet bodyAttributes={{ style: "background-color : black; overflow-x: hidden;" }} />
			<FullMapTopBar mode={"dark"} />
			<Div bgGray100 wFull hFull fixed>
				<FullMap />
			</Div>
			<Div fixed hFull w400 px30 overflowScroll>
				<EmptyBlock h={80} />
				<Div overflowHidden w={"100%"} z10 rounded20 shadowLg>
					<Div bgBlack p30>
						<video autoPlay width="100%" muted loop>
							<source src="/gomRoomz.mp4" type="video/mp4" />
						</video>
					</Div>
				</Div>
				<Div bgColor={"rgb(21, 21, 23)"} shadowLg rounded20 py15 mt15 px15>
					<Div textGray200 fontBold>{`Space at ${selectedLandId}`}</Div>
					<Div textInfo mb10>
						@irlyglo
					</Div>
					<Div textGray200 fontLight>
						This is the first land minted in GomzSpace. It holds great meaning to everybody in the Gomz team.
					</Div>
					<Div rounded10 bgSuccess textWhite mx15 mt15 p15 textCenter>
						Enter
					</Div>
				</Div>
				<Div flexRow flex gapX10 mt15>
					<Div flex1 bgGray200 shadowLg rounded20 py15 px15>
						<Div textGray700 textSm fontLight>
							Location
						</Div>
						<Div textSuccess fontBold mt5>
							{selectedLandId}
						</Div>
					</Div>
					<Div flex1 bgGray200 shadowLg rounded20 py15 px15>
						<Div textGray700 textSm fontLight>
							Size
						</Div>
						<Div textGray700 fontBold mt5>
							{selectedLandId}
						</Div>
					</Div>
				</Div>
				<Div bgColor={"rgb(21, 21, 23)"} shadowLg rounded20 mt15 overflowHidden>
					<iframe src={"https://www.youtube.com/embed/sFLihNpBsrc"} title="@irlyglo" width="100%" height={400}></iframe>
				</Div>
			</Div>
		</Div>
	);
};

GomzSpace.getInitialProps = async (ctx) => {
	const fs = require("fs");
	const res = await apiHelper(apis.land.getAll());
	fs.writeFileSync("src/modules/lands.json", JSON.stringify(res.data));
	return {};
};

export default GomzSpace;