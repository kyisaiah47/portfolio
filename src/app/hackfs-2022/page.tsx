import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function HackFS2022Page() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center bg-black p-25 pt-10">
				<Image
					className="w-full max-h-[600px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/MacBook%20Pro%2016_%20-%2022.png"
					alt="KindredAI Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				<Badge
					variant="secondary"
					className="bg-blue-500 text-white dark:bg-blue-600 mb-4"
				>
					<ExternalLink />
					<a
						href="https://ethglobal.com/showcase/split-protocol-h6r1a"
						target="_blank"
					>
						ETHGlobal Link
					</a>
				</Badge>
				<Badge
					variant="secondary"
					className="mb-4 ml-4"
				>
					<Github />
					<a
						href="https://github.com/kyisaiah47/Split-Protocol"
						target="_blank"
					>
						GitHub Repo
					</a>
				</Badge>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					🏆🥈 HackFS 2022 (ETHGlobal): Split Protocol
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					DeFi protocol for decentralized shared expense management
				</p>
				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Jul 2022</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Finalist - HackFS 2022</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							DeFi, Solidity, Ethereum, Smart Contracts, Web3, React
						</div>
					</div>
				</div>
				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Managing shared expenses in crypto is complex, with multiple tokens
						and payout preferences. Existing solutions lack seamless,
						decentralized management.
					</p>
				</div>
				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<p className="text-base text-neutral-300">
						Built a DeFi protocol enabling users to split shared expenses and
						contribute in any token, while ensuring the recipient receives a
						single, preferred-token payout.
					</p>
				</div>
			</main>
		</div>
	);
}
