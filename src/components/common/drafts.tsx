import Div from "src/components/Div";
import { motion, useScroll, useTransform } from "framer-motion";
import { Iphone, iphoneSize } from "./iphone";
import { IMAGES } from "src/modules/images";
import { useEffect, useRef, useState } from "react";

const time = 0.5;
const hoverscale = 1.1;

export default function BWappDrafts({ isTablet }) {
  const iPhoneWidth = isTablet ? 150 : 250;
  const showTime = 2;
  return (
    <>
      <SplashDraft iPhoneWidth={iPhoneWidth} isTablet={isTablet} showTime={showTime} />
      <SocialDraft iPhoneWidth={iPhoneWidth} isTablet={isTablet} showTime={showTime} />
    </>
  );
}

const UseScrollProgress = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["70% end", "start 20%"],
  });
  return { ref, scrollYProgress };
};

const SplashDraft = ({ iPhoneWidth, isTablet, showTime }) => {
  const [hover1, sethover1] = useState(false);
  const [hover1Mobile, setHover1Mobile] = useState(false);
  const { show: hover1MobileTimer } = UseTimerState(hover1Mobile, showTime, () => setHover1Mobile(false));
  const { ref, scrollYProgress } = UseScrollProgress();
  const scaleBack = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scaleFront = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const hover = isTablet ? hover1MobileTimer : hover1;
  const draft1 = {
    hover: {
      draft: {
        animate: {
          scale: hover ? hoverscale : 1,
        },
        transition: {
          duration: time,
        },
      },
      display1: {
        animate: {
          scale: hover ? 20 : 1,
        },
        transition: {
          duration: time,
        },
      },
      display2: {
        animate: {
          scale: hover ? 1.5 : 1,
        },
        transition: {
          delay: time * 0.1,
          duration: time,
        },
      },
      display3: {
        animate: {
          opacity: hover ? 1 : 0,
        },
        transition: {
          delay: time * 0.5,
          duration: time,
        },
      },
    },
  };
  return (
    <Draft
      draft={draft1}
      onMouseEnter={isTablet ? () => setHover1Mobile(true) : () => sethover1(true)}
      onMouseLeave={!isTablet && (() => sethover1(false))}
      iPhoneWidth={iPhoneWidth}
      content={
        <Div ref={ref} absolute wFull hFull bgWhite flex flexCol itemsCenter justifyCenter>
          <Div relative w80 h80 top={40} left={40}>
            <Div absolute _translateY1over2 _translateX1over2>
              <motion.div style={{ width: "100%", height: "100%", scale: scaleBack }}>
                <Div imgTag src={IMAGES.appDrafts.draft1.bwLogo1} />
              </motion.div>
            </Div>
            <Div absolute _translateY1over2 _translateX1over2>
              <motion.div style={{ width: "100%", height: "100%", scale: scaleFront }}>
                <Div imgTag src={IMAGES.appDrafts.draft1.bwLogo2} />
              </motion.div>
            </Div>
          </Div>
          <motion.div style={{ position: "relative", opacity: scrollYProgress, top: isTablet ? -10 : 0 }}>
            <Div maxH={10} maxH15={!isTablet} imgTag src={IMAGES.appDrafts.draft1.bwWord} />
          </motion.div>
        </Div>
      }
    />
  );
};

const SocialDraft = ({ iPhoneWidth, isTablet, showTime }) => {
  const [hover2, sethover2] = useState(false);
  const [hover2Mobile, setHover2Mobile] = useState(false);
  const [changeDraft, setChangeDraft] = useState(true);
  const onClickToChangeContent = () => setChangeDraft(!changeDraft);
  const { show: hover2MobileTimer } = UseTimerState(hover2Mobile, showTime, () => setHover2Mobile(false));
  const { ref, scrollYProgress } = UseScrollProgress();
  const scrollProgress = useTransform(scrollYProgress, (value) => `${value * 100}%`);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const hover = isTablet ? hover2MobileTimer : hover2;
  const draft2 = {
    hover: {
      draft: {
        animate: {
          scale: hover ? hoverscale : 1,
        },
        transition: {
          duration: time,
        },
      },
      feed: {
        animate: {
          backgroundPositionY: hover ? "100%" : "0%",
        },
        transition: {
          duration: time,
        },
      },
      profile: {
        head: {
          animate: {
            opacity: hover ? 1 : 0,
          },
          transition: {
            duration: time,
          },
        },
        content: {
          animate: {
            backgroundPositionY: hover ? "100%" : "0%",
          },
          transition: {
            duration: time,
          },
        },
      },
    },
    show: (select, num) => {
      return {
        animate: {
          opacity: select == num ? 1 : 0,
        },
        transition: {
          duration: time,
        },
      };
    },
  };
  return (
    <Draft
      draft={draft2}
      onMouseEnter={isTablet ? () => setHover2Mobile(true) : () => sethover2(true)}
      onMouseLeave={!isTablet && (() => sethover2(false))}
      onClick={onClickToChangeContent}
      iPhoneWidth={iPhoneWidth}
      content={
        <Div ref={ref} absolute wFull hFull bgWhite>
          <>
            <motion.div
              animate={draft2.show(changeDraft, true).animate}
              transition={draft2.show(changeDraft, 0).transition}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <ContentImage
                scrollProgress={scrollProgress}
                animate={draft2.hover.feed.animate}
                transition={draft2.hover.feed.transition}
                src={isTablet ? IMAGES.appDrafts.draft2.feed.contentMobile : IMAGES.appDrafts.draft2.feed.content}
              />
              <ContentImage src={IMAGES.appDrafts.draft2.feed.head} />
            </motion.div>
            <motion.div
              animate={draft2.show(changeDraft, false).animate}
              transition={draft2.show(changeDraft, 0).transition}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <ContentImage
                scrollProgress={scrollProgress}
                animate={draft2.hover.profile.content.animate}
                transition={draft2.hover.profile.content.transition}
                src={isTablet ? IMAGES.appDrafts.draft2.profile.contentMobile : IMAGES.appDrafts.draft2.profile.content}
              />
              <ContentImage src={IMAGES.appDrafts.draft2.profile.head1} />
              <motion.div style={{ position: "absolute", width: "100%", height: "100%", opacity: opacity }}>
                <Div wFull imgTag src={IMAGES.appDrafts.draft2.profile.head2}></Div>
              </motion.div>
            </motion.div>
          </>
        </Div>
      }
    />
  );
};

const ContentImage = ({ animate = null, transition = null, scrollProgress = null, src }) => {
  return scrollProgress ? (
    <motion.div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: scrollProgress,
      }}
    />
  ) : animate && transition ? (
    <motion.div
      animate={animate}
      transition={transition}
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    />
  ) : (
    <Div absolute wFull imgTag src={src} />
  );
};

const UseTimerState = (condtion, seconds, closecontidion = null) => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    var timer;
    if (condtion) {
      setshow(true);
      timer = setTimeout(() => {
        setshow(false);
        if (closecontidion != null) {
          closecontidion();
        }
      }, seconds * 1000);
    } else {
      setshow(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [condtion]);
  return { show };
};

export function Draft({ draft = null, onMouseEnter = null, onMouseLeave = null, onClick = null, content = null, iPhoneWidth, ref = null }) {
  return (
    <Div>
      <Div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} cursorPointer>
        {draft?.showtransition ? (
          <motion.li variants={draft.showtransition} style={{ width: "100%", height: "100%" }}>
            {draft?.hover?.draft ? (
              <motion.div animate={draft.hover.draft.animate} transition={draft.hover.draft.transtion}>
                <Iphone relative w={iPhoneWidth}>
                  {content}
                </Iphone>
              </motion.div>
            ) : (
              <Iphone relative w={iPhoneWidth}>
                {content}
              </Iphone>
            )}
          </motion.li>
        ) : draft?.hover?.draft ? (
          <motion.div animate={draft.hover.draft.animate} transition={draft.hover.draft.transtion}>
            <Iphone relative w={iPhoneWidth}>
              {content}
            </Iphone>
          </motion.div>
        ) : (
          <Iphone relative w={iPhoneWidth}>
            {content}
          </Iphone>
        )}
      </Div>
    </Div>
  );
}
