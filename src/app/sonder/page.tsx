// app/sonder/page.tsx or pages/sonder.tsx
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function SonderPreview() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center bg-[#D1D1D1]">
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/screely-1754102394998.png"
					alt="Sonder Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
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
					<Badge variant="secondary">
						<Github />
						<a
							href="https://github.com/kyisaiah47/sonder"
							target="_blank"
						>
							GitHub Repo
						</a>
					</Badge>
				</div>

				{/* Title & Subtitle */}
				<h1 className="text-3xl font-bold mb-2">
					RevenueCat Shipathon: Sonder
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					A voice-based time capsule to help you reflect on your emotional
					journey.
				</p>

				{/* Info Row */}
				<div className="flex flex-wrap gap-8 mb-8">
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Timeline
						</div>
						<div className="text-sm">Aug–Sept 2025</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Role / Context
						</div>
						<div className="text-sm">Solo Project / Hackathon</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Kotlin, Jetpack Compose, Supabase, RevenueCat, OneSignal, Lottie,
							Material 3 Expressive, Compose Multiplatform
						</div>
					</div>
				</div>

				{/* Problem Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						In a fast-paced world, we rarely pause to reflect on how we’re
						feeling day-to-day. Most journaling apps are text-heavy or rigid,
						making it hard to build a sustainable habit around self-awareness.
					</p>
				</div>

				{/* Solution Section */}
				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Created a minimalist, audio-first journaling app for capturing
							daily voice entries.
						</li>
						<li>
							Built using Kotlin + Jetpack Compose with full support for
							Material 3 Expressive and modern theming.
						</li>
						<li>
							Integrated Supabase for auth, storage, and user metadata, with
							RevenueCat for in-app purchases and monetization.
						</li>
						<li>
							Used OneSignal for gentle daily nudges and reminders to record.
						</li>
						<li>
							Designed the experience around emotion, memory, and introspection
							with a clean, elegant UI.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
