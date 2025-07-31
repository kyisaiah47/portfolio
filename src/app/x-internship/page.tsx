import Image from "next/image";

export default function XInternshipPage() {
	return (
		<div className="flex flex-col min-h-screen bg-black">
			<div className="flex-1 flex items-center justify-center">
				<Image
					src="/x-logo.png"
					alt="X Logo"
					width={160}
					height={160}
				/>
			</div>
			<div className="bg-neutral-900 px-8 py-8">
				<h1 className="text-2xl font-bold text-white mb-4">
					X Product Design Internship
				</h1>
				<div className="flex flex-col md:flex-row md:justify-between gap-6 text-white">
					<div>
						<div className="flex items-center gap-2 mb-1 text-sm font-medium">
							<svg
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path d="M8 7V3h8v4" />
								<rect
									x="3"
									y="7"
									width="18"
									height="13"
									rx="2"
								/>
								<path d="M16 13h.01" />
								<path d="M8 13h.01" />
							</svg>
							Timeline / Location
						</div>
						<div className="text-xs text-neutral-400">
							October 2024 - January 2025 / Palo Alto, California
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-1 text-sm font-medium">
							<svg
								width="18"
								height="18"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="2"
								/>
								<path d="M8 9h8v6H8z" />
							</svg>
							Role / Context
						</div>
						<div className="text-xs text-neutral-400">
							Product Design Intern / On-site Internship
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
