export default function QlooHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold mb-2">
					Qloo LLM Hackathon: KindredAI
				</h1>
				<div className="mb-2 text-sm text-neutral-400">
					KindredAI — Taste Graph-Based Matching Platform | Jul 2025
				</div>
				<div className="mb-6 text-xs text-neutral-400">
					Next.js, React, TailwindCSS, shadcn/ui, framer-motion, Qloo API,
					Google Gemini, Vercel, Supabase
				</div>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						Built a full-stack matchmaking app using Qloo’s cultural
						intelligence API to match users based on shared taste in music,
						movies, books, and more.
					</li>
					<li>
						Designed and implemented a polished UI with React, TailwindCSS, and
						shadcn/ui, leveraging framer-motion for state and animation.
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
		</div>
	);
}
