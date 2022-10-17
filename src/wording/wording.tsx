import React from "react";
import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";

export const wording = {
  index: {
    BetterWorld: {
      en: (
        <>
          BetterWorld is an optimized service for NFT communities that catalogs announcements and events of your favorite projects. It further provides a
          communal space for holders of various communities to interact through social tabs and messaging features
          <br />
          <Div py10 />
          BetterWorld will continue to change and evlove in line with the blockchain industry. As of today, WeBe will challenge and endeavor after the true
          BetterWorld.
        </>
      ),
      ko: (
        <>
          Better World는 팔로우한 NFT 프로젝트의 새로운 소식들을 공지 탭에서 모아서 한눈에 확인하고, 소셜 탭과 메시지 기능으로 다양한 사람들과 함께 어울릴 수
          있는 NFT 커뮤니티에 최적화된 공간입니다.
          <br />
          <Div py10 />
          끊임없이 변화하는 세상에 맞춰 Better World도 계속해서 변화하고 진화해 나갈 것이며 WeBe들과 함께 더 나은 세상이란 어떤 세상인지 고민하고 도전해 나갈
          것입니다.
        </>
      ),
    },
    InDigitlaWorld: {
      rebirth: {
        en: <>Everyone deserves a second chance!! Webe will receive a chance to be reborn on-chain into a different appearance and rarity for a small price.</>,
        ko: <>본인의 위비가 썩 맘에 들지 않으신가요? 민팅 종료 후 환생 기회가 활성화됩니다. 다시 오지 않을 두 번째 기회, 놓치지 마세요!</>,
      },
      weirdwine: {
        en: (
          <>
            WeBes have found a mysterious bottle of wine in BetterWorld. An exclusive supply of wine is available for WeBe holders. The wine itself will provide
            tools and items for WeBe to be more diverse in the metaverse.
          </>
        ),
        ko: <>BetterWorld에서 신비한 와인 한 병을 발견했습니다. 메타버스에서 위비가 더 다양해질 수 있는 아이템들이 기다리고 있습니다.</>,
      },
      wizardwebe: {
        en: <>3D collection of our WeBes. Holders receive a 3D version of their minted WeBe to expand its movement in the metaverse.</>,
        ko: (
          <>
            그래픽에서 보다 생생하고 실험적으로 변하는 관문입니다. 각 홀더는 메타버스에서의 활동을 확장하기 위해 본인의 3D 위비를 에어드롭을 받을 수 있습니다.
          </>
        ),
      },
      pioneer: {
        en: <>WeBe will enter BetterWorld, an app created exclusively for PFP holders to exercise their rights and privileges as a member of the community.</>,
        ko: (
          <>
            위비는 편리한 커뮤니티 활동을 위해 만들어진 PFP 전용 앱 BetterWorld에서 게시물, 투표, 채팅, 팔로우/팔로잉 등의 기능을 통해 커뮤니티원으로서 위비의
            권리를 행사하고 교류할 수 있습니다.
          </>
        ),
      },
      socializetoearn: {
        en: <>Connect in the app to receive Klay every week. Socialize to earn passive income.</>,
        ko: <>BetterWorld에서 위비는 자유롭게 표현하고 다른 PFP들과 교류하며 $Klay를 보상 받을 수 있습니다.</>,
      },
      capsule: {
        en: <>WeBe holders receive a free metaverse land, the Capsule, in BetterWorld. Here, you can decorate, communicate, and explore the digital world.</>,
        ko: <>BetterWorld에서 메타버스 개인 공간인 캡슐을 부여받습니다. 본인의 위비만을 위한 공간을 꾸미고, 소통하고, 탐험하세요.</>,
      },
    },
    InRealWorld: {
      webegoods: {
        en: <>Providing tangible accesorries to expand our values IRL.</>,
        ko: <>브랜드로서의 신중한 첫걸음을 내딛습니다.</>,
      },
      webepartners: {
        en: (
          <>
            Partnering with various WeBe-like restaurants, bars, and entreprises to expand WeBe in various methods. Holders will receive exclusive offers in
            partnered ventures. Check out Public Docs to see our ready-to-go partnerships.
          </>
        ),
        ko: (
          <>
            위비스러운 레스토랑, 바, 기업 등과의 파트너십을 통해 위비를 확장합니다. 위비라면 누구나 오프라인 제휴 파트너들로부터 혜택을 받을 수도 있습니다.
            상단바에 위치한 Public Docs에서 함께하기 시작한 파트너들을 확인하세요.
          </>
        ),
      },
      weirdirl: {
        en: <>Be weird, together. Regular events for holders to get together. Wine nights, futsal games, and weird events prepared.</>,
        ko: (
          <>
            정기 오프라인 프로그램은 스포츠 대회, 글로벌 파티 등 다양하게 구성됩니다. 커뮤니티원은 BetterWorld 앱 내 포럼에서 다양한 프로그램 아이디어를 논의할
            수 있습니다.
          </>
        ),
      },
      weirdprojects: {
        en: (
          <>
            Build weird projects by contributing your ideas through forums. Based on the quality of your proposal, you will receive 1) financial support to turn
            your ideas into reality 2) receive compensation based on your work.
          </>
        ),
        ko: (
          <>
            포럼을 통해 위비만의 프로젝트를 구축하세요. 위비로서 이루고 싶은 모든 꿈이 아이디어만 있다면 실현 가능할 수 있습니다. 제안의 종류에 따라 1)
            아이디어를 현실로 전환하기 위한 재정적 지원 또는 2) 업무에 따른 보상을 받게 됩니다.
          </>
        ),
      },
      webedao: {
        en: (
          <>
            Your WeBe NFT is your &quot;legal right&quot; in the project. Holders can easily propose, discuss, and contribute to WeBe’s brand. Participate in
            BetterWorld’s proposals and off-chain votes.
          </>
        ),
        ko: (
          <>
            완벽한 DAO는 존재할 수 없습니다. 따라서 위비는 최소한의 개입으로 건강한 DAO가 되는 것이 목표입니다. NFT는 위비의 &quot;투표권&quot; 입니다. 커뮤니티
            포럼에서 프로젝트에 관해 쉽게 토론 및 기여할 수 있습니다.
          </>
        ),
      },
    },
  },

  team: {
    index: {
      title: {
        ko: "Team",
        en: <>Team</>,
      },
      subtitle: {
        ko: [<>SOONI LABS 팀원들은 블록체인을 기반으로</>, <>함께 고민하고 해결하며, 세계를 향해 나아갑니다.</>],
        en: [<>A group of active problem solvers working together</>, <>to provide value from blockchain, for the world.</>],
      },
      members: {
        minjun: {
          name: {
            en: "Bigachad",
            ko: "Bigachad",
          },
          position: {
            ko: "Explorer",
            en: "Explorer",
          },
          countries: "🇰🇷 🇨🇳 🇦🇺 🇺🇸",
          specialty: {
            en: "An ambitious lad on a mission to establish a Better World, breaking through the shackles of social convention. Previously a business & computer science student @ KAIST, who dreams of bigger things than a simple degree. Mixed-culture kid of Korea, China, and the U.S. And, a big party head. A perfect example of the good-old quote, “work hard, party harder”.",
            ko: "사회적 관습과 족쇄를 부수고 '더 나은 세상'을 건설하는 임무를 성공적으로 수행하고자하는 야심찬 청년. 실제 헬창이긴 하다. KAIST에서 경영과 전산학 전공을 하긴했지만 항상 단순 학위보다 더 큰 것을 갈망한다고 한다. (재수없ㅇ) 한국, 중국, 미국을 넘나들며 국적 불문 '열심히 일하는데  더 열심히 놀아 재끼는 걔'가 되고자한다.",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>KAIST Business & Tech Management</Div>
                <Div pt20>NONCE Blockchain Community Member</Div>
                <Div pt20>1st in MSK x Block Crafters Case Competition</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>KAIST 기술경영학부</Div>
                {/* <Div pt20>블록체인 커뮤니티 NONCE 멤버</Div> */}
                <Div pt20>
                  MSK x Block Crafters <br /> 산학협력 프로젝트 우승
                </Div>
              </Div>
            ),
          },
        },
        yeajean: {
          name: {
            en: "Serenerdy",
            ko: "Serenerdy",
          },
          countries: "🇰🇷 🇻🇳 ",
          position: {
            ko: "Hybrid Operator",
            en: "Hybrid Operator",
          },
          specialty: {
            en: "Queen of finding inner peace. She thinks the world confuses her, while it is her overflowing creativity that causes the confusion. Ranging from work, hobby, and love, to world peace, Her creativity is neverending. To think or not to think, that is the question. Perhaps that is why the equanity of the queen often strays away from the path. Just hand her a drink and play some music! ",
            ko: "평정심에 집착한다. 그녀는 세상이 너무 그녀를 어지럽게 한다고 하지만 사실 문제는 스스로에게서 나온다. 일부터 취미, 사랑, 세계 평화까지. . 욕심을 버리던가 생각을 버리던가. . 그래서인지 평온해보이는 그녀의 평온치 못한 본성을 보는 일은 생각보다 어렵지 않다. 술과 음악을 쥐어주어라",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>Yonsei University Business</Div>
                <Div pt20>PM @ CodeGreen</Div>
                <Div pt20>Marketing @ KOTE</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>연세대학교 경영학과</Div>
                <Div pt20>PM @ CodeGreen</Div>
                <Div pt20>마케팅 @ KOTE</Div>
              </Div>
            ),
          },
        },
        eric: {
          name: {
            en: "Eric",
            ko: "Eric",
          },
          position: {
            ko: "Degen",
            en: "Degen",
          },
          countries: "🇰🇷 🇩🇪 🇨🇳 🇺🇸",
          specialty: {
            en: "Ex-soccer player, now an NFT degen. A big dreamer, who wishes to building a cultural movement through NFT mechanics. Lived in Seoul, Shanghai, Berlin, and now New York. Eric brings a global edge to the WeBe franchise with his diverse background. Specializes in NFT strategy & content creation. Interesting fact: Eric scored against Bayern Munich at the age of 13.",
            ko: "한 때는 축구 유망주였던,, 이제는 축구를 뒤로하고 NFT 광팬으로 거듭나고 있다. 서울, 상하이, 베를린, 그리고 지금은 뉴욕에 거주하고 있는 그는 다양한 배경을 바탕으로 위비 프랜차이즈에 검머외 한스푼을 얹는다(?). 흥미로운 사실: 13살에 바이에른 뮌헨 상대로 골 넣음",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>New York University</Div>
                <Div pt20>PM @ GreenWall Building Materials</Div>
                <Div pt20>NFT Degen</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>뉴욕대학교</Div>
                <Div pt20>PM @ GreenWall Building Materials</Div>
                <Div pt20>NFT 활동가</Div>
              </Div>
            ),
          },
        },
        jieun: {
          name: {
            en: "Zoa",
            ko: "Zoa",
          },
          position: {
            en: "Designer in Pain",
            ko: "Designer in Pain",
          },
          countries: "🇰🇷 🇭🇰 🇨🇳",
          specialty: {
            en: "Believes true inspiration comes from the pursuit of pleasure but transforms into a shut-in when she has to get in the zone. Still does not know when her love and hate relationship with design began. ‘I mean.. giving the best in everything is my life motte tho,,’ This_version_not_the_previous_is_the_final_fr_fr.png. Oh! She also likes to talk about poop(?)",
            ko: "창의력은 유흥에서 나온다고 믿는 편이지만 작정하고 심오해질땐 히키코모리 그 자체가 된다. 언제 어디서 시작됐는지 알 도리가 없는 디자인과 애증의 관계.. 매사에 즐기며 최선을 다하는것이 삶의 목표긴한데,, 진짜진짜_최종_위에거_다아니고_이게_최종.png	아 ! 똥얘기 조아함",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>HongKong PolyTechnic University Product Design</Div>
                <Div pt20>Product Designer @ Lulugine</Div>
                <Div pt20>Illustrator @ A’ Prime</Div>
                <Div pt20>HK 2022 Disney Imaginations Competition Finalist</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>홍콩 폴리테크닉 대학교 제품디자인학과</Div>
                <Div pt20>제품 디자이너 @ Lulugine</Div>
                <Div pt20>일러스트 디자이너 @ A’ Prime</Div>
                <Div pt20>HK 2022 Disney Imaginations Competition 결승 진출</Div>
              </Div>
            ),
          },
        },
        jade: {
          name: {
            en: "Jack",
            ko: "Jack",
          },
          position: {
            ko: "Developer",
            en: "Developer",
          },
          countries: "🇰🇷 🇨🇳",
          specialty: {
            en: "Devotes his soul once he is hooked on to something, yet he lies back down when he loses interest. Owns extremely well-trained and flexible toes to pick up things that are in his toe-radar. The only time he gets up is when he feels threatened or finds something interesting. No one knows the reason why he loves lying down but perhaps it’s for the sake of charging energy to start something big.",
            ko: "누워있는 것이 취미이자 특기인 개발자 Jack. 무언가에 한 번 꽂히면 미친듯이 파긴 하는데 흥미를 잃으면 다시 누우러 간다. 멀리있는 물건은 발을 뻗어 집는다. 그래서인지 발가락이 유연하고 발가락 힘이 좋은 편.. 그가 일어나는 순간은 위기를 느끼거나, 흥미로워 보이는 일이 생길때이다. 그리 누워서 무슨 생각을 하는지 도통 알 수 없지만.. 새로운 일을 시작하기 위해 힘을 비축하는 것은 아닐까?",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>KAIST Industrial Design</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>KAIST 산업디자인학과</Div>
              </Div>
            ),
          },
        },
        ian: {
          name: {
            en: "Guffin",
            ko: "Guffin",
          },
          position: {
            ko: "More than a Tech Guy",
            en: "Lead Dev",
          },
          specialty: {
            en: "Has thought about WeBe and its holders' experience more than anything in his life. Worked as a software engineer at one of the best edutech start-ups in Korea and is currently developing full stack + blockchain. (He calls it Web2 + 3 = Web5) Also a global WeBe, who has lived in Korea, Vietnam, and Canada. He claims to be one of the best at footsal @ KAIST, but it is nowhere near Eric’s level. Ha!",
            ko: "삶에서 그 어떤 것보다도 위비 그리고 위비와 함께할 사람들에 대해 생각해왔다. 국내 최고의 에듀텍 스타트업 중 한 곳에서의 소프트웨어 엔지니어 경험을 거쳐 현재 풀스택+블록체인 개발을 한다. (그는 그걸 Web2 + 3 = Web5 라고 부르더라) 한국, 베트남, 캐나다에서 지낸 글로벌 위비이기도하다. 스스로 KAIST에서 풋살짱이라고 하던데 에릭은 못따라잡을듯",
          },
          countries: "🇰🇷 🇻🇳 🇨🇦",
          desc: {
            en: (
              <Div textCenter>
                <Div>KAIST Computer Science</Div>
                <Div pt20>SW Engineer @ Ringle</Div>
                <Div pt20>Web-based Metaverse Specialist</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>KAIST 전산학부</Div>
                <Div pt20>개발자 @ 링글</Div>
                <Div pt20>웹 기반 Metaverse 개발자</Div>
              </Div>
            ),
          },
        },
        jaehwan: {
          name: {
            en: "Jaesus",
            ko: "Jaesus",
          },
          position: {
            ko: "Some Guy",
            en: "Some Guy",
          },
          countries: "🇰🇷 🇸🇬",
          specialty: {
            en: "Firm believer in recording over remembering. Knows that we all serve a specific role in a given community and doubling down on your forte is what makes you irreplaceable. He can be the Adam to your Eve and Denzel to your Washington, but until you really know him, he is just some guy.",
            ko: "기억보단 기록하는 것의 힘을 깊게 믿는다. 우리 모두가 주어진 공동체에서 맡은 역할이 있으며, 주어진 역할을 성실히 해내는 것이 대체 불가능한 인재를 탄생시킨다는 것을 잘 알고있다. 그는 이브의 아담이 될 수도, 트럼프의 도날드도 될 수 있지만 그를 진정으로 알기 전까지 그는 단지 '어떤 남자'일 뿐..",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>KAIST Computer Science</Div>
                <Div pt20>Founder, SW Engineer @ Sureplus</Div>
                <Div pt20>SW Engineer @ Waddle</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>KAIST 전산학부</Div>
                <Div pt20>공동 창립자, 개발자 @ SurePlus</Div>
                <Div pt20>개발자 @ Waddle</Div>
              </Div>
            ),
          },
        },
        seungan: {
          name: {
            en: "Jungger",
            ko: "Jungger",
          },
          position: {
            ko: "Full-Stack Developer",
            en: "Full-Stack Developer",
          },
          countries: "🇰🇷",
          specialty: {
            en: "Holds a weird obsession with clean code and trivial speed optimization that the users cannot even sense. In contrast to his appearance, he is a piano maniac who can really hit some notes. Maybe his specialty leans more towards the piano. Doesn’t really trust Guffin’s futsal skills. Til the day without “git reset --hard”…",
            ko: "가끔가다 강박증 도져서 사용자한테는 보이지도 않는 코드의 깔끔함 & 티도 별로 안나는 속도 향상을 위해 시간 낭비를 할 때가 많은 이상한 개발자다. 생긴것과 다르게 클래식, 특히 피아노 광적으로 좋아해서 생각보다 잘친다. 코딩 좀 친다지만 피아노를 더 잘칠 수도? Guffin이 풋살 잘한다고 주장하고 있는데 본적이 없어서 안믿고 있는 중이다. git reset --hard 안하는 그날까지,,",
          },
          desc: {
            en: (
              <Div textCenter>
                <Div>KAIST Computer Science</Div>
              </Div>
            ),
            ko: (
              <Div textCenter>
                <Div>KAIST 전산학부</Div>
              </Div>
            ),
          },
        },
      },
    },
  },
  story: {
    index: {
      story1: {
        ko: (
          <>
            지나친 경쟁과 획일화로 인해 위비는 지난 수년간 전쟁 상태에 있었습니다. 이와 같은 갈등은 이미 행성을 너무 적대적이고 삭막하여 거주하기 힘든 환경으로
            만들어버렸습니다.{" "}
          </>
        ),
        en: (
          <>
            WeBe have been in a planet-wide war for the past years. The war was provoked by excessive indoctrination of competition and uniformity. Such
            violence has made the planet too hostile, colorless, and systematic,<br></br>rendering it uninhabitable.{" "}
          </>
        ),
      },
      story2: {
        ko: <>전쟁에 지친 8,888 마리의 위비는 이타적인 비전을 가지고 우주여행을 떠났습니다:</>,
        en: <>8,888 of these bears have turned to space travel with an altruistic vision:</>,
      },
      story22: {
        ko: <>더 많은 자유와 다양성이 존재하는 세상, &quot;BetterWorld&quot;를 구축하다.</>,
        en: <>Establish a &quot;BetterWorld&quot;, a free and creative society for diverse innovators.</>,
      },
      story3: {
        ko: <>어느 날, 구축한 BetterWorld 캡슐에서 수면 중이던 위비는 거주 가능한 행성을 찾고 있는 다른 우주 방랑자들에 의해 깨어났습니다.</>,
        en: (
          <>
            During deep hibernation in their capsules in BetterWorld, WeBe have been awakened by other space wanderers<br></br>who are also in search of a
            habitable planet.
          </>
        ),
      },
      story4: {
        ko: (
          <>
            위비는 이들과 맞서 싸우는 대신<br></br>BetterWorld로 초대하고 환영하기로 합니다.
          </>
        ),
        en: (
          <>
            Instead of fighting these space wanderers,<br></br>
            WeBe decides to invite and welcome them<br></br>to BetterWorld.
          </>
        ),
      },
      value: {
        ko: (
          <Div textSecondary2>
            WeBe는 NFT 커뮤니티 활동에 최적화된 Better World 라는 새로운 공간을 만들고자 합니다. WeBe가 되어 Better World Building의 영광을 함께 하세요.
            <Div pt1></Div>
            <br></br>영광의 개척자가 된 WeBe들은 Better World를 함께 일궈나가고 공동 주주가 되어 성공을 함께 나누게 됩니다.
          </Div>
        ),
        en: (
          <Div textSecondary2>
            WeBe aims to collectively build a creative space designated and optimized for NFT, FT, DAO, and other Web 3.0 communities. Join WeBe and become part
            of glorious history of BUIDLing BetterWorld - ‘THE’ social media for the next generation.
            <Div pt1></Div>
            <br></br>Members of WeBe community, the pioneers of BetterWorld, will become the shareholders of BetterWorld. In turn, you shall receive dividends
            generated from BetterWorld as well as WeBe NFT Sales as an incentive
          </Div>
        ),
      },
    },
  },
  faq: {
    image: {
      ko: <Div imgTag src={IMAGES.mintingDetailsKor}></Div>,
      en: <Div imgTag src={IMAGES.mintingDetailsEng}></Div>,
    },
    question: {
      q1: {
        ko: <>PFP 갯수는 왜 8,888 인가요?</>,
        en: <>What’s up with the number “8”?</>,
      },
      q2: {
        ko: <>커뮤니티 활동은 앱활동만 있나요?</>,
        en: <>Do community activities only occur in BetterWorld?</>,
      },
      q3: {
        ko: <>민팅 날짜와 가격은 어떻게 되나요?</>,
        en: <>Mint date & price?</>,
      },
      q4: {
        ko: <>민팅 방법은 어떻게 되나요?</>,
        en: <>How to mint?</>,
      },
      q5: {
        ko: <>WeBe가 Better World의 공동 주주로서 받게 되는 혜택이 있나요?</>,
        en: <>What are the perks (a.k.a utilities) of becoming a part of WeBe community?</>,
      },
    },
    answer: {
      q1: {
        ko: (
          <>
            숫자 “8”은 무한대 (∞)를 의미합니다. 위비는 변덕스러운 가격변동, 폰지사기, 덤핑 등의 무수한 외부요인을 묵묵히 이겨나갈 수 있는 무한한 잠재력과
            성장력을 가진 커뮤니티가 되고자합니다.
          </>
        ),
        en: (
          <>
            Out of all the different meanings, WeBe has chosen 8,888 due to ∞ . Despite all the external factors in the NFT space, such as volatile floor
            prices, rug pulls, and ponzi-like schemes, WeBe aspires to be a community with infinite potential and growth. We are here to create a culture of its
            own with 8,888 WeBe.
          </>
        ),
      },
      q2: {
        ko: (
          <>
            아닙니다. 위비의 비전은 현실과 가상세계를 불문하고 BetterWorld를 만드는 것입니다. 주 활동은 BetterWorld 앱 활동이 맞으나, 2022년 8월에 개최된 weird
            party와 같이 위비의 신념과 커뮤니티원들의 의견에 따른 다양한 활동/행사들을 함께할 예정입니다.
          </>
        ),
        en: (
          <>
            Not at all. Our vision is to build a ‘better world’ that transcends the boundary between reality and virtuality. Though main community activities
            are associated with BetterWorld App, we will continue to hold IRL events and other activities (such as the 1st OG party during August 2022).
          </>
        ),
      },
      q3: {
        ko: <>민팅 일정은 아래 표를 참고해주세요. 자세한 날짜는 위비 트위터 및 디스코드에서 곧 공개될 예정입니다!</>,
        en: <>Please refer to the table below. Specific dates will be notified soon via Twitter(@webe_weirdbears) and Discord!</>,
      },
      q4: {
        ko: (
          <>
            위비의 민팅 방식은 비공개와 공개 세일 두가지로 나뉘어져있습니다. 곧 비공개 2nd OG 민팅이 시작됩니다. 자세한 사항은 디스코드를 통해 공지될
            예정입니다.
          </>
        ),
        en: (
          <>
            WeBe&apos;s minting process is divided into Private Sale & Public Mint. For private sales, you need to submit a short form in Discord during the
            application period. Our 2nd OGs has just started! Details will be notified on Twitter(@webe_weirdbears) and Discord.
          </>
        ),
      },
      q5: {
        ko: (
          <Div>
            WeBe는 Better World를 함께 일궈나가는 공동 주주로서 홀더 트레저리에서 일정량의 배당금을 받게 됩니다. 앱 내 수익이 커질수록 받게 되는 배당금의 양도
            커지게 되니 함께 성공하기 위해, 더 나은 세상을 만들기 위해 모두의 적극적인 참여와 도전이 필요합니다.
          </Div>
        ),
        en: (
          <Div>
            As a collective pioneers of BetterWorld, members of WeBe receives certain ‘dividends’ from our community treasury as ‘shareholders’. Such
            ‘dividends’ will increase as the revenue from BetterWorld App increases. Thus, we truly need community’s engagement and help in order to foster
            BetterWorld.
          </Div>
        ),
      },
    },
  },
};
