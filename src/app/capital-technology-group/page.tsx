export default function CTGPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<main className="max-w-4xl mx-auto w-full px-4 py-12">
				{/* Project Image */}
				<div className="flex justify-center  bg-blackmb-8">
					<img
						src="/projects/ctg-laptop.png"
						alt="Capital Technology Group Screenshot"
						className="rounded-xl shadow-lg border border-neutral-800 max-w-full w-[600px]"
					/>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">Capital Technology Group</h1>
				<p className="text-lg text-neutral-300 mb-6">
					USCIS Immigration Platform Modernization
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Sep 2022 - Apr 2023</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Software Engineer</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							React, JavaScript, Spring Boot, REST APIs, Accessibility,
							Agile/Scrum
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Modernizing federal digital platforms for secure, accessible
						immigration workflows is challenging due to compliance, reliability,
						and legacy system constraints.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built and enhanced user-facing features on the USCIS immigration
							platform using React, contributing to a secure and accessible
							digital experience for millions of applicants.
						</li>
						<li>
							Integrated frontend and backend systems by developing Spring Boot
							APIs and service layers that ensured smooth data exchange between
							UI components and federal systems.
						</li>
						<li>
							Maintained high code quality standards through robust unit testing
							and adherence to compliance and reliability expectations in a
							federal environment.
						</li>
						<li>
							Worked within a tightly governed Agile framework, participating in
							daily standups, sprint planning, and retrospectives under close
							Scrum Master oversight.
						</li>
						<li>
							Delivered incremental improvements as part of a distributed
							engineering team, balancing velocity with precision in a
							high-scrutiny, change-controlled development process.
						</li>
						<li>
							Adapted quickly to federal workflows, learning how to navigate
							procurement cycles, accessibility mandates, and phased deployment
							schedules unique to government work.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
