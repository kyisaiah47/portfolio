"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MediTonguePage() {
	const keyFeatures = [
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
	];

	const techStack = [
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
	];

	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero / Logo */}
			<motion.div 
				className="flex justify-center py-5 bg-[#D1D1D1]"
				initial={{ opacity: 0, scale: 1.05 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/meditongue-1"
					alt="MediTongue Logo"
					width={1228}
					height={768}
				/>
			</motion.div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				{/* Title & Subtitle */}
				<motion.h1 
					className="text-3xl font-bold mb-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
				>
					MediTongue
				</motion.h1>
				
				<motion.p 
					className="text-lg text-neutral-300 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
				>
					Offline, on-device medical translator & triage assistant
				</motion.p>

				{/* Info Row */}
				<motion.div 
					className="flex flex-wrap gap-8 mb-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.5 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug 2025 (GPT-OSS Hackathon)</div>
					</motion.div>
					
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Builder · Full-stack + AI</div>
					</motion.div>
					
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Next.js, TailwindCSS, shadcn/ui, Node.js (local API), Ollama
							runtime, GPT-OSS 20B, Prompt Engineering
						</div>
					</motion.div>
				</motion.div>

				{/* Problem Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Problem
					</motion.h2>
					<motion.p 
						className="text-base text-neutral-300"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						In low-connectivity or offline settings, clinicians and patients
						face critical language barriers. Cloud translators fail without
						internet and typical medical phrasebooks are too rigid for real-time
						dialogue.
					</motion.p>
				</motion.section>

				{/* Solution Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Solution
					</motion.h2>
					<motion.ul 
						className="list-disc pl-6 space-y-2 text-neutral-300"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{[
							"Clean, responsive web UI built with Next.js + TailwindCSS + shadcn/ui.",
							"Local Node.js API that talks to the Ollama runtime on the same machine.",
							"GPT-OSS 20B runs locally for fast translations and symptom detection.",
							"Emergency detection via rule-based keyword spotting combined with AI classification.",
							"Offline-first behavior with health checks and latency badges; gracefully degrades when the model is unavailable.",
							"Privacy by default — all processing stays on-device; no external calls needed."
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ 
									duration: 0.5, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									x: 5, 
									color: "#d1d5db",
									transition: { duration: 0.2 } 
								}}
							>
								{item}
							</motion.li>
						))}
					</motion.ul>
				</motion.section>

				{/* Key Features Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Key Features
					</motion.h2>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{keyFeatures.map((card, index) => (
							<motion.div
								key={card.t}
								className="rounded-2xl bg-neutral-800 p-4 border border-neutral-700"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ 
									duration: 0.5, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									y: -5, 
									borderColor: "#175CD3",
									transition: { duration: 0.2 } 
								}}
							>
								<div className="text-sm font-semibold mb-1">{card.t}</div>
								<div className="text-sm text-neutral-300">{card.d}</div>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Architecture Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Offline Architecture
					</motion.h2>
					<motion.ul 
						className="list-disc pl-6 space-y-2 text-neutral-300"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{[
							"Frontend (Next.js): UI renders translations, risk flags, and latency/health indicators.",
							"Local API (Node.js): lightweight server mediating requests to the local model runtime.",
							"Model Runtime (Ollama): serves GPT-OSS 20B for translation + symptom understanding.",
							"Emergency Detection: keyword rules for critical symptoms + model classification for context.",
							"Resilience: health checks, timeouts, and graceful fallbacks when offline or under load."
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ 
									duration: 0.5, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									x: 5, 
									color: "#d1d5db",
									transition: { duration: 0.2 } 
								}}
							>
								{item}
							</motion.li>
						))}
					</motion.ul>
				</motion.section>

				{/* Tech Stack Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Tech Stack
					</motion.h2>
					<div className="flex flex-wrap gap-2">
						{techStack.map((tech, index) => (
							<motion.span
								key={tech}
								className="px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-xs"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ 
									duration: 0.3, 
									delay: 0.05 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.1,
									borderColor: "#175CD3",
									transition: { duration: 0.2 } 
								}}
							>
								{tech}
							</motion.span>
						))}
					</div>
				</motion.section>

				{/* Contributions Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						My Contributions
					</motion.h2>
					<motion.ul 
						className="list-disc pl-6 space-y-2 text-neutral-300"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{[
							"Designed UX for quick, low-cognitive-load interactions in stressful contexts.",
							"Integrated ASR ↔ GPT-OSS ↔ TTS pipeline with offline-first health checks and latency tracking.",
							"Implemented hybrid rule-based + AI emergency detection system.",
							"Set up reproducible local model packaging and API endpoints."
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ 
									duration: 0.5, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									x: 5, 
									color: "#d1d5db",
									transition: { duration: 0.2 } 
								}}
							>
								{item}
							</motion.li>
						))}
					</motion.ul>
				</motion.section>

				{/* Outcomes Section */}
				<motion.section 
					className="mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Outcomes
					</motion.h2>
					<motion.ul 
						className="list-disc pl-6 space-y-2 text-neutral-300"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{[
							"Functional offline prototype with end‑to‑end speech translation loop.",
							"Latency under ~300–500ms for short phrases on modern hardware (demo build).",
							"Clear privacy posture: zero network calls during translation sessions."
						].map((item, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ 
									duration: 0.5, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									x: 5, 
									color: "#d1d5db",
									transition: { duration: 0.2 } 
								}}
							>
								{item}
							</motion.li>
						))}
					</motion.ul>
				</motion.section>

				{/* Links Section */}
				<motion.section 
					className="mb-10"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
					viewport={{ once: true }}
				>
					<motion.h2 
						className="font-semibold text-lg mb-3 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Links
					</motion.h2>
					<div className="flex flex-wrap gap-3">
						{[
							{ href: "https://youtu.be/uaKViDVIqts", text: "Demo (Video)", className: "px-4 py-2 rounded-xl bg-white text-neutral-900 text-sm font-medium" },
							{ href: "https://github.com/kyisaiah47/meditongue-web", text: "GitHub Repo", className: "px-4 py-2 rounded-xl bg-neutral-200 text-neutral-900 text-sm font-medium" },
							{ href: "https://devpost.com/software/storypulse?ref_content=user-portfolio&ref_feature=in_progress", text: "Devpost Page", className: "px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-700 text-sm" }
						].map((link, index) => (
							<motion.a
								key={link.text}
								href={link.href}
								target="_blank"
								className={link.className}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ 
									duration: 0.4, 
									delay: 0.1 * index,
									ease: [0.4, 0, 0.2, 1] 
								}}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.05,
									transition: { duration: 0.2 } 
								}}
							>
								{link.text}
							</motion.a>
						))}
					</div>
				</motion.section>
			</main>
		</div>
	);
}