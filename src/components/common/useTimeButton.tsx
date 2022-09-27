import { motion, useSpring, useTime, useTransform } from "framer-motion";
import { useState } from "react";

const UseTimeButton = (useTimeButton=false, duration=3, animateDuration=0.5, scale=1.1) => {
    const [hover, setHover] = useState(false)
    const time = useTime()
    const scaleMotionValue = useTransform(
        time,
        value => hover ? scale:(useTimeButton ? (value%(duration*1000)<(animateDuration*1000)/2 ? 1+(scale-1)/((animateDuration*1000)/2)*(value%(duration*1000)): (value%(duration*1000)<(animateDuration*1000) ? scale-(scale-1)/((animateDuration*1000)/2)*(value%(duration*1000)-((animateDuration*1000)/2)): 1)):1)
        )
    const scaleSpringMotionValue = useSpring(scaleMotionValue, {stiffness:500, damping:7})
    const MotionButton = (props) => {
        return (<motion.div onHoverStart={()=>{setHover(true)}} onHoverEnd={()=>{setHover(false)}} style={{scale: scaleSpringMotionValue}}>{props.children}</motion.div>)
    }
    return {time, hover, MotionButton}
}

export default UseTimeButton;