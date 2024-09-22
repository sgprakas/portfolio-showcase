"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<nav className="">
			<div className="max-w-screen-xl min-w-80 flex items-center justify-between mx-auto py-10 px-4 font-condensed">
				<Link href="/">
					<span className="text-white text-3xl font-bold tracking-widest hover:text-red-500">
						<FlipText>G PRAKASH S.</FlipText>
					</span>
				</Link>

				<ul className="flex items-center gap-8 justify-center text-xl font-bold tracking-wider">
					<NavLink
						href="/"
						className="hover:text-white"
						activeClassName="text-white"
						nonActiveClassName="text-gray-400"
					>
						<FlipText>Home</FlipText>
					</NavLink>
					<NavLink
						href="/work"
						className="hover:text-white"
						activeClassName="text-white"
						nonActiveClassName="text-gray-400"
					>
						<FlipText>Work</FlipText>
					</NavLink>
					<NavLink
						href="/about"
						className="hover:text-white"
						activeClassName="text-white"
						nonActiveClassName="text-gray-400"
					>
						<FlipText>About</FlipText>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

interface FlipTextProps {
	children: ReactNode;
	className?: string;
}

const FlipText: React.FC<FlipTextProps> = ({ children, className }) => {
	return (
		<motion.li
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
		</motion.li>
	);
};

export default Header;
