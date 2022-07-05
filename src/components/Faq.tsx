import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Col from "./Col";
import Div from "./Div";
import Row from "./Row";

export function Faq({ question, answer, image, isTablet }) {
	const [clicked, setClicked] = useState(false);
	if (isTablet) {
		return (
			<Div textSecondary2 my15 onClick={() => setClicked((prev) => !prev)} cursorPointer>
				<Row textLg p15 roundedLg shadowLg itemsCenter bgPrimaryLight balooR fontBold>
					<Col auto balooB>
						Q.{" "}
					</Col>
					<Col>
						<Div textSm>{question}</Div>
					</Col>
					<Col auto>{clicked ? <FaChevronUp /> : <FaChevronDown />}</Col>
				</Row>
				{clicked && (
					<Row py20 px30>
						<Col auto textSecondary textBase balooB>
							A.{" "}
						</Col>
						<Col flex itemsEnd>
						<Row textSm balooR>
						{answer}<Div my5></Div>
						{image}
						</Row>
					</Col>
					</Row>
				)}
			</Div>
		);
	}
	return (
		<Div textSecondary2 my10 onClick={() => setClicked((prev) => !prev)} cursorPointer>
			<Row py15 roundedLg shadowLg itemsCenter bgPrimaryLight balooR fontBold>
				<Col auto fontSize36 ml20 balooB>
					Q.{" "}
				</Col>
				<Col textLg>{question}</Col>
				<Col auto mr20>
					{clicked ? <FaChevronUp /> : <FaChevronDown />}
				</Col>
			</Row>
			{clicked && (
				<Row py20 balooR>
					<Col auto textSecondary fontSize36 ml40 balooB>
						A.{" "}
					</Col>
					<Col flex itemsEnd>
						<Row textMd maxW={690}>
						{answer}<Div my5></Div>
						{image}
						</Row>
					</Col>
				</Row>
			)}
		</Div>
	);
}
