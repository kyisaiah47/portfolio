export default function SSNCPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<main className="max-w-4xl mx-auto w-full px-4 py-12">
				{/* Project Image */}
				<div className="flex justify-center mb-8">
					<img
						src="/projects/ssnc-laptop.png"
						alt="SS&C Technologies Toolkit Screenshot"
						className="rounded-xl shadow-lg border border-neutral-800 max-w-full w-[600px]"
					/>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">SS&C Technologies</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Toolkit: Modernizing Private Equity Operations
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Apr 2023 - Current</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Senior Software Engineer</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Angular v20, RxJS, TypeScript, TailwindCSS, Azure DevOps, AG Grid,
							Jasmine, GoJS
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Legacy WinForms systems were costly to maintain and lacked modern
						features for private equity operations. Manual DevOps processes
						slowed down deployments and increased risk.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Architected and delivered Toolkit, a centralized Angular app
							replacing a 15-year WinForms system, enabling teams to manage
							private equity workflows, job monitors, IAM, and deployment
							pipelines in one modern UI.
						</li>
						<li>
							Reduced manual DevOps effort by 80% by integrating Azure pipeline
							controls directly into the app via the ADO API.
						</li>
						<li>
							Retired legacy software by fully replicating and enhancing Windows
							app functionality, reducing maintenance cost and accelerating
							platform modernization.
						</li>
						<li>
							Implemented complex form-driven UIs with Angular Reactive Forms
							and RxJS, streamlining workflows like client onboarding,
							permissions, and job configurations.
						</li>
						<li>
							Improved application performance and scalability by applying
							Angular v20 best practices: lazy loading, code splitting, and
							zone-less readiness.
						</li>
						<li>
							Accelerated feature delivery by utilizing GitHub Copilot
							Enterprise for boilerplate generation, TypeScript typing, and unit
							test scaffolding.
						</li>
						<li>
							Led two major UI redesigns in close collaboration with a new
							design vendor, aligning with enterprise UX patterns and
							modernizing the user experience.
						</li>
						<li>
							Built dynamic data interfaces using AG Grid and RxJS to handle
							real-time request/response tracing, client metadata, and job
							history across environments.
						</li>
						<li>
							Enhanced build performance by tuning Angular configurations,
							resulting in faster load times and smaller bundle sizes.
						</li>
						<li>
							Championed test quality by leading a comprehensive unit testing
							effort using Jasmine and Angular TestBed, significantly increasing
							frontend coverage and stability.
						</li>
					</ul>
				</div>

				{/* (Optional) Concept Video or Demo Area */}
				{/* <div className="mb-6">
		  <h2 className="font-semibold text-lg mb-2 text-white">Demo</h2>
		  <div className="aspect-video bg-neutral-800 rounded-lg flex items-center justify-center">
			<span className="text-neutral-500">Demo video coming soon</span>
		  </div>
		</div> */}
			</main>
		</div>
	);
}
