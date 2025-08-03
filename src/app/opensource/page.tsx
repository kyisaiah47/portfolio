"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export default function OpenSourceTimeline() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Header Image */}
			<div className="flex bg-[#D1D1D1]">
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/github" // ⬅️ Replace with your actual header image
					alt="Open Source Timeline Header"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				{/* Optional Badges */}
				<div className="flex flex-wrap gap-4 mb-4">
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<Github className="w-4 h-4 mr-1" />
						<a
							href="https://github.com/kyisaiah47"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub Profile
						</a>
					</Badge>
				</div>

				{/* Title */}
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
							Currently evaluating and experimenting with several key open
							source projects to contribute to. These include:
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
								Standard tool for building and testing UI components in
								isolation.
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
			</main>
		</div>
	);
}
