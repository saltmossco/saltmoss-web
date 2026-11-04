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
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: String.raw`(function(w,d){var h=null;try{var l=w.localStorage,p=JSON.parse(l.getItem("lv:vp:"+"lv_pub_lbxwaa73ej8p2dvvb9dd8yqy")||"[]"),q=(location.pathname||"/").replace(/\/{2,}/g,"/").replace(/(.)\/+$/,"$1");if(!l.getItem("lv:seen:"+"lv_pub_lbxwaa73ej8p2dvvb9dd8yqy")||p.indexOf(q)>=0){h=d.createElement("style");h.textContent="html{opacity:0!important}";d.head.appendChild(h)}}catch(e){}w.__lvReveal=function(){if(h&&h.parentNode)h.parentNode.removeChild(h);h=null};setTimeout(function(){if(h)w.__lvLate=1;w.__lvReveal()},1000);var s=d.createElement("script");s.src="https://lettervisit.com/v.js?k=lv_pub_lbxwaa73ej8p2dvvb9dd8yqy";s.async=true;s.setAttribute("data-key","lv_pub_lbxwaa73ej8p2dvvb9dd8yqy");s.onerror=w.__lvReveal;d.head.appendChild(s)})(window,document)`,
					}}
				/>
			</head>
			<body>
				<AnnouncementBar />
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	);
}
