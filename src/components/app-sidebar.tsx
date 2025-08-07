"use client";

import Link from "next/link";
import Image from "next/image";
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
	User2,
	ExternalLink,
	CircleUser,
	AtSign,
	Linkedin,
	Paperclip,
	Sprout,
	Building2,
	Landmark,
	Construction,
	Images,
	IdCardLanyard,
	PiggyBank,
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
	Phone,
	Mail,
} from "lucide-react";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<div className="flex items-center gap-2">
								<Image
									className="mr-2"
									src="https://hvnbpd9agmcawbt2.public.blob.vercel-storage.com/logo-1"
									alt="logo"
									width={20}
									height={20}
								/>
								<span className="font-bold">Isaiah Kim</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>About</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="/about">
										<CircleUser />
										<span>About</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							{/* <SidebarMenuItem>
								<SidebarMenuButton asChild>
									<div>
										<Mail />
										<span>kyisaiah47@gmail.com</span>
									</div>
								</SidebarMenuButton>
							</SidebarMenuItem> */}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarSeparator />

				<SidebarGroup>
					<SidebarGroupLabel>Experience</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
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
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarSeparator />

				<SidebarGroup>
					<SidebarGroupLabel>Personal Projects</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
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
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarSeparator />

				<SidebarGroup>
					<SidebarGroupLabel>Hackathons</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/proof-of-work"
										className="flex items-center gap-2"
									>
										<LockKeyhole />
										<Smartphone />
										<span>Proof of Concept 2025</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/sonder"
										className="flex items-center gap-2"
									>
										<BanknoteArrowUp />
										<Smartphone />
										<span>RevenueCat Shipaton 2025</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/tableau"
										className="flex items-center gap-2"
									>
										<LayoutDashboard />
										<ChartNoAxesCombined />
										<span>Tableau Next Virtual Hackathon</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/deep-cut"
										className="flex items-center gap-2"
									>
										<Brain />
										<Ghost />
										<span>Code with Kiro Hackathon</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/qloo-hackathon"
										className="flex items-center gap-2"
									>
										<Brain />
										<UsersRound />
										<span>Qloo LLM Hackathon</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link
										href="/hackfs-2022"
										className="flex items-center gap-2"
									>
										<Trophy />
										<Medal />
										<span>HackFS 2022</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<div className="mt-auto text-xs text-muted-foreground">
					© Isaiah Kim, 2025
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
