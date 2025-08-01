import { Badge } from "@/components/ui/badge";
import { ExternalLink, Figma } from "lucide-react";
import Image from "next/image";

export default function NoNameCharliPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex bg-black p-5">
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/mint"
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
						<Figma />
						<a
							href="https://www.figma.com/design/QZd1rJo2jtvsMkA2nTVWzH/No-Name-Charli?m=auto&t=smh83fAU8zKVZ4sB-6"
							target="_blank"
						>
							Figma Mockups
						</a>
					</Badge>
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<ExternalLink />
						<a
							href="https://opensea.io/collection/nonamecharli"
							target="_blank"
						>
							OpenSea Collection
						</a>
					</Badge>
				</div>
				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">No Name Charli</h1>
				<p className="text-lg text-neutral-300 mb-6">
					NFT Minting Platform & Blockchain Education
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">May 2021 - Sep 2022</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Software Engineer</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Next.js, React, TailwindCSS, Solidity, Web3.js, MetaMask,
							Ethereum, Hardhat
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Making NFT minting accessible for students and first-time users,
						while supporting blockchain education and secure asset creation.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Designed and developed the main landing page using Next.js and
							TailwindCSS, delivering a polished, mobile-responsive user
							experience for the NFT collection.
						</li>
						<li>
							Built the minting interface and wallet connectivity flow,
							integrating MetaMask and Web3.js for real-time smart contract
							interactions and seamless on-chain minting.
						</li>
						<li>
							Deployed the NFT smart contract using Solidity, ensuring secure,
							verifiable asset creation on Ethereum with OpenSea integration.
						</li>
						<li>
							Contributed to a successful launch and mint date, helping the team
							onboard first-time users through intuitive UI and wallet support.
						</li>
						<li>
							Collaborated with an academic program, transforming
							student-submitted digital art into NFTs and building a platform to
							support education in blockchain and decentralized ownership.
						</li>
						<li>
							Worked in a fast-moving startup setting, supporting community
							growth and product evolution across UI/UX, Web3 engineering, and
							launch operations.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
