import Div from "../Div";
import { IMAGES } from "src/modules/images";
import { motion, useSpring, useTime, useTransform } from "framer-motion";
import { useState } from "react";
import EmptyBlock from "../EmptyBlock";

const animateDuration = 1.2;
const animateDelay = -0.2;
const changeScale = 1.1;
const numberDesktop = 9;
const numberMobile = 8;

export const IntroduceWebeMobile = ({ wording, locale }) => {
  return (
    <>
      <Div textWhite fontSize36 leadingNone data-aos="fade-up" px30>
        We Be
        <Div spanTag textSecondary>
          {" "}
          Weird, Different, and Free.
        </Div>
      </Div>
      <EmptyBlock h={30} />
      <Div fontSize15 balooR px30 mt5 data-aos="fade-up">
        {wording.story.index.value[locale]}
      </Div>
      <EmptyBlock h={30} />
      <Div grid gridCols4 gapX={"3vw"} gapY={"3vw"} px30 data-aos="fade-up">
        <PfpImages isTablet={true} />
        {/* {new Array(12).fill(null).map((_, index) => {
							return (
								<Div key={index} inlineBlock>
									<Div imgTag src={IMAGES.examplePfp[index + 1]} roundedLg shadowLg></Div>
								</Div>
							);
						})} */}
      </Div>
    </>
  );
};

export const IntroduceWebe = ({ wording, locale }) => {
  return (
    <Div flex gapX={50} itemsCenter data-aos="fade-up">
      <Div grid gridCols3 gapX={20} gapY={20}>
        <PfpImages isTablet={false} />
      </Div>

      <Div flex1>
        <Div textWhite fontSize52 leadingNone>
          We Be
          <Div spanTag textSecondary>
            {" "}
            Weird,<br></br> Different, and Free.
          </Div>
        </Div>
        <Div fontSize18 balooR mt30>
          {wording.story.index.value[locale]}
        </Div>
      </Div>
    </Div>
  );
};

const PfpImages = ({ isTablet }) => {
  const number = isTablet ? numberMobile : numberDesktop;
  const time = useTime();
  const imageIndex = isTablet ? [6, 3, 2, 7, 5, 0, 1, 4] : [8, 6, 3, 2, 7, 5, 0, 1, 4];
  const imageKeyLength = Object.keys(IMAGES.examplePfp).length;
  const images = (key) => IMAGES.examplePfp[key + 1];
  return (
    <>
      {imageIndex.map((value, index) => {
        return (
          <Div key={index} inlineBlock>
            <PfpImage imageKey={value} images={images} imageKeyLength={imageKeyLength} standardTime={time} isTablet={isTablet} number={number} />
          </Div>
        );
      })}
    </>
  );
};

const PfpImage = ({ imageKey, images, imageKeyLength, standardTime, isTablet, number }) => {
  const [hover, setHover] = useState(false);
  const duration = animateDuration * 1000;
  const delay = animateDelay * 1000;
  const totalTime = (duration + delay) * number;
  const time = useTransform(
    standardTime,
    [0, 100],
    [0 + (duration + delay) * (imageKeyLength - imageKey), 100 + (duration + delay) * (imageKeyLength - imageKey)],
    { clamp: false }
  );
  const scale = useTransform(time, (value) => (hover ? changeScale + 0.1 : value % totalTime < duration ? changeScale : 1));
  const basicOpacity = useTransform(time, (value) =>
    value % totalTime < duration ? 1 - (1 / duration) * (value % totalTime) : value % totalTime < totalTime / 2 ? 0 : 1
  );
  const basicImageUri = useTransform(time, (value) =>
    value % totalTime < (totalTime - animateDuration) / 4 + animateDuration
      ? `url(${images((imageKey + ((value - (value % totalTime)) / totalTime - 1) * number + imageKeyLength) % imageKeyLength)})`
      : `url(${images((imageKey + ((value - (value % totalTime)) / totalTime) * number) % imageKeyLength)})`
  );
  const toImageUri = useTransform(time, (value) =>
    value % totalTime < totalTime - (totalTime - animateDuration) / 4
      ? `url(${images((imageKey + ((value - (value % totalTime)) / totalTime) * number) % imageKeyLength)})`
      : `url(${images((imageKey + ((value - (value % totalTime)) / totalTime + 1) * number) % imageKeyLength)})`
  );
  const toOpacity = useTransform(basicOpacity, (value) => 1 - value);
  const scaleSpringMotionValue = useSpring(scale, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      style={{ width: isTablet ? "19vw" : 100, height: isTablet ? "19vw" : 100, position: "relative", scale: scaleSpringMotionValue }}
    >
      <Div roundedLg shadowLg style={{ width: "100%", height: "100%", position: "relative" }} overflowHidden>
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: toImageUri,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            opacity: toOpacity,
          }}
        />
        <motion.div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: basicImageUri,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            opacity: basicOpacity,
          }}
        />
      </Div>
    </motion.div>
  );
};
