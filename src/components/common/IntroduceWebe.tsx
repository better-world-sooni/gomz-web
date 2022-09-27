import Div from "../Div";
import { IMAGES } from "src/modules/images";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useRef, useState } from "react";

const number = 9

const IntroduceWebe = ({wording, locale}) => {
    return (
        <Div flex gapX={50} itemsCenter data-aos="fade-up">
        <Div grid gridCols3 gapX={20} gapY={20}>
            <PfpImages/>
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
    )
}

const PfpImages = () => {
    const [imageIndex, setImageIndex] = useState([8, 6, 3, 4, 7, 5, 0, 1, 2]);
    const currentKey = useRef(number-1)
    const imageKeyLength = Object.keys(IMAGES.examplePfp).length
    const getNextImageKey = () => {
        currentKey.current = (currentKey.current+1)%(imageKeyLength)
        return currentKey.current
    }
    const setImageKey = () => {
        var array = [...imageIndex]
        const nextKey = getNextImageKey()
        array[imageIndex.indexOf(((nextKey-number+imageKeyLength)%imageKeyLength))] = nextKey
        setImageIndex(array)
    }
    return (
        <>{
            imageIndex.map((value, index) => {
            return (
                <Div key={index} inlineBlock>
                    <PfpImage value={value} onClick={()=>setImageKey()} image={IMAGES.examplePfp[value+1]}/>
                </Div>
            );
        })
    }</>
    )
}

const PfpImage = ({value, onClick, image}) => {
    return (
        <motion.div onClick={onClick} initial={{scale:1.1}} animate={{scale:1}} exit={{scale:1.1}}><Div imgTag src={image} roundedLg shadowLg w100 h100/></motion.div>
    )
}

export default IntroduceWebe