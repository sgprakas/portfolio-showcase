import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
	const secondRoleRef = useRef<HTMLHeadingElement>(null);

	useGSAP(() => {
		gsap.to(secondRoleRef.current, {
			xPercent: 70,
			ease: "none",
			scrollTrigger: {
				trigger: secondRoleRef.current,
				start: "top bottom",
				end: "bottom top",
				scrub: -20,
			},
		});
	}, []);

	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	});

	return (
		<div id="about" className="min-h-screen w-screen">
			<h1
				ref={secondRoleRef}
				className="special-font hero-heading text-black right-5"
			>
				DEV
			</h1>
			<div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
				<p className="font-general text-sm uppercase md:text-[10px]">
					Welcome to My World of Code
				</p>

				<AnimatedTitle
					title="<b>J</b>ust a <b>d</b>ev <br /> who l<b>o</b>ves to b<b>u</b>ild"
					containerClass="mt-5 !text-black text-center"
				/>

				<div className="about-subtext">
					<p>
						What’s up? I’m Gnana Prakash S — coding up cool,
						scalable projects and making the web a little more fun!"
					</p>
					<p className="text-gray-500">
						Every line of code is a move. Every product, a power-up.
						The game begins when you start building.
					</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path about-image">
					<img
						src="img/about.webp"
						alt="Background"
						className="absolute left-0 top-0 size-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
