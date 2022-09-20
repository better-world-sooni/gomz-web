import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ReadStroy({isTablet, handleClickReadStory}) {
    const [hover, setHover] = useState(false)
    return (
        <Div
        data-aos="fade-up" 
        shadowMd
        h200
        roundedLg
        flex
        h150={isTablet}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        onClick={handleClickReadStory}
        cursorPointer
        overflowHidden
        >
        <Div absolute hFull wFull><motion.div animate={{ backgroundPositionX: hover?"100%":"50%"}} transition={{duration:0.5}} style={{
            height:"100%",
            width:"100%",
            backgroundImage: `url(${isTablet ? IMAGES.storyBannerMobile: IMAGES.storyBanner})`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
        }}/></Div>
        <Div absolute hFull wFull><motion.div animate={{ opacity: hover?0.6:0}} transition={{duration:0.5}} style={{
            height:"100%",
            width:"100%",
            backgroundColor: "black",
        }}/></Div>
        <Div relative px50 px30={isTablet} flex flexCol justifyCenter>
            <Div textWhite fontSize18 fontSize14={isTablet}>
                How did the weird journey begin?
                <br/>Once upon a time...{/* Becoming WEirD isn&apos;t easy.. <br />
                It requires courage. <br />
                It&apos;s something to be proud of. */}
            </Div>
            <Div flex mt10>
                <Div
                    clx={"group transition hover:bg-primary-light"}
                    bgPrimary
                    roundedFull
                    px30
                    py8
                    fontSize20
                    px15={isTablet}
                    py4={isTablet}
                    fontSize13={isTablet}
                    textWhite
                    borderBlack
                    border2
                    style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
                >
                    READ THE STORY
                </Div>
            </Div>
        </Div>
    </Div>
    )
}