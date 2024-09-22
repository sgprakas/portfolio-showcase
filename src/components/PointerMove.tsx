"use client";
import { useFollowPointer } from "@/hooks/useFollowPointer";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function PointerMove() {
	const ref = useRef(null);
	const { x, y, xDotPoint, yDotPoint } = useFollowPointer(ref);

	return (
		<>
			<motion.div
				ref={ref}
				className="dot"
				style={{ x: xDotPoint, y: yDotPoint }}
			/>
			<motion.div ref={ref} className="circle" style={{ x: x, y: y }} />
		</>
	);
}
