"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
	const navRoutes = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Work",
			path: "/work",
		},
		{
			name: "About",
			path: "/about",
		},
	];

	const pathname = usePathname();

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 80, damping: 5 }}
		>
			<div className="max-w-screen-xl min-w-80 flex items-center justify-between mx-auto py-10 px-4 font-condensed">
				<Link href="/">
					<span className="text-white text-3xl font-bold tracking-widest hover:text-red-500">
						<FlipText>G PRAKASH S.</FlipText>
					</span>
				</Link>

				<div className="flex items-center gap-8 justify-center text-xl font-bold tracking-wider">
					{navRoutes.map((link, i) => {
						const isActive = pathname === link.path;

						return (
							<Link
								href={link.path}
								key={i}
								className={`${
									isActive ? "text-white" : "text-gray-400"
								} hover:text-white`}
							>
								<div className="flex flex-col gap-2 items-center justify-center">
									<FlipText>{link.name}</FlipText>
									{isActive && (
										<span className="relative flex h-1 w-1">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
											<span className="inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
										</span>
									)}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</motion.nav>
	);
};

interface FlipTextProps {
	children: ReactNode;
	className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({ children, className }) => {
	return (
		<motion.div
			initial="initial"
			whileHover="hovered"
			className={`${
				className ? className : ""
			} relative block overflow-hidden whitespace-nowrap`}
		>
			<motion.div
				variants={{
					initial: { y: 0 },
					hovered: { y: "-100%" },
				}}
			>
				{children}
			</motion.div>

			<motion.div
				className="absolute inset-0"
				variants={{
					initial: { y: "100%" },
					hovered: { y: 0 },
				}}
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export default Header;
