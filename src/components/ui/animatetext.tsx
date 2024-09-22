import React from "react";
import { motion } from "framer-motion";

interface AnimateTextProps {
	text: string;
	className?: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({ text, className }) => {
	const letters = text.split("");

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.01, // Delay between each character animation
				staggerDirection: -1,
			},
		},
	};

	const letterVariants = {
		hidden: { y: "150%" }, // Start off-screen below
		visible: {
			y: 0,
			transition: {
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier curve for smoothness
				duration: 0.5, // A bit slower to accentuate the smoothness
			},
		}, // Slide up to its normal position
	};

	return (
		<motion.div
			className="flex space-x-1 overflow-hidden" // Adjust spacing between letters if needed
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{letters.map((letter, index) => (
				<motion.span
					key={index}
					variants={letterVariants}
					className={`${className ? className : ""}`}
				>
					{letter === " " ? "\u00A0" : letter} {/* Handling spaces */}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimateText;
