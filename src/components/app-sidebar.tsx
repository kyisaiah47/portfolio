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
} from "lucide-react";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<a>
								<User2 className="mr-2" />
								<span className="font-bold">Isaiah Kim</span>
							</a>
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
									<a href="/about">
										<CircleUser />
										<span>About</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
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
									<a
										href="/ssnc"
										className="flex items-center gap-2"
									>
										<Building2 />
										<PiggyBank />
										<span>SS&C Technologies</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="/capital-technology-group"
										className="flex items-center gap-2"
									>
										<Landmark />
										<IdCardLanyard />
										<span>US Immigration (via Capital Technology Group)</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="/no-name-charli"
										className="flex items-center gap-2"
									>
										<Sprout />
										<Images />
										<span>No Name Charli</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="/visneta"
										className="flex items-center gap-2"
									>
										<Sprout />
										<Construction />
										<span>Visneta</span>
									</a>
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
									<a
										href="/deep-cut"
										className="flex items-center gap-2"
									>
										<Brain />
										<Ghost />
										<span>Code with Kiro Hackathon</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="/qloo-hackathon"
										className="flex items-center gap-2"
									>
										<Brain />
										<UsersRound />
										<span>Qloo LLM Hackathon</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="/hackfs-2022"
										className="flex items-center gap-2"
									>
										<Trophy />
										<Medal />
										<span>HackFS 2022</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Contact</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										target="_blank"
										href="mailto:kyisaiah47@gmail.com"
										className="flex items-center gap-2"
									>
										<AtSign />
										<span>Email</span>
										<ExternalLink className="w-3 h-3 text-muted-foreground" />
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										target="_blank"
										href="https://www.linkedin.com/in/kyisaiah47"
										className="flex items-center gap-2"
									>
										<Linkedin />
										<span>LinkedIn</span>
										<ExternalLink className="w-3 h-3 text-muted-foreground" />
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										target="_blank"
										href="https://github.com/kyisaiah47"
										className="flex items-center gap-2"
									>
										<Github />
										<span>GitHub</span>
										<ExternalLink className="w-3 h-3 text-muted-foreground" />
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										target="_blank"
										href="https://standardresume.co/r/kyisaiah"
										className="flex items-center gap-2"
									>
										<Paperclip />
										<span>Resume</span>
										<ExternalLink className="w-3 h-3 text-muted-foreground" />
									</a>
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
