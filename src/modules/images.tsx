import React from "react";
const prefix = "https://dkwhovxeipvs0.cloudfront.net";

const images = {
	webeStory1: "/images/webeStory1.png",
	webeStory2: "/images/webeStory2.png",
	webeStory3: "/images/webeStory3.png",
	webeStory4: "/images/webeStory4.png",
	webeMainAstronaut: "/images/webeMainAstronaut.png",
	mintingProcess: "/images/mintingProcess.png",
	mainWord: '/images/mainWord.png',
	menuIcon: "/images/menuIcon.png",
	cancelIcon: "/images/cancelIcon.png",
	starDusts3: "/images/starDusts3.png",
	starDusts4: "/images/starDusts4.png",
	circleLeftArrow: "/images/circleLeftArrow.png",
	storyPreview: "/images/storyPreview.png",
	webeGalaxy: "/images/webeGalaxy.png",
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
		rebirth: "/images/journeyIcons/rebirth.png",
		socializetoEarn: "/images/journeyIcons/socializetoEarn.png",
		webeBank: "/images/journeyIcons/webeBank.png",
		webeDAO: "/images/journeyIcons/webeDAO.png",
		webeGoods: "/images/journeyIcons/webeGoods.png",
		webePartners: "/images/journeyIcons/webePartners.png",
		weirdIRL: "/images/journeyIcons/weirdIRL.png",
		weirdWine: "/images/journeyIcons/weirdWine.png",
		wizardWebe: "/images/journeyIcons/wizardWebe.png",
	},
	team: {
		mj: "/images/team/1.png",
		eric: "/images/team/2.png",
		ian: "/images/team/3.png",
		serena: "/images/team/4.png",
		jay: "/images/team/5.png",
		jieun: "/images/team/6.png",
		seungan: "/images/team/7.png",
		seonghyun: "/images/team/8.png",
	},
	partners: {
		aiLabs: "/images/partners/aiLabs.png",
		bankofWine: "/images/partners/bankofWine.png",
		philosophiaCapital: "/images/partners/philosophiaCapital.png",
		blinkers: "/images/partners/blinkers.png",
		kote: "/images/partners/kote.png",
	},
};

const addPrefixToImageUris = (data) => {
	data &&
		Object.entries(data).map(([key, v]) => {
			if (typeof v === "string") {
				const source = prefix + v;
				data[key] = source;
				if (typeof Image !== "undefined") {
					console.log("preloaded");
					new Image().src = source;
				}
			} else if (typeof v === "object") {
				addPrefixToImageUris(v);
			}
		});
};
(function () {
	addPrefixToImageUris(images);
})();

export const IMAGES = images;
