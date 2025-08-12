"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function OpenSourceTimeline() {
	const projects = [
		{
			name: "Material UI",
			description: "Comprehensive React UI library implementing Google's Material Design."
		},
		{
			name: "Angular UI",
			description: "Component infrastructure and Material Design components for Angular."
		},
		{
			name: "Elastic UI",
			description: "Elastic's flexible design system and component library."
		},
		{
			name: "Tailwind CSS",
			description: "Utility-first CSS framework for fast UI development."
		},
		{
			name: "Storybook",
			description: "Standard tool for building and testing UI components in isolation."
		},
		{
			name: "shadcn/ui",
			description: "Beautifully-designed, accessible components for modern frontend stacks."
		},
		{
			name: "react.dev",
			description: "The official documentation site for React."
		}
	];

	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			{/* Header Image */}
			<motion.div 
				className="flex bg-[#D1D1D1]"
				initial={{ opacity: 0, scale: 1.05 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
			>
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/github"
					alt="Open Source Timeline Header"
					width={1228}
					height={768}
				/>
			</motion.div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				{/* Badge */}
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
							<Github className="w-4 h-4 mr-1" />
							<a
								href="https://github.com/kyisaiah47"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub Profile
							</a>
						</Badge>
					</motion.div>
				</motion.div>

				{/* Title */}
				<motion.h1 
					className="text-4xl font-bold mb-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
					whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
				>
					Open Source Contributions
				</motion.h1>

				<motion.ol 
					className="relative border-s border-gray-700"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.li 
						className="mb-10 ms-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
					>
						<motion.div 
							className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white shadow-md"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.4, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
							whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
						/>
						
						<motion.time 
							className="mb-1 text-sm font-normal leading-none text-neutral-400"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.7 }}
						>
							August 2025
						</motion.time>
						
						<motion.h3 
							className="text-lg font-semibold text-white"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
						>
							Forked OSS Projects to Explore and Contribute
						</motion.h3>
						
						<motion.p 
							className="text-base font-normal text-neutral-400 mb-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.9 }}
						>
							Currently evaluating and experimenting with several key open
							source projects to contribute to. These include:
						</motion.p>
						
						<motion.ul 
							className="list-disc list-inside text-neutral-400 text-sm space-y-1"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 1.0 }}
						>
							{projects.map((project, index) => (
								<motion.li
									key={project.name}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ 
										duration: 0.4, 
										delay: 1.1 + (0.1 * index),
										ease: [0.4, 0, 0.2, 1] 
									}}
									whileHover={{ 
										x: 5, 
										color: "#d1d5db",
										transition: { duration: 0.2 } 
									}}
								>
									<span className="font-medium text-white">{project.name}</span> —{" "}
									{project.description}
								</motion.li>
							))}
						</motion.ul>
					</motion.li>
				</motion.ol>
			</main>
		</div>
	);
}