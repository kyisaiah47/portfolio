export default function SSNCPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold mb-2">SS&C Technologies</h1>
				<div className="mb-2 text-sm text-neutral-400">
					Senior Software Engineer | Union, NJ (Hybrid) | Apr 2023 - Current
				</div>
				<div className="mb-6 text-xs text-neutral-400">
					Angular v20, RxJS, TypeScript, TailwindCSS, ADO, AG Grid, Jasmine,
					GoJS
				</div>
				<ul className="list-disc pl-6 space-y-2">
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
						Implemented complex form-driven UIs with Angular Reactive Forms and
						RxJS, streamlining workflows like client onboarding, permissions,
						and job configurations.
					</li>
					<li>
						Improved application performance and scalability by applying Angular
						v20 best practices: lazy loading, code splitting, and zone-less
						readiness.
					</li>
					<li>
						Accelerated feature delivery by utilizing GitHub Copilot Enterprise
						for boilerplate generation, TypeScript typing, and unit test
						scaffolding.
					</li>
					<li>
						Led two major UI redesigns in close collaboration with a new design
						vendor, aligning with enterprise UX patterns and modernizing the
						user experience.
					</li>
					<li>
						Built dynamic data interfaces using AG Grid and RxJS to handle
						real-time request/response tracing, client metadata, and job history
						across environments.
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
		</div>
	);
}
