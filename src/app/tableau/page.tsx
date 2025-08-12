"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TableauHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero Image Section */}
			<motion.div 
				className="flex justify-center bg-[#4350AF]"
				initial={{ opacity: 0, scale: 1.05 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/tableau"
					alt="Employee Burnout Radar Screenshot"
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
							className="bg-red-500 text-white dark:bg-red-600"
						>
							<Youtube />
							<a
								href="https://www.youtube.com/watch?v=HpXFQF9F3Pk&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjM4NTE"
								target="_blank"
							>
								Live Demo
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
								href="https://devpost.com/software/employee-burnout-radar"
								target="_blank"
							>
								Devpost Link
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
					Tableau Next Hackathon: Employee Burnout Radar
				</motion.h1>
				
				<motion.p 
					className="text-lg text-neutral-300 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
				>
					Monitoring Wellbeing and Burnout Risk in the Workplace
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
						<div className="text-sm">Aug 2025</div>
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
							Tableau, Salesforce, Google Sheets, Burnout Metrics, Data
							Visualization, Dashboard Design
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
						Employee burnout often goes unnoticed until productivity drops or
						retention suffers. Organizations lack tools to proactively track and
						visualize wellbeing risks before they escalate.
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
							"Built an interactive Tableau dashboard to monitor burnout scores by department, role, and behavior indicators.",
							"Used Salesforce as the primary data source, connected via Google Sheets for semantic entity linking.",
							"Defined custom metrics like \"after-hours messages,\" \"missed breaks,\" and \"meeting overload\" to signal rising stress levels.",
							"Designed the dashboard with visual clarity to enable HR and managers to take action quickly and with empathy."
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