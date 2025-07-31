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
	SidebarMenuAction,
	SidebarSeparator,
	SidebarMenuBadge,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
	Home,
	Twitter,
	SquareStack,
	MessageSquare,
	FlaskConical,
	Circle,
	Mail,
	Linkedin,
	FileText,
	ExternalLink,
	User2,
} from "lucide-react";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							isActive
						>
							<a href="#">
								<User2 className="mr-2" />
								<span className="font-bold">George Kim</span>
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
									<a href="#about">
										<Image
											src="/avatar.png"
											alt="Avatar"
											width={20}
											height={20}
											className="rounded-full mr-2"
										/>
										<span>About</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Interface</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#twitter">
										<Twitter className="mr-2" />
										<span>X (Twitter)</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#forge">
										<SquareStack className="mr-2" />
										<span>Forge</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#careerchat">
										<MessageSquare className="mr-2" />
										<span>CareerChat</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#moraltester">
										<SquareStack className="mr-2" />
										<span>Moral Tester</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Design Engineering</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#interfacelab">
										<FlaskConical className="mr-2" />
										<span>Interface Lab</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarSeparator />
				<SidebarGroup>
					<SidebarGroupLabel>Side Projects</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a
										href="#goznuk"
										className="opacity-50"
									>
										<Circle className="mr-2" />
										<span>Goznuk(wip)</span>
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
									<a href="mailto:george@example.com">
										<Mail className="mr-2" />
										<span>Email</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="https://linkedin.com">
										<Linkedin className="mr-2" />
										<span>LinkedIn</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#x">
										<Twitter className="mr-2" />
										<span>X</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="https://read.cv">
										<FileText className="mr-2" />
										<span>Read.cv</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="/resume.pdf">
										<FileText className="mr-2" />
										<span>Resume</span>
									</a>
								</SidebarMenuButton>
								<SidebarMenuAction>
									<ExternalLink className="ml-1" />
								</SidebarMenuAction>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<div className="mt-auto text-xs text-muted-foreground">
					© George Kim, 2025
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
