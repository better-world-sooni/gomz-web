import type { NextPage } from "next";
import BasicHead from "src/components/BasicHead";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import Row from "src/components/Row";
import Col from "src/components/Col";
import Footer from "src/components/common/Footer";
import HomeTopBar from "src/components/home/HomeTopBar";
import { href } from "src/modules/routeHelper";
import { urls } from "src/modules/urls";

const Index: NextPage = () => {
	return (
		<>
			<BasicHead />
			<Div
				style={{
					backgroundImage: `url(${IMAGES.cityBgLong})`,
					backgroundSize: "contain",
					backgroundPositionX: "center",
					backgroundPositionY: "center",
				}}
			>
				<Div>
					<Div relative style={{ backdropFilter: "brightness(20%)" }}>
						<Div hScreen flex justifyCenter flexCol>
							<HomeTopBar />
							<Div
								wFull
								h={"75vh"}
								style={{
									backgroundImage: `url(${IMAGES.gomzStory2})`,
									backgroundSize: "cover",
									backgroundPositionX: "center",
									backgroundPositionY: "center",
								}}
								relative
								my20
								textSm
								cursorPointer
								onClick={() => href(urls.story.index)}
							>
								<Div absolute bottom0 wFull flex justifyCenter>
									<Div maxW={600} textWhite py20 px20 mx20 my20 textBase bgBlack textCenter>
										...8,888 of these bears have turned to space travel with an altruistic vision: <br /> &quot;A Better World&quot;
									</Div>
								</Div>
							</Div>
							<Div textWhite py10>
								<Div maxW={1200} mxAuto px40 relative textBase fontSemibold>
									<Div>
										<Row gapX={20} flex itemsCenter>
											<Col auto maxW={800}>
												Gomz is the collection to lead popularization of NFT through tangible and social values
											</Col>
											<Col></Col>
											<Col auto>
												<Div roundedXl bgWhite py10 px50 textBlack flex itemsCenter textXl fontNormal>
													Mint
												</Div>
											</Col>
										</Row>
									</Div>
								</Div>
							</Div>
						</Div>
					</Div>
				</Div>
				<Div py50 flex itemsCenter justifyCenter style={{ backdropFilter: "brightness(15%)" }}>
					<Div mxAuto maxW={1200} px40>
						<Div hrTag mb50 />
						<Row flex itemsCenter gapX={20} fontBold>
							<Col auto text2xl textWhite>
								Gomz are builders, investors, and settlers <br />
								of{" "}
								<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
									Better{" "}
								</Div>
								<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
									World{" "}
								</Div>
								<Div spanTag textXl>
									which comes in two forms
								</Div>
							</Col>
							<Col textWhite></Col>
						</Row>
						<Div>
							<Row flex itemsCenter gapX={20}>
								<Col>
									<Div textWhite h450 flex itemsCenter>
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
									<Div h450 flex itemsCenter textWhite>
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
						<Div hrTag />
					</Div>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Row mxAuto maxW={1200} px40 fontBold pb50>
						<Col auto text2xl textWhite>
							Gomz uphold{" "}
							<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
								3 Core
							</Div>{" "}
							<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
								Values
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<Row mxAuto maxW={1200} px40 flex itemsCenter gapX={30}>
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
									GOMZ는 NFT 공간을 통합하는 소셜 어플리케이션을 출시하여 웹2.0에서 웹3.0으로의 원활한 전환을 준비합니다. 웹과 앱 내에서 다양한
									홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는 홀더들에게 지속적으로 만질 수 있는
									가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
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
									문화를 개척하기 위해 나타났습니다. 이들은 자유가 더 넓은 차원의 지식과 혁신을 만들어낸다고 믿습니다. 그리고 자유와 책임의 적정선을
									잘 인지하고 있습니다. 따라서 외칩니다. “멋있게 일하고, 더 멋있게 놀자!” GOMZ는 모두에게 더 많은 꿈을, 그리고 더 자유로운 일상을
									제공하고자 나타났습니다.
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
									준비합니다. 앱 내에서 다양한 홀더들은 PFP가 자신의 아바타이자 정체성이 되어 표현하고, 활동하고, 교류합니다. 나아가 GOMZ는 홀더들에게
									지속적으로 만질 수 있는 가치를 제공함으로써 가상과 현실세계 모두에서 더 나은 세상 구축에 앞장섭니다.
								</Div>
							</Div>
						</Col>
					</Row>
					<Row mxAuto maxW={1200} px40 py50>
						<Div hrTag />
					</Row>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Row mxAuto maxW={1200} px40 fontBold pb50>
						<Col auto text2xl textWhite>
							Participate in our{" "}
							<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
								Masterplan{" "}
							</Div>
							<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
								Roadmap
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<Div mxAuto maxW={1200} px40 py20>
						<Row roundedXl bgColor={"rgba(255,255,255,0.05)"} py20 textWhite flex itemsCenter mb20>
							<Col auto maxW={300} flex itemsCenter flexCol px50>
								<Div textXl pb10>
									혁신을 통해
								</Div>
								<Div px20>
									<Div imgTag src={IMAGES.gomzInnovate} w100></Div>
								</Div>
							</Col>
							<Col px50 py10>
								<Div pb10>Better World 앱</Div>
								<Div pb20>
									Web2.0와 Web3.0의 조화를 통해 Klaytn NFT 공간을 통합하고 선도하는 소셜 어플리케이션입니다. GOMZ는 이를 설립하고 이곳에 합류하는
									최초의 NFT 컬렉션입니다.
								</Div>
								<Div pb10>Innovators 프로그램</Div>
								<Div>
									GOMZ는 재능있고 열정적인 혁신가들의 커뮤니티입니다. 누구든 자신의 아이디어와 재능을 뽐내어 더 나은 세상 설립에 기여하고 1/1 NFT,
									KLAY 등 이에 따른 보상을 받을 수 있습니다.
								</Div>
							</Col>
						</Row>
						<Row roundedXl bgColor={"rgba(255,255,255,0.05)"} py20 textWhite flex itemsCenter my20>
							<Col auto maxW={300} flex itemsCenter flexCol px50>
								<Div textXl pb10>
									컬렉션을 통해
								</Div>
								<Div px20>
									<Div imgTag src={IMAGES.gomzRebel} w100></Div>
								</Div>
							</Col>
							<Col px50 py10>
								<Div pb10>환생 기회</Div>
								<Div pb20>민팅 종료 1주일 후 환생 기회가 활성화됩니다. 놓치지 마세요! 갤런트 GOMZ: GOMZ의 3D 버전 컬렉션을 Airdrop 예정입니다.</Div>
								<Div pb10>GOMZ Shop</Div>
								<Div pb20>GOMZ는 혁신가들을 위한 브랜드입니다. 다양한 GOMZ 액세서리를 구입할 수 있는 온라인 쇼핑 플랫폼을 제공합니다.</Div>
								<Div pb10>GOMZ Bank</Div>
								<Div>공식 커뮤니티 지갑으로, GOMZ 커뮤니티와 더 나은 세상 발전을 위해 사용됩니다.</Div>
							</Col>
						</Row>
						<Row roundedXl bgColor={"rgba(255,255,255,0.05)"} py20 textWhite flex itemsCenter mt20>
							<Col auto maxW={300} flex itemsCenter flexCol px50>
								<Div textXl pb10>
									대중화를 통해
								</Div>
								<Div px20>
									<Div imgTag src={IMAGES.gomzTogether} w100></Div>
								</Div>
							</Col>
							<Col px50 py10>
								<Div pb10>우주 방랑자 초대</Div>
								<Div pb20>GOMZ가 함께 만든 BetterWorld 앱에 타 NFT 홀더들을 초대합니다!</Div>
								<Div pb10>GOMZ GALA</Div>
								<Div pb20>
									“멋있게 일하고, 더 멋있게 놀자!” GOMZ GALA 2022는 대한민국에서 개최 예정이며, 경매, NFT 전시회, 애프터 파티 등 흥미진진한 이벤트들이
									계획되어 있습니다.
								</Div>
								<Div pb10>BetterShop 입점 파트너십</Div>
								<Div pb20>
									GOMZ의 비전을 공감하는 다양한 업계의 상점들을 Better샵에 입점할 수 있도록 협약을 맺고 유저들에게 실질적인 혜택을 제공합니다.{" "}
								</Div>
								<Div pb10>GOMZ Partners</Div>
								<Div>
									GOMZ는 기부, 행사, 협약 등을 통해서 주변을 위로하고 돕고자합니다. 그 첫 번째 파트너는 코로나 여파로부터 회복하고 있는
									소상공인입니다.
								</Div>
							</Col>
						</Row>
					</Div>
					<Row mxAuto maxW={1200} px40 py50>
						<Div hrTag />
					</Row>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Row mxAuto maxW={1200} px40 fontBold pb50>
						<Col auto text2xl textWhite>
							Team: Simply the{" "}
							<Div spanTag style={{ color: "rgb(25, 110, 237)" }}>
								First 8
							</Div>{" "}
							<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
								Gomz
							</Div>
						</Col>
						<Col></Col>
					</Row>
					<Row mxAuto maxW={1200} px40>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.mj}></Div>
							</Div>
							<Div textWhite py20>
								MJ
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.eric}></Div>
							</Div>
							<Div textWhite py20>
								Eric
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.ian}></Div>
							</Div>
							<Div textWhite py20>
								Ian
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.serena}></Div>
							</Div>
							<Div textWhite py20>
								Serena
							</Div>
						</Col>
					</Row>
					<Row mxAuto maxW={1200} px40>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.jay}></Div>
							</Div>
							<Div textWhite py20>
								Jay
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.jieun}></Div>
							</Div>
							<Div textWhite py20>
								Jieun
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.seungan}></Div>
							</Div>
							<Div textWhite py20>
								Seungan
							</Div>
						</Col>
						<Col flex flexCol itemsCenter>
							<Div maxW={200} roundedXl overflowHidden>
								<Div imgTag src={IMAGES.team.seonghyun}></Div>
							</Div>
							<Div textWhite py20>
								SeongHyun
							</Div>
						</Col>
					</Row>
					<Row mxAuto maxW={1200} px40 py50>
						<Div hrTag />
					</Row>
				</Div>
				<Div style={{ backdropFilter: "brightness(15%)" }}>
					<Footer />
				</Div>
			</Div>
		</>
	);
};

export default Index;
