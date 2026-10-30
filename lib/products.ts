export type Product = {
	slug: string;
	name: string;
	price: number;
	size: string;
	image: string;
	summary: string;
	description: string[];
	skinTypes: string;
	howToUse: string;
	keyIngredients: { name: string; why: string }[];
	inci: string;
};

export const PRODUCTS: Product[] = [
	{
		slug: "tidepool-serum",
		name: "Tidepool Serum",
		price: 42,
		size: "30 ml",
		image: "/products/serum.svg",
		summary:
			"A lightweight water serum of bladderwrack and sea fennel that plumps dehydrated skin and sits well under sunscreen.",
		description: [
			"Tidepool is the first thing we made, and still the one most people reorder. It is a clear, watery gel built on a cold extract of bladderwrack we harvest ourselves, with sea fennel for brightness and a low dose of sodium PCA to pull water into the skin.",
			"It absorbs in about thirty seconds and leaves no film, so it layers under moisturizer, sunscreen or makeup without pilling.",
		],
		skinTypes: "All skin types, especially dehydrated or combination skin.",
		howToUse:
			"Morning and evening, press three or four drops into clean, slightly damp skin before moisturizer.",
		keyIngredients: [
			{ name: "Bladderwrack extract", why: "Rich in fucoidan and minerals; helps skin hold water." },
			{ name: "Sea fennel", why: "A coastal plant high in vitamin C that evens dull tone." },
			{ name: "Sodium PCA", why: "A humectant your skin already makes, at 2%." },
		],
		inci: "Aqua, Fucus Vesiculosus Extract, Glycerin, Sodium PCA, Crithmum Maritimum Extract, Pentylene Glycol, Xanthan Gum, Sodium Levulinate, Sodium Anisate, Citric Acid.",
	},
	{
		slug: "kelp-cleansing-balm",
		name: "Kelp Cleansing Balm",
		price: 34,
		size: "100 ml",
		image: "/products/balm.svg",
		summary:
			"A solid balm that melts sunscreen and makeup, then rinses clean with water. Sugar kelp and sunflower oil, no fragrance.",
		description: [
			"Scoop a small amount, massage it over dry skin and watch it turn to oil. Add a splash of water and it emulsifies into a milk that rinses away without a second cleanse for most people.",
			"We infuse cold-pressed sunflower oil with dried sugar kelp for three weeks before it goes into the balm. The jar lasts about three months with daily use.",
		],
		skinTypes: "Normal, dry and sensitive skin. Safe around the eyes.",
		howToUse:
			"Evenings, on dry skin. Massage for a minute, add water, rinse. Follow with a damp cloth if you wear heavy sunscreen.",
		keyIngredients: [
			{ name: "Sugar kelp infusion", why: "Softening, mineral-rich and gentle on a compromised barrier." },
			{ name: "Sunflower seed oil", why: "High in linoleic acid; dissolves sunscreen filters." },
			{ name: "Polyglyceryl-4 oleate", why: "Plant-derived emulsifier that lets it rinse clean." },
		],
		inci: "Helianthus Annuus Seed Oil, Saccharina Latissima Extract, Polyglyceryl-4 Oleate, Cera Alba, Caprylic/Capric Triglyceride, Tocopherol.",
	},
	{
		slug: "dulse-day-cream",
		name: "Dulse Day Cream",
		price: 38,
		size: "50 ml",
		image: "/products/cream.svg",
		summary:
			"A soft, quick-sinking moisturizer with red dulse and squalane for skin that feels tight by mid-afternoon.",
		description: [
			"Dulse is the red seaweed people in Maine have dried and eaten for centuries. On skin it brings amino acids and a gentle antioxidant called phycoerythrin, which gives the cream its faint blush color before it disappears on application.",
			"The texture is a light whipped cream: rich enough for January, thin enough that you will not feel greasy in July.",
		],
		skinTypes: "Normal to dry skin. Combination skin in winter.",
		howToUse:
			"Mornings, after serum. Warm a pea-sized amount between your fingers and press it in. Finish with sunscreen.",
		keyIngredients: [
			{ name: "Dulse extract", why: "Amino acids and antioxidants from Palmaria palmata." },
			{ name: "Olive squalane", why: "Light, non-comedogenic oil that seals in moisture." },
			{ name: "Ceramide NP", why: "Supports the skin barrier in cold, dry air." },
		],
		inci: "Aqua, Squalane, Glycerin, Cetearyl Alcohol, Palmaria Palmata Extract, Cetearyl Glucoside, Ceramide NP, Sodium Hyaluronate, Tocopherol, Sodium Levulinate, Citric Acid.",
	},
	{
		slug: "carrageen-night-mask",
		name: "Carrageen Night Mask",
		price: 46,
		size: "60 ml",
		image: "/products/mask.svg",
		summary:
			"An overnight gel mask of Irish moss and oat that calms redness and wakes up skin that looks rested.",
		description: [
			"Carrageen, or Irish moss, grows on the rocks below the low tide line. Simmered slowly it releases a soft gel that holds moisture on the skin like a breathable second layer. We pair it with colloidal oat and allantoin for skin that is red, tight or iritated.",
			"Use it as the last step two or three nights a week, or under a thin layer of moisturizer on a long flight.",
		],
		skinTypes: "Dry, reactive and sensitive skin.",
		howToUse:
			"Two or three evenings a week, smooth a thin layer over clean skin as your final step. Rinse in the morning.",
		keyIngredients: [
			{ name: "Irish moss gel", why: "Film-forming and deeply hydrating; made in-house." },
			{ name: "Colloidal oat", why: "Recognized skin protectant that relieves itch and dryness." },
			{ name: "Allantoin", why: "Soothes and softens rough patches." },
		],
		inci: "Aqua, Chondrus Crispus Extract, Glycerin, Avena Sativa Kernel Flour, Allantoin, Betaine, Pentylene Glycol, Xanthan Gum, Sodium Benzoate, Potassium Sorbate.",
	},
	{
		slug: "saltgrass-body-polish",
		name: "Saltgrass Body Polish",
		price: 28,
		size: "200 g",
		image: "/products/scrub.svg",
		summary:
			"A fine sea salt scrub in a whipped oil base with kelp and a little cold-pressed lemon. Smooths without stripping.",
		description: [
			"We use solar-evaporated sea salt from a small saltworks on the Maine coast, ground fine so it polishes rather than scratches. It is folded into a whipped base of sunflower and shea, so skin comes out of the shower soft, not tight.",
			"The scent is cold-pressed lemon and nothing else. Skip freshly shaved skin, or expect to remember why.",
		],
		skinTypes: "Body only. All skin types except broken or freshly shaved skin.",
		howToUse:
			"Once or twice a week in the shower. Massage a handful over damp skin in circles, then rinse. No need for body lotion after.",
		keyIngredients: [
			{ name: "Maine sea salt", why: "Fine-ground, solar-evaporated; gentle physical exfoliation." },
			{ name: "Kelp powder", why: "Adds minerals and a softer slip to the scrub." },
			{ name: "Shea butter", why: "Leaves a light, non-greasy layer of moisture behind." },
		],
		inci: "Sodium Chloride (Maris Sal), Helianthus Annuus Seed Oil, Butyrospermum Parkii Butter, Laminaria Digitata Powder, Citrus Limon Peel Oil, Tocopherol. Contains limonene and citral.",
	},
];

export function getProduct(slug: string): Product | undefined {
	return PRODUCTS.find((p) => p.slug === slug);
}

export function formatPrice(value: number): string {
	return `$${value.toFixed(0)}`;
}
