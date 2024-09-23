import { AnimatePresence, motion } from "framer-motion";

interface LoaderProps {
	isLoading: boolean;
}

export default function Loader({ isLoading }: Readonly<LoaderProps>) {
	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					className="fixed top-0 left-0 flex items-center justify-center bg-blue-300 w-[100vw] h-[100vh]"
					initial={{
						scale: 1,
						y: "-100%",
					}} // Start as a square
					animate={{
						y: 0,
						scale: [1, 1.5],
						borderRadius: ["50%", "100%"],
					}} // Stretch and transform into a circle
					exit={{ y: "150%" }}
					transition={{
						duration: 1,
						ease: [0.16, 1, 0.3, 1],
					}}
				></motion.div>
			)}
		</AnimatePresence>
	);
}

// export default function Loader({ isLoading }: Readonly<LoaderProps>) {
// 	return (
// 		<AnimatePresence>
// 			{isLoading && (
// 				<motion.div
// 					initial={{
// 						scaleY: 0,
// 						originY: 0,
// 						borderBottomLeftRadius: "50%",
// 						borderBottomRightRadius: "50%",
// 					}} // Start hidden and scale from the bottom
// 					animate={{ scaleY: 1, originY: 0 }} // Expand or shrink
// 					transition={{ duration: 0.5, ease: "easeInOut" }} // Transition settings
// 					exit={{ scaleY: 0, originY: 1 }}
// 					style={{
// 						position: "fixed",
// 						top: 0,
// 						left: 0,
// 						width: "100vw", // Full width
// 						height: "100vh", // Full height
// 						backgroundColor: "lightblue", // Change to your desired color
// 						display: "flex",
// 						alignItems: "center",
// 						justifyContent: "center",
// 						zIndex: 10,
// 					}}
// 				>
// 					<h1>Loading...</h1>
// 				</motion.div>
// 			)}
// 		</AnimatePresence>
// 	);
// }
