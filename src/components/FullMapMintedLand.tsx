import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullMapActions } from "src/store/reducers/fullMapReducer";
import { RootState } from "src/store/reducers/rootReducer";
import Div from "./Div";

const FullMapMintedLand = ({ x, y, size, imgSrc, id }) => {
	const { selectedLandId } = useSelector((state: RootState) => ({
		selectedLandId: state.fullMap.selectedLandId,
	}));
	const dispatch = useDispatch();
	const isClicked = selectedLandId === id;
	const handleClickLand = () => {
		if (isClicked) {
			dispatch(fullMapActions.setSelectedMap(null));
		} else {
			dispatch(fullMapActions.setSelectedMap(id));
		}
	};
	return (
		<figure
			style={{
				gridColumnStart: x,
				gridRowStart: y,
				gridColumnEnd: x + size,
				gridRowEnd: y + size,
				backgroundColor: isClicked ? "#FFC31C" : "#3cd278",
				outline: isClicked ? "1px solid white" : "0px solid white",
				border: "0px",
			}}
			onClick={handleClickLand}
		>
			<Div imgTag src={imgSrc} wFull hFull cover></Div>
		</figure>
	);
};

export default memo(FullMapMintedLand);
