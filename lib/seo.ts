import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * PULSE 24 FITNESS SEO configuration, from docs/Gym-research.md
 * (SEO.title_candidate / description_candidate / natural_location_wording).
 * Factual wording only: no ranking claims, superlatives or "near <landmark>"
 * phrases — the landmark terms in the research (Gems School, Royal Regency
 * Garden) are CONFLICTING_SOURCES and are not used. The description drops the
 * research's "confirm hours" sentence and leaves hours out entirely because
 * opening hours are an unresolved conflict.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO official website for this Hyderabad branch and
 * warns that same-name domains belong to unrelated entities, so none is
 * used here.
 */
export const seo: SEOConfiguration = {
  title: "Pulse 24 Fitness | Gym in Asif Nagar, Hyderabad",
  description:
    "Pulse 24 Fitness in Asif Nagar, Hyderabad offers weight training, personal training, aerobics, dance fitness, kickboxing, CrossFit-style training, yoga and diet counseling.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
