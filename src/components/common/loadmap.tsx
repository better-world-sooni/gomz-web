import Div from "src/components/Div";
import { IMAGES } from "src/modules/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const UseScrollProgress = (isTablet) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 40%", "end 80%"],
  });
  const scrollProgress = useTransform(scrollYProgress, (value) => `${value * 100}%`);
  return { ref, scrollProgress };
};

export default function LoadMap({ isTablet, locale }) {
  const { ref, scrollProgress } = UseScrollProgress(isTablet);
  return (
    <Div data-aos="fade-up" mt160 mb160 mt100={isTablet} mb100={isTablet} wFull hScreen={false} flex flexCol justifyCenter>
      <Div relative textCenter textWhite fontSize52 fontSize36={isTablet} mb20>
        <Div spanTag textSecondary>
          WeBe
        </Div>
        {"'"}s Journey
      </Div>
      {true ? (
        <Div relative wFull imgTag src={IMAGES.journey2[locale]} />
      ) : (
        <Div ref={ref} wFull hFull overflowHidden>
          <motion.div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${IMAGES.journey2[locale]})`,
              backgroundSize: "cover",
              backgroundPositionX: "center",
              backgroundPositionY: scrollProgress,
            }}
          />
        </Div>
      )}
    </Div>
  );
}
