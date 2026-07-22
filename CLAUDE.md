# FLX Pickleball Club Website

## Project status

This repository currently contains the FLX Pickleball Club website.

The current live site started as a Fable 5 static HTML export and is deployed through GitHub and Vercel.

Live preview:
https://flx-pickleball-club.vercel.app

GitHub repo:
Stevesmitty1984/flx-pickleball-club

## Current live site structure

The current working site has six main pages:

- index.html - home
- play.html - open play, rentals, lessons
- membership.html - membership plans and pricing
- pro-shop.html - pro shop and demo paddles
- tournaments.html - events and tournaments
- about.html - about the club

The current Fable export is made of self-contained HTML files. Each page has its own copied style blocks, nav markup, footer markup, scripts, and image map.

For the current static version, any shared change such as nav, footer, base styling, or CourtReserve links must be applied consistently across all six HTML files.

## Rebuild direction

Steve wants this site treated like a premium client website, not a quick disposable mockup.

The goal is to build toward a high-grade, national-brand-level local business website with:

- premium visual polish
- clean maintainable structure
- strong mobile experience
- CourtReserve integration
- SEO foundation
- analytics readiness
- clean GitHub and Vercel workflow

On the astro-premium-rebuild branch, an Astro migration or rebuild is allowed only after planning and Steve approval.

Do not convert the current production main branch unexpectedly.

Do not start a framework migration, install packages, delete current pages, or replace the site without explicit Steve approval.

## Deployment rule

Preserve vercel.json unless a migration plan explicitly explains why it must change.

Current vercel.json:

{"outputDirectory":"."}

This file exists because the current static site must deploy from the repo root. Removing or changing it can break Vercel deployment.

## Assets

Images are currently stored in:

- public/images/flx/

Videos are currently stored in:

- public/video/

Preserve existing image and video assets unless Steve specifically approves replacements.

## CourtReserve direction

Existing CourtReserve outbound links should be preserved.

Some existing links intentionally go directly to specific CourtReserve pages, including membership pages. Do not replace all CourtReserve links with one generic link.

Future CourtReserve work should:

- keep useful outbound links
- add more direct CourtReserve links where helpful
- add a visible on-page CourtReserve schedule, widget, or embed directly on the FLX website
- prioritize play.html first for schedule/embed work
- consider index.html and membership.html after play.html if appropriate

CourtReserve changes must not break current navigation, buttons, page layout, or mobile usability.

## SEO direction

This site should keep a multi-page SEO structure.

Future SEO work should include:

- unique page titles
- unique meta descriptions
- clear heading hierarchy
- robots.txt
- sitemap.xml
- local business schema
- image alt text review
- Open Graph metadata
- analytics-ready structure
- Google Search Console readiness

## Working rules

Before editing:

1. Inspect affected files first.
2. Explain the intended changes.
3. Keep changes focused.
4. Do not make broad cleanup changes unless requested.
5. Stop for Steve review before committing or pushing.

## Git policy

Never commit or push without Steve's explicit approval for that specific change.

Approval for one commit or push does not carry over to future changes.
