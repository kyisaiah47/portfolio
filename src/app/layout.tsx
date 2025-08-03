import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AtSign, MapPinned } from "lucide-react";

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
								<a className="flex items-center gap-2">
									<MapPinned className="h-4 w-4" /> New York, NY
								</a>
								<a className="flex items-center gap-2">
									<AtSign className="h-4 w-4" /> kyisaiah47@gmail.com
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
