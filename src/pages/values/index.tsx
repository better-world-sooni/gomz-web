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
											GOMZ는 묻습니다. “여러분의 진정한 꿈은 무엇인가요? 무엇을 할 때 가장 행복한가요?” GOMZ는 보편적인 사회구조에 도전하고 이들만의
											문화를 개척하기 위해 나타났습니다. 이들은 자유가 더 넓은 차원의 지식과 혁신을 만들어낸다고 믿습니다. 그리고 자유와 책임의
											적정선을 잘 인지하고 있습니다. 따라서 외칩니다. “멋있게 일하고, 더 멋있게 놀자!” GOMZ는 모두에게 더 많은 꿈을, 그리고 더
											자유로운 일상을 제공하고자 나타났습니다.
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
