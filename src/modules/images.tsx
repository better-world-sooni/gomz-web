const prefix = "https://dkwhovxeipvs0.cloudfront.net";

const images = {
	webeStory1: "/images/webeStory1.png",
	webeStory2: "/images/webeStory2.png",
	webeStory3: "/images/webeStory3.png",
	webeStory4: "/images/webeStory4.png",
	webeMainAstronaut: "/images/webeMainAstronaut.png",
	mintingProcess: "/images/mintingProcess.png",
	mainWord: "/images/mainWord.png",
	mainWordMobile: "/images/mainWordMobile.png",
	menuIcon: "/images/menuIcon.png",
	cancelIcon: "/images/cancelIcon.png",
	starDusts3: "/images/starDusts3.png",
	starDusts4: "/images/starDusts4.png",
	webeTshirtillust: "/images/webeTshirtillust.png",
	circleLeftArrow: "/images/circleLeftArrow.png",
	storyPreview: "/images/storyPreview.png",
	webeGalaxy: "/images/webeGalaxy.png",
	whitelist: "/images/whitelist.png",
	heart: "/images/heart.png",
	shootingStar: "/images/shootingStar.png",
	twinkle: "/images/twinkle.png",
	alien: "/images/alien.png",
	earth: "/images/earth.png",
	moon: "/images/moon.png",
	planet: "/images/planet.png",
	saturn: "/images/saturn.png",
	spaceGun: "/images/spaceGun.png",
	spaceship: "/images/spaceship.png",
	storyBanner: "/images/storyBanner.png",
	storyBannerMobile: "/images/storyBannerMobile.png",
	mintingDetailsKor: "/images/MintingDetailsKor.png",
	mintingDetailsEng: "/images/MintingDetailsEng.png",
	bwpreview: "/images/bwpreview.png",
	bwpreview2: "/images/bwpreview2.png",
	webeBetterworld: "/images/webeBetterworld.png",
	iphon13: "/images/iphone13_pro.png",
	appDrafts:{
		draft1:{
			bwLogo1:"/images/appDrafts/draft1/bwLogo_1.png",
			bwLogo2:"/images/appDrafts/draft1/bwLogo_2.png",
			bwWord:"/images/appDrafts/draft1/bwWord.png"
		},
		draft2:{
			feed:{
				head:"/images/appDrafts/draft2/feedhead.png",
				content:"/images/appDrafts/draft2/feedcontent.png",
				contentMobile:"/images/appDrafts/draft2/feedcontentMobile.png",
			},
			profile:{
				head1:"/images/appDrafts/draft2/profilehead1.png",
				head2:"/images/appDrafts/draft2/profilehead2.png",
				content:"/images/appDrafts/draft2/profilecontent.png",
				contentMobile:"/images/appDrafts/draft2/profilecontentMobile.png",
			},
		}
	},
	logos: {
		discord: "/images/logos/discord.png",
		twitter: "/images/logos/twitter.png",
		betterWorld: "/images/logos/betterWorld.png",
		betterWorldPrimary: "/images/logos/betterWorldPrimary.png",
		betterWorldSecondary2: "/images/logos/betterWorldSecondary2.png",
		webeIcon: "/images/logos/webeIcon.png",
		webeIconPrimary: "/images/logos/webeIconPrimary.png",
		webeWhiteLogo: "/images/logos/webeWhiteLogo.png",
		webeLogo: "/images/logos/webeLogo.png",
	},
	journeyIcons: {
		capsule: "/images/journeyIcons/capsule.png",
		pioneer: "/images/journeyIcons/pioneer.png",
		rebirth: "/images/journeyIcons/reBirth.png",
		socializetoEarn: "/images/journeyIcons/socializetoEarn.png",
		weirdProjects: "/images/journeyIcons/weirdProjects.png",
		webeDAO: "/images/journeyIcons/webeDAO.png",
		webeGoods: "/images/journeyIcons/webeGoods.png",
		webePartners: "/images/journeyIcons/webePartners.png",
		weirdIRL: "/images/journeyIcons/weirdIRL.png",
		weirdWine: "/images/journeyIcons/weirdWine.png",
		wizardWebe: "/images/journeyIcons/wizardWebe.png",
	},
	examplePfp: {
		[1]: "/images/example-pfp/0001.png",
		[2]: "/images/example-pfp/0002.png",
		[3]: "/images/example-pfp/0003.png",
		[4]: "/images/example-pfp/0004.png",
		[5]: "/images/example-pfp/0005.png",
		[6]: "/images/example-pfp/0006.png",
		[7]: "/images/example-pfp/0007.png",
		[8]: "/images/example-pfp/0008.png",
		[9]: "/images/example-pfp/0009.png",
		[10]: "/images/example-pfp/0010.png",
		[11]: "/images/example-pfp/0011.png",
		[12]: "/images/example-pfp/0012.png",
	},
	team: {
		mj: "/images/team/resized/0007.png",
		eric: "/images/team/resized/0003.png",
		ian: "/images/team/resized/0004.png",
		serena: "/images/team/resized/0001.png",
		jay: "/images/team/resized/0008.png",
		jieun: "/images/team/resized/0002.png",
		seungan: "/images/team/resized/0006.png",
		jade: "/images/team/resized/0005.png",
	},
	partners: {
		aiLabs: "/images/partners/aiLabs.png",
		bankofWine: "/images/partners/bankofWine.png",
		philosophiaCapital: "/images/partners/philosophiaCapital.png",
		blinkers: "/images/partners/blinkers.png",
		kote: "/images/partners/kote.png",
		pala: "/images/partners/pala.png",
		club021: '/images/partners/club021.png',
		lgc: '/images/partners/lgc.png',
		level19: '/images/partners/level19.png',
		myBias: '/images/partners/myBias.png',
	},
};

const addPrefixToImageUris = (data) => {
	data &&
		Object.entries(data).map(([key, v]) => {
			if (typeof v === "string") {
				const source = prefix + v;
				data[key] = source;
			} else if (typeof v === "object") {
				addPrefixToImageUris(v);
			}
		});
};
(function () {
	addPrefixToImageUris(images);
})();

export const IMAGES = images;
