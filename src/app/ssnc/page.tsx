"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 1.1 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

const listItemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function SSNCPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Hero Image Section */}
			<motion.div
				className="flex justify-center overflow-hidden"
				initial="hidden"
				animate="visible"
				variants={imageVariants}
			>
				<Image
					className="w-full max-h-[700px] object-cover object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/Mockup%20Bundle%20%282%29.png"
					alt="Toolkit Login UI"
					width={1228}
					height={768}
				/>
			</motion.div>

			{/* Main Content */}
			<motion.main
				className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* Title & Subtitle */}
				<motion.h1
					className="text-3xl font-bold mb-2"
					variants={itemVariants}
					whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
				>
					SS&C Technologies
				</motion.h1>

				<motion.p
					className="text-lg text-neutral-300 mb-6"
					variants={itemVariants}
				>
					Toolkit: Modernizing Private Equity Operations
				</motion.p>

				{/* Info Row */}
				<motion.div
					className="flex flex-wrap gap-8 mb-8"
					variants={containerVariants}
				>
					<motion.div
						variants={itemVariants}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Apr 2023 - Current</div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Senior Software Engineer</div>
					</motion.div>

					<motion.div
						variants={itemVariants}
						whileHover={{ y: -2 }}
					>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Angular v20, RxJS, TypeScript, TailwindCSS, Azure DevOps, AG Grid,
							Jasmine, GoJS
						</div>
					</motion.div>
				</motion.div>

				{/* Problem Section */}
				<motion.div
					className="mb-6"
					variants={itemVariants}
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
						Legacy WinForms systems were costly to maintain and lacked modern
						features for private equity operations. Manual DevOps processes
						slowed down deployments and increased risk.
					</motion.p>
				</motion.div>

				{/* Solution Section */}
				<motion.div
					className="mb-6"
					variants={itemVariants}
				>
					<motion.h2
						className="font-semibold text-lg mb-2 text-white"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						Solution
					</motion.h2>

					<motion.ul
						className="list-disc pl-6 space-y-2 text-neutral-300"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Architected and delivered Toolkit, a centralized Angular app
							replacing a 15-year WinForms system, enabling teams to manage
							private equity workflows, job monitors, IAM, and deployment
							pipelines in one modern UI.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Reduced manual DevOps effort by 80% by integrating Azure pipeline
							controls directly into the app via the ADO API.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Retired legacy software by fully replicating and enhancing Windows
							app functionality, reducing maintenance cost and accelerating
							platform modernization.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Implemented complex form-driven UIs with Angular Reactive Forms
							and RxJS, streamlining workflows like client onboarding,
							permissions, and job configurations.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Improved application performance and scalability by applying
							Angular v20 best practices: lazy loading, code splitting, and
							zone-less readiness.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Accelerated feature delivery by utilizing GitHub Copilot
							Enterprise for boilerplate generation, TypeScript typing, and unit
							test scaffolding.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Led two major UI redesigns in close collaboration with a new
							design vendor, aligning with enterprise UX patterns and
							modernizing the user experience.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Built dynamic data interfaces using AG Grid and RxJS to handle
							real-time request/response tracing, client metadata, and job
							history across environments.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Enhanced build performance by tuning Angular configurations,
							resulting in faster load times and smaller bundle sizes.
						</motion.li>

						<motion.li
							variants={listItemVariants}
							whileHover={{
								x: 5,
								color: "#d1d5db",
								transition: { duration: 0.2 },
							}}
						>
							Championed test quality by leading a comprehensive unit testing
							effort using Jasmine and Angular TestBed, significantly increasing
							frontend coverage and stability.
						</motion.li>
					</motion.ul>
				</motion.div>
			</motion.main>
		</div>
	);
}
