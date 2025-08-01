import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";

export default function QlooHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center p-20 bg-[#000]">
				<Image
					className="w-full max-h-[600px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/screely-1754025759797.png"
					alt="KindredAI Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<Globe />
						<a
							href="https://kindredai.vercel.app/"
							target="_blank"
						>
							Live Demo
						</a>
					</Badge>
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<ExternalLink />
						<a
							href="https://devpost.com/software/kindredai"
							target="_blank"
						>
							Devpost Link
						</a>
					</Badge>
					<Badge variant="secondary">
						<Github />
						<a
							href="https://github.com/kyisaiah47/qloo-profile-app"
							target="_blank"
						>
							GitHub Repo
						</a>
					</Badge>
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
					</ul>
				</div>
			</main>
		</div>
	);
}
