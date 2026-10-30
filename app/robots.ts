import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: "*", allow: "/" },
		sitemap: "https://saltmoss.co/sitemap.xml",
		host: "https://saltmoss.co",
	};
}
