"use client";
import { motion, TargetAndTransition } from "framer-motion";
import Image from "next/image";
import AuthorImg from "./assets/images/author.png";

export default function Home() {
	const jellyAnimation: TargetAndTransition = {
		scale: [1, 1.1, 0.9, 1, 1.1, 0.9, 1],
		borderRadius: [
			"50% 40% 60% 50% / 60% 50% 40% 30%", // Amoeba-like border radius
			"50% 35% 50% 60% / 45% 55% 50% 40%", // Another variation
			"50% 50% 40% 50% / 40% 30% 50% 60%",
			"45% 55% 50% 45% / 40% 60% 30% 50%", // New variation
			"30% 50% 70% 30% / 50% 40% 60% 50%",
			"50% 40% 60% 50% / 60% 50% 40% 30%", // Another variation
			// Add more variations as needed
		],
		transition: {
			duration: 2,
			ease: "easeInOut",
			repeat: Infinity,
		},
	};

	const rotationAnimation: TargetAndTransition = {
		rotate: [0, 360],
		transition: {
			duration: 10, // Adjust for rotation speed
			ease: "linear",
			repeat: Infinity,
		},
	};

	return (
		<div className="flex-grow flex items-center justify-center h-full w-full">
			<div className="flex flex-col items-end space-y-2 w-1/2">
				<h1 className="text-white text-9xl font-bold tracking-wider mb-2 font-condensed">
					Gnana Prakash S
				</h1>

				<h3 className="text-white text-2xl font-[600] tracking-wider">
					Based in TamilNadu, India
				</h3>

				<h1 className="text-white text-6xl font-bold tracking-wider">
					Full Stack Developer
				</h1>
			</div>

			<div className="flex items-center justify-center relative h-full w-1/2">
				<motion.div
					animate={{ ...jellyAnimation, ...rotationAnimation }}
					className="relative bg-foreground w-1/2 aspect-square rounded-full bg-gradient-to-r from-green-400 to-blue-500"
				></motion.div>

				<div className="absolute mt-12 flex justify-center items-center inset-0">
					<Image
						className="absolute"
						src={AuthorImg}
						height={600}
						width={600}
						alt="author"
					/>
				</div>
			</div>
		</div>
	);
}
