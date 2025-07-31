export default function VisnetaPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold mb-2">Visneta</h1>
				<div className="mb-2 text-sm text-neutral-400">
					Junior Software Engineer | Newtown, PA (In Person) | Sep 2019 - May
					2021
				</div>
				<div className="mb-6 text-xs text-neutral-400">
					Vue.js, PHP (CodeIgniter), MySQL, Figma, REST APIs
				</div>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Built a Fiverr-style platform for home services using Vue.js and
						PHP, enabling homeowners to request repairs, track progress, and
						manage properties through real-time dashboards.
					</li>
					<li>
						Developed role-specific experiences for homeowners, property
						managers, and vendors, including live job tracking, service history
						timelines, and work completion workflows.
					</li>
					<li>
						Led a full UI/UX redesign, creating Figma mockups, presenting to
						leadership, and executing frontend implementation for improved user
						experience and visual identity.
					</li>
					<li>
						Created a service timeline component that visually mapped key events
						and updates per property, increasing clarity and reducing support
						tickets.
					</li>
					<li>
						Built a real-time notifications center to aggregate job updates,
						property changes, and platform alerts, improving transparency and
						user engagement.
					</li>
					<li>
						Implemented secure authentication and account-level data access,
						ensuring users only interacted with their linked properties and
						services.
					</li>
					<li>
						Wrote and maintained backend API endpoints and SQL queries to power
						dynamic frontend views and user interactions across the app.
					</li>
				</ul>
			</div>
		</div>
	);
}
