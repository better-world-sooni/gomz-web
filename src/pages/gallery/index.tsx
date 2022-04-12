import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import EmptyBlock from "src/components/EmptyBlock";
import Footer from "src/components/common/Footer";
import MainTopBar from "src/components/common/MainTopBar";
import useFocus from "src/hooks/useFocus";

const Index: NextPage = () => {
	const focused = useFocus();
	return (
		<>
			<BasicHead />
			<Div>
				<Div
					style={{
						backgroundImage: `url(${IMAGES.cityBgLong})`,
						backgroundSize: "cover",
						backgroundPositionX: "center",
						backgroundPositionY: "center",
					}}
				>
					<Div style={{ backdropFilter: "brightness(20%)" }}>
						<EmptyBlock h={50} />
						<MainTopBar />
						<Div mxAuto maxW={1200} px40 translateY1over4={!focused} opacity0={!focused} clx={"transition-all ease-in-out duration-1000"}>
							<Div pt50>
								<Div textWhite text2xl fontBold>
									Gallery
								</Div>
							</Div>
							<Div roundedXl overflowHidden maxW={400} mxAuto mt50>
								<Div imgTag src={IMAGES.gomzArtist}></Div>
							</Div>
							<Div textCenter text3xl mb50 textWhite>
								To Be Released
							</Div>
							<EmptyBlock h={50} />
						</Div>
						<Footer />
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
