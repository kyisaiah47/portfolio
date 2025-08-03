// app/storybook/page.tsx or pages/storybook.tsx
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";
import Image from "next/image";

export default function StorybookPreview() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center bg-[#DACDE2] p-10">
				<Image
					className="w-full max-h-[650px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/screely-1754231520235.png"
					alt="Storybook UI Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
					<Badge
						variant="secondary"
						className="bg-blue-500 text-white dark:bg-blue-600"
					>
						<Globe />
						<a
							href="https://kyisaiah-storybook.vercel.app/"
							target="_blank"
							className="ml-1"
						>
							Live Preview
						</a>
					</Badge>
					<Badge variant="secondary">
						<Github />
						<a
							href="https://github.com/kyisaiah47/storybook"
							target="_blank"
							className="ml-1"
						>
							GitHub Repo
						</a>
					</Badge>
				</div>

				<h1 className="text-3xl font-bold mb-2">Personal UI Storybook</h1>
				<p className="text-lg text-neutral-300 mb-6">
					A custom component library and visual design system, built with
					TailwindCSS, ShadCN UI, Framer Motion, and Lucide icons — themed to
					match the minimal, emotionally resonant tone of my broader work.
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug 2025</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Project / Design System</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Stack & Tools
						</div>
						<div className="text-sm">
							React, TailwindCSS, ShadCN UI, Framer Motion, Storybook 7, Vite,
							Lucide, PostCSS
						</div>
					</div>
				</div>

				{/* Goal Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Goal</h2>
					<p className="text-base text-neutral-300">
						I wanted a dedicated design system that reflected my taste and
						branding — emotionally soft, elegant, and modern — while improving
						speed and consistency in building interfaces for apps, hackathons,
						and side projects.
					</p>
				</div>

				{/* Highlights Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Highlights</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Dozens of polished components — cards, modals, tabs, steppers,
							toasts, skeletons, accordions, sliders, avatars, quotes, and more.
						</li>
						<li>
							Fully themed with a soft pastel palette, translucent backgrounds,
							and clean white rounded cards.
						</li>
						<li>
							Framer Motion animations for headers, carousels, and UI polish.
						</li>
						<li>
							Icons via Lucide-React, replacing emojis for a more consistent
							visual tone.
						</li>
						<li>
							Layout designed to preview all components in context, including
							color tokens and typography system.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
