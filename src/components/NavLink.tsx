"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
	children: ReactNode;
	href: string;
	activeClassName: string;
	nonActiveClassName: string;
	className?: string; // className is optional
	[key: string]: unknown; // Allows any additional props
}

const NavLink: React.FC<NavLinkProps> = ({
	children,
	href,
	activeClassName,
	nonActiveClassName,
	className = "", // default empty string for className
	...rest
}) => {
	const pathname = usePathname();
	const isActive =
		pathname.endsWith(href) ||
		(href.includes(pathname) && pathname !== "/");
	const newClassName = `${
		isActive ? activeClassName : nonActiveClassName
	} ${className}`;

	return (
		<>
			<div className="flex flex-col gap-2 items-center justify-center">
				<Link href={href} className={newClassName} {...rest}>
					{children}
				</Link>
				{isActive && (
					<span className="relative flex h-1 w-1">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span className="inline-flex rounded-full h-1 w-1 bg-sky-500"></span>
					</span>
				)}
			</div>
		</>
	);
};

export default NavLink;
