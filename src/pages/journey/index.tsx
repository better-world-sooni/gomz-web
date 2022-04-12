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
									더 나은{" "}
									<Div spanTag style={{ color: "rgba(0,0,0,0)", ["-webkit-text-stroke"]: "1px white" }}>
										세상{" "}
									</Div>
									<Div textLg spanTag>
										을 구축하다
									</Div>
								</Div>
							</Div>
							<Row roundedXl bgColor={"rgba(255,255,255,0.05)"} py20 textWhite flex itemsCenter my20>
								<Col auto maxW={300} flex itemsCenter flexCol px50>
									<Div textXl pb10>
										혁신을 통해
									</Div>
									<Div px20>
										<Div imgTag src={IMAGES.gomzInnovate} w100></Div>
									</Div>
								</Col>
								<Col px50>
									<Div pb10>Better World 앱</Div>
									<Div>
										Web2.0와 Web3.0의 조화를 통해 Klaytn NFT 공간을 통합하고 선도하는 소셜 어플리케이션입니다. GOMZ는 이를 설립하고 이곳에 합류하는
										최초의 NFT 컬렉션입니다.Innovators 프로그램: GOMZ는 재능있고 열정적인 혁신가들의 커뮤니티입니다. 누구든 자신의 아이디어와 재능을
										뽐내어 더 나은 세상 설립에 기여하고 1/1 NFT, KLAY 등 이에 따른 보상을 받을 수 있습니다.
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
								<Col px50>
									<Div pb10>환생 기회</Div>
									<Div>
										민팅 종료 1주일 후 환생 기회가 활성화됩니다. 놓치지 마세요! 갤런트 GOMZ: GOMZ의 3D 버전 컬렉션을 Airdrop 예정입니다. GOMZ Shop:
										GOMZ는 혁신가들을 위한 브랜드입니다. 다양한 GOMZ 액세서리를 구입할 수 있는 온라인 쇼핑 플랫폼을 제공합니다. GOMZ Bank: 공식
										커뮤니티 지갑으로, GOMZ 커뮤니티와 더 나은 세상 발전을 위해 사용됩니다.
									</Div>
								</Col>
							</Row>
							<Row roundedXl bgColor={"rgba(255,255,255,0.05)"} py20 textWhite flex itemsCenter my20>
								<Col auto maxW={300} flex itemsCenter flexCol px50>
									<Div textXl pb10>
										대중화를 통해
									</Div>
									<Div px20>
										<Div imgTag src={IMAGES.gomzTogether} w100></Div>
									</Div>
								</Col>
								<Col px50>
									<Div pb10>우주 방랑자 초대</Div>
									<Div>
										GOMZ가 함께 만든 BetterWorld 앱에 타 NFT 홀더들을 초대합니다! GOMZ GALA: “멋있게 일하고, 더 멋있게 놀자!” GOMZ GALA 2022는
										대한민국에서 개최 예정이며, 경매, NFT 전시회, 애프터 파티 등 흥미진진한 이벤트들이 계획되어 있습니다. BetterShop 입점 파트너십:
										GOMZ의 비전을 공감하는 다양한 업계의 상점들을 Better샵에 입점할 수 있도록 협약을 맺고 유저들에게 실질적인 혜택을 제공합니다. GOMZ
										Partners: GOMZ는 기부, 행사, 협약 등을 통해서 주변을 위로하고 돕고자합니다. 그 첫 번째 파트너는 코로나 여파로부터 회복하고 있는
										소상공인입니다.
									</Div>
								</Col>
							</Row>
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