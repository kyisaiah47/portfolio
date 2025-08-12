import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
	AtSign,
	ExternalLink,
	FileText,
	Github,
	Linkedin,
	MapPinned,
	Paperclip,
	ScrollText,
} from "lucide-react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Isaiah Kim",
	description: "Isaiah Kim's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<body
				className={`bg-neutral-950 ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<SidebarProvider>
					<AppSidebar />
					<main className="w-full">
						<div className="flex items-center justify-between px-4 py-2 border-b border-neutral-800">
							<SidebarTrigger />

							<div className="flex items-center gap-4 text-xs">
								<div className="flex items-center gap-2">
									<MapPinned className="h-4 w-4 hidden" />
									<span className="hidden">New York, NY</span>
								</div>
								<a
									target="_blank"
									href="mailto:kyisaiah47@gmail.com"
									className="flex items-center gap-2"
								>
									<AtSign className="h-4 w-4" />
									<span className="hidden">kyisaiah47@gmail.com</span>
								</a>
								<a
									target="_blank"
									href="https://www.linkedin.com/in/kyisaiah47"
									className="flex items-center gap-2"
								>
									<Linkedin className="h-4 w-4" />
									<span className="hidden">LinkedIn</span>
								</a>
								<a
									target="_blank"
									href="https://github.com/kyisaiah47"
									className="flex items-center gap-2"
								>
									<Github className="h-4 w-4" />
									<span className="hidden">GitHub</span>
								</a>
								<a
									target="_blank"
									href="https://github.com/kyisaiah47/resume/blob/main/main.pdf"
									className="flex items-center gap-2"
								>
									<Paperclip className="h-4 w-4" />
									<span className="hidden">Resume</span>
								</a>
							</div>
						</div>
						{children}
					</main>
				</SidebarProvider>
			</body>
		</html>
	);
}
