import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://saltmoss.co"),
	title: {
		default: "Saltmoss — Seaweed skincare from Maine",
		template: "%s | Saltmoss",
	},
	openGraph: {
		siteName: "Saltmoss",
		type: "website",
	},
	icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AnnouncementBar />
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
