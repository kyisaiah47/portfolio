import Image from "next/image";

export default function VisnetaPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center">
				<Image
					className="w-full max-h-[700px] object-cover object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/Frame%201.png"
					alt="KindredAI Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-20 py-16 bg-neutral-900">
				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">Visneta</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Home Services Platform & Real-Time Dashboards
				</p>
				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Sep 2019 - May 2021</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Junior Software Engineer</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Vue.js, PHP (CodeIgniter), MySQL, Figma, REST APIs
						</div>
					</div>
				</div>
				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Building a scalable, user-friendly platform for home services with
						real-time dashboards and secure authentication for multiple user
						roles.
					</p>
				</div>
				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built a Fiverr-style platform for home services using Vue.js and
							PHP, enabling homeowners to request repairs, track progress, and
							manage properties through real-time dashboards.
						</li>
						<li>
							Developed role-specific experiences for homeowners, property
							managers, and vendors, including live job tracking, service
							history timelines, and work completion workflows.
						</li>
						<li>
							Led a full UI/UX redesign, creating Figma mockups, presenting to
							leadership, and executing frontend implementation for improved
							user experience and visual identity.
						</li>
						<li>
							Created a service timeline component that visually mapped key
							events and updates per property, increasing clarity and reducing
							support tickets.
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
							Wrote and maintained backend API endpoints and SQL queries to
							power dynamic frontend views and user interactions across the app.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
