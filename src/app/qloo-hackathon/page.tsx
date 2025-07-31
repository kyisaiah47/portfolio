export default function QlooHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<main className="max-w-4xl mx-auto w-full px-4 py-12">
				{/* Project Image */}
				<div className="flex justify-center mb-8">
					<img
						src="/projects/qloo-laptop.png"
						alt="Qloo KindredAI Screenshot"
						className="rounded-xl shadow-lg border border-neutral-800 max-w-full w-[600px]"
					/>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					Qloo LLM Hackathon: KindredAI
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Taste Graph-Based Matching Platform
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Jul 2025</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Project / Hackathon</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Next.js, React, TailwindCSS, shadcn/ui, framer-motion, Qloo API,
							Google Gemini, Vercel, Supabase
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Matching people based on shared interests is difficult and often
						lacks nuance. Existing platforms don’t leverage deep cultural data
						or semantic relationships.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built a full-stack matchmaking app using Qloo’s cultural
							intelligence API to match users based on shared taste in music,
							movies, books, and more.
						</li>
						<li>
							Designed and implemented a polished UI with React, TailwindCSS,
							and shadcn/ui, leveraging framer-motion for state and animation.
						</li>
						<li>
							Integrated Qloo API to enrich user profiles with taste graph
							insights and semantic similarities across interests.
						</li>
						<li>
							Used Gemini to generate compatibility summaries and handle API
							fallback logic gracefully.
						</li>
						<li>
							<a
								href="https://kindredai.vercel.app/"
								target="_blank"
								className="underline text-blue-400"
							>
								Project Link
							</a>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
