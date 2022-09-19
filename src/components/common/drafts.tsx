import Div from "src/components/Div";
import { motion } from "framer-motion";
import { Iphone, iphoneSize } from "./iphone";
import { IMAGES } from "src/modules/images";
import { useState } from "react";

const time=0.5
const hoverscale=1.1
export const iPhoneWidthPercent = 17

export const iPhoneHeightPercent = iPhoneWidthPercent*2380/1180
export const iPhoneContentWidthPercent = iPhoneWidthPercent*((1-iphoneSize.contentWidth)/2+iphoneSize.buttonmargin)*2
export const iPhoneContentHeightPercent = iPhoneWidthPercent*(1-iphoneSize.contentHeight)*1180/2380
export const factorTovw=(v)=> `${v}vw`
export const factorToPercent=(v)=> `${v*100}%`


const iPhoneWidth = 250
export const iPhoneHeight = iPhoneWidth*2380/1180
export const iPhoneContentWidth = iPhoneWidth*((1-iphoneSize.contentWidth)/2+iphoneSize.buttonmargin)*2
export const iPhoneContentHeigh = iPhoneWidth*(1-iphoneSize.contentHeight)*1180/2380

export default function BWappDrafts() {
const [hover1, sethover1] = useState(false);
const draft1 = {
	hover:{
		display1: {
			animate:{
				scale: hover1? 20:1
			},
			transition:{
				duration: time
			}
		},
		display2: {
			animate:{
				scale: hover1? 1.5:1
			},
			transition:{
				delay: time*0.1,
				duration: time
			}
		},
		display3: {
			animate:{
				opacity: hover1? 1:0
			},
			transition:{
				delay: time*0.5,
				duration: time
			}
		},
	},
}
  return (
  <>
  <Draft draft={draft1} onMouseEnter={()=>sethover1(true)} onMouseLeave={()=>sethover1(false)} content={
	<Div absolute wFull hFull bgWhite flex flexCol itemsCenter justifyCenter>
		<Div relative w80 h80 top={40} left={40}>
			<Div absolute _translateY1over2 _translateX1over2><motion.div animate={draft1.hover.display1.animate} transition={draft1.hover.display1.transition} style={{width:"100%", height:"100%"}}><Div imgTag src={IMAGES.appDrafts.draft1.bwLogo1}/></motion.div></Div>
			<Div absolute _translateY1over2 _translateX1over2><motion.div animate={draft1.hover.display2.animate} transition={draft1.hover.display2.transition} style={{width:"100%", height:"100%"}}><Div imgTag src={IMAGES.appDrafts.draft1.bwLogo2}/></motion.div></Div>
		</Div>
		<motion.div animate={draft1.hover.display3.animate} transition={draft1.hover.display3.transition} style={{position:"relative"}}><Div maxH15 imgTag src={IMAGES.appDrafts.draft1.bwWord}/></motion.div>
	</Div>
  }/>
  <Draft />
  </>
	);
}

export function Draft({draft=null, onMouseEnter=null, onMouseLeave=null, content=null}) {
	return (
		<Div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{draft?.showtransition ? <motion.li variants={draft.showtransition} style={{width:"100%", height:"100%"}}>
			{draft?.hover?.draft ? <motion.div animate={draft.hover.draft.animate} transition={draft.hover.draft.transtion}>
			<Iphone relative w={iPhoneWidth}>
				{content}
			</Iphone>
			</motion.div>
			:
			<Iphone relative w={iPhoneWidth}>
				{content}
			</Iphone>
			}
			</motion.li>
			:
			(draft?.hover?.draft ? <motion.div animate={draft.hover.draft.animate} transition={draft.hover.draft.transtion}>
			<Iphone relative w={iPhoneWidth}>
				{content}
			</Iphone>
			</motion.div>
			:
			<Iphone relative w={iPhoneWidth}>
				{content}
			</Iphone>
			)
			}
		</Div>
	)
}

