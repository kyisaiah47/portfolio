"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTGPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero Image Section */}
			<motion.div 
				className="flex justify-center bg-white p-4 sm:p-10 md:p-20 lg:p-40 xl:p-60 2xl:p-80"
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-[400px]"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/USCIS_Signature_Preferred_FC.png"
					alt="Capital Technology Group Logo"
					width={1000}
					height={1000}
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
					US Immigration (via Capital Technology Group)
				</motion.h1>
				
				<motion.p 
					className="text-lg text-neutral-300 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
				>
					USCIS Immigration Platform Modernization
				</motion.p>

				{/* Info Row */}
				<motion.div 
					className="flex flex-wrap gap-8 mb-8"
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
						<div className="text-sm">Sep 2022 - Apr 2023</div>
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
						<div className="text-sm">Software Engineer</div>
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
							React, JavaScript, Spring Boot, REST APIs, Accessibility,
							Agile/Scrum
						</div>
					</motion.div>
				</motion.div>

				{/* Problem Section */}
				<motion.div 
					className="mb-6"
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
						Modernizing federal digital platforms for secure, accessible
						immigration workflows is challenging due to compliance, reliability,
						and legacy system constraints.
					</motion.p>
				</motion.div>

				{/* Solution Section */}
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
							"Built and enhanced user-facing features on the USCIS immigration platform using React, contributing to a secure and accessible digital experience for millions of applicants.",
							"Integrated frontend and backend systems by developing Spring Boot APIs and service layers that ensured smooth data exchange between UI components and federal systems.",
							"Maintained high code quality standards through robust unit testing and adherence to compliance and reliability expectations in a federal environment.",
							"Worked within a tightly governed Agile framework, participating in daily standups, sprint planning, and retrospectives under close Scrum Master oversight.",
							"Delivered incremental improvements as part of a distributed engineering team, balancing velocity with precision in a high-scrutiny, change-controlled development process.",
							"Adapted quickly to federal workflows, learning how to navigate procurement cycles, accessibility mandates, and phased deployment schedules unique to government work."
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