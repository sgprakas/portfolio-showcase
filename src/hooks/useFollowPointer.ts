import { RefObject, useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { stiffness: 80, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
	const xDotPoint = useMotionValue(0);
	const yDotPoint = useMotionValue(0);
	const xPoint = useMotionValue(0);
	const yPoint = useMotionValue(0);
	const x = useSpring(xPoint, spring);
	const y = useSpring(yPoint, spring);

	useEffect(() => {
		if (!ref.current) return;

		const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
			const element = ref.current!;

			xDotPoint.set(clientX);
			yDotPoint.set(clientY);

			frame.read(() => {
				xPoint.set(clientX - element.offsetLeft);
				yPoint.set(clientY - element.offsetTop);
			});
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () =>
			window.removeEventListener("pointermove", handlePointerMove);
	});

	return { x, y, xDotPoint, yDotPoint };
}
