"use client";

// app/sonder/page.tsx or pages/sonder.tsx
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Twitter } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SonderPreview() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero Image Section */}
			<motion.div 
				className="flex justify-center bg-[#D1D1D1]"
				initial={{ opacity: 0, scale: 1.05 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/screely-1754102394998.png"
					alt="Sonder Screenshot"
					width={1228}
					height={768}
				/>
			</motion.div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				{/* Badges */}
				<motion.div 
					className="flex flex-wrap gap-4 mb-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.div
						whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
					>
						<Badge
							variant="secondary"
							className="bg-blue-500 text-white dark:bg-blue-600"
						>
							<Twitter />
							<a
								href="https://x.com/heysonder_"
								target="_blank"
							>
								X Profile
							</a>
						</Badge>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
					>
						<Badge
							variant="secondary"
							className="bg-blue-500 text-white dark:bg-blue-600"
						>
							<ExternalLink />
							<a
								href="https://revenuecat-shipaton-2025.devpost.com/?ref_feature=challenge&ref_medium=discover&_gl=1*1tnkgb5*_gcl_au*NzUxMDU5MTI1LjE3NTM1ODA4MDE.*_ga*MTQ1NzM3MjE0MS4xNzUzNTgwODAx*_ga_0YHJK3Y10M*czE3NTQxMDEzOTEkbzIxJGcxJHQxNzU0MTAxNDEwJGo0MSRsMCRoMA.."
								target="_blank"
							>
								Devpost Link
							</a>
						</Badge>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
					>
						<Badge variant="secondary">
							<Github />
							<a
								href="https://github.com/kyisaiah47/sonder"
								target="_blank"
							>
								GitHub Repo
							</a>
						</Badge>
					</motion.div>
				</motion.div>

				{/* Title & Subtitle */}
				<motion.h1 
					className="text-3xl font-bold mb-2"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
					whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
				>
					RevenueCat Shipathon: Sonder
				</motion.h1>
				
				<motion.p 
					className="text-lg text-neutral-300 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
				>
					A voice-based time capsule to help you reflect on your emotional
					journey.
				</motion.p>

				{/* Info Row */}
				<motion.div 
					className="flex flex-wrap gap-8 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug–Sept 2025</div>
					</motion.div>
					
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.7 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Project / Hackathon</div>
					</motion.div>
					
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.8 }}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Kotlin, Jetpack Compose, Supabase, RevenueCat, OneSignal, Lottie,
							Material 3 Expressive, Compose Multiplatform
						</div>
					</motion.div>
				</motion.div>

				{/* Problem Section */}
				<motion.div 
					className="mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
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
						In a fast-paced world, we rarely pause to reflect on how we're
						feeling day-to-day. Most journaling apps are text-heavy or rigid,
						making it hard to build a sustainable habit around self-awareness.
					</motion.p>
				</motion.div>

				{/* Solution Section */}
				<motion.div 
					className="mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 1.0, ease: [0.4, 0, 0.2, 1] }}
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
							"Created a minimalist, audio-first journaling app for capturing daily voice entries.",
							"Built using Kotlin + Jetpack Compose with full support for Material 3 Expressive and modern theming.",
							"Integrated Supabase for auth, storage, and user metadata, with RevenueCat for in-app purchases and monetization.",
							"Used OneSignal for gentle daily nudges and reminders to record.",
							"Designed the experience around emotion, memory, and introspection with a clean, elegant UI."
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
				</motion.div>
			</main>
		</div>
	);
}