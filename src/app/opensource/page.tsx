"use client";

export default function OpenSourceTimeline() {
	return (
		<div className="bg-neutral-950 min-h-screen text-white px-10 py-20">
			<h1 className="text-4xl font-bold mb-10">Open Source Contributions</h1>

			<ol className="relative border-s border-gray-700">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white shadow-md"></div>
					<time className="mb-1 text-sm font-normal leading-none text-neutral-400">
						August 2025
					</time>
					<h3 className="text-lg font-semibold text-white">
						Forked OSS Projects to Explore and Contribute
					</h3>
					<p className="text-base font-normal text-neutral-400 mb-4">
						Currently evaluating and experimenting with several key open source
						projects to contribute to. These include:
					</p>
					<ul className="list-disc list-inside text-neutral-400 text-sm space-y-1">
						<li>
							<span className="font-medium text-white">Material UI</span> —
							Comprehensive React UI library implementing Google’s Material
							Design.
						</li>
						<li>
							<span className="font-medium text-white">Angular UI</span> —
							Component infrastructure and Material Design components for
							Angular.
						</li>
						<li>
							<span className="font-medium text-white">Elastic UI</span> —
							Elastic’s flexible design system and component library.
						</li>
						<li>
							<span className="font-medium text-white">Tailwind CSS</span> —
							Utility-first CSS framework for fast UI development.
						</li>
						<li>
							<span className="font-medium text-white">Storybook</span> —
							Standard tool for building and testing UI components in isolation.
						</li>
						<li>
							<span className="font-medium text-white">shadcn/ui</span> —
							Beautifully-designed, accessible components for modern frontend
							stacks.
						</li>
						<li>
							<span className="font-medium text-white">react.dev</span> — The
							official documentation site for React.
						</li>
					</ul>
				</li>
			</ol>
		</div>
	);
}
