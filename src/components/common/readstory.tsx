import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import UseTimeButton from "./useTimeButton";

const UseScrollProgress = (isTablet) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 30%"],
  });
  const scrollProgress = useTransform(scrollYProgress, (value) => `${isTablet ? 50 + value * 50 : value * 100}%`);
  const opacity = useTransform(scrollYProgress, (value) => value * 0.6);
  return { ref, scrollProgress, opacity };
};

export default function ReadStroy({ isTablet, handleClickReadStory }) {
  const { ref, scrollProgress, opacity } = UseScrollProgress(isTablet);
  const { MotionButton } = UseTimeButton(true);
  return (
    <Div data-aos="fade-up" shadowMd h200 roundedLg flex h150={isTablet} onClick={handleClickReadStory} cursorPointer overflowHidden>
      <Div absolute hFull wFull>
        <motion.div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${isTablet ? IMAGES.storyBannerMobile : IMAGES.storyBanner})`,
            backgroundSize: "cover",
            backgroundPositionY: "center",
            backgroundPositionX: scrollProgress,
          }}
        />
      </Div>
      <Div ref={ref} absolute hFull wFull>
        <motion.div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            opacity: opacity,
          }}
        />
      </Div>
      <Div relative px50 px30={isTablet} flex flexCol justifyCenter>
        <Div textWhite fontSize18 fontSize14={isTablet}>
          How did the weird journey begin?
          <br />
          Once upon a time...
          {/* Becoming WEirD isn&apos;t easy.. <br />
                It requires courage. <br />
                It&apos;s something to be proud of. */}
        </Div>
        <Div flex mt10>
          <MotionButton>
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
          </MotionButton>
        </Div>
      </Div>
    </Div>
  );
}
