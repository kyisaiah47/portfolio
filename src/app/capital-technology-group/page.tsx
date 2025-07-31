export default function CTGPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold mb-2">Capital Technology Group</h1>
				<div className="mb-2 text-sm text-neutral-400">
					Software Engineer | Washington DC (Remote) | Sep 2022 - Apr 2023
				</div>
				<div className="mb-6 text-xs text-neutral-400">
					React, JavaScript, Spring Boot, REST APIs, Accessibility, Agile/Scrum
				</div>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Built and enhanced user-facing features on the USCIS immigration
						platform using React, contributing to a secure and accessible
						digital experience for millions of applicants.
					</li>
					<li>
						Integrated frontend and backend systems by developing Spring Boot
						APIs and service layers that ensured smooth data exchange between UI
						components and federal systems.
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
		</div>
	);
}
