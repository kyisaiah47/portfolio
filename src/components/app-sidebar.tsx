"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarSeparator,
} from "@/components/ui/sidebar";
import {
	CircleUser,
	Sprout,
	Building2,
	Landmark,
	Construction,
	Images,
	IdCardLanyard,
	Trophy,
	Medal,
	UsersRound,
	Github,
	Ghost,
	Brain,
	LayoutDashboard,
	Smartphone,
	ChartNoAxesCombined,
	BanknoteArrowUp,
	BookA,
	FolderCode,
	LockKeyhole,
	BadgeDollarSign,
	Stethoscope,
} from "lucide-react";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
					>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<div className="flex items-center gap-2">
									<motion.div
										initial={{ rotate: -180, scale: 0 }}
										animate={{ rotate: 0, scale: 1 }}
										transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
									>
										<Image
											className="mr-2"
											src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/Hourglass.png"
											alt="logo"
											width={20}
											height={20}
										/>
									</motion.div>
									<span className="font-bold">Isaiah Kim</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</motion.div>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<SidebarGroup>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.4 }}
						>
							<SidebarGroupLabel>About</SidebarGroupLabel>
						</motion.div>
						<SidebarGroupContent>
							<SidebarMenu>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.5 }}
									whileHover={{ x: 5, transition: { duration: 0.2 } }}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href="/about">
												<CircleUser />
												<span>About</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.4, delay: 0.6 }}
				>
					<SidebarSeparator />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.7 }}
				>
					<SidebarGroup>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 0.8 }}
						>
							<SidebarGroupLabel>Experience</SidebarGroupLabel>
						</motion.div>
						<SidebarGroupContent>
							<SidebarMenu>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 0.9 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/ssnc"
												className="flex items-center gap-2"
											>
												<Building2 />
												<BadgeDollarSign />
												<span>SS&C Technologies</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 1.0 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/capital-technology-group"
												className="flex items-center gap-2"
											>
												<Landmark />
												<IdCardLanyard />
												<span>US Immigration (via Capital Technology Group)</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 1.1 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/no-name-charli"
												className="flex items-center gap-2"
											>
												<Sprout />
												<Images />
												<span>No Name Charli</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 1.2 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/visneta"
												className="flex items-center gap-2"
											>
												<Sprout />
												<Construction />
												<span>Visneta</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.4, delay: 1.3 }}
				>
					<SidebarSeparator />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.4 }}
				>
					<SidebarGroup>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 1.5 }}
						>
							<SidebarGroupLabel>Personal Projects</SidebarGroupLabel>
						</motion.div>
						<SidebarGroupContent>
							<SidebarMenu>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 1.6 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/storybook"
												className="flex items-center gap-2"
											>
												<BookA />
												<FolderCode />
												<span>Storybook Components</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.4, delay: 1.7 }}
									whileHover={{ 
										x: 5, 
										backgroundColor: "rgba(23, 92, 211, 0.1)",
										transition: { duration: 0.2 } 
									}}
								>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link
												href="/opensource"
												className="flex items-center gap-2"
											>
												<Github />
												<FolderCode />
												<span>Open Source Contributions</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</motion.div>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 0.4, delay: 1.8 }}
				>
					<SidebarSeparator />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.9 }}
				>
					<SidebarGroup>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4, delay: 2.0 }}
						>
							<SidebarGroupLabel>Hackathons</SidebarGroupLabel>
						</motion.div>
						<SidebarGroupContent>
							<SidebarMenu>
								{[
									{ href: "/meditongue", icons: [Brain, Stethoscope], text: "OpenAI Open Model Hackathon 2025", delay: 2.1 },
									{ href: "/proof-of-work", icons: [LockKeyhole, Smartphone], text: "Proof of Concept 2025", delay: 2.2 },
									{ href: "/sonder", icons: [BanknoteArrowUp, Smartphone], text: "RevenueCat Shipaton 2025", delay: 2.3 },
									{ href: "/tableau", icons: [LayoutDashboard, ChartNoAxesCombined], text: "Tableau Next Virtual Hackathon", delay: 2.4 },
									{ href: "/deep-cut", icons: [Brain, Ghost], text: "Code with Kiro Hackathon", delay: 2.5 },
									{ href: "/qloo-hackathon", icons: [Brain, UsersRound], text: "Qloo LLM Hackathon", delay: 2.6 },
									{ href: "/hackfs-2022", icons: [Trophy, Medal], text: "HackFS 2022", delay: 2.7 }
								].map((item, index) => {
									const [Icon1, Icon2] = item.icons;
									return (
										<motion.div
											key={item.href}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.4, delay: item.delay }}
											whileHover={{ 
												x: 5, 
												backgroundColor: "rgba(23, 92, 211, 0.1)",
												transition: { duration: 0.2 } 
											}}
										>
											<SidebarMenuItem>
												<SidebarMenuButton asChild>
													<Link
														href={item.href}
														className="flex items-center gap-2"
													>
														<Icon1 />
														<Icon2 />
														<span>{item.text}</span>
													</Link>
												</SidebarMenuButton>
											</SidebarMenuItem>
										</motion.div>
									);
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</motion.div>
			</SidebarContent>
			<SidebarFooter>
				<motion.div
					className="mt-auto text-xs text-muted-foreground"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 2.8 }}
				>
					© Isaiah Kim, 2025
				</motion.div>
			</SidebarFooter>
		</Sidebar>
	);
}