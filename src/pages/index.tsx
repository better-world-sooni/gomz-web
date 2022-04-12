import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Router from "next/router";
import { useEffect } from "react";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import EmptyBlock from "src/components/EmptyBlock";

const Index: NextPage = () => {
	return (
		<>
			<BasicHead />
			<Div clx={"snap-y h-screen overflow-scroll"}>
				<Div
					bgBlack
					style={{ backgroundImage: `url(${IMAGES.spaceBg})`, backgroundSize: "cover" }}
					clx={"snap-start"}
					relative
					hScreen
					flex
					itemsCenter
					justifyCenter
				>
					<Div absolute top0 wFull>
						<Div mxAuto maxW={1300} px20>
							<Row py50 flex itemsCenter textWhite gapX={10}>
								<Col auto>
									<Div imgTag src={IMAGES.logos.main} h50 w50></Div>
								</Col>
								<Col auto>VALUES</Col>
								<Col auto>JOURNEY</Col>
								<Col auto>GALLERY</Col>
								<Col auto>TEAM</Col>
								<Col auto>BETTER WORLD</Col>
								<Col></Col>
								<Col auto>
									<Row>
										<Col auto>
											<Div roundedXl style={{ boxShadow: "inset 2px 2px 2px 2px rgb(0 0 0 / 0.2)" }} bgWhite textBlack py8 px15 fontBold>
												Read More
											</Div>
										</Col>
										<Col auto>
											<Div imgTag src={IMAGES.logos.discord} h40 w40></Div>
										</Col>
										<Col auto>
											<Div imgTag src={IMAGES.logos.twitter} h40 w40></Div>
										</Col>
									</Row>
								</Col>
							</Row>
						</Div>
					</Div>
					<Div>
						<Div flex itemsCenter justifyCenter px20 relative>
							<Div maxW={1200}>
								<Div imgTag src={IMAGES.logos.gomzWordDude}></Div>
							</Div>
						</Div>
						<Div flex itemsCenter justifyCenter px20 relative>
							<Div roundedXl bgColor={"rgba(255,255,255,0.3)"} textWhite py10 px40 textXl border1 borderWhite>
								Mint
							</Div>
						</Div>
					</Div>
				</Div>
				<Div
					style={{
						backgroundImage: `url(${IMAGES.gomzWarSpaceShip})`,
						backgroundSize: "cover",
						backgroundPositionX: "center",
						backgroundPositionY: "center",
					}}
					bgBlack
					hScreen
					overflowHidden
					clx={"snap-start"}
				>
					<Div py50 hFull>
						<Div imgTag src={IMAGES.gomzAstronaut} absolute bottom0 right0 w={"30%"} hAuto></Div>
						<Div imgTag src={IMAGES.gomzSoldier} absolute bottom0 left0 w={"25%"} hAuto></Div>
						<Div flex>
							<Div maxW={600} textWhite py20 px20 textXl fontThin italic mx20 my20>
								For the past decade, GOMZ have been in a planet-wide war, a war provoked by excessive indoctrination of competition and capitalism.
								Such violence has made the planet too hostile, colorless, and systematic, rendering it uninhabitable.{" "}
							</Div>
						</Div>

						<Div flex justifyEnd>
							<Div maxW={600} textWhite py20 px20 textXl fontThin italic mx20>
								8,888 of these bears have turned to space travel with an altruistic vision:”A Better World”
							</Div>
						</Div>
						<EmptyBlock h={500} />
					</Div>
				</Div>
				<Div
					py50
					style={{
						backgroundImage: `url(${IMAGES.cityBg})`,
						backgroundSize: "cover",
						backgroundPositionX: "center",
						backgroundPositionY: "center",
					}}
					clx={"snap-start"}
					hScreen
					overflowHidden
					flex
					itemsCenter
					justifyCenter
				>
					<Div>
						<Row flex itemsCenter gapX={20}>
							<Col auto text3xl textWhite>
								Gomz{" "}
								<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
									Better{" "}
								</Div>
								<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
									World
								</Div>
							</Col>
							<Col textWhite>
								대중들이 블록체인 커뮤니티를 통하여
								<br /> 실질적인 가치를 창출하는 창의적인 세상
							</Col>
						</Row>
						<Div mxAuto maxW={1300} px20>
							<Row flex itemsCenter gapX={20}>
								<Col>
									<Div text2xl textWhite textCenter py10>
										Online
									</Div>
									<Div roundedXl textWhite textXl border1 borderWhite bgColor={"rgba(255,255,255,0.1)"} h450 flex itemsCenter>
										<Div>
											<Div imgTag src={IMAGES.logos.betterWorldBlue} mxAuto w={"40%"}></Div>
											<Div px40>
												BetterWorld 앱을 통해 NFT 공간을 선도하는 다양한 홀더들이 활발히 교류할 수 있습니다. 이 곳에 홀더들은 본인의 PFP가 자신의
												아바타이자 정체성이되어 표현하고, 활동하고, 소통하며 PFP 생태계 활성화에 앞장섭니다.
											</Div>
										</Div>
									</Div>
								</Col>
								<Col>
									<Div text2xl textWhite textCenter py10>
										Offline
									</Div>
									<Div roundedXl textWhite textXl border1 borderWhite bgColor={"rgba(255,255,255,0.1)"} h450 flex itemsCenter>
										<Div>
											<Div mxAuto wMax={300} style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }} text3xl leadingNone pb30>
												Innovators <br /> Program
											</Div>
											<Div px40>
												우리가 일상 속에서 흔히 만나는 것들에 GOMZ가 함께하는 것으로 더 나은 세상은 시작됩니다. 자주가는 음식점, 카페, 바에서 GOMZ
												홀더로서 다양한 혜택을 받으세요. 이는 모두가 함께 상생할 수 있는 구조의 협약을 기반으로 이루어집니다.뿐만 아니라, NFT 홀더들이
												교류하고 네트워킹 할 수 있는 다양한 행사들도 준비되어있습니다.
											</Div>
										</Div>
									</Div>
								</Col>
							</Row>
						</Div>
					</Div>
				</Div>
				<Div bgBlack>
					<Div mxAuto maxW={1300} px20 py100 clx={"snap-start"}>
						<Row textWhite>
							<Col auto>
								<Div imgTag src={IMAGES.logos.main} w150 h150></Div>
							</Col>
							<Col py20>
								<Row py10>
									<Col auto>VALUES</Col>
									<Col auto>JOURNEY</Col>
									<Col auto>GALLERY</Col>
									<Col auto>TEAM</Col>
									<Col auto>BETTER WORLD</Col>
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
			</Div>
		</>
	);
};

export default Index;
