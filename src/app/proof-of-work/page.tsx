// app/proof-of-work/page.tsx or pages/proof-of-work.tsx
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function ProofOfWorkPreview() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center bg-[#E3D9FF]">
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/proof-of-work-cover"
					alt="Proof of Work Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
					{/* <Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<Twitter />
						<a
							href="https://x.com/your_x_profile"
							target="_blank"
						>
							X Profile
						</a>
					</Badge> */}
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<ExternalLink />
						<a
							href="https://proofofconcept.devpost.com/"
							target="_blank"
						>
							Devpost Link
						</a>
					</Badge>
					<Badge variant="secondary">
						<Github />
						<a
							href="https://github.com/kyisaiah47/proof-of-work"
							target="_blank"
						>
							GitHub Repo
						</a>
					</Badge>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					Proof of Concept Hackathon: Proof of Work
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					A mobile-first freelance platform with zkTLS proof and on-chain
					payments to restore trust in remote work.
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug–Sept 2025</div>
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
							React Native, Expo, zkTLS, XION SDK, Tailwind, Web3 Auth, On-chain
							Payments
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Freelancers and clients struggle with trust in remote work
						agreements. Deliverables can’t always be verified, payments are
						delayed or withheld, and platforms take excessive fees without
						solving these issues.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built a mobile-native dApp to match freelance jobs with crypto
							payments and zero-knowledge work proofs.
						</li>
						<li>
							Integrated zkTLS to generate tamper-proof attestations of
							completed work sessions.
						</li>
						<li>
							Used XION&apos;s Mobile Dev Kit for seamless Web3 UX and wallet
							interactions.
						</li>
						<li>
							Enabled trustless payment flows between clients and freelancers
							using on-chain smart contracts.
						</li>
						<li>
							Polished UI with Tailwind, custom animations, and clean tabbed
							navigation (e.g. jobs, proofs, payments).
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
