// components/AboutHero.tsx
import {
	AtSign,
	GraduationCap,
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
				<div className="flex flex-col items-start gap-4">
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

						<div className="flex items-center gap-4 mt-2 text-white/50 text-sm">
							<div className="flex items-center gap-1">
								<MapPinned /> New York, NY
							</div>
							<div className="flex items-center gap-1">
								<AtSign /> kyisaiah47@gmail.com
							</div>
						</div>
					</div>
				</div>

				<div>
					{/* <h2 className="text-xl font-bold mb-3">Background</h2> */}

					{/* <div className="flex flex-col gap-3 text-white/80 text-sm">
						<p>
							I've always been driven by the challenge of turning complex ideas
							into clear, intuitive interfaces. While my roots are in frontend
							development, what keeps me energized is building products that
							feel intentional—where every pixel and every line of logic serves
							the user.
						</p>

						<p>
							My journey started with web development, but it really took off
							when I began designing and shipping internal tools at scale. Since
							then, I’ve led UI overhauls, built reusable design systems, and
							integrated complex workflows across fintech, government, and
							startup environments.
						</p>

						<p>
							Lately, I’ve been exploring the intersection of AI, identity, and
							web3—crafting new kinds of user experiences powered by onchain
							profiles and generative insights.
						</p>
					</div> */}

					{/* <div className="py-15 text-white/80">
						<h3 className="text-sm text-white/50">Some extra facts</h3>
						<h3 className="text-white/80 text-sm my-2">Recently, I've been:</h3>
						<ul className="space-y-1 list-none text-white text-sm">
							<li>🤖 Participating in AI & web3 hackathons in my free time</li>
							<li>😌 Spending more time alone and learning how to rest well</li>
							<li>🖋️ Exploring ideas for future tattoos</li>
							<li>🍳 Cooking more and trying to eat clean, balanced meals</li>
						</ul>
					</div> */}

					<div className="space-y-8 mt-12">
						<div>
							<h3 className="text-sm text-white/50">Experience</h3>
							<div className="space-y-4 mt-2">
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

						<div>
							<h3 className="text-sm text-white/50 mb-2">Education</h3>
							<TeamRow
								logo={<GraduationCap />}
								company="Drexel University"
								title="B.S. Computer Science"
								year="2014-2018"
							/>
						</div>
					</div>
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
