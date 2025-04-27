function SkillCard() {
	return (
		<div className="inline-block bg-gray-900 font-circular-web text-blue-50 rounded-xl py-2 px-3 border border-gray-700">
			JavaScript
		</div>
	);
}

function Skills() {
	return (
		<section className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-5 py-5">
					<p className="font-circular-web text-lg text-blue-50">
						Let’s dive in! Here are the skills I use to transform
						concepts into dynamic, real-world apps
					</p>
					<p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
						With experience in both frontend and backend
						technologies, I work on building scalable and
						user-friendly web solutions. I’m always looking for ways
						to grow my skills and keep up with new tools and
						frameworks in the ever-evolving tech landscape.
					</p>
				</div>
				<SkillCard />
			</div>
		</section>
	);
}

export default Skills;
