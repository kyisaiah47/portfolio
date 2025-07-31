export default function HackFS2022Page() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold mb-2">
					HackFS 2022 (ETHGlobal): Split Protocol
				</h1>
				<div className="mb-2 text-sm text-neutral-400">
					Finalist - HackFS 2022 | Jul 2022
				</div>
				<div className="mb-6 text-xs text-neutral-400">
					DeFi protocol for decentralized shared expense management
				</div>
				<ul className="list-disc pl-6 space-y-2">
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
		</div>
	);
}
