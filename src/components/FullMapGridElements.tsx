import { range } from "lodash";
import { useDispatch } from "react-redux";
import { fullMapActions } from "src/store/reducers/fullMapReducer";

const FullMapGridElements = () => {
	const dispatch = useDispatch();
	const handleClickLand = () => {
		dispatch(fullMapActions.setSelectedMap(null));
	};
	return (
		<>
			{[
				range(160000).map((number) => {
					const colStart = number % 400;
					const rowStart = Math.floor(number / 400) + 1;
					return (
						<figure
							key={number}
							style={{
								backgroundColor: "#333d4b",
								gridColumnStart: colStart,
								gridRowStart: rowStart,
								gridColumnEnd: colStart + 1,
								gridRowEnd: rowStart + 1,
							}}
							onClick={handleClickLand}
						></figure>
					);
				}),
			]}
		</>
	);
};

export default FullMapGridElements;
