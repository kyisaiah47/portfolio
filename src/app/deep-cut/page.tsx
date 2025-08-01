import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe } from "lucide-react";
import Image from "next/image";

export default function DeepCutHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center">
				<Image
					className="w-full max-h-[700px] object-cover object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/Frame%203.png"
					alt="Deep Cut Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
					<Badge
						variant="secondary"
						className="bg-pink-500 text-white dark:bg-pink-600"
					>
						<Globe />
						<a
							href="https://deep-cut.vercel.app/"
							target="_blank"
						>
							Live Demo
						</a>
					</Badge>
					<Badge
						variant="secondary"
						className="bg-pink-500 text-white dark:bg-pink-600"
					>
						<ExternalLink />
						<a
							href="https://kiro.devpost.com/"
							target="_blank"
						>
							Devpost Link
						</a>
					</Badge>
					<Badge variant="secondary">
						<Github />
						<a
							href="https://github.com/kyisaiah47/deep-cut"
							target="_blank"
						>
							GitHub Repo
						</a>
					</Badge>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					Code with Kiro Hackathon: Deep Cut
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Multiplayer Party Game for Chaos, Confession, and Judgment
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Jul–Aug 2025</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Project / Kiro Hackathon</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Next.js, React, TailwindCSS, shadcn/ui, framer-motion, Zustand,
							Kiro IDE, multiplayer logic, game design
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Party games like Cards Against Humanity are static and inflexible.
						They rely on pre-written content and lack adaptability or custom
						theming. I wanted to explore how AI-powered development could help
						rapidly build a surreal, theme-driven game with dynamic gameplay.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built <strong>Deep Cut</strong>, a real-time multiplayer card game
							where players compete in absurd, themed rounds of judgment.
						</li>
						<li>
							Players choose or enter a theme (e.g., "Daddy Issues & Deli
							Meats") which shapes the vibe and prompts for the session.
						</li>
						<li>
							Game mechanics (room codes, voting, win logic) were scaffolded
							using <strong>Kiro’s spec-to-code</strong> system.
						</li>
						<li>
							UI and game flow designed with React, TailwindCSS, framer-motion,
							and shadcn/ui for polish and fluidity.
						</li>
						<li>
							Kiro was used to generate game state logic, disconnection
							handling, and eerie microcopy like “Enter the Abyss.”
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
