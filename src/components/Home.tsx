"use client";
import { motion, TargetAndTransition } from "framer-motion";
import Image from "next/image";
import AuthorImg from "../../public/assets/images/author.png";
import AnimateText from "./ui/animatetext";

export default function Home() {
	const circleVariants = {
		hidden: {
			opacity: 0,
			scale: 0, // Start from scale 0 (invisible)
		},
		visible: {
			opacity: 1,
			scale: 1, // Scale to 1 (full size)
			transition: {
				type: "tween",
				ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
				duration: 0.7, // Duration of the animation
			},
		},
	};

	const outerCircleVariants = {
		hidden: {
			opacity: 0,
			scale: 1.1, // Start from scale 0 (invisible)
		},
		visible: {
			scale: 1, // Scale to 1 (full size)
			opacity: 1,
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
		<div className="flex-grow flex flex-col xl:flex-row items-center justify-center h-full w-full">
			{/* Text Section */}
			<div className="flex flex-col items-center xl:items-end space-y-2 w-full md:w-1/2 p-4">
				<AnimateText
					text="Gnana Prakash S"
					className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wide mb-2 font-condensed"
				/>

				<AnimateText
					text="Based in TamilNadu, India"
					className="text-white text-lg sm:text-lg md:text-xl font-[600]"
				/>

				<AnimateText
					text="Full Stack Developer"
					className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold"
				/>
			</div>

			{/* Circle Image Section */}
			<div className="flex items-center justify-center relative w-full md:w-1/2 p-4 overflow-hidden">
				<motion.svg
					className="w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[50vw] md:h-[50vw] lg:w-[40vw] lg:h-[40vw]"
					viewBox="0 0 300 300"
					animate={{
						rotate: 360, // Adds a subtle rotation for dynamic effect
					}}
					transition={{
						duration: 10,
						ease: "linear",
						repeat: Infinity,
					}}
				>
					<defs>
						<linearGradient
							id="waveGradient"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<motion.stop
								offset="0%"
								style={{ stopColor: "#c5ff95" }} // Light green
								animate={{
									stopColor: [
										"#c5ff95",
										"#90D5ff",
										"#c5ff95",
									], // Animate for wave effect
								}}
								transition={{
									duration: 6,
									ease: "easeInOut",
									repeat: Infinity,
								}}
							/>
							<motion.stop
								offset="100%"
								style={{ stopColor: "#90D5ff" }} // Light blue
								animate={{
									stopColor: [
										"#90D5ff",
										"#c5ff95",
										"#90D5ff",
									], // Animate for wave effect
								}}
								transition={{
									duration: 6,
									ease: "easeInOut",
									repeat: Infinity,
								}}
							/>
						</linearGradient>
					</defs>

					{/* Outer circle (outline) */}
					<motion.circle
						variants={outerCircleVariants}
						initial="hidden"
						animate="visible"
						cx="150"
						cy="150"
						r="140"
						fill="none"
						stroke="#4682B4" // Steel Blue for contrast
						strokeWidth="1"
					/>

					{/* Inner circle with wave-like gradient */}
					<motion.circle
						variants={circleVariants}
						initial="hidden"
						animate="visible"
						cx="150"
						cy="150"
						r="135"
						fill="url(#waveGradient)" // Use the wave-like gradient
					/>
				</motion.svg>

				<div className="absolute inset-0 flex justify-center items-center overflow-hidden">
					<motion.img
						className="w-[90vw] h-[90vw] sm:w-[70vw] sm:h-[70vw] md:w-[50vw] md:h-[50vw] lg:w-[45vw] lg:h-[45vw] object-cover rounded-full mb-4" // Increased base size
						src={AuthorImg.src}
						variants={imageVariants}
						initial="hidden"
						animate="visible"
						alt="author"
					/>
				</div>
			</div>
		</div>
	);
}
