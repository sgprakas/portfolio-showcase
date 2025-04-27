import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";
import { GiLaptop } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [hasClicked, setHasClicked] = useState(false);

	const [loading, setLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 4;
	const nextVdRef = useRef<HTMLVideoElement>(null);

	// Hero Text Animation
	const firstHeaderRef = useRef<HTMLHeadingElement>(null);
	const secondHeaderRef = useRef<HTMLHeadingElement>(null);
	const paragraphRef = useRef<HTMLParagraphElement>(null);

	const firstRoleRef = useRef<HTMLHeadingElement>(null);
	const secondRoleRef = useRef<HTMLHeadingElement>(null);

	const handleVideoLoad = () => {
		setLoadedVideos((prev) => prev + 1);
	};

	useEffect(() => {
		if (loadedVideos === totalVideos - 1) {
			setLoading(false);
		}
	}, [loadedVideos]);

	const handleMiniVdClick = () => {
		setHasClicked(true);

		setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
	};

	useGSAP(
		() => {
			const el = firstRoleRef.current;

			// Make sure it starts hidden
			gsap.set(el, { opacity: 0, y: 40 });

			ScrollTrigger.create({
				trigger: el,
				start: "top 60%",
				end: "top 60%",
				onEnter: (self) => {
					if (self.direction === 1) {
						gsap.to(el, {
							opacity: 1,
							y: 0,
							duration: 0.2,
							ease: "power3.out",
						});
					}
				},
				onEnterBack: (self) => {
					if (self.direction === -1) {
						gsap.to(el, {
							opacity: 0,
							y: 40,
							duration: 0.1,
							ease: "power2.out",
						});
					}
				},
			});
		},
		{ scope: firstRoleRef }
	);

	useGSAP(() => {
		const elements = [
			firstHeaderRef.current,
			secondHeaderRef.current,
			paragraphRef.current,
		].filter(Boolean);
		let delay = 0.5;
		const splits: SplitType[] = [];

		elements.forEach((element) => {
			const split = new SplitType(element!, {
				types: "lines",
				lineClass: "lineChild",
			});
			splits.push(split);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "top bottom+=100",
					end: "bottom top+=100",
				},
			});

			tl.set(element, {
				perspective: "1000px",
				transformStyle: "preserve-3d",
				transformOrigin: "center center",
			});

			tl.fromTo(
				split.lines,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.15, stagger: 0.15 },
				delay
			);

			tl.fromTo(
				split.lines,
				{
					yPercent: 100,
					skewY: 2,
					scale: 0.8,
					rotateX: -60,
				},
				{
					yPercent: 0,
					skewY: 0,
					rotateX: 0,
					scale: 1,
					ease: "expo.out",
					stagger: 0.1,
					duration: 2.3,
					force3D: true,
				},
				delay
			);

			tl.set(element, { willChange: "auto" }, "+=0.1");

			delay += 0.3;
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
			splits.forEach((s) => s.revert());
		};
	}, []);

	useGSAP(
		() => {
			if (hasClicked) {
				gsap.set("#next-video", { visibility: "visible" });
				gsap.to("#next-video", {
					transformOrigin: "center center",
					scale: 1,
					width: "100%",
					height: "100%",
					duration: 1,
					ease: "power1.inOut",
					onStart: () => {
						nextVdRef.current?.play();
					},
				});
				gsap.from("#current-video", {
					transformOrigin: "center center",
					scale: 0,
					duration: 1.5,
					ease: "power1.inOut",
				});
			}
		},
		{
			dependencies: [currentIndex],
			revertOnUpdate: true,
		}
	);

	useGSAP(() => {
		gsap.set("#video-frame", {
			clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
			borderRadius: "0% 0% 40% 10%",
		});
		gsap.from("#video-frame", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			borderRadius: "0% 0% 0% 0%",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#video-frame",
				start: "center center",
				end: "bottom center",
				scrub: true,
			},
		});
	});

	const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			{loading && (
				<div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
					{/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
					<div className="three-body">
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
					</div>
				</div>
			)}

			<div
				id="video-frame"
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
			>
				<div>
					<div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
						<VideoPreview>
							<div
								onClick={handleMiniVdClick}
								className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
							>
								<video
									ref={nextVdRef}
									src={getVideoSrc(
										(currentIndex % totalVideos) + 1
									)}
									loop
									muted
									id="current-video"
									className="size-64 origin-center scale-150 object-cover object-center"
									onLoadedData={handleVideoLoad}
								/>
							</div>
						</VideoPreview>
					</div>

					<video
						ref={nextVdRef}
						src={getVideoSrc(currentIndex)}
						loop
						muted
						id="next-video"
						className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
						onLoadedData={handleVideoLoad}
					/>
					<video
						src={getVideoSrc(
							currentIndex === totalVideos - 1 ? 1 : currentIndex
						)}
						autoPlay
						loop
						muted
						className="absolute left-0 top-0 size-full object-cover object-center"
						onLoadedData={handleVideoLoad}
					/>
				</div>

				<h1
					ref={firstRoleRef}
					className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"
				>
					<b>F</b>ULLST<b>A</b>CK
				</h1>

				<div className="absolute left-0 top-0 z-40 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1
							ref={firstHeaderRef}
							className="special-font hero-heading text-blue-100"
						>
							Hi, I'm
						</h1>

						<h1
							ref={secondHeaderRef}
							className="special-font hero-heading text-blue-100"
						>
							{/* SG PR<b className="text-orange">A</b>K<b className="text-orange">A</b>SH */}
							SG PR<b>A</b>K<b>A</b>SH
						</h1>

						<p
							ref={paragraphRef}
							className="mb-5 max-w-64 font-robert-medium text-blue-100"
						>
							Braining hard, coding harder.
						</p>

						<Button
							id="watch-trailer"
							title="Built this"
							leftIcon={<GiLaptop size={15} />}
							containerClass="bg-yellow-300 flex-center gap-1"
						/>
					</div>
				</div>
			</div>

			<h1
				ref={secondRoleRef}
				className="special-font hero-heading absolute bottom-5 right-5 text-black text-right"
			>
				<b>F</b>ULLST<b>A</b>CK
			</h1>
		</div>
	);
}

export default Hero;
