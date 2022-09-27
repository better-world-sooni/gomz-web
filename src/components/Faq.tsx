import { AnimatePresence, LayoutGroup, motion} from "framer-motion";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";

export function Faq({ question, answer, image, isTablet }) {
	const [clicked, setClicked] = useState(false);
	if (isTablet) {
		return (
			<Div textSecondary2 my15 cursorPointer>
				<motion.div layout transition={{layout:{duration:0.3}}} whileHover={{scale:1.1}}>
				<Row textLg p15 roundedLg shadowLg itemsCenter bgPrimaryLight balooR fontBold onClick={() => setClicked((prev) => !prev)}>
					<Col auto balooB>
						Q.{" "}
					</Col>
					<Col>
						<Div textSm>{question}</Div>
					</Col>
					<Col auto><FaChevronClick enabled={clicked}/></Col>
				</Row>
				</motion.div>
				<AnimatePresence>
				{clicked && (<motion.div layout initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0}} transition={{layout:{duration:0.3}, opacity:{duration:0.1}, y:{duration:0.3}}}>
					<Row py20 px30>
						<Col auto textSecondary textBase balooB>
							A.{" "}
						</Col>
						<Col flex itemsEnd>
							<Row textSm balooR>
								{answer}
								<Div my5></Div>
								{image}
							</Row>
						</Col>
					</Row>
				</motion.div>)}
				</AnimatePresence>
			</Div>
		);
	}
	return (
		<Div textSecondary2 my10 cursorPointer>
			<motion.div layout transition={{layout:{duration:0.3}}} whileHover={{scale:1.05}}>
			<Row py15 roundedLg shadowLg itemsCenter bgPrimaryLight balooR fontBold onClick={() => setClicked((prev) => !prev)}>
				<Col auto fontSize36 ml20 balooB>
					Q.{" "}
				</Col>
				<Col textLg>{question}</Col>
				<Col auto mr20>
					<FaChevronClick enabled={clicked}/>
				</Col>
			</Row>
			</motion.div>
			<AnimatePresence>
			{clicked && (<motion.div layout initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0}} transition={{layout:{duration:0.3}, opacity:{duration:0.1}, y:{duration:0.3}}}>
				<Row py20 balooR>
					<Col auto textSecondary fontSize36 ml40 balooB>
						A.{" "}
					</Col>
					<Col flex itemsEnd>
						<Row textMd maxW={690}>
							{answer}
							<Div my5></Div>
							{image}
						</Row>
					</Col>
				</Row></motion.div>
			)}
			</AnimatePresence>
		</Div>
	);
}

const FaChevronClick = ({enabled}) => {
	return (
		<motion.div animate={{rotate: enabled ? 180:0}} transition={{duration:0.2}}>
			<FaChevronUp />
		</motion.div>
	)
}

export const FaqList = ({faqs, locale, isTablet}) => {
	const [clicked, setClicked] = useState(null)
	// const handleClick = (index) => {
	// 	if (clicked!=index) setClicked(index)
	// 	if (clicked==index) setClicked(null)
	// }
	return (
		<LayoutGroup>
		{faqs(locale).map(({ question, answer, image }, index) => {
			return <Faq key={index} question={question} answer={answer} image={image} isTablet={isTablet} />;
		})}
		</LayoutGroup>
	)
}

export default FaqList