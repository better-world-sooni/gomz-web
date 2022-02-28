import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import React, { forwardRef, useMemo } from "react";
import Orbitron_Regular from "public/fonts/Orbitron_Regular.json";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { extend } from "@react-three/fiber";
import { Vector3 } from "three";

extend({ TextGeometry });

const Text = ({ children, vAlign = "center", hAlign = "center", size = 1, color = "#000000", ...props }, ref) => {
	const fontLoader = new FontLoader();
	console.log(fontLoader);
	const font = fontLoader.parse(Orbitron_Regular);
	const config = useMemo(() => ({ font, size: 40, height: 50 }), [font]);
	return (
		<group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]} position={new Vector3(0, 0, 20)}>
			<mesh>
				{/* @ts-ignore */}
				<textGeometry attach="geometry" args={[children, config]} />
				<meshPhongMaterial attach="material" />
			</mesh>
		</group>
	);
};

export default forwardRef(Text);
