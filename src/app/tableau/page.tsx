import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Youtube } from "lucide-react";
import Image from "next/image";

export default function TableauHackathonPage() {
	return (
		<div className="flex flex-col min-h-screen bg-neutral-950 text-white">
			<div className="flex justify-center bg-[#4350AF]">
				<Image
					className="w-full max-h-[700px] object-scale-down object-center"
					src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/tableau"
					alt="Employee Burnout Radar Screenshot"
					width={1228}
					height={768}
				/>
			</div>

			<main className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-neutral-900">
				<div className="flex flex-wrap gap-4 mb-4">
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
				</div>

				<h1 className="text-3xl font-bold mb-2">
					Tableau Next Hackathon: Employee Burnout Radar
				</h1>
				<p className="text-lg text-neutral-300 mb-6">
					Monitoring Wellbeing and Burnout Risk in the Workplace
				</p>

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
						<div className="text-sm">Solo Project / Hackathon</div>
					</div>
					<div>
						<div className="text-xs uppercase text-neutral-400 mb-1">
							Leveraged Skills
						</div>
						<div className="text-sm">
							Tableau, Salesforce, Google Sheets, Burnout Metrics, Data
							Visualization, Dashboard Design
						</div>
					</div>
				</div>

				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Problem</h2>
					<p className="text-base text-neutral-300">
						Employee burnout often goes unnoticed until productivity drops or
						retention suffers. Organizations lack tools to proactively track and
						visualize wellbeing risks before they escalate.
					</p>
				</div>

				<div className="mb-6">
					<h2 className="font-semibold text-lg mb-2 text-white">Solution</h2>
					<ul className="list-disc pl-6 space-y-2 text-neutral-300">
						<li>
							Built an interactive Tableau dashboard to monitor burnout scores
							by department, role, and behavior indicators.
						</li>
						<li>
							Used Salesforce as the primary data source, connected via Google
							Sheets for semantic entity linking.
						</li>
						<li>
							Defined custom metrics like “after-hours messages,” “missed
							breaks,” and “meeting overload” to signal rising stress levels.
						</li>
						<li>
							Designed the dashboard with visual clarity to enable HR and
							managers to take action quickly and with empathy.
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
