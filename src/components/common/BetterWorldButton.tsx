import { motion, useSpring, useTransform } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import Div from "../Div";
import UseTimeButton from "./useTimeButton";

const defaultRotate = 20;
const rotate = 45;
const duration = 5;
const animateDuration = 1;

const GotoBetterWorldButton = ({ isTablet }) => {
  const { time, hover, MotionButton } = UseTimeButton(false);
  const rotateMotionValue = useTransform(time, (value) => (hover ? rotate : value % (duration * 1000) < (duration * 1000) / 2 ? rotate : 0));
  const rotateSpringMotionValue = useSpring(
    useTransform(rotateMotionValue, (value) => value - 45 + defaultRotate),
    { stiffness: 300, damping: 20 }
  );
  return (
    <MotionButton>
      <Div
        clx={"group transition hover:bg-primary-light"}
        bgSecondary
        roundedFull
        px30
        py8
        fontSize23
        fontSize18={isTablet}
        textWhite
        borderBlack
        border2
        aTag
        href={"https://www.betterworldapp.io"}
        cursorPointer
        flex
        gapX={10}
        itemsCenter
        style={{ boxShadow: "3px 3px 0px rgba(0, 0, 0, 1.0)" }}
      >
        <motion.div style={{ rotate: rotateSpringMotionValue, marginTop: 2, marginRight: 5 }}>
          <FaLocationArrow></FaLocationArrow>
        </motion.div>
        <Div> Go to BetterWorld</Div>
      </Div>
    </MotionButton>
  );
};

export default GotoBetterWorldButton;
