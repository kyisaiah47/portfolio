"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CollageShowcase() {
	return (
		<section className="relative bg-[#2563eb] py-28 px-6 md:px-20 overflow-hidden">
			<div className="max-w-7xl mx-auto text-center mb-20">
				<h2 className="text-white text-5xl font-bold mb-4 tracking-tight">
					Toolkit
				</h2>
				<p className="text-white/90 text-xl font-medium">
					Modernizing Private Equity Ops
				</p>
			</div>

			{/* UI Collage Style Layout */}
			<div className="relative flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto">
				{[
					{
						src: "https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/toolkit-login-full.png",
						alt: "Toolkit Login",
						style: "w-[300px] rotate-[-2deg] translate-y-[-20px]",
					},
					{
						src: "https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/clients",
						alt: "Client List – Dark Mode",
						style: "w-[360px] z-10",
					},
					{
						src: "https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/light",
						alt: "Client List – Light Mode",
						style: "w-[300px] rotate-[2deg] translate-y-[-16px]",
					},
				].map((img, i) => (
					<motion.div
						key={i}
						whileHover={{ scale: 1.04 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: i * 0.2 }}
						className={`overflow-hidden shadow-2xl ${img.style}`}
					>
						<Image
							src={img.src}
							alt={img.alt}
							width={600}
							height={400}
							className="w-full h-auto object-scale-down"
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
}
