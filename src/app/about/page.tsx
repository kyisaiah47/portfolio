"use client";

// components/AboutHero.tsx
import { IdCardLanyard, PiggyBank, Sprout } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// About
export default function About() {
	return (
		<motion.section
			className="bg-neutral-900 text-white min-h-screen py-16 px-6 md:px-12"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<div className="mx-auto">
				{/* Profile */}
				<motion.div
					className="flex items-start gap-4 mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
						whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
					>
						<Image
							src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/propic" // Replace with actual path
							alt="Profile"
							width={60}
							height={60}
							className="rounded-full object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
					>
						<motion.h1
							className="text-2xl md:text-3xl font-bold leading-tight"
							whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
						>
							Senior software engineer with front end focus.
						</motion.h1>
						<motion.p
							className="mt-2 text-white/80"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.5 }}
						>
							I design and develop digital products & visual interfaces.
							<br />
							Interested in web3 and AI. Active in hackathons.
						</motion.p>
						<motion.p
							className="mt-2 text-white/60"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							Currently <span className="text-white">@ SS&C Technologies</span>
						</motion.p>
					</motion.div>
				</motion.div>

				{/* Team Section */}
				<motion.div
					className="mt-12 space-y-4 border-t border-white/10 pt-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
				>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.8 }}
					>
						<TeamRow
							logo={<PiggyBank />}
							company="SS&C Technologies"
							title="Senior Software Engineer"
							year="2023-Present"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 0.9 }}
					>
						<TeamRow
							logo={<IdCardLanyard />}
							company="US Immigration (via Capital Technology Group)"
							title="Software Engineer"
							year="2023"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 1.0 }}
					>
						<TeamRow
							logo={<Sprout />}
							company="No Name Charli"
							title="Software Engineer"
							year="2021-2023"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: 1.1 }}
					>
						<TeamRow
							logo={<Sprout />}
							company="Visneta"
							title="Software Engineer"
							year="2018-2021"
						/>
					</motion.div>
				</motion.div>

				{/* <div className="mt-12 space-y-4 border-t border-white/10 pt-6">
					{Timeline3PerRow({ data: items })}
				</div> */}
			</div>
		</motion.section>
	);
}

function TeamRow({
	logo,
	company,
	title,
	year,
}: {
	logo: React.ReactNode;
	company: string;
	title: string;
	year: string;
}) {
	return (
		<motion.div
			className="flex items-center justify-between"
			whileHover={{
				x: 5,
				backgroundColor: "rgba(23, 92, 211, 0.05)",
				transition: { duration: 0.2 },
			}}
		>
			<div className="flex items-center gap-4">
				<motion.div
					whileHover={{
						scale: 1.1,
						color: "#175CD3",
						transition: { duration: 0.2 },
					}}
				>
					{logo}
				</motion.div>
				<div>
					<motion.p
						className="font-medium"
						whileHover={{ color: "#175CD3", transition: { duration: 0.2 } }}
					>
						{company}
					</motion.p>
					<p className="text-white/60 text-sm">{title}</p>
				</div>
			</div>
			<div className="text-white/50 text-sm">{year}</div>
		</motion.div>
	);
}
