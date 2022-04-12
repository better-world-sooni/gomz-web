import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
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
						<Div mxAuto maxW={1200} px40 py50 translateY1over4={!focused} opacity0={!focused} clx={"transition-all ease-in-out duration-1000"}>
							<Row flex itemsCenter gapX={30}>
								<Col h700 flex flexCol justifyAround>
									<Div maxW={300} mxAuto>
										<Div imgTag src={IMAGES.gomzInnovate}></Div>
									</Div>
									<Div>
										<Div text2xl fontBold>
											<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
												혁신
											</Div>
											<Div spanTag textWhite>
												하고,
											</Div>
										</Div>
										<Div textWhite>
											GOMZ는 Klaytn 시장 최초로 NFT 공간을 통합하는 모바일 기반 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을
											준비합니다. 앱 내에서 다양한 홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는
											홀더들에게 지속적으로 만질 수 있는 가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
										</Div>
									</Div>
								</Col>
								<Col h700 flex flexCol justifyAround>
									<Div>
										<Div text2xl fontBold>
											<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
												반항
											</Div>
											<Div spanTag textWhite>
												하며,
											</Div>
										</Div>
										<Div textWhite>
											GOMZ는 Klaytn 시장 최초로 NFT 공간을 통합하는 모바일 기반 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을
											준비합니다. 앱 내에서 다양한 홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는
											홀더들에게 지속적으로 만질 수 있는 가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
										</Div>
									</Div>
									<Div style={{ flex: 1 }}></Div>
									<Div maxW={300} mxAuto>
										<Div imgTag src={IMAGES.gomzRebel}></Div>
									</Div>
								</Col>
								<Col h700 flex flexCol justifyAround>
									<Div maxW={500} mxAuto>
										<Div imgTag src={IMAGES.gomzTogether}></Div>
									</Div>
									<Div>
										<Div text2xl fontBold>
											<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
												함께
											</Div>
											<Div spanTag textWhite>
												하다.
											</Div>
										</Div>
										<Div textWhite>
											GOMZ는 Klaytn 시장 최초로 NFT 공간을 통합하는 모바일 기반 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을
											준비합니다. 앱 내에서 다양한 홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는
											홀더들에게 지속적으로 만질 수 있는 가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
										</Div>
									</Div>
								</Col>
							</Row>
						</Div>
						<EmptyBlock h={50} />
						<Footer />
					</Div>
				</Div>
			</Div>
		</>
	);
};

export default Index;
