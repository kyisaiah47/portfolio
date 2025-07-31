export default function NoNameCharliPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<main className="max-w-4xl mx-auto w-full px-4 py-12">
				{/* Project Image */}
				<div className="flex justify-center  bg-blackmb-8">
					<img
						src="/projects/no-name-charli-laptop.png"
						alt="No Name Charli Screenshot"
						className="rounded-xl shadow-lg border border-neutral-800 max-w-full w-[600px]"
					/>
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
