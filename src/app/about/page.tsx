// components/AboutHero.tsx
import {
	AtSign,
	IdCardLanyard,
	MapPinned,
	PiggyBank,
	Sprout,
} from "lucide-react";
import Image from "next/image";

export default function About() {
	return (
		<section className="bg-neutral-900 text-white min-h-screen py-16 px-6 md:px-12">
			<div className="mx-auto">
				{/* Profile */}
				<div className="flex items-start gap-4 mb-8">
					<Image
						src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/propic" // Replace with actual path
						alt="Profile"
						width={60}
						height={60}
						className="rounded-full object-cover"
					/>
					<div>
						<h1 className="text-2xl md:text-3xl font-bold leading-tight">
							Senior software engineer with front end focus.
						</h1>
						<p className="mt-2 text-white/80">
							I design and develop digital products & visual interfaces.
							<br />
							Interested in web3 and AI. Active in hackathons.
						</p>
						<p className="mt-2 text-white/60">
							Currently <span className="text-white">@ SS&C Technologies</span>
						</p>
					</div>
				</div>

				{/* Team Section */}
				<div className="mt-12 space-y-4 border-t border-white/10 pt-6">
					<TeamRow
						logo={<PiggyBank />}
						company="SS&C Technologies"
						title="Senior Software Engineer"
						year="2023-Present"
					/>
					<TeamRow
						logo={<IdCardLanyard />}
						company="US Immigration (via Capital Technology Group)"
						title="Software Engineer"
						year="2023"
					/>
					<TeamRow
						logo={<Sprout />}
						company="No Name Charli"
						title="Software Engineer"
						year="2021-2023"
					/>
					<TeamRow
						logo={<Sprout />}
						company="Visneta"
						title="Junior Software Engineer"
						year="2019–2021"
					/>
				</div>
			</div>
		</section>
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
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-4">
				{logo}
				<div>
					<p className="font-medium">{company}</p>
					<p className="text-white/60 text-sm">{title}</p>
				</div>
			</div>
			<div className="text-white/50 text-sm">{year}</div>
		</div>
	);
}
