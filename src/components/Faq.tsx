import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";

export function Faq({ question, answer, isTablet }) {
	const [clicked, setClicked] = useState(false);
	if (isTablet) {
		return (
			<Div textSecondary2 my15 onClick={() => setClicked((prev) => !prev)} cursorPointer>
				<Row textLg p15 border1 roundedLg borderBlack itemsCenter bgPrimaryLight balooR>
					<Col auto balooB clx={"text-stroke"}>
						Q.{" "}
					</Col>
					<Col>
						<Div>{question}</Div>
					</Col>
					<Col auto>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
				</Row>
				{clicked && (
					<Row py20 px30>
						<Col auto textSecondary textBase balooB clx={"text-stroke"}>
							A.{" "}
						</Col>
						<Col textMed balooR>
							{answer}
						</Col>
					</Row>
				)}
			</Div>
		);
	}
	return (
		<Div textSecondary2 my10 onClick={() => setClicked((prev) => !prev)} cursorPointer>
			<Row textXl py15 border1 roundedLg borderBlack itemsCenter bgPrimaryLight balooR>
				<Col auto fontSize36 ml20 balooB clx={"text-stroke"}>
					Q.{" "}
				</Col>
				<Col>{question}</Col>
				<Col auto mr20>
					{clicked ? <FaChevronUp /> : <FaChevronDown />}
				</Col>
			</Row>
			{clicked && (
				<Row textXl py20 balooR>
					<Col auto textSecondary fontSize36 ml40 balooB clx={"text-stroke"}>
						A.{" "}
					</Col>
					<Col textLg maxW={690} flex itemsCenter>
						{answer}
					</Col>
				</Row>
			)}
		</Div>
	);
}
