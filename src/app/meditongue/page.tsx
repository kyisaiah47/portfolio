import Image from "next/image";

export default function MediTonguePage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero / Logo */}
			<div className="flex justify-center py-20 bg-[#D1D1D1]">
				<Image
					className="w-full max-h-[600px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/meditongue-1"
					alt="MediTongue Logo"
					width={1000}
					height={1000}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				<h1 className="text-3xl font-bold mb-2">MediTongue</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Offline, on-device medical translator & triage assistant
				</p>

				<div className="flex flex-wrap gap-8 mb-10">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug 2025 (GPT-OSS Hackathon)</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Builder · Full-stack + AI</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Next.js, TailwindCSS, shadcn/ui, Node.js (local API), Ollama
							runtime, GPT-OSS 20B, Prompt Engineering
						</div>
					</div>
				</div>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						In low-connectivity or offline settings, clinicians and patients
						face critical language barriers. Cloud translators fail without
						internet and typical medical phrasebooks are too rigid for real-time
						dialogue.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Clean, responsive web UI built with Next.js + TailwindCSS +
							shadcn/ui.
						</li>
						<li>
							Local Node.js API that talks to the Ollama runtime on the same
							machine.
						</li>
						<li>
							GPT-OSS 20B runs locally for fast translations and symptom
							detection.
						</li>
						<li>
							Emergency detection via rule-based keyword spotting combined with
							AI classification.
						</li>
						<li>
							Offline-first behavior with health checks and latency badges;
							gracefully degrades when the model is unavailable.
						</li>
						<li>
							Privacy by default — all processing stays on-device; no external
							calls needed.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">
						Key Features
					</h2>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								t: "Real-time Dialogue",
								d: "Streaming ASR with partial translations for natural back-and-forth.",
							},
							{
								t: "Offline First",
								d: "Runs without internet; model weights bundled locally.",
							},
							{
								t: "Medical Lexicon",
								d: "Terminology-aware mapping for symptoms, meds, and procedures.",
							},
							{
								t: "Risk Flags",
								d: "Detects red-flag symptoms and escalates.",
							},
							{
								t: "Quick Phrases",
								d: "Tap-to-speak emergency phrases in both languages.",
							},
							{
								t: "Local Privacy",
								d: "All inference on-device; no PHI leaves the device.",
							},
						].map((card) => (
							<div
								key={card.t}
								className="rounded-2xl bg-neutral-800 p-4 border border-neutral-700"
							>
								<div className="text-sm font-semibold mb-1">{card.t}</div>
								<div className="text-sm text-neutral-300">{card.d}</div>
							</div>
						))}
					</div>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">
						Offline Architecture
					</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							<span className="font-medium">Frontend (Next.js):</span> UI
							renders translations, risk flags, and latency/health indicators.
						</li>
						<li>
							<span className="font-medium">Local API (Node.js):</span>{" "}
							lightweight server mediating requests to the local model runtime.
						</li>
						<li>
							<span className="font-medium">Model Runtime (Ollama):</span>{" "}
							serves <span className="font-medium">GPT-OSS 20B</span> for
							translation + symptom understanding.
						</li>
						<li>
							<span className="font-medium">Emergency Detection:</span> keyword
							rules for critical symptoms + model classification for context.
						</li>
						<li>
							<span className="font-medium">Resilience:</span> health checks,
							timeouts, and graceful fallbacks when offline or under load.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">Tech Stack</h2>
					<div className="flex flex-wrap gap-2">
						{[
							"Next.js",
							"TailwindCSS",
							"shadcn/ui",
							"Node.js (local API)",
							"Ollama Runtime",
							"GPT-OSS 20B",
							"Rule-based Keyword Spotting",
							"AI Classification",
							"Offline Health Checks",
							"Latency Badges",
						].map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs"
							>
								{tech}
							</span>
						))}
					</div>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">
						My Contributions
					</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Designed UX for quick, low-cognitive-load interactions in
							stressful contexts.
						</li>
						<li>
							Integrated ASR ↔ GPT-OSS ↔ TTS pipeline with offline-first health
							checks and latency tracking.
						</li>
						<li>
							Implemented hybrid rule-based + AI emergency detection system.
						</li>
						<li>
							Set up reproducible local model packaging and API endpoints.
						</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="font-semibold text-lg mb-2 text-white">Outcomes</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Functional offline prototype with end‑to‑end speech translation
							loop.
						</li>
						<li>
							Latency under ~300–500ms for short phrases on modern hardware
							(demo build).
						</li>
						<li>
							Clear privacy posture: zero network calls during translation
							sessions.
						</li>
					</ul>
				</section>

				{/* Links */}
				<section className="mb-10">
					<h2 className="font-semibold text-lg mb-3 text-white">Links</h2>
					<div className="flex flex-wrap gap-3">
						<a
							href="https://youtu.be/uaKViDVIqts"
							target="_blank"
							className="px-4 py-2 rounded-xl bg-white text-neutral-900 text-sm font-medium"
						>
							Demo (Video)
						</a>
						<a
							href="https://github.com/kyisaiah47/meditongue-web"
							target="_blank"
							className="px-4 py-2 rounded-xl bg-neutral-200 text-neutral-900 text-sm font-medium"
						>
							GitHub Repo
						</a>
						<a
							href="https://devpost.com/software/storypulse?ref_content=user-portfolio&ref_feature=in_progress"
							target="_blank"
							className="px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 text-sm"
						>
							Devpost Page
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
