// Journal post. Deployed to the Saltmoss Studio (see README → "The journal").
export const post = {
	name: "post",
	title: "Journal post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule: { required: () => unknown }) => rule.required(),
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (rule: { required: () => unknown }) => rule.required(),
		},
		{
			name: "excerpt",
			title: "Excerpt",
			description: "One or two sentences shown on the journal index.",
			type: "text",
			rows: 3,
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "seoDescription",
			title: "SEO description",
			description: "Used as the page's meta description. Aim for 120 to 155 characters.",
			type: "text",
			rows: 2,
		},
	],
	orderings: [
		{
			title: "Newest first",
			name: "publishedAtDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
	],
	preview: {
		select: { title: "title", subtitle: "publishedAt" },
	},
};
