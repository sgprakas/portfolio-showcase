"use client";
import { motion, TargetAndTransition } from "framer-motion";
import Image from "next/image";
import AuthorImg from "../../public/assets/images/author.png";
import AnimateText from "./ui/animatetext";

export default function Home() {
	const circleVariants = {
		hidden: {
			scale: 0, // Start from scale 0 (invisible)
		},
		visible: {
			scale: 1, // Scale to 1 (full size)
			transition: {
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
				duration: 0.7, // Duration of the animation
			},
		},
	};

	const imageVariants = {
		hidden: {
			y: "100%", // Start 50 pixels below its final position
		},
		visible: {
			y: 0, // Move to the final position
			transition: {
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
				duration: 0.5, // Duration of the animation
			},
		},
	};

	return (
		<div className="flex-grow flex items-center justify-center h-full w-full">
			<div className="flex flex-col items-end space-y-2 w-1/2">
				<AnimateText
					text="Gnana Prakash S"
					className="text-white text-9xl font-bold tracking-wider mb-2 font-condensed"
				/>

				<AnimateText
					text="Based in TamilNadu, India"
					className="text-white text-2xl font-[600] tracking-wider"
				/>

				<AnimateText
					text="Full Stack Developer"
					className="text-white text-6xl font-bold tracking-wider"
				/>
			</div>

			<div className="flex items-center justify-center relative h-full w-1/2">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={circleVariants}
					className="relative bg-foreground w-1/2 aspect-square rounded-full bg-gradient-to-r from-green-400 to-blue-500"
				></motion.div>

				<div className="absolute flex flex-col justify-end items-center mb-4 inset-0 overflow-hidden">
					<motion.img
						className="absolute"
						src={AuthorImg.src}
						variants={imageVariants}
						initial="hidden"
						animate="visible"
						height={700}
						width={700}
						alt="author"
					/>
				</div>
			</div>
		</div>
	);
}
