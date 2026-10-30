# saltmoss.co

The storefront for Saltmoss — small-batch seaweed skincare, harvested off Mount Desert Island
and made in Portland, Maine. Live at https://saltmoss.co.

## Stack

- Next.js 16 (App Router), TypeScript, React 19
- Plain CSS modules (`components/*.module.css`) plus `app/globals.css` for colors and base type
- Products live in the repo (`lib/products.ts`); journal posts live in Sanity
- Hosted on Vercel; `main` is production

## Running it locally

You need Node 22.12 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev      # http://localhost:3000
```

To check a production build before pushing:

```bash
npm run build
npm start
```

Everything except the journal works with no configuration. Without Sanity credentials the
journal index shows its empty state and there are no post pages.

### Seeing the journal locally

Copy `.env.example` to `.env.local` and fill in the project ID (ask Tomás, or find it in the
Sanity dashboard under the Saltmoss project):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

The dataset is public-read, so no token is needed.

## Where things live

```
app/
  layout.tsx              site shell: announcement bar, header, footer, <title> template
  page.tsx                home
  shop/                   all products, plus shop/[slug] for each product page
  ingredients/
  shipping-returns/
  about/
  contact/                contact form (opens the visitor's mail client)
  journal/                journal index + journal/[slug], both read from Sanity
  sitemap.ts, robots.ts   generated at build time (the sitemap includes journal posts)
components/               header, footer, announcement bar, add-to-bag button, shared styles
lib/products.ts           the product catalog: names, prices, sizes, copy, INCI lists
lib/sanity.ts             Sanity client (null when the env vars are missing)
lib/journal.ts            GROQ queries for the journal
sanity/schemaTypes/       the `post` schema used by our Studio
public/                   logo and hand-drawn SVG illustrations
```

### Products

Add or edit a product in `PRODUCTS` in `lib/products.ts`. The shop grid, product pages and
sitemap all read from that list. Product images are SVGs in `public/products/`.

### The journal

Posts are written in Sanity Studio (https://saltmoss.sanity.studio), not in this repo. A
`post` has a title, slug, excerpt, publish date, a Portable Text body and an SEO description
that becomes the page's meta description. The schema lives in `sanity/schemaTypes/` so it is
versioned with the site; if you change it, copy it into the Studio project and run
`npx sanity deploy` there.

Journal pages are built at deploy time and revalidated every 10 minutes, so a newly published
post shows up on the live site within 10 minutes without a redeploy.

### Why `.npmrc` sets `legacy-peer-deps`

`next-sanity` lists the full Sanity Studio as a peer dependency. We only use its client and
Portable Text renderer, so we skip the peers to keep installs (and Vercel builds) small.

## Deploying

Vercel builds every push. Pull requests get a preview URL; merging to `main` deploys to
production at saltmoss.co.

Environment variables (Vercel → Project → Settings → Environment Variables, all environments):

| Name                            | Value                    |
| ------------------------------- | ------------------------ |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | the Saltmoss project ID  |
| `NEXT_PUBLIC_SANITY_DATASET`    | `production`             |

Questions: #website in Slack, or ask Tomás.
