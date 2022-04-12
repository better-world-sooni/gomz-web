import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Router from "next/router";
import { useEffect } from "react";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import EmptyBlock from "src/components/EmptyBlock";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Footer from "src/components/common/Footer";
import MainTopBar from "src/components/common/MainTopBar";

const Index: NextPage = () => {
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
						<Div mxAuto maxW={1200} px40>
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
