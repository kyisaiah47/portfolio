"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisnetaPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero Image Section */}
			<motion.div 
				className="flex justify-center overflow-hidden"
				initial={{ opacity: 0, scale: 1.1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-full max-h-[700px] object-cover object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/Frame%201.png"
					alt="Visneta Platform Screenshot"
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
					Visneta
				</motion.h1>
				
				<motion.p 
					className="text-lg text-neutral-300 mb-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
				>
					Home Services Platform & Real-Time Dashboards
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
						<div className="text-sm">Jul 2018 - May 2021</div>
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
							React, Node.js, MySQL, Figma, REST APIs
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
						Building a scalable, user-friendly platform for home services with
						real-time dashboards and secure authentication for multiple user
						roles.
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
							"Built a Fiverr-style platform for home services using React and Node.js, enabling homeowners to request repairs, track progress, and manage properties through real-time dashboards.",
							"Developed role-specific experiences for homeowners, property managers, and vendors, including live job tracking, service history timelines, and work completion workflows.",
							"Led a full UI/UX redesign, creating Figma mockups, presenting to leadership, and executing frontend implementation for improved user experience and visual identity.",
							"Created a service timeline component that visually mapped key events and updates per property, increasing clarity and reducing support tickets.",
							"Built a real-time notifications center to aggregate job updates, property changes, and platform alerts, improving transparency and user engagement.",
							"Implemented secure authentication and account-level data access, ensuring users only interacted with their linked properties and services.",
							"Wrote and maintained backend API endpoints and SQL queries to power dynamic frontend views and user interactions across the app."
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