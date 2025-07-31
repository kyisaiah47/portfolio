export default function HackFS2022Page() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<main className="max-w-4xl mx-auto w-full px-4 py-12">
				{/* Project Image */}
				<div className="flex justify-center mb-8">
					<img
						src="/projects/hackfs-laptop.png"
						alt="HackFS 2022 Split Protocol Screenshot"
						className="rounded-xl shadow-lg border border-neutral-800 max-w-full w-[600px]"
					/>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					HackFS 2022 (ETHGlobal): Split Protocol
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
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built a DeFi protocol enabling users to split shared expenses and
							contribute in any token, while ensuring the recipient receives a
							single, preferred-token payout.
						</li>
						<li>
							<a
								href="https://ethglobal.com/showcase/split-protocol-h6r1a"
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
