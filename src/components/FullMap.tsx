import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { SALE_STATE, MapLand } from "src/modules/constants";
import FullMapGridElements from "./FullMapGridElements";
import FullMapMintedLand from "./FullMapMintedLand";
import * as mapInfo from "../modules/mapInfo.json";
import Div from "./Div";

const FullMap = () => {
	return (
		<TransformWrapper
			initialScale={1}
			initialPositionX={0}
			initialPositionY={0}
			minPositionX={0}
			maxPositionX={100}
			minPositionY={0}
			maxPositionY={100}
			limitToBounds={false}
			minScale={0.2}
		>
			<TransformComponent>
				<Div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(400, 5px)",
						gridTemplateRows: "repeat(400, 5px)",
						gridGap: "1px",
						// backgroundColor: "#191f28",
						width: "2399px",
						height: "2399px",
					}}
				>
					<FullMapGridElements />
					<Div
						style={{
							gridColumnStart: 150,
							gridRowStart: 150,
							gridColumnEnd: 249,
							gridRowEnd: 249,
							outline: "1px solid white",
						}}
					></Div>
					{mapInfo.map((elem) => {
						const id = `${elem.coordinates.x}, ${elem.coordinates.y}`;
						return (
							<FullMapMintedLand
								x={elem.coordinates.x}
								y={elem.coordinates.y}
								saleState={elem.saleState}
								size={elem.size}
								imgSrc={elem.imgSrc}
								id={id}
								key={id}
							/>
						);
					})}
				</Div>
			</TransformComponent>
		</TransformWrapper>
	);
};

export default FullMap;
