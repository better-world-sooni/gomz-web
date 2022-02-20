import { range } from "lodash";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Div from "./Div";

const FullMap = () => {
	const mapInfo = [
		{ imageSrc: "static/images/1.png", size: 24, coordinates: { x: 100, y: 100 } },
		{ size: 1, coordinates: { x: 2, y: 1 } },
		{ size: 1, coordinates: { x: 3, y: 1 } },
		{ size: 1, coordinates: { x: 4, y: 1 } },
		{ size: 1, coordinates: { x: 5, y: 1 } },
		{ size: 1, coordinates: { x: 6, y: 3 } },
		{ size: 1, coordinates: { x: 7, y: 2 } },
		{ size: 24, coordinates: { x: 330, y: 300 } },
		{ size: 2, coordinates: { x: 99, y: 1 } },
	];
	const galleryImgProps = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
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
							return <figure key={number} style={{ backgroundColor: "#333d4b" }}></figure>;
						}),
					]}
					{mapInfo.map((elem) => {
						return (
							<figure
								key={`${elem.coordinates.x}, ${elem.coordinates.y}`}
								style={{
									gridColumnStart: elem.coordinates.x,
									gridRowStart: elem.coordinates.y,
									gridColumnEnd: elem.coordinates.x + elem.size,
									gridRowEnd: elem.coordinates.y + elem.size,
									backgroundColor: "#3cd278",
								}}
							>
								<Div imgTag src={elem.imageSrc} {...galleryImgProps}></Div>
							</figure>
						);
					})}
				</div>
			</TransformComponent>
		</TransformWrapper>
	);
};

export default FullMap;
