import { range } from "lodash";
import { useDispatch } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { fullMapActions } from "src/store/reducers/fullMapReducer";
import Div from "./Div";
import FullMapMintedLand from "./FullMapMintedLand";

const FullMap = () => {
	const mapInfo = [
		{ imgSrc: "static/images/1.png", size: 24, coordinates: { x: 100, y: 100 } },
		{ size: 1, coordinates: { x: 2, y: 1 } },
		{ size: 1, coordinates: { x: 3, y: 1 } },
		{ size: 1, coordinates: { x: 4, y: 1 } },
		{ size: 1, coordinates: { x: 5, y: 1 } },
		{ size: 1, coordinates: { x: 6, y: 3 } },
		{ size: 1, coordinates: { x: 7, y: 2 } },
		{ size: 24, coordinates: { x: 330, y: 300 } },
		{ size: 2, coordinates: { x: 99, y: 1 } },
	];
	const dispatch = useDispatch();
	const handleClickLand = () => {
		dispatch(fullMapActions.setSelectedMap(null));
	};
	return (
		<TransformWrapper initialScale={1} initialPositionX={0} initialPositionY={0} limitToBounds={false} minScale={0.2}>
			<TransformComponent>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(400, 5px)",
						gridTemplateRows: "repeat(400, 5px)",
						gridGap: "1px",
						backgroundColor: "#191f28",
						width: "2399px",
						height: "2399px",
					}}
				>
					{[
						range(160000).map((number) => {
							return <figure key={number} style={{ backgroundColor: "#333d4b" }} onClick={handleClickLand}></figure>;
						}),
					]}
					{mapInfo.map((elem) => {
						const id = `${elem.coordinates.x}, ${elem.coordinates.y}`;
						return <FullMapMintedLand x={elem.coordinates.x} y={elem.coordinates.y} size={elem.size} imgSrc={elem.imgSrc} id={id} key={id} />;
					})}
				</div>
			</TransformComponent>
		</TransformWrapper>
	);
};

export default FullMap;
